import React from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import Orb3D from "./Orb3D";

export default function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] bg-[#0F0A1C] overflow-hidden">
      {/* Soft glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#754BFF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FF6575]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Dark wordmark panel */}
      <div className="absolute inset-x-0 top-0 h-[44%] min-h-[260px] bg-[#181329] rounded-b-[2rem] sm:rounded-b-[2.5rem] flex items-end px-4 sm:px-8 pb-4 sm:pb-6 border-b border-white/5">
        <h1 className="font-display font-extrabold text-white leading-[0.82] tracking-tighter whitespace-nowrap text-[clamp(2rem,9vw,10.5rem)] w-full">
          XINK DIGITALS<span className="text-[#C9F36D]">.</span>
        </h1>
      </div>

      {/* Glossy 3D orb (overlaps the wordmark) */}
      <div className="absolute left-1/2 top-[64%] -translate-x-1/2 -translate-y-1/2 w-[min(110vw,1200px)] h-[min(100vw,112svh)] pointer-events-none z-10">
        <Orb3D />
      </div>

      {/* Bottom-left descriptor */}
      <div className="absolute z-20 left-4 sm:left-8 bottom-6 sm:bottom-10 max-w-[15rem] sm:max-w-xs">
        <p className="text-sm sm:text-lg font-medium text-white/80 leading-snug">
          A creative studio that makes brands unforgettable, through bold ideas,
          remarkable experiences and digital impact.
        </p>
        <div className="mt-3 border-t-2 border-dotted border-white/20 w-48" />
      </div>

      {/* Right index list */}
      <ul className="hidden sm:block absolute right-8 top-[52%] text-right text-sm text-white/50 space-y-1.5 z-20">
        <li>Branding <span className="ml-2 text-white/25">/01</span></li>
        <li>Social &amp; Content <span className="ml-2 text-white/25">/02</span></li>
        <li>Web &amp; Motion <span className="ml-2 text-white/25">/03</span></li>
      </ul>

      {/* Lime CTA circle */}
      <Link
        href="/work"
        className="absolute z-20 right-4 sm:right-8 bottom-6 sm:bottom-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#C9F36D] hover:bg-[#754BFF] hover:text-white text-[#181329] flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-colors"
      >
        <Play className="w-3 h-3 fill-current" />
        Our work
      </Link>
    </section>
  );
}
