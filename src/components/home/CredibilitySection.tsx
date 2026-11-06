"use client";

import React, { useState } from "react";
import { testimonials, clientLogos, awards } from "@/data/team";
import { Star, Trophy, Quote, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CredibilitySection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeTestimonial];

  return (
    <section className="relative py-28 bg-[#181329] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF8CD5]/15 border border-[#FF8CD5]/30 text-[#FF8CD5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>06 / Credibility &amp; Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
            Trusted by Disruptors —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8CD5] via-[#FF6575] to-[#FFC247]">
              Proven Results
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 mt-3">
            Real founders, real brand leaders, and real verified campaign outcomes.
          </p>
        </div>

        {/* Client Logos Ticker */}
        <div className="border-y border-white/10 py-8 mb-20 overflow-hidden select-none">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-white/40 mb-6 font-semibold">
            Brands we have collaborated with &amp; empowered
          </p>
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {clientLogos.concat(clientLogos).map((client, idx) => (
              <span
                key={idx}
                className="text-lg sm:text-2xl font-black font-heading tracking-widest text-white/40 hover:text-white transition-colors cursor-default"
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#241C38] via-[#1E1733] to-[#2B1B42] border border-white/15 overflow-hidden shadow-2xl mb-20">
          <Quote className="absolute right-8 bottom-6 w-36 h-36 text-white/[0.03] pointer-events-none" />

          <div className="max-w-3xl">
            <div className="flex items-center gap-1.5 text-[#FFC247] mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-3 text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#C9F36D]/20 text-[#C9F36D] border border-[#C9F36D]/30">
                {current.highlight}
              </span>
            </div>

            <p className="text-xl sm:text-3xl font-medium text-white/95 leading-relaxed mb-8 font-heading">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-base sm:text-lg font-bold text-white font-heading">
                  {current.author}
                </p>
                <p className="text-xs sm:text-sm text-white/60">
                  {current.role} •{" "}
                  <span className="text-[#C9BFFF] font-semibold">{current.company}</span>
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-white/50 px-2">
                  0{activeTestimonial + 1} / 0{testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Cabinet */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="w-5 h-5 text-[#FFC247]" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-heading">
              Awards &amp; Industry Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#221A38] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-mono text-white/40">{award.year} • {award.org}</p>
                  <p className="text-sm font-bold text-white mt-1">{award.award}</p>
                  <p className="text-xs text-[#C9BFFF] mt-0.5">{award.project}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#FFC247]">
                  ★
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
