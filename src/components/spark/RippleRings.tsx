"use client";

import React from "react";

export default function RippleRings() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      {/* Ripple center origin: placed directly behind the phone */}
      <div className="relative w-0 h-0 flex items-center justify-center -translate-x-2 sm:-translate-x-6 translate-y-6 sm:translate-y-12">
        {/* Subtle static reference concentric circles */}
        <div className="absolute w-[220px] h-[220px] rounded-full border border-[#15103A]/[0.06]" />
        <div className="absolute w-[440px] h-[440px] rounded-full border border-[#15103A]/[0.05]" />
        <div className="absolute w-[720px] h-[720px] rounded-full border border-[#15103A]/[0.04]" />
        <div className="absolute w-[1040px] h-[1040px] rounded-full border border-[#15103A]/[0.035]" />
        <div className="absolute w-[1380px] h-[1380px] rounded-full border border-[#15103A]/[0.025]" />
        <div className="absolute w-[1720px] h-[1720px] rounded-full border border-[#15103A]/[0.018]" />

        {/* Dynamic ripple transition rings: start from middle and expand outward */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6A38EB]/30 animate-ring-expand-1 pointer-events-none" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6A38EB]/30 animate-ring-expand-2 pointer-events-none" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6A38EB]/30 animate-ring-expand-3 pointer-events-none" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6A38EB]/30 animate-ring-expand-4 pointer-events-none" />
      </div>
    </div>
  );
}
