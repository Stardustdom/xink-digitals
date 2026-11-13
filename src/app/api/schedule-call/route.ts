import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, notes } = body;

    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter your name.";
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Log the scheduled call enquiry routed to contact@xinkdigitals.com
    console.log("New Call Booking Routed to contact@xinkdigitals.com:", {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      date: date?.trim() || "Earliest available",
      time: time?.trim() || "Anytime",
      notes: notes?.trim() || "None",
      targetRecipient: "contact@xinkdigitals.com",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Your call has been scheduled! Details sent to contact@xinkdigitals.com. You can also add it directly to your calendar below.",
      booking: {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        date: date?.trim() || "",
        time: time?.trim() || "",
        notes: notes?.trim() || "",
      },
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while scheduling your call." },
      { status: 500 }
    );
  }
}
