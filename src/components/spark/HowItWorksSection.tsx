import React from "react";
import RippleBadge from "./RippleBadge";
import RadarBackground from "./RadarBackground";

export default function HowItWorksSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] bg-[#FBFBFE] text-[#1B143F] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden flex items-center justify-center p-8 sm:p-16 border border-[#EAEAFA] shadow-[0_4px_30px_rgba(27,20,63,0.03)] my-6">
      {/* Background subtle radar circles */}
      <RadarBackground />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10">
        {/* Floating Orange Lightning Squircle Card */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white border border-[#EDEDF5] p-3 shadow-xl animate-float flex items-center justify-center">
          <div className="w-full h-full rounded-2xl bg-[#FF6A3D] flex items-center justify-center text-white font-black text-2xl shadow-inner">
            ⚡
          </div>
        </div>

        {/* Big "How it works" statement */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          <span className="font-display font-extrabold text-[clamp(3rem,8vw,6.5rem)] text-[#1B143F] tracking-tight leading-none">
            How it
          </span>
          <RippleBadge text="works" rotate="-rotate-3" />
        </div>
      </div>
    </section>
  );
}
