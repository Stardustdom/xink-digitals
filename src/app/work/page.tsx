import type { Metadata } from "next";
import WorkClient from "@/components/work/WorkClient";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Xink Digitals",
  description:
    "Explore our featured client case studies in branding, performance marketing, high-converting web design, and digital campaigns.",
  keywords: [
    "Xink Digitals Case Studies",
    "Digital Marketing Portfolio",
    "Web Design Portfolio",
    "Performance Marketing Results",
  ],
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work & Case Studies | Xink Digitals",
    description:
      "Explore our featured client case studies in branding, performance marketing, and web design.",
    url: "/work",
    siteName: "Xink Digitals",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Case Studies | Xink Digitals",
    description:
      "Explore our featured client case studies in branding and performance marketing.",
    images: ["/og-image.png"],
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
