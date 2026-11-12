import React from "react";
import BenefitsHeading from "./BenefitsHeading";
import BenefitsReveal from "./BenefitsReveal";
import CountUp from "./CountUp";


export default function BenefitsSection() {
  return (
    <section id="features" className="relative min-h-svh flex items-center bg-white text-[#1B143F] overflow-hidden px-5 py-8 sm:px-10 lg:px-16 lg:py-8">

      <BenefitsReveal className="relative z-10 w-full max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-14">
          <BenefitsHeading />
          <p className="bh-rest text-xs sm:text-sm text-[#5B5573] max-w-xl mx-auto leading-relaxed">
            One agency for SEO, social media, paid ads and content. We align your channels around a shared goal, explain the numbers and help you decide what to do next.
          </p>
        </div>

        {/* Two Bento Cards Grid */}
        <div className="bh-rest bh-rest-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Vertical Stat Card (4 cols) */}
          <div className="lg:col-span-3 p-8 rounded-[2.2rem] bg-[#F4F4FA] border border-[#EDEDF5] shadow-sm flex flex-col justify-between items-center text-center min-h-[300px]">
            <p className="text-xl sm:text-2xl font-bold text-[#1B143F]">Built around</p>

            <div className="my-auto py-6">
              <span className="benefits-you font-display font-black text-6xl sm:text-7xl text-[#6A38EB] tracking-tight block">
                You
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#8C87A5] font-semibold">Your goals. Your audience. Your budget.</p>
          </div>

          {/* Right Wide Tracking Card (9 cols) */}
          <div className="lg:col-span-9 p-8 sm:p-10 rounded-[2.2rem] bg-[#F4F4FA] border border-[#EDEDF5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
            {/* Card Text */}
            <div className="max-w-md">
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1B143F] leading-tight mb-4">
                <span className="block">Run campaigns.</span>
                <span className="block text-[#9C99B2]">Track results.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5573] leading-relaxed">
                We plan, create and improve your campaigns around agreed goals. Reporting brings together spend, enquiries and conversions so you can see what is working and where to focus next.
              </p>
            </div>

            {/* Right Visual: Phone mockup with floating analytics & campaign cards */}
            <div className="relative w-full max-w-[320px] flex items-center justify-center">
              {/* Concentric rings radiating from the top of the phone */}
              <div className="absolute left-1/2 top-[calc(50%-9rem)] w-0 h-0 pointer-events-none" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="card-ripple" style={{ animationDelay: `${i * 1.6}s` }} />
                ))}
              </div>
              {/* Phone: analytics dashboard */}
              <div className="relative z-10 w-56 h-72 rounded-[2.2rem] bg-white border border-[#E5E5EF] shadow-[0_10px_30px_rgba(27,20,63,0.08)] p-4 flex flex-col gap-3 overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1B143F]">Illustrative report</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F4F4FA] text-[8px] font-semibold text-[#8C87A5]">Last <CountUp to={30} /> days</span>
                </div>

                <div>
                  <p className="text-[8px] font-medium text-[#8C87A5]">Total leads</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-[#1B143F] leading-none tabular-nums"><CountUp to={1284} /></span>
                    <span className="text-[9px] font-semibold text-[#16A34A]">▲ <CountUp to={18.4} decimals={1} suffix="%" /></span>
                  </div>
                </div>

                <svg viewBox="0 0 160 56" className="w-full h-14" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="ov-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#6A38EB" stopOpacity="0.22" />
                      <stop offset="1" stopColor="#6A38EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 44 L16 40 L32 43 L48 33 L64 36 L80 26 L96 29 L112 18 L128 21 L144 10 L160 6 L160 56 L0 56 Z" fill="url(#ov-area)" />
                  <path d="M0 44 L16 40 L32 43 L48 33 L64 36 L80 26 L96 29 L112 18 L128 21 L144 10 L160 6" fill="none" stroke="#6A38EB" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>

                <div className="space-y-2 mt-auto">
                  {[
                    { name: "Google Ads", pct: 42, color: "#6A38EB" },
                    { name: "Meta Ads", pct: 31, color: "#8A6AF2" },
                    { name: "Organic", pct: 27, color: "#B9A6F8" },
                  ].map((c) => (
                    <div key={c.name}>
                      <div className="flex items-center justify-between text-[8px] font-medium text-[#5B5573] mb-1">
                        <span>{c.name}</span>
                        <span className="tabular-nums"><CountUp to={c.pct} suffix="%" /></span>
                      </div>
                      <div className="h-1 rounded-full bg-[#F0EFF7]">
                        <div className="h-full rounded-full" style={{ width: `${c.pct}%`, backgroundColor: c.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating conversion card */}
              <div className="absolute z-20 -left-8 top-[28%] w-32 p-3 rounded-2xl bg-white border border-[#EDEDF5] shadow-[0_8px_24px_rgba(27,20,63,0.10)] animate-float">
                <p className="text-[8px] font-medium text-[#8C87A5]">Conversion rate</p>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-lg font-bold text-[#1B143F] leading-none"><CountUp to={4.8} decimals={1} suffix="%" /></span>
                  <span className="text-[8px] font-semibold text-[#16A34A]"><CountUp to={0.6} decimals={1} prefix="+" suffix="%" /></span>
                </div>
                <svg viewBox="0 0 80 22" className="w-full h-5 mt-2" aria-hidden="true">
                  <path d="M0 18 L12 15 L24 16 L36 10 L48 12 L60 6 L80 3" fill="none" stroke="#16A34A" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>

              {/* Floating live-campaign card */}
              <div className="absolute z-20 -right-6 top-6 w-36 p-3 rounded-2xl bg-[#1B143F] text-white shadow-[0_8px_24px_rgba(27,20,63,0.25)] animate-float-delayed">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                  <span className="text-[8px] font-semibold uppercase tracking-wider text-white/70">Campaign live</span>
                </div>
                <p className="text-[10px] font-semibold mt-1.5">Spring Sale · Google Ads</p>
                <div className="flex items-center justify-between mt-1.5 text-[8px] text-white/60">
                  <span>CTR</span>
                  <span className="font-semibold text-white"><CountUp to={3.9} decimals={1} suffix="%" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BenefitsReveal>
    </section>
  );
}
