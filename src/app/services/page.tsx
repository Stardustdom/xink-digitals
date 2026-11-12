"use client";

import React from "react";
import ServiceRoadmap from "@/components/ServiceRoadmap";
import Link from "next/link";
import WaterButton from "@/components/WaterButton";
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
} from "lucide-react";
import { useSound } from "@/components/SoundManager";



function PricingPlanCard({
  plan,
  planIndex,
  onInquire,
}: {
  plan: (typeof pricingPlans)[0];
  planIndex: number;
  onInquire: () => void;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const rectRef = React.useRef<DOMRect | null>(null);
  const frameRef = React.useRef<number>(0);

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (!rectRef.current && cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    const r = rectRef.current;
    if (!r) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = 0;
        const el = cardRef.current;
        if (!el) return;
        const x = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
        const y = Math.max(0, Math.min(1, (clientY - r.top) / r.height));
        el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
        el.style.setProperty("--tilt-x", `${((0.5 - y) * 6).toFixed(1)}deg`);
        el.style.setProperty("--tilt-y", `${((x - 0.5) * 8).toFixed(1)}deg`);
      });
    }
  };

  const handlePointerLeave = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
    rectRef.current = null;
    const el = cardRef.current;
    if (el) {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    }
  };

  return (
    <div
      ref={cardRef}
      data-reveal
      style={{ "--plan-color": plan.color, "--reveal-delay": `${planIndex * 80}ms` } as React.CSSProperties}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`plan-card ${plan.popular ? "plan-card-popular" : ""} relative p-8 rounded-3xl border flex flex-col justify-between ${
        plan.popular
          ? "bg-white border-[#754BFF] shadow-xl shadow-[#754BFF]/10 scale-102 ring-2 ring-[#754BFF]/20"
          : "bg-white border-[#181329]/10 shadow-sm hover:shadow-md"
      }`}
    >
      {plan.popular && (
        <div className="plan-ribbon absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#754BFF] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
          Recommended Model
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
            style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
          >
            {plan.badge}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#181329] font-heading mb-2">
          {plan.name}
        </h3>
        <p className="text-xs text-[#5A4E6B] leading-relaxed mb-6">
          {plan.desc}
        </p>

        <div className="mb-8">
          <span className="text-4xl font-black text-[#181329] font-mono">
            {plan.price}
          </span>
          <span className="text-xs text-[#6C5F7D] ml-2">/ {plan.period}</span>
        </div>

        <div className="space-y-3 mb-8">
          {plan.features.map((feat, i) => (
            <div key={i} style={{ "--i": i } as React.CSSProperties} className="plan-feature flex items-start gap-2 text-xs text-[#2D2140] font-medium">
              <CheckCircle2
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                style={{ color: plan.color }}
              />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <WaterButton href="/contact" block tone={plan.popular ? "purple" : "dark"} onClick={onInquire}>
        <span>Inquire Now</span>
        <ArrowUpRight className="plan-arrow w-4 h-4" />
      </WaterButton>
    </div>
  );
}

export default function ServicesPage() {
  const { playPop } = useSound();

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
    <div className="page-glow pt-32 pb-28 min-h-screen bg-[#FFF9F1] text-[#181329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="page-intro max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#754BFF]/10 border border-[#754BFF]/25 text-[#754BFF] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Capabilities &amp; Retainers</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-heading">
            Services —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#754BFF] via-[#FF6575] to-[#D97706]">
              Engineered For Impact
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#5A4E6B] mt-4 leading-relaxed">
            We don&apos;t sell commodity hours. We deliver end-to-end creative and technical transformations designed to make brands unforgettable and scale enterprise valuation.
          </p>
        </div>

        {/* Detailed Service Cards (Light Theme) */}
        <ServiceRoadmap>
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              style={{ "--stop-color": service.color } as React.CSSProperties}
              className="roadmap-step scroll-mt-32"
            >
              <span className="roadmap-point" aria-hidden="true"><span>{service.number}</span></span>
              <span className="roadmap-connector" aria-hidden="true" />
              <span className="roadmap-ghost-number" aria-hidden="true">{service.number}</span>
              <div className="roadmap-card p-5 sm:p-6 rounded-3xl bg-white border border-[#181329]/10 shadow-sm hover:shadow-xl transition-all scroll-mt-32"
            >
              <div className="service-card-content grid grid-cols-1 gap-5 items-start">
                {/* Left Description (7 cols) */}
                <div className="">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                        border: `1px solid ${service.color}30`,
                      }}
                    >
                      {getServiceIcon(service.iconName)}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#6C5F7D]">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#181329] font-heading mb-3">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#4A3E56] leading-relaxed mb-4">
                    {service.fullDesc}
                  </p>

                  <div
                    className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-3"
                    style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  >
                    {service.tools.length} core tools &amp; disciplines
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-[#6C5F7D] mr-1 font-semibold">Technologies:</span>
                    {service.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#FFF9F1] border border-[#181329]/8 text-[#5A4E6B] text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Deliverables List (5 cols) */}
                <div className="p-4 rounded-2xl bg-[#FFF9F1] border border-[#181329]/8">
                  <p className="text-xs uppercase font-mono tracking-widest text-[#754BFF] font-bold mb-4">
                    Core Deliverables Included
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#2D2140] font-medium">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: service.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-[#181329]/8">
                    <Link
                      href="/contact"
                      onClick={() => playPop()}
                      className="text-xs font-bold flex items-center gap-1.5 hover:underline"
                      style={{ color: service.color }}
                    >
                      Request this service scope →
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </ServiceRoadmap>

        {/* Pricing & Engagement Models (Light Theme) */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#181329] font-heading">
              Transparent Engagement Models
            </h2>
            <p className="text-sm text-[#5A4E6B] mt-2">
              Choose the collaboration structure that fits your current momentum and growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, planIndex) => (
              <PricingPlanCard
                key={plan.name}
                plan={plan}
                planIndex={planIndex}
                onInquire={() => playPop()}
              />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
