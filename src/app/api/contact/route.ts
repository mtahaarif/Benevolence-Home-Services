import { NextResponse } from "next/server";

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
    // 2. Forward the payload to the GoDaddy PHP Webhook
    // Replace with the actual domain if it's different
    const response = await fetch("https://www.benevolencehomeservices.com/godaddy-webhook.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        form_from: body.form_from,
        form_subject: body.form_subject,
        form_content: body.form_content
      }),
    });

    // 3. Catch HTML errors (just in case the URL is wrong or server is down)
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textError = await response.text();
      console.error("GoDaddy Bridge Error:", textError);
      throw new Error("Failed to reach GoDaddy bridge.");
    }

    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.message ?? "Bridge rejected the payload.");
    }

    return NextResponse.json({
      message: payload.message,
    });

  } catch (error: any) {
    console.error("🔥 WEBHOOK ERROR:", error.message);
    return NextResponse.json(
      { message: "Our backend database encountered a minor connection delay. Please resubmit shortly." },
      { status: 500 }
    );
  }
}