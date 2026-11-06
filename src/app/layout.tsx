import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SoundManager from "@/components/SoundManager";

export const metadata: Metadata = {
  metadataBase: new URL("https://xinkdigitals.com"),
  title: "Xink Digitals — Digital Marketing & Creative Agency",
  description:
    "We don't just market. We make brands unforgettable. Bold ideas, remarkable experiences, and high-impact digital experiences for visionary brands.",
  keywords: [
    "creative agency",
    "digital marketing",
    "branding",
    "web design",
    "motion design",
    "performance marketing",
    "Xink Digitals",
  ],
  authors: [{ name: "Xink Digitals" }],
  openGraph: {
    title: "Xink Digitals — Digital Marketing & Creative Agency",
    description: "Bold ideas. Remarkable experiences. Digital impact.",
    url: "https://xinkdigitals.com",
    siteName: "Xink Digitals",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xink Digitals Creative Playground",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xink Digitals — Digital Marketing & Creative Agency",
    description: "Bold ideas. Remarkable experiences. Digital impact.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#181329] text-white selection:bg-[#754BFF] selection:text-white">
        <CustomCursor />
        <SoundManager />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
