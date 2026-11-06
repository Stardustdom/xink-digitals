"use client";

import React, { useState } from "react";
import Link from "next/link";
import { services, pricingPlans } from "@/data/services";
import {
  Palette,
  Laptop,
  Flame,
  TrendingUp,
  Sparkles,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    q: "How fast do sprints move?",
    a: "Our typical project sprints run between 2 and 4 weeks from kickoff to delivery. Because we eliminate middle-management bureaucracy and work in direct collaborative pods, we ship at 3x traditional agency speed.",
  },
  {
    q: "Who owns the code, assets, and design files?",
    a: "You do. 100%. Once final invoices are cleared, all Figma files, 3D render files, Next.js code repositories, and brand design tokens are transferred directly into your company accounts.",
  },
  {
    q: "How does the monthly Growth Partner model work?",
    a: "The Growth Partner retainer gives you an embedded senior creative and development team. You get a dedicated Slack channel, weekly strategy sprints, and a rolling queue of requests (brand updates, new landing pages, ad creatives, performance audits) executed without friction.",
  },
  {
    q: "Can you work with our existing in-house developers or marketers?",
    a: "Absolutely. We often act as the creative catalyst alongside internal engineering or growth teams—providing the high-impact visual design, WebGL shaders, and narrative strategy while aligning with your existing codebase and design system.",
  },
  {
    q: "What tech stack do you recommend for our website?",
    a: "We are strong advocates for Next.js with TypeScript and Tailwind CSS. It delivers unmatched Core Web Vitals performance, programmatic SEO capabilities, fluid interactive animations, and effortless headless CMS connections.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Palette":
        return <Palette className="w-5 h-5" />;
      case "Laptop":
        return <Laptop className="w-5 h-5" />;
      case "Flame":
        return <Flame className="w-5 h-5" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#181329] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#62D9F5]/20 border border-[#62D9F5]/40 text-[#62D9F5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Capabilities &amp; Retainers</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading">
            Services —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62D9F5] via-[#C9F36D] to-[#FFC247]">
              Engineered For Impact
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/70 mt-4 leading-relaxed">
            We don&apos;t sell commodity hours. We deliver end-to-end creative and technical transformations designed to make brands unforgettable and scale enterprise valuation.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-12 mb-28">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#221A38] border border-white/10 hover:border-white/20 transition-all scroll-mt-32"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: service.accentBg,
                        color: service.color,
                        border: `1px solid ${service.color}40`,
                      }}
                    >
                      {getServiceIcon(service.iconName)}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/40">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-4">
                    {service.title}
                  </h2>

                  <p className="text-base text-white/70 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-6" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                    ★ Proven Benchmark: {service.metrics}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-white/40 mr-1">Technologies &amp; Tools:</span>
                    {service.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Deliverables List (5 cols) */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#181329] border border-white/5">
                  <p className="text-xs uppercase font-mono tracking-widest text-[#C9BFFF] font-bold mb-4">
                    Core Deliverables Included
                  </p>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: service.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Link
                      href="/contact"
                      className="text-xs font-bold flex items-center gap-1.5 hover:underline"
                      style={{ color: service.color }}
                    >
                      Request this service scope →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & Engagement Models */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Transparent Engagement Models
            </h2>
            <p className="text-sm text-white/60 mt-2">
              Choose the collaboration structure that fits your current momentum and growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#271E42] border-[#754BFF] shadow-2xl shadow-[#754BFF]/20 scale-102"
                    : "bg-[#221A38] border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#754BFF] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
                    Recommended Model
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: `${plan.color}20`, color: plan.color }}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-heading mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  <div className="mb-8">
                    <span className="text-4xl font-extrabold text-white font-mono">
                      {plan.price}
                    </span>
                    <span className="text-xs text-white/40 ml-2">/ {plan.period}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: plan.color }}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? "bg-[#754BFF] hover:bg-[#663fe0] text-white shadow-lg shadow-[#754BFF]/30"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#FFC247] font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white font-heading">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#221A38] border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-base font-bold text-white hover:text-[#C9F36D] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/50 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#C9F36D]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
