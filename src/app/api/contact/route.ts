import { NextResponse } from "next/server";
import mysql from "mysql2/promise"; // Import the MySQL library

// Setup a Database Connection Pool for the old WordPress Database
const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

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

  try {
    // 2. Format the date into a standard MySQL DATETIME string format
    const dateSent = new Date().toISOString().slice(0, 19).replace("T", " ");

    // 3. Inject into the old WordPress database table
    await dbPool.execute(
      `INSERT INTO formdatabase_emails (form_from, form_subject, date_sent, form_content, attachments) VALUES (?, ?, ?, ?, ?)`,
      [
        body.form_from,       // Maps to form_from
        body.form_subject,    // Maps to form_subject
        dateSent,             // Maps to date_sent
        body.form_content,    // Maps to form_content
        ""                    // Maps to attachments (empty string to match schema)
      ]
    );

    return NextResponse.json({
      message: "Thanks. Your inquiry was received and someone will follow up soon.",
    });

  } catch (error) {
    console.error("Critical database insertion exception caught:", error);
    return NextResponse.json(
      { message: "Our backend database encountered a minor connection delay. Please resubmit shortly." },
      { status: 500 }
    );
  }
}