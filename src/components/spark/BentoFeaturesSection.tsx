import React from "react";
import Image from "next/image";
import MotionCard from "./MotionCard";
import CountUp from "./CountUp";

const CARD =
  "p-6 sm:p-8 lg:p-10 rounded-[2.2rem] bg-white border border-[#EDEDF5] shadow-[0_6px_28px_rgba(27,20,63,0.06)] flex flex-col gap-8";
const ICON_TILE =
  "bento-icon w-16 h-16 rounded-2xl bg-white border border-[#EDEDF5] shadow-lg flex items-center justify-center mb-5";

const PILLS = [
  { label: "SEO", bg: "#00C48C" },
  { label: "Ads", bg: "#FF6A3D" },
  { label: "Social", bg: "#6A38EB" },
  { label: "Email", bg: "#2D7FF9" },
];

const SPEND = [
  { name: "Google Ads", amount: 50400, pct: 42, color: "#2D7FF9" },
  { name: "Meta Ads", amount: 37200, pct: 31, color: "#6A38EB" },
  { name: "SEO & Content", amount: 20400, pct: 17, color: "#00C48C" },
  { name: "Email", amount: 12000, pct: 10, color: "#FF8A3D" },
];

const BAR_GRADIENTS = [
  "linear-gradient(180deg, #7FB2FF, #2D7FF9)",
  "linear-gradient(180deg, #5EE3C0, #00C48C)",
  "linear-gradient(180deg, #FFD36B, #FFB800)",
  "linear-gradient(180deg, #FFB07A, #FF7A00)",
  "linear-gradient(180deg, #FF8FA3, #FF5A5F)",
  "linear-gradient(180deg, #9B73FF, #6A38EB)",
];

const MONTHS = [
  { m: "Jan", h: 34 },
  { m: "Feb", h: 42 },
  { m: "Mar", h: 51 },
  { m: "Apr", h: 62 },
  { m: "May", h: 78 },
  { m: "Jun", h: 100 },
];

