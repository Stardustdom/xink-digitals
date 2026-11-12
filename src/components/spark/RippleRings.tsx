"use client";

import React from "react";

export default function RippleRings() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* 
        Ripple origin: dead-center directly behind the phone.
        ALL static rings have been removed. Every ring is in an active ripple transition.
      */}
      <div className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none">
        {/* Dynamic ripple transition rings: start from middle and expand outward with increasing radius */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[150cqw] h-[150cqw] rounded-full border border-[#3B1FA8]/70 animate-ring-ripple-1"
            style={{ animationDelay: `${-i * 1.8}s` }}
          />
        ))}
      </div>
    </div>
  );
}
