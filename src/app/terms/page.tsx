import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — Xink Digitals",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#181329] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading mb-6">
          Terms of Service
        </h1>
        <p className="text-xs text-white/50 mb-10">Last updated: October 2026</p>

        <div className="space-y-6 text-sm text-white/70 leading-relaxed">
          <p>
            Welcome to Xink Digitals. By accessing our website or engaging our creative studio services, you agree to comply with and be bound by the following terms.
          </p>
          <h2 className="text-lg font-bold text-white pt-4">1. Scope of Engagement</h2>
          <p>
            Project specifications, milestones, sprint deliverables, and payment terms are defined within individual Statements of Work (SOWs) executed between Xink Digitals and the client.
          </p>
          <h2 className="text-lg font-bold text-white pt-4">2. Intellectual Property</h2>
          <p>
            Upon full settlement of agreed project fees, full ownership of custom design deliverables, source code repositories, and brand identity assets transfers entirely to the client.
          </p>
          <h2 className="text-lg font-bold text-white pt-4">3. Portfolio Showcase Rights</h2>
          <p>
            Unless explicitly precluded by a signed non-disclosure agreement, Xink Digitals reserves the right to showcase completed project designs and verified case studies within our agency portfolio.
          </p>
          <h2 className="text-lg font-bold text-white pt-4">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the State of New York and the United States of America.
          </p>
        </div>
      </div>
    </div>
  );
}
