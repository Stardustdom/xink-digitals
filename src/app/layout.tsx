import type { Metadata } from "next";
import "./globals.css";
import InteriorNavigation from "@/components/InteriorNavigation";
import PageMotion from "@/components/PageMotion";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const siteUrl =
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL || "https://xinkdigitals.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xink Digitals — Full-Stack Digital Marketing & Growth Agency",
    template: "%s | Xink Digitals",
  },
  description:
    "Scale your brand with Xink Digitals: performance marketing, SEO, high-converting web design, and paid ads with transparent ROI.",
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
    languages: {
      "en-US": "/",
      "en-IN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Xink Digitals",
    title: "Xink Digitals — Full-Stack Digital Marketing & Growth Agency",
    description:
      "Scale your brand with Xink Digitals: performance marketing, SEO, high-converting web design, and paid ads with transparent ROI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xink Digitals — Full-Stack Digital Marketing & Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xink Digitals — Full-Stack Digital Marketing & Growth Agency",
    description:
      "Scale your brand with Xink Digitals: performance marketing, SEO, high-converting web design, and paid ads with transparent ROI.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo-icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteUrl}/#organization`,
        name: "Xink Digitals",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/og-image.png`,
        description:
          "Full-stack digital marketing agency specializing in SEO, performance marketing, paid advertising, and high-converting web design.",
        telephone: "+919230653970",
        email: "info@xinkdigitals.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700136",
          addressCountry: "IN",
        },
        sameAs: ["https://wa.me/919230653970"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Xink Digitals",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/faq?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-white text-[#1B143F] antialiased selection:bg-[#6A38EB] selection:text-white">
        <GoogleAnalytics />
        <InteriorNavigation />
        <PageMotion>{children}</PageMotion>
      </body>
    </html>
  );
}
