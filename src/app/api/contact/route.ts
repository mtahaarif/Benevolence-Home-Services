import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { fullName?: string; address?: string; email?: string; phone?: string; message?: string }
    | null;

  // 1. Validate that all required fields are present
  if (!body?.fullName || !body?.email || !body?.phone || !body?.message || !body?.address) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  try {
    // 2. Dispatch the structured email payload to the client's inbox
    await resend.emails.send({
      from: "Benevolence Web Contact <onboarding@resend.dev>", // Replace with your verified domain once live
      to: ["ch.tahaarif2005@gmail.com"], // Where the client will receive the message
      replyTo: body.email, // Allows the client to click "Reply" directly to the lead
      subject: `New Home Care Inquiry from ${body.fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #334155; line-height: 1.6;">
          <h2 style="color: #0c3e72; border-b: 2px solid #f1f5f9; padding-bottom: 10px;">New In-Home Care Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px;">Full Name:</td>
              <td style="padding: 6px 0;">${body.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Address:</td>
              <td style="padding: 6px 0;">${body.address}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${body.email}">${body.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 6px 0;"><a href="tel:${body.phone}">${body.phone}</a></td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; padding: 16px; bg-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h4 style="margin-top: 0; color: #0c3e72;">Message / Question:</h4>
            <p style="margin-bottom: 0; white-space: pre-wrap;">${body.message}</p>
          </div>
          
          <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; border-t: 1px solid #e2e8f0; padding-top: 10px;">
            This submission was routed securely through your Next.js API instance hosted on Vercel.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Thanks. Your inquiry was received and someone will follow up soon.",
    });

  } catch (error) {
    console.error("Email processing anomaly encountered:", error);
    return NextResponse.json(
      { message: "Our system is currently experiencing a dispatch delay. Please try again shortly." },
      { status: 500 }
    );
  }
}