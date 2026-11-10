import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Play, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between bg-[#0F0A1C] text-white overflow-hidden">
      {/* Ambient background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#754BFF]/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#FF6575]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top Meta info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C9F36D] animate-pulse" />
            <span>Digital Marketing &amp; Creative Studio</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs text-white/50 font-mono">
            <span>EST. 2026</span>
            <span>•</span>
            <span>BROOKLYN / LONDON / TOKYO</span>
          </div>
        </div>
      </div>

      {/* Center Main Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto py-12">
        <div className="max-w-5xl">
          {/* Giant Wordmark */}
          <h1 className="font-display font-black tracking-tighter leading-[0.88] text-white text-[clamp(2.75rem,10vw,8.5rem)] mb-6">
            XINK DIGITALS<span className="text-[#C9F36D]">.</span>
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white/90 max-w-3xl leading-snug mb-8 font-heading">
            A creative studio that makes brands{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC247] via-[#FF6575] to-[#754BFF]">
              unforgettable
            </span>
            , through bold ideas, remarkable experiences and digital impact.
          </p>

          <p className="text-base sm:text-lg text-white/55 max-w-2xl leading-relaxed mb-10">
            We engineer high-voltage brand identities, viral social campaigns, and award-winning digital playgrounds for visionary leaders who refuse to whisper.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C9F36D] hover:bg-white text-[#181329] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#C9F36D]/20 hover:scale-105"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300"
            >
              <span>Start a Project</span>
            </Link>

            <Link
              href="#work"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-4 rounded-full text-xs font-semibold text-white/50 hover:text-white transition-colors"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
              <span>Scroll to discover</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Capabilities & Metrics bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-8 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#C9F36D] font-mono font-bold mb-1">/01 Branding</p>
            <p className="text-sm text-white/70">Iconic identities &amp; design systems</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#62D9F5] font-mono font-bold mb-1">/02 Social &amp; Drops</p>
            <p className="text-sm text-white/70">Viral cultural moments &amp; campaigns</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#FF8CD5] font-mono font-bold mb-1">/03 Web &amp; Motion</p>
            <p className="text-sm text-white/70">Next-gen sites loading under 1.2s</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#FFC247] font-mono font-bold mb-1">/04 Performance</p>
            <p className="text-sm text-white/70">High-ROAS growth &amp; paid engine</p>
          </div>
        </div>
      </div>
    </section>
  );
}
