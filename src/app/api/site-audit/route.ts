import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSmtpCredentials() {
  let user = process.env.SMTP_USER || process.env.EMAIL_USER || "contact@xinkdigitals.com";
  let pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  let host = process.env.SMTP_HOST || process.env.EMAIL_HOST || "119.18.54.191";
  let port = Number(process.env.SMTP_PORT || process.env.EMAIL_PORT) || 465;

  try {
    const envPath = path.resolve(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      for (const line of content.split("\n")) {
        const match = line.match(/^\s*SMTP_PASS\s*=\s*(.*)?\s*$/);
        if (match && match[1]) {
          const raw = match[1].trim().replace(/^['"]|['"]$/g, "");
          if (raw) pass = raw;
        }
      }
    }
  } catch {
    // fallback
  }

  if (!pass || pass === "Xink@Xink") {
    pass = "Xink$2027@Xink$2027";
  }

  if (host === "mail.xinkdigitals.com") {
    host = "119.18.54.191";
  }

  return { user, pass, host, port };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, location, phone, email, websiteUrl } = body;

    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter your full name.";
    }

    if (!location || typeof location !== "string" || location.trim().length < 2) {
      errors.location = "Please enter your location / city / country.";
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      errors.phone = "Please enter a valid contact phone number.";
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!websiteUrl || typeof websiteUrl !== "string" || websiteUrl.trim().length < 3) {
      errors.websiteUrl = "Please enter the website URL to be audited.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const cleanName = escapeHtml(name.trim());
    const cleanLocation = escapeHtml(location.trim());
    const cleanPhone = escapeHtml(phone.trim());
    const cleanEmail = email.trim();
    let rawUrl = websiteUrl.trim();
    if (!rawUrl.startsWith("http://") && !rawUrl.startsWith("https://")) {
      rawUrl = `https://${rawUrl}`;
    }
    const cleanUrl = escapeHtml(rawUrl);

    const { user, pass, host, port } = getSmtpCredentials();
    let emailSent = false;
    let emailStatus = "not_configured";

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
          connectionTimeout: 8000,
          greetingTimeout: 8000,
          socketTimeout: 8000,
        });

        const formattedDate = new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "full",
          timeStyle: "short",
        });

        // 1. Email to agency: info@xinkdigitals.com (with cc to contact@xinkdigitals.com)
        await transporter.sendMail({
          from: `"Xink Digitals Site Audits" <${user}>`,
          to: "info@xinkdigitals.com",
          cc: "contact@xinkdigitals.com",
          replyTo: cleanEmail,
          subject: `🔍 New Website Audit Request: ${cleanUrl} (${cleanName})`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1B143F; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #EDEDF5; border-radius: 16px;">
              <div style="border-bottom: 2px solid #6A38EB; padding-bottom: 16px; margin-bottom: 20px;">
                <span style="background: #F4F1FD; color: #6A38EB; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">Complimentary Website Audit</span>
                <h2 style="color: #1B143F; margin: 10px 0 0 0; font-size: 22px;">New Site Audit Request</h2>
              </div>
              <p style="font-size: 14px; color: #5B5573; margin-bottom: 16px;">A new comprehensive website audit request was submitted via the website:</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; width: 140px; color: #1B143F;">Client Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #1B143F; font-weight: 600;">${cleanName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Website URL:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5;"><a href="${cleanUrl}" target="_blank" style="color: #6A38EB; font-weight: bold; text-decoration: underline;">${cleanUrl}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Location:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #1B143F;">${cleanLocation}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Contact No.:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5;"><a href="tel:${cleanPhone}" style="color: #1B143F; font-family: monospace;">${cleanPhone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #EDEDF5;"><a href="mailto:${cleanEmail}" style="color: #6A38EB; font-weight: 500;">${cleanEmail}</a></td>
                </tr>
              </table>
              <p style="margin-top: 20px; font-size: 11px; color: #8C87A5;">Received: ${formattedDate} IST</p>
            </div>
          `,
        });

        // 2. Email to the person filling it (confirmation copy)
        await transporter.sendMail({
          from: `"Xink Digitals" <${user}>`,
          to: cleanEmail,
          subject: `Site Audit Request Confirmed: ${cleanUrl} · Xink Digitals`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1B143F; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #EDEDF5; border-radius: 16px;">
              <h2 style="color: #6A38EB; margin-top: 0; font-size: 22px;">We're Auditing Your Website!</h2>
              <p style="font-size: 14px; color: #1B143F;">Hello <strong>${cleanName}</strong>,</p>
              <p style="font-size: 14px; color: #5B5573; line-height: 1.6;">Thank you for requesting a complimentary website audit for <strong style="color: #1B143F;">${cleanUrl}</strong>. Our senior technical SEO, speed optimization, and CRO specialists are now analyzing your web properties.</p>
              
              <div style="background: #F8F7FD; border: 1px solid #EBE8F7; padding: 16px; border-radius: 12px; margin: 18px 0; font-size: 13px; color: #5B5573;">
                <strong style="color: #1B143F; font-size: 13px; display: block; margin-bottom: 8px;">Audit Request Summary:</strong>
                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li><strong>Target Website:</strong> <a href="${cleanUrl}" style="color: #6A38EB;">${cleanUrl}</a></li>
                  <li><strong>Location:</strong> ${cleanLocation}</li>
                  <li><strong>Contact Number:</strong> ${cleanPhone}</li>
                  <li><strong>Delivery Email:</strong> ${cleanEmail}</li>
                </ul>
              </div>

              <div style="background: #FFFFFF; border: 1px solid #E5E0F5; padding: 14px; border-radius: 12px; margin: 16px 0; font-size: 12px; color: #5B5573;">
                <strong style="color: #6A38EB; display: block; margin-bottom: 4px;">What we are reviewing:</strong>
                ✓ Core Web Vitals & Page Speed Bottlenecks<br />
                ✓ On-Page SEO, Metadata & Schema Markup<br />
                ✓ Mobile UX & Conversion Leak Analysis<br />
                ✓ Competitor Keyword Gap Identification
              </div>

              <p style="font-size: 14px; color: #5B5573; line-height: 1.6;">Your custom audit report will be delivered directly to your inbox within <strong>24 business hours</strong>. If you have immediate questions, feel free to reply directly to this email or WhatsApp us at <strong>(+91) 92306 53970</strong>.</p>

              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #EDEDF5; font-size: 12px; color: #8C87A5; line-height: 1.6;">
                <strong>Xink Digitals</strong><br />
                11 Hospital Link Rd, Eastern Park, Santoshpur, Kolkata, India 700075<br />
                Phone: (+91) 92306 53970 · Email: info@xinkdigitals.com
              </div>
            </div>
          `,
        });

        emailSent = true;
        emailStatus = "sent_via_smtp";
      } catch (smtpErr) {
        console.error("Site Audit SMTP Error:", smtpErr);
        emailStatus = "smtp_error";
      }
    }

    return NextResponse.json({
      success: true,
      emailSent,
      emailStatus,
      message: "Site audit request received successfully.",
    });
  } catch (error) {
    console.error("Site Audit API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
