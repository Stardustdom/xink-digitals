import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Schedule a Call or Get in Touch | Xink Digitals",
  description:
    "Get in touch with Xink Digitals. Share your growth targets, schedule a 1-on-1 strategy call, or request a free 18-point website audit.",
  keywords: [
    "Contact Xink Digitals",
    "Digital Marketing Agency Contact",
    "Schedule Marketing Call",
    "Free Site Audit",
    "Digital Agency Kolkata",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Xink Digitals",
    description:
      "Get in touch with Xink Digitals. Share your growth targets, schedule a 1-on-1 strategy call, or request a free 18-point website audit.",
    url: "/contact",
    siteName: "Xink Digitals",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Xink Digitals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Xink Digitals",
    description:
      "Get in touch with Xink Digitals. Share your growth targets, schedule a 1-on-1 strategy call, or request a free 18-point website audit.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
