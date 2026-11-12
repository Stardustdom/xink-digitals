"use client";

import React, { useEffect, useRef, useState } from "react";

const LETTERS = ["H", "o", "w", " ", "i", "t"];

export default function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  // Measure where the line starts (left of "How it") and where it must stop (centre of the ripple/pill)
  useEffect(() => {
    const measure = () => {
      const row = rowRef.current, text = textRef.current, pill = pillRef.current;
      if (!row || !text || !pill) return;
      const r = row.getBoundingClientRect(), t = text.getBoundingClientRect(), p = pill.getBoundingClientRect();
      row.style.setProperty("--lx", `${t.left - r.left}px`);
      row.style.setProperty("--ly", `${t.top - r.top + t.height * 0.54}px`);
      row.style.setProperty("--lw", `${p.left + p.width / 2 - t.left}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Replays every time the section scrolls into view; resets once fully out of view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.4) setPlay(true);
        else if (e.intersectionRatio === 0) setPlay(false);
      },
      { threshold: [0, 0.4] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      data-play={play ? "true" : "false"}
      className="relative min-h-svh bg-white text-[#1B143F] overflow-hidden flex items-center justify-center p-8 sm:p-16 hiw"
    >
      <div ref={rowRef} className="relative z-10 flex items-center justify-center pl-[4.5rem] sm:pl-28">
        {/* Tilted white squircle with orange lightning hexagon, tucked at the lower-left of "How" */}
        <div className="absolute z-0 left-[1.1rem] sm:left-[2.9rem] top-1/2 translate-y-[0.4rem]">
          {/* Shadow on the "floor": flat, below the box, shrinks/fades as the box rises */}
          <div className="floor-shadow absolute left-1/2 top-full mt-[1.6rem] sm:mt-[2rem] w-[4rem] sm:w-[4.9rem] h-[0.9rem] sm:h-[1.1rem] rounded-[50%] bg-[#1B143F]/20 blur-[9px]" aria-hidden="true" />
          <div className="hiw-icon">
          <div className="animate-float">
          <div className="w-[4.6rem] h-[4.6rem] sm:w-[5.6rem] sm:h-[5.6rem] rounded-[1.4rem] bg-white border border-[#1B143F] flex items-center justify-center">
            <svg viewBox="0 0 80 80" className="w-[58%] h-[58%]" aria-hidden="true">
              <defs>
                <linearGradient id="hiw-orange" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#FFA03A" />
                  <stop offset="1" stopColor="#FF6A2B" />
                </linearGradient>
              </defs>
              <polygon
                points="40,6 68,22 68,58 40,74 12,58 12,22"
                fill="url(#hiw-orange)"
                stroke="url(#hiw-orange)"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <polygon points="46,18 29,43 40,43 33,63 52,36 41,36" fill="#fff" />
            </svg>
          </div>
          </div>
          </div>
        </div>

        {/* "How it": letters fade in one by one as the violet arrow sweeps across */}
        <span ref={textRef} className="relative z-10 inline-block font-display font-normal text-[clamp(3rem,8vw,6.5rem)] text-[#1B143F] tracking-tight leading-none">
          {LETTERS.map((ch, i) => (
            <span
              key={i}
              className="hiw-letter inline-block"
              style={{ "--d": `${0.36 + (i / LETTERS.length) * 0.3}s` } as React.CSSProperties}
            >
              {ch}
            </span>
          ))}
        </span>

        {/* Violet line: starts at "How it", ends in the middle of the ripple, then vanishes */}
        <span className="hiw-arrow" aria-hidden="true" />

        {/* Big tilted violet pill with soft glowing rings */}
        <span ref={pillRef} className="relative ml-[0.35em] inline-flex items-center justify-center select-none text-[clamp(3rem,8vw,6.5rem)]">
          <span className="-rotate-[11deg] inline-flex items-center justify-center relative">
          {/* Tight ripple hugging the pill only */}
          <span className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <span className="works-ripple" />
            <span className="works-ripple works-ripple-2" />
            <span className="works-ripple works-ripple-3" />
          </span>
          <span className="hiw-pill-box relative z-10 px-[0.5em] py-[0.18em] rounded-[0.38em] bg-gradient-to-br from-[#8A5CF8] to-[#5C37E8] text-white font-display font-normal leading-none tracking-tight text-[0.92em] shadow-[0_0.3em_0.9em_rgba(106,56,235,0.35)]">
            works
          </span>
          </span>
        </span>
      </div>
    </section>
  );
}
