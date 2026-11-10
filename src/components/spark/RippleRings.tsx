"use client";

import React from "react";

export default function RippleRings() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 
        Ripple origin: dead-center directly behind the phone.
        ALL static rings have been removed. Every ring is in an active ripple transition.
      */}
      <div className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none">
        {/* Dynamic ripple transition rings: start from middle and expand outward with increasing radius */}
        <div className="absolute w-[1500px] h-[1500px] rounded-full border border-[#6A38EB]/35 animate-ring-ripple-1" />
        <div className="absolute w-[1500px] h-[1500px] rounded-full border border-[#6A38EB]/35 animate-ring-ripple-2" />
        <div className="absolute w-[1500px] h-[1500px] rounded-full border border-[#6A38EB]/35 animate-ring-ripple-3" />
        <div className="absolute w-[1500px] h-[1500px] rounded-full border border-[#6A38EB]/35 animate-ring-ripple-4" />
        <div className="absolute w-[1500px] h-[1500px] rounded-full border border-[#6A38EB]/35 animate-ring-ripple-5" />
        <div className="absolute w-[1500px] h-[1500px] rounded-full border border-[#6A38EB]/35 animate-ring-ripple-6" />
      </div>
    </div>
  );
}
