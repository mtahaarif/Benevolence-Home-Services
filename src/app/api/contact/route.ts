import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Setup a dynamic nodemailer transporter instance
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false, // true for 465, false for alternative ports like 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { fullName?: string; address?: string; email?: string; phone?: string; message?: string }
    | null;

  // 1. Strict Server-Side Validation Check
  if (!body?.fullName || !body?.email || !body?.phone || !body?.message || !body?.address) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  // 2. Fallback routing array definition 
  const recipientInbox = process.env.CONTACT_RECEIVER_EMAIL || "info@benevolencehomeservices.com";

  try {
    // 3. Dispatch the structured email package across the SMTP tunnel
    await transporter.sendMail({
      from: `"Benevolence Web Gateway" <${process.env.SMTP_USER}>`,
      to: recipientInbox, 
      replyTo: body.email, // Allows your client to click "Reply" directly to the lead inside their email app
      subject: `🚨 New Home Care Inquiry from ${body.fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #334155; line-height: 1.6; background-color: #ffffff; padding: 20px; border-radius: 12px;">
          <h2 style="color: #0c3e72; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-top: 0;">New In-Home Care Inquiry</h2>
          
          <p style="text-color: #64748b; font-size: 13px; margin-bottom: 20px;">
            A new contact form intake request has been registered via your Next.js application framework.
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #0c3e72; width: 140px; text-transform: uppercase; font-size: 11px; tracking-wide;">Full Name</td>
              <td style="padding: 10px 0; color: #1e293b;">${body.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #0c3e72; text-transform: uppercase; font-size: 11px; tracking-wide;">Household Address</td>
              <td style="padding: 10px 0; color: #1e293b;">${body.address}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #0c3e72; text-transform: uppercase; font-size: 11px; tracking-wide;">Email Address</td>
              <td style="padding: 10px 0;"><a href="mailto:${body.email}" style="color: #1168b3; text-decoration: none;">${body.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #0c3e72; text-transform: uppercase; font-size: 11px; tracking-wide;">Phone Number</td>
              <td style="padding: 10px 0;"><a href="tel:${body.phone}" style="color: #1168b3; text-decoration: none;">${body.phone}</a></td>
            </tr>
          </table>
          
          <div style="padding: 20px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-top: 10px;">
            <h4 style="margin-top: 0; margin-bottom: 8px; color: #0c3e72; text-transform: uppercase; font-size: 11px; tracking-wide;">Message / Intake Notes:</h4>
            <p style="margin-bottom: 0; white-space: pre-wrap; color: #334155; font-size: 14px;">${body.message}</p>
          </div>
          
          <p style="font-size: 11px; color: #94a3b8; margin-top: 32px; border-top: 1px solid #f1f5f9; padding-top: 12px; font-style: italic;">
            Securely processed via Vercel serverless functions infrastructure.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Thanks. Your inquiry was received and someone will follow up soon.",
    });

  } catch (error) {
    console.error("Critical SMTP pipeline exception caught:", error);
    return NextResponse.json(
      { message: "Our backend notification pipeline encountered a minor connection delay. Please resubmit shortly." },
      { status: 500 }
    );
  }
}