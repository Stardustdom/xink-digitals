import React from "react";

function Bubble() {
  return (
    <div className="w-[5.6cqw] h-[5.6cqw] shrink-0 rounded-full bg-white border border-[#DAD6F2] flex items-center justify-center box-border">
      <svg viewBox="16 12 48 56" className="w-[2.1cqw] h-[2.4cqw] block" aria-hidden="true">
        <polygon points="40,12 64,26 64,54 40,68 16,54 16,26" fill="#15103A" />
        <polygon points="46,22 32,42 40,42 34,58 50,36 41,36" fill="#fff" />
      </svg>
    </div>
  );
}

const ITEMS = 8;

/* Fills its (relative, overflow-hidden) parent: touching bubbles travelling top-right -> bottom-left */
export default function DiagonalMarquee() {
  const set = Array.from({ length: ITEMS }).map((_, i) => <Bubble key={i} />);
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg]">
        <div className="flex w-max animate-diagonal-marquee">
          <div className="flex">{set}</div>
          <div className="flex">{set}</div>
        </div>
      </div>
    </div>
  );
}
