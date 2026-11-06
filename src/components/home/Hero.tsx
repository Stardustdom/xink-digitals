"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Zap, Flame, Award, Eye, Play } from "lucide-react";
import confetti from "canvas-confetti";
import HeroCanvas from "./HeroCanvas";
import { useSound } from "@/components/SoundManager";

export default function Hero() {
  const [activeMood, setActiveMood] = useState<"electric" | "cyber" | "sunset">("electric");
  const { playPop, playSuccess } = useSound();

  const moods = {
    electric: {
      name: "Electric Violet",
      glow: "from-[#754BFF]/30 via-[#FF6575]/20 to-[#62D9F5]/25",
      badgeBg: "bg-[#754BFF]/20 text-[#C9BFFF] border-[#754BFF]/40",
      accent: "#754BFF",
    },
    cyber: {
      name: "Cyber Lime",
      glow: "from-[#C9F36D]/25 via-[#62D9F5]/25 to-[#754BFF]/20",
      badgeBg: "bg-[#C9F36D]/20 text-[#C9F36D] border-[#C9F36D]/40",
      accent: "#C9F36D",
    },
    sunset: {
      name: "Sunset Coral",
      glow: "from-[#FF6575]/30 via-[#FFC247]/25 to-[#FF8CD5]/20",
      badgeBg: "bg-[#FF6575]/20 text-[#FF8CD5] border-[#FF6575]/40",
      accent: "#FF6575",
    },
  };

  const triggerConfetti = (e: React.MouseEvent) => {
    playSuccess();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ["#754BFF", "#FF6575", "#FFC247", "#C9F36D", "#62D9F5", "#FF8CD5"],
    });
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Interactive Generative Canvas Playground */}
      <HeroCanvas mood={activeMood} />

      {/* Background radial gradients */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${moods[activeMood].glow} opacity-60 blur-3xl transition-all duration-700 pointer-events-none`}
      />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating 3D/abstract decorative elements */}
      <div className="absolute top-24 left-[8%] hidden xl:block animate-float pointer-events-none">
        <div className="p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl backdrop-blur-xl rotate-[-6deg]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#754BFF] to-[#FF8CD5] flex items-center justify-center text-white">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white/50 font-medium">Viral Velocity</p>
              <p className="text-sm font-bold text-white font-mono">45M+ Reach</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-28 right-[7%] hidden xl:block animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}>
        <div className="p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl backdrop-blur-xl rotate-[8deg]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C9F36D] to-[#62D9F5] flex items-center justify-center text-[#181329]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white/50 font-medium">Industry Recognition</p>
              <p className="text-sm font-bold text-white font-mono">Awwwards SOTD</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm backdrop-blur-md transition-all duration-300 border-[#754BFF]/40 bg-[#754BFF]/15 text-[#C9BFFF]">
            <span className="w-2 h-2 rounded-full bg-[#C9F36D] animate-ping" />
            <span>XINK DIGITALS / CREATIVE STUDIO • 2026</span>
          </div>

          {/* Blueprint brand headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] font-heading mb-8">
            <span className="block text-white">We Don&apos;t Just Market.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFC247] via-[#FF6575] to-[#FF8CD5]">
              We Make Brands
            </span>
            <span className="block text-[#C9F36D] italic font-display">
              Unforgettable.
            </span>
          </h1>

          {/* Blueprint subheadline */}
          <p className="text-lg sm:text-2xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            <span className="font-semibold text-white">Bold ideas. Remarkable experiences. Digital impact.</span>{" "}
            We fuse kinetic design, viral social storytelling, and high-performance engineering to turn brands into category icons.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
            <Link
              href="/work"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#EAE2FF] hover:bg-white text-[#181329] font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#EAE2FF]/15 hover:scale-105"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#754BFF]" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300"
            >
              <span>Let&apos;s Collaborate</span>
            </Link>

            <button
              onClick={triggerConfetti}
              className="inline-flex items-center gap-1.5 px-4 py-4 rounded-full bg-[#754BFF]/20 hover:bg-[#754BFF]/40 border border-[#754BFF]/40 text-[#C9BFFF] text-xs font-semibold transition-all hover:scale-105"
              title="Click for a burst of creative inspiration!"
            >
              <Sparkles className="w-4 h-4 text-[#FFC247]" />
              <span className="hidden sm:inline">Celebrate</span>
            </button>
          </div>

          {/* Interactive Mood Controller / Creative Playground Switcher */}
          <div className="p-2 sm:p-2.5 rounded-full glass-panel border border-white/10 shadow-xl flex items-center gap-2 sm:gap-3">
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-widest pl-3 hidden sm:inline">
              Studio Vibe:
            </span>
            {(["electric", "cyber", "sunset"] as const).map((m) => {
              const isSelected = activeMood === m;
              return (
                <button
                  key={m}
                  onClick={() => setActiveMood(m)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-white text-[#181329] shadow-md scale-105"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: moods[m].accent }}
                  />
                  <span>{moods[m].name}</span>
                </button>
              );
            })}
          </div>

          {/* Teaser stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 pt-16 mt-8 border-t border-white/10 w-full max-w-4xl text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">$180M+</p>
              <p className="text-xs text-white/60 font-medium">Client Revenue Scaled</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#C9F36D] font-mono">45M+</p>
              <p className="text-xs text-white/60 font-medium">Organic Viral Views</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#62D9F5] font-mono">14 Min</p>
              <p className="text-xs text-white/60 font-medium">Record Sneaker Sellout</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#FF8CD5] font-mono">98.4%</p>
              <p className="text-xs text-white/60 font-medium">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
