import { NextResponse } from "next/server";
import { Resend } from "resend";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// --- Email Config ---
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;

// --- Database Config ---
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

// --- Validation Limits ---
const MAX_LENGTH = 150;
const MAX_CONTENT_LENGTH = 3000;

// --- Security Helpers ---
function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return char;
    }
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string; // NEW FIELD
      form_subject?: string;
      form_content?: string;
      company?: string; // Honeypot for bots
    };

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim(); // EXTACTED
    const formSubject = String(body?.form_subject ?? "").trim();
    const formContent = String(body?.form_content ?? "").trim();
    const company = String(body?.company ?? "").trim(); // Invisible honeypot

    // 1. Basic Validation
    if (!name || !email || !phone || !formSubject || !formContent) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 2. Honeypot Check (If a bot fills out a hidden 'company' field, silently succeed)
    if (company) {
      return NextResponse.json({
        success: true,
        message: "Thanks. Your inquiry was received and someone will follow up soon.",
      });
    }

    // 3. Length Validation
    if (
      name.length > MAX_LENGTH || 
      email.length > MAX_LENGTH || 
      phone.length > MAX_LENGTH || 
      formSubject.length > MAX_LENGTH
    ) {
      return NextResponse.json(
        { success: false, message: "Input fields exceed maximum allowed length." },
        { status: 400 }
      );
    }

    if (formContent.length > MAX_CONTENT_LENGTH) {
      return NextResponse.json(
        { success: false, message: "Message is too long." },
        { status: 400 }
      );
    }

    // 4. Check API Keys
    if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { success: false, message: "Server email service is not configured." },
        { status: 500 }
      );
    }

    // Sanitize Inputs for Email/Database
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(formSubject);
    const safeContent = escapeHtml(formContent);
    const dateSent = new Date().toISOString().slice(0, 19).replace("T", " ");

    // ==========================================
    // 5. APPEND TO GOOGLE SHEETS (EXCEL DATABASE)
    // ==========================================
    try {
      if (GOOGLE_SERVICE_ACCOUNT_EMAIL && GOOGLE_PRIVATE_KEY && GOOGLE_SHEET_ID) {
        const serviceAccountAuth = new JWT({
          email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
          key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];

        // Appends to distinct columns: Date | Name | Email | Phone | Subject | Message
        await sheet.addRow({
          "Date": dateSent,
          "Name": name,      
          "Email": email,
          "Phone": phone, // INJECTS PHONE NUMBER
          "Subject": formSubject, 
          "Message": formContent,
        });
      } else {
        console.warn("Google Sheets env vars missing. Skipping database append.");
      }
    } catch (sheetError) {
      console.error("Failed to append to Google Sheets:", sheetError);
      // We log the error but don't block the email from sending
    }

    // ==========================================
    // 6. SEND EMAIL VIA RESEND
    // ==========================================
    const resend = new Resend(RESEND_API_KEY);
    const subject = `[Benevolence Leads] ${safeSubject}`;

    const textTemplate = [
      `You have a new form submission:\n`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Subject: ${formSubject}`,
      `Message:\n${formContent}\n`,
      `To view the complete database, kindly click here: ${GOOGLE_SHEET_URL || 'URL not configured'}`,
    ].join("\n");

    const htmlTemplate = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0c3e72;">You have a new form submission:</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br />${safeContent.replace(/\n/g, "<br />")}</p>
        <br />
        <p>
          <a href="${GOOGLE_SHEET_URL}" style="display: inline-block; padding: 10px 15px; background-color: #0c3e72; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">
            View Complete Database Here
          </a>
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: email, 
      subject,
      text: textTemplate,
      html: htmlTemplate,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Unable to send your message right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks. Your inquiry was received and someone will follow up soon.",
    });

  } catch (err) {
    console.error("Global API Error:", err);
    return NextResponse.json(
      { success: false, message: "Unable to process your request right now." },
      { status: 500 }
    );
  }
}