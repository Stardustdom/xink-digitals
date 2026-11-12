import React from "react";

const SWEEP_START = 0.35; // seconds after the heading starts playing
const SWEEP_DURATION = 0.3; // seconds for the line to cross "powerful results."
const SWEEP_TEXT = "powerful results.";

export default function BenefitsHeading() {
  const total = SWEEP_TEXT.length;
  let index = 0;

  return (
    <h2
      aria-label="One smart strategy. Many powerful results."
      className="font-display font-extrabold text-[clamp(2rem,6vw,4.75rem)] text-[#1B143F] tracking-tight leading-[1.05] mb-4"
    >
      <span className="bh-fade block" aria-hidden="true">
        One smart strategy.
      </span>
      <span className="block sm:whitespace-nowrap" aria-hidden="true">
        <span className="bh-fade inline-block">Many&nbsp;</span>
        <span className="relative inline-block text-[#9C99B2]">
          {SWEEP_TEXT.split(/(\s+)/).map((word, wi) => {
            if (/^\s+$/.test(word)) {
              index += word.length;
              return " ";
            }
            return (
              <span key={wi} className="inline-block whitespace-nowrap">
                {word.split("").map((ch, ci) => {
                  const delay = SWEEP_START + (index++ / total) * SWEEP_DURATION;
                  return (
                    <span
                      key={ci}
                      className="bh-letter inline-block"
                      style={{ "--d": `${delay}s` } as React.CSSProperties}
                    >
                      {ch}
                    </span>
                  );
                })}
              </span>
            );
          })}
          {/* Violet line sweeping left to right across the text */}
          <span
            className="bh-line"
            style={
              {
                "--ls": `${SWEEP_START}s`,
                "--ld": `${SWEEP_DURATION}s`,
              } as React.CSSProperties
            }
          />
        </span>
      </span>
    </h2>
  );
}
