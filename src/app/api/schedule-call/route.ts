import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, notes } = body;

    const bookingName = name?.trim() || "Guest Client";
    const bookingEmail = email?.trim() || "";
    const bookingPhone = phone?.trim() || "Not provided";
    const bookingDate = date?.trim() || "Earliest available";
    const bookingTime = time?.trim() || "Anytime";
    const bookingNotes = notes?.trim() || "None";

    let emailSent = false;
    let emailStatus = "logged";

    // Check if Gmail SMTP credentials are configured in environment
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

    if (gmailUser && gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        // 1. Email to agency (contact@xinkdigitals.com)
        await transporter.sendMail({
          from: `"Xink Digitals Bookings" <${gmailUser}>`,
          to: "contact@xinkdigitals.com",
          replyTo: bookingEmail || undefined,
          subject: `📅 New Strategy Call Booking: ${bookingName}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #1B143F;">
              <h2 style="color: #6A38EB; margin-top: 0;">New Call Scheduled via Website</h2>
              <table style="width: 100%; max-width: 520px; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold; width: 140px;">Name:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5;">${bookingName}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold;">Email:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5;"><a href="mailto:${bookingEmail}">${bookingEmail || "Not provided"}</a></td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold;">Phone:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5;"><a href="tel:${bookingPhone}">${bookingPhone}</a></td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold;">Date:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5;">${bookingDate}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold;">Time:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5;">${bookingTime}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #EDEDF5; font-weight: bold;">Notes:</td><td style="padding: 10px; border-bottom: 1px solid #EDEDF5;">${bookingNotes}</td></tr>
              </table>
              <p style="margin-top: 20px; font-size: 12px; color: #8C87A5;">Timestamp: ${new Date().toISOString()}</p>
            </div>
          `,
        });

        // 2. Email confirmation to the client (if valid email provided)
        if (bookingEmail && bookingEmail.includes("@")) {
          await transporter.sendMail({
            from: `"Xink Digitals" <${gmailUser}>`,
            to: bookingEmail,
            subject: `Confirmed: Strategy Call with Xink Digitals (${bookingDate})`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 20px; color: #1B143F;">
                <h2 style="color: #6A38EB; margin-top: 0;">Your Strategy Call is Confirmed!</h2>
                <p>Hello ${bookingName},</p>
                <p>Thank you for scheduling a strategy consultation with Xink Digitals. We have reserved your slot:</p>
                <div style="background: #F4F1FD; border: 1px solid #EDEDF5; padding: 15px; border-radius: 12px; margin: 15px 0;">
                  <p style="margin: 4px 0;"><strong>Date:</strong> ${bookingDate}</p>
                  <p style="margin: 4px 0;"><strong>Time:</strong> ${bookingTime}</p>
                  <p style="margin: 4px 0;"><strong>Contact Phone:</strong> ${bookingPhone}</p>
                </div>
                <p>Our team will reach out at the scheduled time. If you need to make changes, reply directly to this email or reach us at <a href="mailto:contact@xinkdigitals.com">contact@xinkdigitals.com</a>.</p>
                <p style="margin-top: 25px; color: #8C87A5; font-size: 12px;">Xink Digitals · 11 Hospital Link Rd, Santoshpur, Kolkata, India 700075</p>
              </div>
            `,
          });
        }

        emailSent = true;
        emailStatus = "sent_via_smtp";
      } catch (mailErr) {
        console.error("Nodemailer SMTP Error:", mailErr);
        emailStatus = "smtp_error";
      }
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

    return NextResponse.json({
      success: true,
      emailSent,
      emailStatus,
      message: emailSent
        ? "Your call has been scheduled and confirmation emails have been sent!"
        : "Your booking has been registered. You can add it directly to your calendar or send via Gmail below.",
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
