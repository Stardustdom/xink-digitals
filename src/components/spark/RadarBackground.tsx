import React from "react";

export default function RadarBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="relative w-[1200px] h-[1200px] flex items-center justify-center">
        {/* Concentric subtle circular rings */}
        <div className="absolute w-[360px] h-[360px] rounded-full border border-[#1B143F]/[0.06]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-[#1B143F]/[0.05]" />
        <div className="absolute w-[860px] h-[860px] rounded-full border border-[#1B143F]/[0.04]" />
        <div className="absolute w-[1140px] h-[1140px] rounded-full border border-[#1B143F]/[0.03]" />
      </div>
    </div>
  );
}
