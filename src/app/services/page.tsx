import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

export const metadata: Metadata = {
  title: "Digital Marketing & Growth Services | Xink Digitals",
  description:
    "Explore our full-stack growth services: SEO, performance marketing, paid ads, high-converting web design, and conversion rate optimization.",
  keywords: [
    "Digital Marketing Services",
    "SEO Services Kolkata",
    "Performance Marketing Agency",
    "Web Design Services",
    "Google Ads Management",
    "Meta Ads Management",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Marketing & Growth Services | Xink Digitals",
    description:
      "Explore our full-stack growth services: SEO, performance marketing, paid ads, and high-converting web design.",
    url: "/services",
    siteName: "Xink Digitals",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Growth Services | Xink Digitals",
    description:
      "Explore our full-stack growth services: SEO, performance marketing, paid ads, and web design.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
