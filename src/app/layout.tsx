import type { Metadata } from "next";
import "./globals.css";
import InteriorNavigation from "@/components/InteriorNavigation";
import PageMotion from "@/components/PageMotion";

export const metadata: Metadata = {
  title: "Xink Digitals — Digital Marketing Agency",
  description: "SEO, paid advertising, social media, brand strategy and web design. Xink Digitals helps businesses turn attention into qualified enquiries with clear plans and reporting.",
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
