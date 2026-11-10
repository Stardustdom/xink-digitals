"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Flash transformed how I shop online. One clean inbox for all receipts, zero spam, and instant tracking without having to log in to 20 different websites.",
    author: "Alice Caroline",
    role: "Ceo Websoft",
    avatar: "👩🏻",
  },
  {
    id: 2,
    quote:
      "The order tracking dashboard feels like magic. Everything I order across Amazon, Nike, and independent stores just shows up in real-time.",
    author: "Marcus Vance",
    role: "Product Lead at Aura",
    avatar: "👨🏽",
  },
  {
    id: 3,
    quote:
      "I used to get hundreds of promotional emails a week. Now my personal Gmail is completely spam-free, and I actually get rewards I care about.",
    author: "Elena Rostova",
    role: "Design Director",
    avatar: "👩🏼",
  },
  {
    id: 4,
    quote:
      "The best shopping utility since password managers. It pays for itself in time saved and peace of mind.",
    author: "David Chen",
    role: "Founder, Peak Labs",
    avatar: "👨🏻",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonialsData.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonialsData.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="relative bg-[#FBFBFE] text-[#1B143F] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden p-8 sm:p-16 border border-[#EAEAFA] shadow-[0_4px_30px_rgba(27,20,63,0.03)] my-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Carousel Arrow Controls */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] text-[#1B143F] tracking-tight">
            Testimonials
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white border border-[#E5E5EF] hover:border-[#1B143F] flex items-center justify-center text-[#1B143F] transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white border border-[#E5E5EF] hover:border-[#1B143F] flex items-center justify-center text-[#1B143F] transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Quote Cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[0, 1, 2].map((offset) => {
            const item = testimonialsData[(index + offset) % testimonialsData.length];
            return (
              <div
                key={offset}
                className="p-8 rounded-[2rem] bg-white border border-[#EDEDF5] shadow-sm flex flex-col justify-between min-h-[340px] hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Subtle quote icon */}
                  <div className="text-3xl text-[#E0DCF5] font-serif font-black mb-4">
                    ““
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B5573] leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-[#F2F2F8]">
                  <div className="w-10 h-10 rounded-full bg-[#F0EEFB] flex items-center justify-center text-lg">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1B143F]">{item.author}</p>
                    <p className="text-[10px] text-[#8C87A5]">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Progress Counter Bar */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs font-bold text-[#1B143F]">
            0{index + 1}/0{testimonialsData.length}
          </span>
          <div className="flex-1 h-1 bg-[#E8E8F2] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1B143F] transition-all duration-300 rounded-full"
              style={{
                width: `${((index + 1) / testimonialsData.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
