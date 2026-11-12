import React from "react";
import LegalContent from "@/components/LegalContent";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — Xink Digitals",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#FBFBFE] text-[#1B143F]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C87A5] hover:text-[#6A38EB] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <LegalContent kind="terms" />
      </div>
    </div>
  );
}
