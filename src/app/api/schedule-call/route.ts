import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

function getSmtpCredentials() {
  let user = process.env.SMTP_USER || process.env.EMAIL_USER || "contact@xinkdigitals.com";
  let pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  let host = process.env.SMTP_HOST || process.env.EMAIL_HOST || "119.18.54.191";
  let port = Number(process.env.SMTP_PORT || process.env.EMAIL_PORT) || 465;

  // Next.js @next/env strips '$' followed by numbers as variable expansions (e.g. $2027).
  // Read literal .env.local to preserve exact password on local/custom node environments:
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
    // fallback to process.env.SMTP_PASS
  }

  // mail.xinkdigitals.com is proxied by Cloudflare which drops port 465 SMTP.
  if (host === "mail.xinkdigitals.com") {
    host = "119.18.54.191";
  }

  return { user, pass, host, port };
}

function buildIcsCalendar({
  name,
  email,
  phone,
  date,
  time,
  notes,
}: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes: string;
}) {
  const cleanDate = date ? date.replace(/-/g, "") : "20261120";
  const uid = `xink-call-${Date.now()}-${Math.random().toString(36).slice(2, 8)}@xinkdigitals.com`;
  const now = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Xink Digitals//Strategy Consultation Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${cleanDate}T100000Z`,
    `DTEND:${cleanDate}T103000Z`,
    `SUMMARY:Discovery & Strategy Call — Xink Digitals & ${name}`,
    `DESCRIPTION:Strategy Consultation with Xink Digitals\\nClient: ${name}\\nEmail: ${email}\\nPhone: ${phone}\\nTopic/Notes: ${notes}\\nAgency: contact@xinkdigitals.com`,
    `LOCATION:Google Meet / Phone (${phone})`,
    "STATUS:CONFIRMED",
    "ORGANIZER;CN=Xink Digitals:mailto:contact@xinkdigitals.com",
    `ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=${name}:mailto:${email || "contact@xinkdigitals.com"}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Call with Xink Digitals in 15 minutes",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, notes } = body;

    const bookingName = name?.trim() || "Client";
    const bookingEmail = email?.trim() || "";
    const bookingPhone = phone?.trim() || "Not provided";
    const bookingDate = date?.trim() || "Upcoming";
    const bookingTime = time?.trim() || "Flexible";
    const bookingNotes = notes?.trim() || "None";

    let emailSent = false;
    let emailStatus = "logged";

    const { user, pass, host, port } = getSmtpCredentials();

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

        const icsContent = buildIcsCalendar({
          name: bookingName,
          email: bookingEmail,
          phone: bookingPhone,
          date: bookingDate,
          time: bookingTime,
          notes: bookingNotes,
        });

        // 1. Email to agency (contact@xinkdigitals.com)
        await transporter.sendMail({
          from: `"Xink Digitals Bookings" <${user}>`,
          to: "contact@xinkdigitals.com",
          replyTo: bookingEmail || undefined,
          subject: `📅 New Strategy Call: ${bookingName} (${bookingDate} · ${bookingTime})`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1B143F; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #EDEDF5; border-radius: 16px;">
              <div style="border-bottom: 2px solid #6A38EB; padding-bottom: 16px; margin-bottom: 20px;">
                <span style="background: #F4F1FD; color: #6A38EB; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">New Website Booking</span>
                <h2 style="color: #1B143F; margin: 10px 0 0 0; font-size: 22px;">Strategy Call Scheduled</h2>
              </div>
              <p style="font-size: 14px; color: #5B5573; line-height: 1.5;">A new strategy consultation has been booked through the website. Booking details are below:</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; width: 140px; color: #1B143F;">Client Name:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #1B143F;">${bookingName}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Email Address:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5;"><a href="mailto:${bookingEmail}" style="color: #6A38EB; font-weight: 500;">${bookingEmail || "Not provided"}</a></td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Phone Number:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5;"><a href="tel:${bookingPhone}" style="color: #6A38EB; font-weight: 500;">${bookingPhone}</a></td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Scheduled Date:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #1B143F; font-weight: 600;">${bookingDate}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Preferred Time:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #1B143F; font-weight: 600;">${bookingTime}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; color: #1B143F;">Discussion Goals:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; color: #5B5573;">${bookingNotes}</td></tr>
              </table>
              <div style="margin-top: 24px; padding: 12px 16px; background: #F8F7FD; border-radius: 12px; font-size: 12px; color: #5B5573;">
                💡 <strong>Tip:</strong> The calendar invitation is attached to this email. You can click "Reply" to respond directly to <a href="mailto:${bookingEmail}">${bookingEmail}</a>.
              </div>
              <p style="margin-top: 20px; font-size: 11px; color: #8C87A5;">Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
            </div>
          `,
          icalEvent: {
            filename: "invitation.ics",
            method: "REQUEST",
            content: icsContent,
          },
        });

        // 2. Automated Confirmation Copy to the client
        if (bookingEmail && bookingEmail.includes("@")) {
          await transporter.sendMail({
            from: `"Xink Digitals" <${user}>`,
            to: bookingEmail,
            subject: `Confirmed: Strategy Consultation with Xink Digitals (${bookingDate})`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1B143F; max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #EDEDF5; border-radius: 16px;">
                <div style="border-bottom: 2px solid #6A38EB; padding-bottom: 16px; margin-bottom: 20px;">
                  <span style="background: #EBFBF5; color: #00A877; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">✓ Booking Confirmed</span>
                  <h2 style="color: #1B143F; margin: 10px 0 0 0; font-size: 22px;">Your Strategy Call is Confirmed!</h2>
                </div>
                <p style="font-size: 14px; color: #1B143F; line-height: 1.6;">Hello <strong>${bookingName}</strong>,</p>
                <p style="font-size: 14px; color: #5B5573; line-height: 1.6;">Thank you for scheduling a strategy consultation with Xink Digitals. We have reserved your dedicated slot:</p>
                <div style="background: #F8F7FD; border: 1px solid #EBE8F7; padding: 16px; border-radius: 12px; margin: 18px 0;">
                  <p style="margin: 4px 0; font-size: 14px; color: #1B143F;"><strong>📅 Date:</strong> ${bookingDate}</p>
                  <p style="margin: 4px 0; font-size: 14px; color: #1B143F;"><strong>⏰ Time:</strong> ${bookingTime}</p>
                  <p style="margin: 4px 0; font-size: 14px; color: #1B143F;"><strong>📞 Contact Phone:</strong> ${bookingPhone}</p>
                  ${bookingNotes !== "None" ? `<p style="margin: 4px 0; font-size: 14px; color: #1B143F;"><strong>🎯 Focus:</strong> ${bookingNotes}</p>` : ""}
                </div>
                <p style="font-size: 14px; color: #5B5573; line-height: 1.6;">Our team will reach out at the scheduled time. The calendar invitation is attached so this sync appears in your calendar. If you need to make changes or have questions beforehand, reply directly to this email or reach us at <a href="mailto:contact@xinkdigitals.com" style="color: #6A38EB; font-weight: 500;">contact@xinkdigitals.com</a>.</p>
                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #EDEDF5; font-size: 12px; color: #8C87A5;">
                  <strong>Xink Digitals</strong><br />
                  11 Hospital Link Rd, Eastern Park, Santoshpur, Kolkata, India 700075<br />
                  Phone: (+91) 92306 53970 · Email: contact@xinkdigitals.com
                </div>
              </div>
            `,
            icalEvent: {
              filename: "xink-consultation.ics",
              method: "REQUEST",
              content: icsContent,
            },
          });
        }

        emailSent = true;
        emailStatus = "sent_via_smtp";
      } catch (mailErr) {
        console.error("Nodemailer SMTP Error:", mailErr);
        emailStatus = "smtp_error";
      }
    } else {
      console.warn(
        "Automated email delivery requires SMTP_PASS in .env.local or environment variables"
      );
      emailStatus = "credentials_not_configured";
    }

    console.log("Call booking registered:", {
      bookingName,
      bookingEmail,
      bookingPhone,
      bookingDate,
      bookingTime,
      emailSent,
      emailStatus,
    });

    if (!emailSent) {
      return NextResponse.json({
        success: false,
        emailSent: false,
        error: "Unable to send confirmation email at this time. Please check SMTP configuration or reach us directly at contact@xinkdigitals.com.",
        emailStatus,
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      emailStatus,
      message: "Your strategy consultation has been booked! Confirmation emails have been sent to both you and contact@xinkdigitals.com.",
      booking: {
        name: bookingName,
        email: bookingEmail,
        phone: bookingPhone,
        date: bookingDate,
        time: bookingTime,
        notes: bookingNotes,
      },
    });
  } catch (err) {
    console.error("Schedule Call API Error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
