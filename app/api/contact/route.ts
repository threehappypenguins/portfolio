import { NextRequest, NextResponse } from "next/server";

/**
 * Contact API: validates Turnstile and forwards to Web3Forms.
 * Not used by default: the form submits directly to Web3Forms from the client to avoid
 * 403 from Cloudflare (api.web3forms.com blocks server-side requests unless whitelisted).
 * Kept for use if you later get Web3Forms server IP whitelisting or switch to another backend.
 */
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

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
    console.error("TURNSTILE_SECRET_KEY is not configured (set it in Vercel env vars)");
    return NextResponse.json(
      { success: false, message: "Server configuration error." },
      { status: 500 }
    );
  }

  const name = typeof body.name === "string" ? body.name : "";
  const email = typeof body.email === "string" ? body.email : "";
  const subject = typeof body.subject === "string" ? body.subject : "";
  const message = typeof body.message === "string" ? body.message : "";

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

  const accessKey = process.env.WEB3FORMS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_KEY / NEXT_PUBLIC_WEB3FORMS_KEY is not configured (set it in Vercel env vars)");
    return NextResponse.json(
      { success: false, message: "Form is not configured." },
      { status: 500 }
    );
  }

  let web3Response: Response;
  try {
    web3Response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject,
        message,
        replyto: email,
      }),
    });
  } catch (err) {
    console.error("Web3Forms request failed:", err);
    return NextResponse.json(
      { success: false, message: "Could not send message. Please try again." },
      { status: 502 }
    );
  }

  const contentType = web3Response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    const text = await web3Response.text();
    console.error("Web3Forms returned non-JSON (status %d). Body: %s", web3Response.status, text.slice(0, 500));
    const is403 = web3Response.status === 403;
    return NextResponse.json(
      {
        success: false,
        message: is403
          ? "The form service is blocking this request (often happens in local dev). Try deploying to production, or check your Web3Forms key."
          : "The form service returned an error. Please check your Web3Forms access key and try again.",
      },
      { status: 502 }
    );
  }

  const result = (await web3Response.json()) as { success?: boolean; message?: string };
  return NextResponse.json(result);
}
