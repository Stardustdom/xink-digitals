import React from "react";
import WaterButton from "@/components/WaterButton";
import RippleBadge from "./RippleBadge";
import RadarBackground from "./RadarBackground";
import { ArrowUpRight, Layers } from "lucide-react";

export default function PersonalGuideSection() {
  return (
    <section className="relative min-h-svh bg-[#FBFBFE] text-[#1B143F] overflow-hidden flex flex-col justify-between p-6 sm:px-16 sm:py-6">
      <RadarBackground />

      {/* Main Center Title with Floating Elements */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto py-4 sm:py-6">
        {/* Floating Woman Avatar Card on Left */}
        <div className="hidden md:flex absolute -left-8 top-1/4 -translate-y-1/2 p-3 rounded-3xl bg-white border border-[#EDEDF5] shadow-xl animate-float">
          <div className="w-16 h-16 rounded-2xl bg-[#FFB8D0] flex items-center justify-center text-3xl overflow-hidden">
            👩🏻‍💼
          </div>
        </div>

        {/* Floating Amazon Card on Top Right */}
        <div className="hidden md:flex absolute -right-6 top-6 p-3 rounded-2xl bg-white border border-[#EDEDF5] shadow-lg animate-float-delayed">
          <div className="w-12 h-12 rounded-xl bg-[#F4F4FB] flex items-center justify-center font-bold text-lg text-black">
            X
          </div>
        </div>

        {/* Floating Orange Lightning Card on Bottom Right */}
        <div className="hidden md:flex absolute -right-4 bottom-12 p-3 rounded-2xl bg-white border border-[#EDEDF5] shadow-xl animate-float">
          <div className="w-12 h-12 rounded-xl bg-[#FF6A3D] flex items-center justify-center text-white text-lg">
            ⚡
          </div>
        </div>

        {/* Big Kinetic Title */}
        <div className="space-y-2">
          <span className="block font-display font-extrabold text-[clamp(2.75rem,7.5vw,6rem)] text-[#1B143F] tracking-tight leading-none">
            Your
          </span>
          <div className="py-2">
            <RippleBadge text="Growth" rotate="-rotate-2" />
          </div>
          <span className="block font-display font-extrabold text-[clamp(2.75rem,7.5vw,6rem)] text-[#1B143F] tracking-tight leading-none">
            Marketing
          </span>
          <span className="block font-display font-extrabold text-[clamp(2.75rem,7.5vw,6rem)] text-[#1B143F] tracking-tight leading-none">
            Partner
          </span>
        </div>
      </div>

      {/* Bottom Subtext & App Store Buttons */}
      <div className="relative z-10 max-w-2xl mx-auto text-center pt-8 border-t border-[#EDEDF5] w-full">
        <p className="text-xs sm:text-sm text-[#5B5573] leading-relaxed mb-6">
          From your first campaign to your next stage of growth, get a focused marketing plan and the creative support to put it into action.
        </p>

        <div className="flex items-center justify-center gap-3">
          <WaterButton href="/contact"><ArrowUpRight className="w-4 h-4 fill-current" /><span>Discuss your goals</span></WaterButton>

          <WaterButton href="/services"><Layers className="w-3.5 h-3.5 fill-current" /><span>Explore services</span></WaterButton>
        </div>
      </div>
    </section>
  );
}
