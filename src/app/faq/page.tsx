import type { Metadata } from "next";
import FAQClient from "@/components/faq/FAQClient";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Xink Digitals",
  description:
    "Comprehensive answers about digital marketing costs, lead generation, SEO, web development, real estate property marketing, and healthcare marketing in Kolkata.",
  keywords: [
    "digital marketing FAQ Kolkata",
    "digital marketing cost Kolkata",
    "real estate digital marketing FAQ",
    "healthcare marketing FAQ",
    "doctor SEO Kolkata",
    "Xink Digitals questions",
  ],
  alternates: {
    canonical: "https://xinkdigitals.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Xink Digitals",
    description:
      "Explore answers on digital marketing strategy, real estate lead generation, and healthcare patient acquisition.",
    url: "https://xinkdigitals.com/faq",
    siteName: "Xink Digitals",
    type: "website",
  },
};

export default function FAQPage() {
  // Generate Google Schema JSON-LD for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient />
    </>
  );
}
