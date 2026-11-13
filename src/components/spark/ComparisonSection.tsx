"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, Minus, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import WaterButton from "@/components/WaterButton";

interface ComparisonRow {
  category: string;
  feature: string;
  description: string;
  xink: {
    status: "yes" | "no" | "partial";
    highlight: string;
  };
  traditional: {
    status: "yes" | "no" | "partial";
    highlight: string;
  };
  freelance: {
    status: "yes" | "no" | "partial";
    highlight: string;
  };
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    category: "Speed & Execution",
    feature: "Time to First Campaign Launch",
    description: "How quickly your campaigns, landing pages, and creative go live.",
    xink: {
      status: "yes",
      highlight: "3 to 5 business days",
    },
    traditional: {
      status: "no",
      highlight: "6 to 10 weeks of onboarding",
    },
    freelance: {
      status: "partial",
      highlight: "Unpredictable & fragmented",
    },
  },
  {
    category: "Team & Talent",
    feature: "Dedicated Senior Specialists",
    description: "Who actually designs, executes, and optimizes your brand marketing.",
    xink: {
      status: "yes",
      highlight: "Dedicated senior team on day 1",
    },
    traditional: {
      status: "no",
      highlight: "Pitched by seniors, handed to juniors",
    },
    freelance: {
      status: "partial",
      highlight: "Mixed quality, no quality control",
    },
  },
  {
    category: "Strategy & Cohesion",
    feature: "Unified Cross-Channel Strategy",
    description: "Do SEO, Paid Ads, Creative, and Web Development talk to each other?",
    xink: {
      status: "yes",
      highlight: "100% synchronized in one agile plan",
    },
    traditional: {
      status: "no",
      highlight: "Siloed departments blaming each other",
    },
    freelance: {
      status: "no",
      highlight: "You must manage & align 4+ people",
    },
  },
  {
    category: "Reporting & Transparency",
    feature: "Live Performance & ROI Tracking",
    description: "Clear data showing customer acquisition cost, conversions, and revenue.",
    xink: {
      status: "yes",
      highlight: "Live dashboard + transparent ROI metrics",
    },
    traditional: {
      status: "no",
      highlight: "Delayed monthly PDFs with vanity metrics",
    },
    freelance: {
      status: "no",
      highlight: "Raw platform screenshots with zero context",
    },
  },
  {
    category: "Creative & Engineering",
    feature: "Custom High-Converting Web & CRO",
    description: "Custom fast landing pages, 3D/motion design, and conversion rate optimization.",
    xink: {
      status: "yes",
      highlight: "Included as standard in our retainers",
    },
    traditional: {
      status: "no",
      highlight: "Billed as expensive out-of-scope addons",
    },
    freelance: {
      status: "partial",
      highlight: "Cookie-cutter templates with slow code",
    },
  },
  {
    category: "Agility & Terms",
    feature: "Flexible Terms & Zero Lock-in",
    description: "Commitment model and freedom to scale up or pause as your business evolves.",
    xink: {
      status: "yes",
      highlight: "Agile monthly plans, pause or cancel anytime",
    },
    traditional: {
      status: "no",
      highlight: "Rigid 6 to 12 month binding contracts",
    },
    freelance: {
      status: "partial",
      highlight: "Hourly bill creep with no accountability",
    },
  },
  {
    category: "Communication",
    feature: "Direct Team Access & Rapid Response",
    description: "How and when you communicate with your growth strategists.",
    xink: {
      status: "yes",
      highlight: "Direct dedicated Slack channel + weekly syncs",
    },
    traditional: {
      status: "no",
      highlight: "Slow ticketing system & email gatekeepers",
    },
    freelance: {
      status: "partial",
      highlight: "Ghosting risks & conflicting timezones",
    },
  },
];

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState<"xink" | "traditional" | "freelance">("xink");

  return (
    <section
      id="comparison"
      className="relative bg-white text-[#15103A] overflow-hidden px-5 py-20 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="relative z-10 w-full max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6A38EB]/10 border border-[#6A38EB]/20 text-[#6A38EB] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Brands Choose Us</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#15103A] tracking-tight leading-[1.1] mb-5">
            The Clear Difference.
          </h2>

          <p className="text-sm sm:text-base text-[#5B5573] leading-relaxed max-w-2xl mx-auto">
            Traditional agencies lock you into slow, rigid retainers. Freelancers leave you managing the chaos. Xink Digitals delivers the strategic power of a full-scale growth department with total agility.
          </p>
        </div>

        {/* ── Desktop Comparison Table (Hidden on Mobile) ── */}
        <div className="hidden lg:block relative rounded-[2.5rem] bg-[#FBFBFE] border border-[#EDEDF5] shadow-[0_12px_45px_rgba(27,20,63,0.04)] overflow-hidden p-6 xl:p-10">
          {/* Table Header Row */}
          <div className="grid grid-cols-12 gap-4 pb-8 border-b border-[#EDEDF5] items-end">
            <div className="col-span-5 pr-6">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#8C87A5]">
                Core Evaluation Factors
              </span>
              <h3 className="font-display font-bold text-2xl text-[#15103A] mt-1">
                Capability Matrix
              </h3>
            </div>

            {/* Xink Digitals Header (Prominent) */}
            <div className="col-span-3">
              <div className="p-5 rounded-2xl bg-[#6A38EB]/8 border-2 border-[#6A38EB] shadow-sm relative overflow-hidden">
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#6A38EB] text-white text-[9px] font-extrabold tracking-wide uppercase">
                  <span>Recommended</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-black text-lg text-[#6A38EB] font-mono leading-none">✕</span>
                  <span className="font-display font-black text-xl text-[#15103A] tracking-tight">
                    Xink Digitals
                  </span>
                </div>
                <p className="text-xs text-[#5B5573]">Unified modern growth partner</p>
              </div>
            </div>

            {/* Traditional Agency Header */}
            <div className="col-span-2">
              <div className="p-4 rounded-2xl bg-white border border-[#EDEDF5] text-center">
                <span className="font-display font-bold text-base text-[#15103A] block">
                  Traditional Agencies
                </span>
                <p className="text-[11px] text-[#8C87A5] mt-0.5">Legacy retainer firms</p>
              </div>
            </div>

            {/* Freelance / In-House Header */}
            <div className="col-span-2">
              <div className="p-4 rounded-2xl bg-white border border-[#EDEDF5] text-center">
                <span className="font-display font-bold text-base text-[#15103A] block">
                  Freelance / In-House
                </span>
                <p className="text-[11px] text-[#8C87A5] mt-0.5">Siloed individual hires</p>
              </div>
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-[#EDEDF5]">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={row.feature}
                className="grid grid-cols-12 gap-4 py-5 items-center transition-colors hover:bg-white/60 rounded-xl px-2"
              >
                {/* Feature Name & Description (Col 1 to 5) */}
                <div className="col-span-5 pr-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6A38EB] font-bold block mb-0.5">
                    {row.category}
                  </span>
                  <p className="font-display font-bold text-base text-[#15103A]">
                    {row.feature}
                  </p>
                  <p className="text-xs text-[#7E7896] leading-relaxed mt-0.5">
                    {row.description}
                  </p>
                </div>

                {/* Xink Digitals (Col 6 to 8 - Highlighted) */}
                <div className="col-span-3">
                  <div className="p-3.5 rounded-xl bg-[#6A38EB]/5 border border-[#6A38EB]/25 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#00C48C] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-xs font-bold text-[#15103A] leading-snug">
                      {row.xink.highlight}
                    </span>
                  </div>
                </div>

                {/* Traditional Agencies (Col 9 to 10) */}
                <div className="col-span-2">
                  <div className="p-3 rounded-xl bg-white border border-[#EDEDF5] flex items-start gap-2 text-[#7E7896]">
                    <span className="w-4 h-4 rounded-full bg-[#EDEDF5] text-[#8C87A5] flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span className="text-[11px] leading-snug">{row.traditional.highlight}</span>
                  </div>
                </div>

                {/* Freelancers / In-House (Col 11 to 12) */}
                <div className="col-span-2">
                  <div className="p-3 rounded-xl bg-white border border-[#EDEDF5] flex items-start gap-2 text-[#7E7896]">
                    <span className="w-4 h-4 rounded-full bg-[#EDEDF5] text-[#8C87A5] flex items-center justify-center shrink-0 mt-0.5">
                      {row.freelance.status === "no" ? (
                        <X className="w-2.5 h-2.5 stroke-[2.5]" />
                      ) : (
                        <Minus className="w-2.5 h-2.5 stroke-[2.5]" />
                      )}
                    </span>
                    <span className="text-[11px] leading-snug">{row.freelance.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card Summary Banner */}
          <div className="mt-8 pt-8 border-t border-[#EDEDF5] flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#6A38EB]/5 via-white to-transparent p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#6A38EB] text-white flex items-center justify-center shadow-md shadow-[#6A38EB]/20 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-[#15103A]">
                  Zero Risk. 100% Transparency.
                </h4>
                <p className="text-xs text-[#5B5573]">
                  No locked contracts. Transparent live reporting. Fast turnaround from day one.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <WaterButton href="/contact" tone="purple">
                <span>Start Your Growth Plan</span>
                <ArrowRight className="w-4 h-4" />
              </WaterButton>
            </div>
          </div>
        </div>

        {/* ── Mobile Responsive View (< lg) ── */}
        <div className="block lg:hidden space-y-6">
          {/* Mobile Segmented Control */}
          <div className="p-1 rounded-2xl bg-[#F4F4FA] border border-[#EDEDF5] flex gap-1">
            <button
              onClick={() => setActiveTab("xink")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "xink"
                  ? "bg-[#6A38EB] text-white shadow-md shadow-[#6A38EB]/20"
                  : "text-[#5B5573] hover:text-[#15103A]"
              }`}
            >
              ✕ Xink Digitals
            </button>
            <button
              onClick={() => setActiveTab("traditional")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "traditional"
                  ? "bg-[#15103A] text-white shadow-sm"
                  : "text-[#5B5573] hover:text-[#15103A]"
              }`}
            >
              Traditional
            </button>
            <button
              onClick={() => setActiveTab("freelance")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "freelance"
                  ? "bg-[#15103A] text-white shadow-sm"
                  : "text-[#5B5573] hover:text-[#15103A]"
              }`}
            >
              Freelance
            </button>
          </div>

          {/* Mobile Feature Cards */}
          <div className="space-y-4">
            {COMPARISON_DATA.map((row) => {
              const data =
                activeTab === "xink"
                  ? row.xink
                  : activeTab === "traditional"
                  ? row.traditional
                  : row.freelance;

              return (
                <div
                  key={row.feature}
                  className={`p-5 rounded-2xl border transition-all ${
                    activeTab === "xink"
                      ? "bg-[#FBFBFE] border-[#6A38EB]/30 shadow-sm"
                      : "bg-white border-[#EDEDF5]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6A38EB] font-bold">
                      {row.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        data.status === "yes"
                          ? "bg-[#00C48C]/15 text-[#00A877]"
                          : data.status === "partial"
                          ? "bg-[#FFB800]/15 text-[#B8860B]"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {data.status === "yes"
                        ? "Superior"
                        : data.status === "partial"
                        ? "Average"
                        : "Limited"}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-[#15103A] mb-1">
                    {row.feature}
                  </h4>
                  <p className="text-xs text-[#7E7896] leading-relaxed mb-3">
                    {row.description}
                  </p>

                  <div
                    className={`p-3 rounded-xl flex items-start gap-2.5 text-xs font-bold ${
                      activeTab === "xink"
                        ? "bg-[#6A38EB]/10 text-[#15103A] border border-[#6A38EB]/20"
                        : "bg-[#F4F4FA] text-[#5B5573]"
                    }`}
                  >
                    {data.status === "yes" ? (
                      <span className="w-4 h-4 rounded-full bg-[#00C48C] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="w-4 h-4 rounded-full bg-[#EDEDF5] text-[#8C87A5] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                    <span>{data.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Bottom CTA */}
          <div className="p-6 rounded-2xl bg-[#FBFBFE] border border-[#EDEDF5] text-center">
            <h4 className="font-display font-bold text-lg text-[#15103A] mb-2">
              Ready for the Modern Standard?
            </h4>
            <p className="text-xs text-[#5B5573] leading-relaxed mb-5">
              Experience fast execution, full cross-channel alignment, and transparent ROI.
            </p>
            <WaterButton href="/contact" block tone="purple">
              <span>Start Your Growth Plan</span>
              <ArrowRight className="w-4 h-4" />
            </WaterButton>
          </div>
        </div>
      </div>
    </section>
  );
}
