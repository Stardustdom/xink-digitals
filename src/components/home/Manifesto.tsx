"use client";

import React from "react";
import { Sparkles, Flame, Eye, ShieldAlert, Cpu } from "lucide-react";

export default function Manifesto() {
  const pillars = [
    {
      number: "01",
      title: "Safe is Dangerous",
      desc: "When you look like every corporate SaaS or boutique agency in your feed, you pay a 5x invisible tax in attention. We build digital spectacles that people screenshot, share, and remember.",
      color: "#FF6575",
      icon: ShieldAlert,
    },
    {
      number: "02",
      title: "Kinetic Storytelling",
      desc: "Static web pages belong in museums. We compose kinetic typography, physics-based micro-interactions, and 3D depth to guide customer focus straight into emotional connection.",
      color: "#754BFF",
      icon: Flame,
    },
    {
      number: "03",
      title: "Art × Conversion",
      desc: "We reject the myth that artistic websites don't convert. Our experiences load in under 1.2 seconds, dominate Core Web Vitals, and regularly produce 3x industry conversion benchmarks.",
      color: "#2D9E64",
      icon: Cpu,
    },
    {
      number: "04",
      title: "Radical Transparency",
      desc: "No middle-tier account executives, no 8-week strategy decks that sit in a Google Drive. You work directly with principal designers, creative directors, and creative technologists.",
      color: "#0099C6",
      icon: Eye,
    },
  ];

  return (
    <section className="relative py-28 bg-[#181329] border-y border-white/5 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#754BFF]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6575]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Infinite Kinetic Marquee */}
      <div className="border-b border-white/8 pb-8 mb-20 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white/8 whitespace-nowrap font-heading">
          <span className="text-white/60 flex items-center gap-4">
            WE MAKE BRANDS UNFORGETTABLE <Sparkles className="w-8 h-8 text-[#FFC247]" />
          </span>
          <span className="text-[#754BFF]">DIGITAL PLAYGROUNDS</span>
          <span className="text-white/60">VIRAL VELOCITY</span>
          <span className="text-[#2D9E64]">KINETIC TYPOGRAPHY</span>
          <span className="text-[#FF6575]">NO CORPORATE BEIGE</span>
          <span className="text-[#0099C6]">MAXIMALIST CRAFT</span>
          <span className="text-white/60 flex items-center gap-4">
            WE MAKE BRANDS UNFORGETTABLE <Sparkles className="w-8 h-8 text-[#FFC247]" />
          </span>
          <span className="text-[#754BFF]">DIGITAL PLAYGROUNDS</span>
          <span className="text-white/60">VIRAL VELOCITY</span>
          <span className="text-[#2D9E64]">KINETIC TYPOGRAPHY</span>
          <span className="text-[#FF6575]">NO CORPORATE BEIGE</span>
          <span className="text-[#0099C6]">MAXIMALIST CRAFT</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Big Manifesto Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC247]/10 border border-[#FFC247]/25 text-[#FFC247] text-xs font-bold uppercase tracking-wider mb-6">
            <span>03 / The Creative Manifesto</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-tight mb-8">
            Corporate marketing is boring.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6575] via-[#754BFF] to-[#FFC247]">
              We create digital playgrounds.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            We exist for visionary leaders who refuse to whisper. The internet is flooded with derivative templates and timid brands. We build unforgettable experiences that command culture and scale enterprise valuation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
                    >
                      {pillar.number}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/8 flex items-center text-xs font-bold" style={{ color: pillar.color }}>
                  <span>Xink Principle</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
