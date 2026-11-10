import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Xink Digitals",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#0F0A1C] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <h1 className="text-3xl sm:text-5xl font-black font-heading mb-6 text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-white/40 mb-10">Last updated: October 2026</p>

        <div className="space-y-6 text-sm text-white/65 leading-relaxed">
          <p>
            At Xink Digitals, we value your privacy as much as our creative freedom. This policy details how we treat information received through our website and client communications.
          </p>
          <h2 className="text-lg font-bold text-white pt-4">1. Information We Collect</h2>
          <p>
            We collect contact details voluntarily submitted via our project estimator, inquiry forms, and email communications (such as name, company name, email address, and project brief scope).
          </p>
          <h2 className="text-lg font-bold text-white pt-4">2. How We Use Information</h2>
          <p>
            We strictly use this data to deliver proposals, communicate regarding project briefs, and provide our creative services. We never sell or distribute your contact details to third-party data brokers.
          </p>
          <h2 className="text-lg font-bold text-white pt-4">3. Security &amp; Confidentiality</h2>
          <p>
            All submitted project briefs and discussions are held under strict confidentiality. Mutual NDAs are readily signed prior to sensitive product launches.
          </p>
          <h2 className="text-lg font-bold text-white pt-4">4. Contacting Us</h2>
          <p>
            For privacy inquiries, please contact our team at{" "}
            <a href="mailto:privacy@xinkdigitals.com" className="text-[#C9F36D] underline">
              privacy@xinkdigitals.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
