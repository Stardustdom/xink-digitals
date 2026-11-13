import type { Metadata } from "next";
import "./globals.css";
import InteriorNavigation from "@/components/InteriorNavigation";
import PageMotion from "@/components/PageMotion";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xinkdigitals.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xink Digitals — Full-Stack Digital Marketing & Growth Agency",
    template: "%s | Xink Digitals",
  },
  description:
    "Performance marketing, SEO, paid advertising, brand strategy, and high-converting web design. Xink Digitals helps ambitious brands scale with transparent ROI and agile execution.",
  keywords: [
    "Digital Marketing Agency",
    "Performance Marketing",
    "SEO Strategy",
    "Paid Advertising",
    "Meta Ads",
    "Google Ads",
    "Conversion Rate Optimization",
    "Web Design & Development",
    "Xink Digitals",
  ],
  authors: [{ name: "Xink Digitals", url: siteUrl }],
  creator: "Xink Digitals",
  publisher: "Xink Digitals",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Xink Digitals",
    title: "Xink Digitals — Full-Stack Digital Marketing & Growth Agency",
    description:
      "Performance marketing, SEO, paid advertising, brand strategy, and high-converting web design with transparent ROI reporting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xink Digitals — Digital Marketing Agency",
    description:
      "Performance marketing, SEO, paid advertising, and conversion-focused web design for modern brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-[#1B143F] antialiased selection:bg-[#6A38EB] selection:text-white">
        <InteriorNavigation />
        <PageMotion>{children}</PageMotion>
      </body>
    </html>
  );
}
