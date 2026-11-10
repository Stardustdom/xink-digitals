import React from "react";

interface RippleBadgeProps {
  text: string;
  rotate?: string;
}

export default function RippleBadge({ text, rotate = "-rotate-6" }: RippleBadgeProps) {
  return (
    <span className={`relative inline-flex items-center justify-center ${rotate} select-none`}>
      {/* Concentric glowing ripple rings */}
      <span className="absolute -inset-4 sm:-inset-6 pointer-events-none flex items-center justify-center">
        <span className="absolute w-28 h-20 sm:w-36 sm:h-24 rounded-full border border-[#7E4FF5]/30 animate-ripple-1" />
        <span className="absolute w-28 h-20 sm:w-36 sm:h-24 rounded-full border border-[#7E4FF5]/25 animate-ripple-2" />
        <span className="absolute w-28 h-20 sm:w-36 sm:h-24 rounded-full border border-[#7E4FF5]/20 animate-ripple-3" />
      </span>

      {/* Pill Button */}
      <span className="relative z-10 px-5 sm:px-7 py-2 sm:py-3 rounded-2xl bg-gradient-to-r from-[#6A38EB] to-[#7E4FF5] text-white font-extrabold text-2xl sm:text-4xl shadow-xl shadow-[#6A38EB]/35">
        {text}
      </span>
    </span>
  );
}