export default function BentoFeaturesSection() {
  return (
    <section id="services" className="relative bg-[#F8F8FC] text-[#1B143F] overflow-hidden px-6 py-20 sm:px-12 lg:px-20 xl:px-28 xl:py-28">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">Marketing that works together.</h2>
        <p className="text-base leading-relaxed text-[#5B5573] max-w-2xl mb-10">Examples below illustrate reporting and campaign concepts; figures are sample data, not client results.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* 1. Campaigns that convert */}
          <MotionCard index={0} className={`${CARD} justify-start relative overflow-hidden`}>
            {/* Ripples */}
            <div className="absolute right-0 top-0 w-0 h-0 pointer-events-none" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="card-ripple" style={{ animationDelay: `${i * 1.6}s` }} />
              ))}
            </div>
            <div className="relative z-10 w-full shrink-0">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1B143F] leading-tight mb-3">
                Campaigns that <br />
                actually convert.
              </h3>
              <p className="text-base text-[#5B5573] leading-relaxed">
                We don&apos;t chase vanity metrics. Every ad, post and landing page we build is aimed at one thing: more qualified leads and sales for your business.
              </p>
              {/* Channel pills */}
              <div className="flex flex-wrap items-center gap-2 mt-5">
                {PILLS.map((p) => (
                  <span
                    key={p.label}
                    className="px-4 py-2 rounded-xl text-white text-xs font-bold shadow-sm"
                    style={{ backgroundColor: p.bg }}
                  >
                    {p.label}
                  </span>
                ))}
              </div>

            </div>

            <div className="relative z-10 w-full min-w-0 flex flex-col">
              {/* Floating cards cluster */}
              <div className="relative w-full max-w-[26rem] mx-auto h-80 sm:h-[22rem]">
                {/* Main picture */}
                <div className="absolute inset-x-4 inset-y-8 rounded-3xl overflow-hidden border-4 border-white shadow-[0_12px_36px_rgba(27,20,63,0.15)]">
                  <Image
                    src="/spark/digital_marketing_real.jpg"
                    alt="Marketing analytics dashboard open on a laptop"
                    fill
                    sizes="(min-width: 1440px) 460px, (min-width: 768px) 40vw, 85vw"
                    className="bento-picture object-cover"
                  />
                </div>

                {/* Post reach */}
                <div className="absolute z-10 left-0 top-0 w-40 p-3 rounded-2xl bg-white border border-[#EBEBF4] shadow-[0_8px_24px_rgba(27,20,63,0.10)] bento-widget bento-widget-late">
                  <p className="text-xs font-medium text-[#655F7D]">Instagram reach</p>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-lg font-bold text-[#1B143F] leading-none tabular-nums"><CountUp to={24.5} decimals={1} suffix="K" /></span>
                    <span className="text-xs font-semibold text-[#16A34A]"><CountUp to={64} prefix="+" suffix="%" /></span>
                  </div>
                  <div className="flex items-end gap-1 h-6 mt-2" aria-hidden="true">
                    {[
                      [30, "#FFB800"],
                      [45, "#FF6A3D"],
                      [38, "#2D7FF9"],
                      [60, "#00C48C"],
                      [52, "#FF5A5F"],
                      [80, "#8A6AF2"],
                      [100, "#6A38EB"],
                    ].map(([h, c], i) => (
                      <span key={i} className="bento-bar flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: c as string, "--item-index": i } as React.CSSProperties} />
                    ))}
                  </div>
                </div>

                {/* Email open rate */}
                <div className="absolute z-10 right-0 top-3 px-3 py-2 rounded-2xl bg-white border border-[#EBEBF4] shadow-[0_8px_24px_rgba(27,20,63,0.10)] bento-widget">
                  <p className="text-xs font-medium text-[#655F7D]">Email open rate</p>
                  <p className="text-sm font-bold text-[#1B143F] leading-tight"><CountUp to={42.6} decimals={1} suffix="%" /></p>
                </div>

                {/* Ad approved */}
                <div className="absolute z-10 left-0 bottom-16 flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-[#1B143F] text-white shadow-[0_8px_24px_rgba(27,20,63,0.25)] bento-widget">
                  <span className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center" aria-hidden="true">
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6.2l2.2 2.2L9.5 3.6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold leading-tight">Ad approved</p>
                    <p className="text-xs text-white/85 leading-tight">Meta · Spring Sale</p>
                  </div>
                </div>

                {/* New lead notification card */}
                <div className="absolute z-20 right-0 bottom-0 w-56 rounded-2xl bg-white border border-[#EBEBF4] shadow-[0_10px_30px_rgba(27,20,63,0.14)] p-3.5 bento-widget bento-widget-late">
                  <div className="absolute -top-4 right-0 px-2.5 py-1 rounded-xl bg-[#6A38EB] text-white text-xs font-bold shadow-sm">
                    <CountUp to={136} /> leads this week
                  </div>
                  <p className="text-xs font-semibold text-[#655F7D] mb-2">New lead</p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF6A3D] text-white text-xs font-bold flex items-center justify-center">
                      PS
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#1B143F] leading-tight">Priya Sharma</p>
                      <p className="text-xs text-[#655F7D]">via Google Ads · just now</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-[#5B5573]">Requested a quote</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#E8F8EF] font-semibold text-[#16A34A]">Hot</span>
                  </div>
                </div>
              </div>
            </div>
          </MotionCard>

          {/* 2. SEO */}
          <MotionCard index={1} className={`${CARD} justify-start`}>
            <div className="w-full shrink-0">
            <div className={ICON_TILE}>
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#00C48C" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16l4.5 4.5" />
              </svg>
            </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1B143F] leading-tight mb-3">
                Be found. <br />
                By the right people.
              </h3>
              <p className="text-base text-[#5B5573] leading-relaxed">
                Help customers discover your business through technical SEO, relevant content and local search. We prioritise useful improvements and track progress over time.
              </p>
            </div>

            <div className="w-full min-w-0 flex-1 flex flex-col gap-5">
              {/* Search result preview */}
              <div className="bento-search w-full mx-auto rounded-2xl bg-[#F6F6FB] border border-[#EBEBF4] shadow-sm p-5 sm:p-6 text-left">
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-full bg-white border border-[#EBEBF4] text-sm text-[#5B5573] mb-3">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" fill="none" stroke="#8C87A5" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M16 16l4.5 4.5" />
                  </svg>
                  digital marketing agency near me
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 px-1.5 py-0.5 rounded-md bg-[#6A38EB] text-white text-xs font-bold"><CountUp to={1} prefix="#" /></span>
                  <div className="min-w-0">
                    <p className="text-xs text-[#655F7D] leading-tight">xinkdigitals.com</p>
                    <p className="text-base font-bold text-[#4B2BC4] leading-snug">Xink Digitals – Digital Marketing Agency</p>
                    <p className="text-sm text-[#5B5573] leading-relaxed mt-2">SEO, social media and paid ads that bring you qualified leads, not just clicks.</p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="grid w-full grid-cols-3 gap-3">
                {[
                  { v: 212, prefix: "+", suffix: "%", decimals: 0, l: "Organic traffic", c: "#00C48C" },
                  { v: 48, prefix: "", suffix: "", decimals: 0, l: "Keywords on page 1", c: "#FF6A3D" },
                  { v: 3.2, prefix: "#", suffix: "", decimals: 1, l: "Avg. position", c: "#2D7FF9" },
                ].map((m) => (
                  <div key={m.l} className="rounded-xl bg-[#F6F6FB] border border-[#EBEBF4] py-4 px-3">
                    <p className="text-xl font-bold leading-none" style={{ color: m.c }}><CountUp to={m.v} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} /></p>
                    <p className="text-xs font-medium text-[#655F7D] mt-1 leading-tight">{m.l}</p>
                  </div>
                ))}
              </div>

              {/* What we do */}
              <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-left">
                {["Technical SEO audit", "Keyword research", "On-page & content", "Link building & local SEO"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm font-medium text-[#5B5573]">
                    <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2.5 6.2l2.2 2.2L9.5 3.6" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </MotionCard>

          {/* 3. Data ownership */}
          <MotionCard index={2} className={`${CARD} justify-start`}>
            <div className="w-full shrink-0">
            <div className={ICON_TILE}>
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#00C48C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                <path d="M9 12l2.2 2.2L15.5 10" />
              </svg>
            </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1B143F] leading-tight mb-3">
                Your data. <br />
                Your business.
              </h3>
              <p className="text-base text-[#5B5573] leading-relaxed">
                Keep your business in control. We agree account access, asset handover and reporting responsibilities before work starts, so you know who manages what.
              </p>
            </div>

            <div className="w-full min-w-0 space-y-2.5">
              {[
                { t: "You own every ad account", d: "Google, Meta and Analytics are set up in your name", c: "#2D7FF9" },
                { t: "Agree access before launch", d: "Define who needs access and what they can manage", c: "#00C48C" },
                { t: "Export anytime", d: "Leads, reports and creatives, whenever you ask", c: "#FF6A3D" },
                { t: "Full access, always", d: "See everything we run on your behalf", c: "#6A38EB" },
              ].map((x, i) => (
                <div key={x.t} style={{ "--item-index": i } as React.CSSProperties} className="bento-access flex items-center gap-3 rounded-2xl bg-[#F6F6FB] border border-[#EBEBF4] px-3.5 py-2.5">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: x.c }} aria-hidden="true">
                    <svg viewBox="0 0 12 12" className="w-3.5 h-3.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6.2l2.2 2.2L9.5 3.6" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#1B143F] leading-tight">{x.t}</p>
                    <p className="text-xs text-[#655F7D] leading-snug">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionCard>

          {/* 4. Budget & reporting */}
          <MotionCard index={3} className={`${CARD} justify-start relative overflow-hidden`}>
            {/* Ripples */}
            <div className="absolute right-0 top-0 w-0 h-0 pointer-events-none" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="card-ripple" style={{ animationDelay: `${i * 1.6}s` }} />
              ))}
            </div>
            <div className="relative z-10 w-full shrink-0">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1B143F] leading-tight mb-3">
                Know where <br />
                <span className="text-[#6C6389]">every rupee goes.</span>
              </h3>
              <p className="text-base text-[#5B5573] leading-relaxed">
                Understand channel budgets, campaign spend and the outcomes being measured. We separate agency fees from media spend in your proposal and explain the numbers in plain language.
              </p>
            </div>

            <div className="relative z-10 w-full min-w-0 flex-1 grid grid-cols-1 min-[1400px]:grid-cols-[1fr_1.1fr] items-stretch gap-6">
              {/* Spend breakdown widget */}
              <div className="p-5 rounded-2xl bg-[#F6F6FB] border border-[#EBEBF4] w-full min-w-0 shadow-sm flex flex-col">
                <p className="text-xs font-semibold text-[#655F7D]">Ad spend · June</p>
                <p className="text-2xl font-bold text-[#1B143F] leading-tight tabular-nums mt-2 mb-6"><CountUp to={120000} prefix={"\u20b9"} locale="en-IN" /></p>
                <div className="flex-1 flex flex-col justify-between gap-5">
                  {SPEND.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between gap-2 text-sm font-medium text-[#5B5573] mb-2">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                          {s.name}
                        </span>
                        <span className="tabular-nums font-semibold text-[#1B143F]"><CountUp to={s.amount} prefix={"\u20b9"} locale="en-IN" /></span>
                      </div>
                      <div className="h-1 rounded-full bg-[#F0EFF7]">
                        <div className="bento-progress h-full rounded-full" style={{ width: `${s.pct}%`, backgroundColor: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly leads chart */}
              <div className="relative min-w-0 w-full flex flex-col">
                <div className="self-start mb-5 px-3 py-2 rounded-xl bg-white border border-[#E5E5EF] shadow-md text-sm font-bold text-[#1B143F]">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#16A34A] mr-1.5 align-middle" />Leads <span className="text-[#16A34A]"><CountUp to={194} prefix="+" suffix="%" /></span> since Jan
                </div>
                <div className="flex items-end gap-3 h-64 sm:h-72">
                  {MONTHS.map((b, i) => (
                    <div key={b.m} className="flex-1 min-w-0 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div
                        className="bento-bar w-full max-w-12 rounded-xl"
                        style={{
                          height: `${b.h * 0.85}%`,
                          background: BAR_GRADIENTS[i],
                          "--item-index": i,
                        } as React.CSSProperties}
                      />
                      <span className="text-sm font-medium text-[#655F7D]">{b.m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
