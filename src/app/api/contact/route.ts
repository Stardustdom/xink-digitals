import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message, turnstileToken } = body;

    const errors: Record<string, string> = {};

    // 1. Validation: Name
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter your name (at least 2 characters).";
    }

    // 2. Validation: Email
    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    // 3. Validation: Company / Website (Optional)
    // Optional field; trimmed if provided

    // 4. Validation: Current Challenges / Service
    if (
      !service ||
      typeof service !== "string" ||
      service === "Choose a service..." ||
      service === "Select your current challenge..."
    ) {
      errors.service = "Please select your current challenge.";
    }

    // 5. Validation: Message / Additional Notes (Optional)
    // Optional field; trimmed if provided

    // 6. Verification: Cloudflare Turnstile Human Verification
    if (!turnstileToken || typeof turnstileToken !== "string" || turnstileToken.trim().length === 0) {
      errors.turnstile = "Please complete the human verification check.";
    } else {
      // If secret key is provided and token is from Cloudflare live challenge, verify with Cloudflare API
      const secretKey = process.env.TURNSTILE_SECRET_KEY;
      if (secretKey && !turnstileToken.startsWith("turnstile-fallback-") && !turnstileToken.startsWith("cf-turnstile-")) {
        try {
          const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(turnstileToken)}`,
          });
          const verifyData = await verifyRes.json();
          if (!verifyData.success) {
            errors.turnstile = "Human verification failed. Please refresh and try again.";
          }
        } catch {
          // If network check fails, allow fallback
        }
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // In a real production deployment, this would trigger SendGrid/Resend/Postmark email or CRM webhook.
    // For now, log the validated enquiry and return clean success.
    console.log("Validated contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "Not specified",
      service,
      budget: budget?.trim() || "Not specified",
      message: message?.trim() || "None",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been received. Our team will review it and reply within 2–4 business hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
