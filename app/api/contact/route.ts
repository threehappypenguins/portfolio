import { NextRequest, NextResponse } from "next/server";

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      subject,
      message,
      "cf-turnstile-response": token,
    } = body;

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { success: false, message: "Missing or invalid Turnstile token" },
        { status: 400 }
      );
    }

    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
      console.error("TURNSTILE_SECRET_KEY is not configured");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Validate Turnstile token with Cloudflare Siteverify
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

    const verifyResult = await verifyResponse.json();

    if (!verifyResult.success) {
      console.warn("Turnstile verification failed:", verifyResult["error-codes"]);
      return NextResponse.json(
        { success: false, message: "Verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Forward to Web3Forms
    const accessKey = process.env.WEB3FORMS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error("Web3Forms access key is not configured");
      return NextResponse.json(
        { success: false, message: "Form is not configured" },
        { status: 500 }
      );
    }

    const web3Response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name ?? "",
        email: email ?? "",
        subject: subject ?? "",
        message: message ?? "",
        replyto: email ?? "",
      }),
    });

    const result = await web3Response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
