"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, Minus, Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Clock, TrendingUp, Sliders } from "lucide-react";
import WaterButton from "@/components/WaterButton";

interface FeatureSpec {
  name: string;
  category: string;
  xink: string;
  traditional: string;
  freelance: string;
}

const FEATURE_SPECS: FeatureSpec[] = [
  {
    category: "Execution & Speed",
    name: "Deployment Speed",
    xink: "3 to 5 business days",
    traditional: "6 to 10 weeks of onboarding",
    freelance: "Unpredictable & fragmented",
  },
  {
    category: "Team & Talent",
    name: "Specialist Seniority",
    xink: "Senior strategists, designers & buyers",
    traditional: "Pitched by founders, run by juniors",
    freelance: "Variable skills, no quality control",
  },
  {
    category: "Channel Alignment",
    name: "Cross-Channel Synergy",
    xink: "100% aligned under one unified plan",
    traditional: "Siloed departments competing for budget",
    freelance: "Disjointed contractors with zero alignment",
  },
  {
    category: "Reporting & ROI",
    name: "Performance Visibility",
    xink: "24/7 live dashboard + validated ROI",
    traditional: "Delayed monthly PDFs with vanity metrics",
    freelance: "Raw disjointed platform screenshots",
  },
  {
    category: "Creative & Engineering",
    name: "High-Converting CRO & Landing Pages",
    xink: "Included directly in monthly retainers",
    traditional: "Billed as expensive custom development",
    freelance: "Generic slow templates or extra fees",
  },
  {
    category: "Agility & Terms",
    name: "Contract Flexibility",
    xink: "Agile monthly plans, pause or cancel anytime",
    traditional: "Rigid 6 to 12 month binding contracts",
    freelance: "Hourly creep with no scope accountability",
  },
  {
    category: "Communication",
    name: "Direct Communication",
    xink: "Dedicated private Slack + fast async updates",
    traditional: "Slow ticketing systems & email delays",
    freelance: "Conflicting timezones & ghosting risks",
  },
];

