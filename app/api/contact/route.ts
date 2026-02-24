import { NextRequest, NextResponse } from "next/server";

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const token = body["cf-turnstile-response"];
  if (!token || typeof token !== "string") {
    return NextResponse.json(
      { success: false, message: "Missing or invalid Turnstile token. Please complete the verification and try again." },
      { status: 400 }
    );
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return NextResponse.json(
      { success: false, message: "Server configuration error." },
      { status: 500 }
    );
  }

  const name = typeof body.name === "string" ? body.name : "";
  const email = typeof body.email === "string" ? body.email : "";
  const subject = typeof body.subject === "string" ? body.subject : "";
  const message = typeof body.message === "string" ? body.message : "";

  // 1. Verify Turnstile with Cloudflare
  let verifyResult: { success?: boolean; "error-codes"?: string[] };
  try {
    const verifyResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
          request.headers.get("x-real-ip") ??
          undefined,
      }),
    });
    verifyResult = (await verifyResponse.json()) as { success?: boolean; "error-codes"?: string[] };
  } catch (err) {
    console.error("Turnstile siteverify request failed:", err);
    return NextResponse.json(
      { success: false, message: "Verification service unavailable. Please try again." },
      { status: 502 }
    );
  }

  if (!verifyResult.success) {
    console.warn("Turnstile verification failed:", verifyResult["error-codes"]);
    return NextResponse.json(
      { success: false, message: "Verification failed. Please complete the challenge again and try again." },
      { status: 400 }
    );
  }

  // 2. Send email via Mailgun
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const fromAddr = process.env.MAILGUN_FROM;
  const toAddr = process.env.MAILGUN_TO;

  if (!apiKey || !domain || !fromAddr || !toAddr) {
    console.error("Mailgun not configured: set MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_FROM, MAILGUN_TO");
    return NextResponse.json(
      { success: false, message: "Email is not configured." },
      { status: 500 }
    );
  }

  const mailgunHost = process.env.MAILGUN_HOST ?? "https://api.mailgun.net";
  const url = `${mailgunHost}/v3/${domain}/messages`;

  const plainBody = [
    `From: ${name} <${email}>`,
    `Subject: ${subject}`,
    "",
    message,
  ].join("\n");

  const form = new FormData();
  form.append("from", fromAddr);
  form.append("to", toAddr);
  form.append("subject", subject.trim() || "(no subject)");
  form.append("text", plainBody);
  form.append("h:Reply-To", email);

  try {
    const mailResponse = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from("api:" + apiKey).toString("base64"),
      },
      body: form,
    });

    if (!mailResponse.ok) {
      const errText = await mailResponse.text();
      console.error("Mailgun error %d: %s", mailResponse.status, errText.slice(0, 500));
      return NextResponse.json(
        { success: false, message: "Could not send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mailgun request failed:", err);
    return NextResponse.json(
      { success: false, message: "Could not send message. Please try again." },
      { status: 502 }
    );
  }
}
