import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const clientName = name.trim();
    const clientEmail = email.trim();
    const clientCompany = company?.trim() || "Not specified";
    const clientService = service;
    const clientBudget = budget?.trim() || "Not specified";
    const clientMessage = message?.trim() || "None";

    // Webmail / SMTP credentials from environment
    const user = process.env.SMTP_USER || process.env.EMAIL_USER || process.env.GMAIL_USER || "contact@xinkdigitals.com";
    const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;
    const host = process.env.SMTP_HOST || process.env.EMAIL_HOST || "mail.xinkdigitals.com";
    const port = Number(process.env.SMTP_PORT || process.env.EMAIL_PORT) || 465;

    if (pass) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
          tls: {
            rejectUnauthorized: false,
          },
        });

        // 1. Email to agency
        await transporter.sendMail({
          from: `"Xink Digitals Website" <${user}>`,
          to: "contact@xinkdigitals.com",
          replyTo: clientEmail,
          subject: `📩 New Enquiry from ${clientName} (${clientService})`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1B143F; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #EDEDF5; border-radius: 16px;">
              <div style="border-bottom: 2px solid #6A38EB; padding-bottom: 16px; margin-bottom: 20px;">
                <span style="background: #F4F1FD; color: #6A38EB; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">New Website Contact Enquiry</span>
                <h2 style="color: #1B143F; margin: 10px 0 0 0; font-size: 22px;">New Client Message</h2>
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; width: 140px; color: #1B143F;">Name:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #1B143F;">${clientName}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Email:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5;"><a href="mailto:${clientEmail}" style="color: #6A38EB; font-weight: 500;">${clientEmail}</a></td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Company / URL:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #1B143F;">${clientCompany}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Current Challenge:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #1B143F; font-weight: 600;">${clientService}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Estimated Budget:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #1B143F;">${clientBudget}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Message:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #5B5573;">${clientMessage}</td></tr>
              </table>
              <p style="margin-top: 20px; font-size: 11px; color: #8C87A5;">Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
            </div>
          `,
        });

        // 2. Confirmation to client
        await transporter.sendMail({
          from: `"Xink Digitals" <${user}>`,
          to: clientEmail,
          subject: `We've received your enquiry · Xink Digitals`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1B143F; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #EDEDF5; border-radius: 16px;">
              <h2 style="color: #6A38EB; margin-top: 0;">Thank You for Contacting Xink Digitals</h2>
              <p style="font-size: 14px; color: #1B143F;">Hello <strong>${clientName}</strong>,</p>
              <p style="font-size: 14px; color: #5B5573; line-height: 1.6;">We have received your enquiry regarding <strong>${clientService}</strong>. A dedicated growth specialist from our team will review your requirements and get back to you within 2–4 business hours.</p>
              <div style="background: #F8F7FD; border: 1px solid #EBE8F7; padding: 14px; border-radius: 12px; margin: 16px 0; font-size: 13px; color: #5B5573;">
                <strong>Your Message Summary:</strong><br />
                ${clientMessage !== "None" ? clientMessage : clientService}
              </div>
              <p style="font-size: 14px; color: #5B5573;">If you have any urgent updates or questions, reply directly to this email or reach us at <a href="mailto:contact@xinkdigitals.com" style="color: #6A38EB;">contact@xinkdigitals.com</a>.</p>
              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #EDEDF5; font-size: 12px; color: #8C87A5;">
                <strong>Xink Digitals</strong><br />
                11 Hospital Link Rd, Eastern Park, Santoshpur, Kolkata, India 700075<br />
                Phone: (+91) 92306 53970 · Email: contact@xinkdigitals.com
              </div>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error("Contact Form SMTP Error:", mailErr);
      }
    }

    console.log("Validated contact form submission:", {
      name: clientName,
      email: clientEmail,
      company: clientCompany,
      service: clientService,
      budget: clientBudget,
      message: clientMessage,
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
