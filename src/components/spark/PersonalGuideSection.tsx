import React from "react";
import RippleBadge from "./RippleBadge";
import RadarBackground from "./RadarBackground";
import { Apple, Play } from "lucide-react";

export default function PersonalGuideSection() {
  return (
    <section className="relative min-h-[85vh] bg-[#FBFBFE] text-[#1B143F] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden flex flex-col justify-between p-8 sm:p-16 border border-[#EAEAFA] shadow-[0_4px_30px_rgba(27,20,63,0.03)] my-6">
      <RadarBackground />

      {/* Main Center Title with Floating Elements */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto py-12">
        {/* Floating Woman Avatar Card on Left */}
        <div className="hidden md:flex absolute -left-8 top-1/4 -translate-y-1/2 p-3 rounded-3xl bg-white border border-[#EDEDF5] shadow-xl animate-float">
          <div className="w-16 h-16 rounded-2xl bg-[#FFB8D0] flex items-center justify-center text-3xl overflow-hidden">
            👩🏻‍💼
          </div>
        </div>

        {/* Floating Amazon Card on Top Right */}
        <div className="hidden md:flex absolute -right-6 top-6 p-3 rounded-2xl bg-white border border-[#EDEDF5] shadow-lg animate-float-delayed">
          <div className="w-12 h-12 rounded-xl bg-[#F4F4FB] flex items-center justify-center font-bold text-lg text-black">
            a
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
            <RippleBadge text="Personal" rotate="-rotate-2" />
          </div>
          <span className="block font-display font-extrabold text-[clamp(2.75rem,7.5vw,6rem)] text-[#1B143F] tracking-tight leading-none">
            Shopping
          </span>
          <span className="block font-display font-extrabold text-[clamp(2.75rem,7.5vw,6rem)] text-[#1B143F] tracking-tight leading-none">
            Guide
          </span>
        </div>
      </div>

      {/* Bottom Subtext & App Store Buttons */}
      <div className="relative z-10 max-w-2xl mx-auto text-center pt-8 border-t border-[#EDEDF5] w-full">
        <p className="text-xs sm:text-sm text-[#5B5573] leading-relaxed mb-6">
          Bye bye spam. See you later unrewarding rewards. Adios tracking nightmares.
        </p>

        <div className="flex items-center justify-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1B143F] hover:bg-[#6A38EB] text-white text-xs font-bold transition-all shadow-lg"
          >
            <Apple className="w-4 h-4 fill-current" />
            <span>App Store</span>
          </a>

          <a
            href="#download"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1B143F] hover:bg-[#6A38EB] text-white text-xs font-bold transition-all shadow-lg"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}