export default function ComparisonSection() {
  const [showDetailedSpecs, setShowDetailedSpecs] = useState(false);

  return (
    <section
      id="comparison"
      className="relative bg-white text-[#15103A] overflow-hidden px-5 py-24 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="relative z-10 w-full max-w-[1380px] mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6A38EB]/8 border border-[#6A38EB]/20 text-[#6A38EB] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Growth Benchmark</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#15103A] tracking-tight leading-[1.08] mb-5">
            Why Modern Brands Switch to Xink.
          </h2>

          <p className="text-sm sm:text-base text-[#5B5573] leading-relaxed max-w-2xl mx-auto">
            Legacy agencies move at the speed of bureaucracy. Freelancers leave you managing chaos. We give you a high-velocity, full-stack growth department built for measurable scale.
          </p>
        </div>

        {/* ── 3-Pillar Comparison Architecture ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {/* Card 1: Traditional Legacy Agencies */}
          <div className="p-8 sm:p-9 rounded-[2.2rem] bg-[#FBFBFE] border border-[#EDEDF5] shadow-xs flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C87A5] font-bold">
                  The Legacy Model
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDEDF5] text-[#8C87A5] text-[10px] font-bold">
                  Outdated
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-[#15103A] mb-2">
                Traditional Agencies
              </h3>
              <p className="text-xs text-[#5B5573] leading-relaxed mb-8">
                Slow onboarding, junior hand-offs, and restrictive long-term commitments.
              </p>

              {/* Drawback Items */}
              <ul className="space-y-4">
                {[
                  { text: "6 to 10 weeks of onboarding bureaucracy", label: "Slow Ramp" },
                  { text: "Pitched by founders, run by junior interns", label: "Hand-off" },
                  { text: "Locked into rigid 6–12 month binding contracts", label: "Lock-in" },
                  { text: "Delayed monthly PDFs with vanity metrics", label: "Opaque" },
                  { text: "Siloed teams that blame each other for missed targets", label: "Silos" },
                  { text: "Expensive extra fees for every creative edit", label: "Hidden Costs" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#5B5573]">
                    <span className="w-5 h-5 rounded-full bg-[#F4F4FA] border border-[#EDEDF5] text-[#8C87A5] flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EDEDF5] text-[11px] text-[#8C87A5] leading-relaxed">
              <span className="font-bold text-[#5B5573] block mb-1">Common Outcome:</span>
              High retainer spend, slow pivots, and unpredictable returns.
            </div>
          </div>

          {/* Card 2 (Center Hero): Xink Digitals */}
          <div className="relative p-8 sm:p-10 rounded-[2.5rem] bg-[#15103A] text-white shadow-[0_25px_60px_-15px_rgba(21,16,58,0.3)] ring-2 ring-[#6A38EB] flex flex-col justify-between lg:-translate-y-2.5 transition-all">
            {/* Top Pill Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#6A38EB] to-[#9B73FF] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md shadow-[#6A38EB]/30 flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3 h-3" />
              <span>The Modern Standard</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#00C48C] font-bold">
                  Recommended For Scale
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#00C48C]/20 text-[#00C48C] text-[10px] font-bold border border-[#00C48C]/30">
                  Full-Stack
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="font-black text-2xl text-[#00C48C] font-mono leading-none">✕</span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Xink Digitals
                </h3>
              </div>
              <p className="text-xs text-[#A9A4C2] leading-relaxed mb-8">
                Your dedicated full-stack growth team running with startup agility and validated ROI.
              </p>

              {/* Advantage Items with glowing emerald checks */}
              <ul className="space-y-4">
                {[
                  { text: "First campaigns live in 3 to 5 business days", highlight: "Rapid Launch" },
                  { text: "Dedicated senior strategists, copywriters & media buyers", highlight: "Senior Talent" },
                  { text: "Agile monthly retainers — pause or cancel anytime", highlight: "Zero Lock-in" },
                  { text: "24/7 live client dashboard & validated conversion data", highlight: "Full Transparency" },
                  { text: "Unified cross-channel synergy (SEO, Ads, Creative & Web)", highlight: "Cross-Channel" },
                  { text: "Custom landing pages, 3D motion & CRO included", highlight: "Conversion Focus" },
                  { text: "Direct private Slack channel & fast async updates", highlight: "Real-time Access" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#EAE8F7]">
                    <span className="w-5 h-5 rounded-full bg-[#00C48C] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-[#00C48C]/40">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="leading-snug font-medium">
                      <strong className="text-white font-bold">{item.text.split(" — ")[0]}</strong>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
              <WaterButton href="/contact" block tone="purple">
                <span>Start Your Growth Plan</span>
                <ArrowRight className="w-4 h-4" />
              </WaterButton>
              <p className="text-[10px] text-center text-[#8C87A5]">
                Zero lock-in contracts • 100% IP ownership • Scale as you grow
              </p>
            </div>
          </div>

          {/* Card 3: In-House & Freelancers */}
          <div className="p-8 sm:p-9 rounded-[2.2rem] bg-[#FBFBFE] border border-[#EDEDF5] shadow-xs flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C87A5] font-bold">
                  The Fragmented Route
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDEDF5] text-[#8C87A5] text-[10px] font-bold">
                  High Overhead
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-[#15103A] mb-2">
                In-House / Freelancers
              </h3>
              <p className="text-xs text-[#5B5573] leading-relaxed mb-8">
                Recruiting delays, management burden, and fragmented individual contractors.
              </p>

              {/* Drawback Items */}
              <ul className="space-y-4">
                {[
                  { text: "2 to 4 months spent recruiting and interviewing", label: "Hiring Lag" },
                  { text: "Single point of failure if contractors leave or ghost", label: "Risk" },
                  { text: "$180k+ in salaries, benefits, and recruiter commissions", label: "Fixed Cost" },
                  { text: "Disjointed data across 5 different accounts", label: "Scattered" },
                  { text: "You must act as the full-time project manager & QA", label: "Management Drain" },
                  { text: "$2,500+/mo in separate analytics & design SaaS tools", label: "Software Bloat" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#5B5573]">
                    <span className="w-5 h-5 rounded-full bg-[#F4F4FA] border border-[#EDEDF5] text-[#8C87A5] flex items-center justify-center shrink-0 mt-0.5">
                      <Minus className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EDEDF5] text-[11px] text-[#8C87A5] leading-relaxed">
              <span className="font-bold text-[#5B5573] block mb-1">Common Outcome:</span>
              Executive burnout managing contractors without unified strategic accountability.
            </div>
          </div>
        </div>

        {/* ── Toggle Detailed Feature Specifications ── */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowDetailedSpecs(!showDetailedSpecs)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F4F4FA] hover:bg-[#EBEBF4] border border-[#EDEDF5] text-xs font-bold text-[#15103A] transition-all shadow-xs"
          >
            <Sliders className="w-3.5 h-3.5 text-[#6A38EB]" />
            <span>{showDetailedSpecs ? "Hide Technical Breakdown" : "View Detailed Head-to-Head Breakdown"}</span>
          </button>
        </div>

        {/* ── Detailed Technical Spec Matrix (Collapsible) ── */}
        {showDetailedSpecs && (
          <div className="rounded-[2.2rem] bg-[#FBFBFE] border border-[#EDEDF5] shadow-sm p-6 sm:p-8 lg:p-10 animate-fade-in">
            <div className="mb-6">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#15103A]">
                Head-to-Head Capability Matrix
              </h3>
              <p className="text-xs text-[#7E7896] mt-1">
                A granular evaluation of capabilities, turnaround times, and contract terms.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#EDEDF5] text-[11px] font-mono font-bold uppercase tracking-wider text-[#8C87A5]">
                    <th className="py-4 pr-6">Capability</th>
                    <th className="py-4 px-6 text-[#6A38EB] bg-[#6A38EB]/5 rounded-t-xl">
                      ✕ Xink Digitals
                    </th>
                    <th className="py-4 px-6">Traditional Agencies</th>
                    <th className="py-4 pl-6">In-House / Freelance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDEDF5] text-xs">
                  {FEATURE_SPECS.map((spec, i) => (
                    <tr key={i} className="hover:bg-white/60 transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#15103A]">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#6A38EB] font-bold block mb-0.5">
                          {spec.category}
                        </span>
                        {spec.name}
                      </td>
                      <td className="py-4 px-6 font-bold text-[#15103A] bg-[#6A38EB]/5">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#00C48C] stroke-[3] shrink-0" />
                          <span>{spec.xink}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-[#5B5573]">
                        <div className="flex items-center gap-2">
                          <X className="w-3.5 h-3.5 text-[#8C87A5] stroke-[2.5] shrink-0" />
                          <span>{spec.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 pl-6 text-[#5B5573]">
                        <div className="flex items-center gap-2">
                          <Minus className="w-3.5 h-3.5 text-[#8C87A5] stroke-[2.5] shrink-0" />
                          <span>{spec.freelance}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Reassurance Trust Banner ── */}
        <div className="mt-8 rounded-2xl bg-[#F8F8FC] border border-[#EDEDF5] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#6A38EB]/10 text-[#6A38EB] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#15103A]">
                Risk-Free Onboarding Guarantee
              </p>
              <p className="text-[11px] text-[#7E7896]">
                Every engagement begins with an agreed roadmap, clear milestones, and flexible monthly billing.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-xs font-bold text-[#6A38EB] hover:text-[#15103A] flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Have specific questions? Chat with our team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
