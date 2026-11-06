"use client";

import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import {
  Palette,
  Laptop,
  Flame,
  TrendingUp,
  Sparkles,
  Compass,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function BentoServices() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Palette":
        return <Palette className="w-6 h-6" />;
      case "Laptop":
        return <Laptop className="w-6 h-6" />;
      case "Flame":
        return <Flame className="w-6 h-6" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section className="relative py-28 bg-[#181329] overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#62D9F5]/15 border border-[#62D9F5]/30 text-[#62D9F5] text-xs font-bold uppercase tracking-wider mb-4">
              <span>04 / What We Create</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
              Capabilities Bento —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62D9F5] via-[#C9F36D] to-[#FFC247]">
                Sensory &amp; Strategic
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mt-3">
              We operate as a unified creative &amp; growth engine. From initial positioning to 3D visual effects and programmatic search domination.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all self-start md:self-auto"
          >
            <span>Explore All Services</span>
            <ArrowUpRight className="w-4 h-4 text-[#62D9F5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            // Bento sizing: first card spans 2 columns on large screens
            const isFeatured = index === 0 || index === 3;

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl p-8 bg-[#221A38] border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
                  isFeatured ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Glow backdrop on hover */}
                <div
                  className="absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: service.color }}
                />

                <div className="relative z-10">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-white/40">
                      {service.number}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
                      style={{
                        backgroundColor: service.accentBg,
                        color: service.color,
                        border: `1px solid ${service.color}40`,
                      }}
                    >
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-heading mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, isFeatured ? 4 : 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: service.color }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric & Tools */}
                <div className="relative z-10 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span
                    className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    ★ {service.metrics}
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
