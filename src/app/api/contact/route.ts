import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { fullName?: string; email?: string; phone?: string; message?: string }
    | null;

  if (!body?.fullName || !body?.email || !body?.phone || !body?.message) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  return NextResponse.json({
    message: "Thanks. Your inquiry was received and someone will follow up soon.",
  });
}
