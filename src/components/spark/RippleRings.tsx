"use client";

import React from "react";

export default function RippleRings() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 
        Ripple origin: dead-center directly behind the phone.
        Anchor placed at 50% horizontal, 50% vertical.
      */}
      <div className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none">
        {/* Subtle static concentric reference rings */}
        <div className="absolute w-[240px] h-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#15103A]/[0.06]" />
        <div className="absolute w-[460px] h-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#15103A]/[0.05]" />
        <div className="absolute w-[720px] h-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#15103A]/[0.04]" />
        <div className="absolute w-[1040px] h-[1040px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#15103A]/[0.032]" />
        <div className="absolute w-[1400px] h-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#15103A]/[0.022]" />

        {/* Dynamic expanding ripple rings: strictly centered, expand outward */}
        <div className="absolute w-[1400px] h-[1400px] rounded-full border border-[#6A38EB]/35 animate-ring-expand-1" />
        <div className="absolute w-[1400px] h-[1400px] rounded-full border border-[#6A38EB]/35 animate-ring-expand-2" />
        <div className="absolute w-[1400px] h-[1400px] rounded-full border border-[#6A38EB]/35 animate-ring-expand-3" />
        <div className="absolute w-[1400px] h-[1400px] rounded-full border border-[#6A38EB]/35 animate-ring-expand-4" />
      </div>
    </div>
  );
}
