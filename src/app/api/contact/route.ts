import { NextResponse } from "next/server";
import mysql from "mysql2/promise"; // Import the MySQL library

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { form_from?: string; form_subject?: string; form_content?: string }
    | null;

  // 1. Strict Server-Side Validation Check
  if (!body?.form_from || !body?.form_subject || !body?.form_content) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  let connection;

  try {
    // 2. Connect INSIDE the request with a strict 5-second timeout
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectTimeout: 5000, // Kills the attempt after 5 seconds to prevent Vercel 504 HTML errors
    });

    // 3. Format the date into a standard MySQL DATETIME string format
    const dateSent = new Date().toISOString().slice(0, 19).replace("T", " ");

    // 4. Inject into the old WordPress database table
    await connection.execute(
      `INSERT INTO formdatabase_emails (form_from, form_subject, date_sent, form_content, attachments) VALUES (?, ?, ?, ?, ?)`,
      [
        body.form_from,       // Maps to form_from
        body.form_subject,    // Maps to form_subject
        dateSent,             // Maps to date_sent
        body.form_content,    // Maps to form_content
        ""                    // Maps to attachments (empty string to match schema)
      ]
    );

    await connection.end(); // Close connection cleanly

    return NextResponse.json({
      message: "Thanks. Your inquiry was received and someone will follow up soon.",
    });

  } catch (error: any) {
    // Log the EXACT error to Vercel Logs
    console.error("🔥 DATABASE ERROR:", error.message);
    
    // Attempt to close the connection if it was partially established
    if (connection) {
      try {
        await connection.end();
      } catch (closeError) {
        console.error("Failed to close connection:", closeError);
      }
    }

    return NextResponse.json(
      { message: `Connection Failed: ${error.message}` },
      { status: 500 }
    );
  }
}