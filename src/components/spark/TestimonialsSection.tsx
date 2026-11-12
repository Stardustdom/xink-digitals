"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [rotation, setRotation] = useState(0);
  const [moving, setMoving] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMoving(false), 1000);
    return () => clearTimeout(timer);
  }, [rotation]);
  const pointerStart = useRef<number | null>(null);
  if (!testimonials.length) return null;
  const reelSlots = Math.ceil(12 / testimonials.length) * testimonials.length;
  const slotAngle = 360 / reelSlots;
  const radiusRatio = 1 / (2 * Math.tan(Math.PI / reelSlots)) + 0.3;
  const index = ((rotation % testimonials.length) + testimonials.length) % testimonials.length;
  const frontSlot = ((rotation % reelSlots) + reelSlots) % reelSlots;
  const move = (direction: number) => { setMoving(true); setRotation(value => value + direction); };

  return <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-[#FBFBFE] text-[#1B143F] px-6 py-20 sm:px-12 lg:px-20 xl:px-28 xl:py-28 overflow-hidden">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-6">
        <div><p className="text-xs uppercase tracking-[0.2em] font-bold text-[#6A38EB] mb-4">Client voices</p><h2 id="testimonials-heading" className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight">Testimonials</h2></div>
        <div className="flex gap-3">
          <button type="button" aria-label="Previous testimonial" onClick={() => move(-1)} className="w-12 h-12 rounded-full border border-[#E5E5EF] bg-white flex items-center justify-center hover:border-[#6A38EB] hover:text-[#6A38EB] transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <button type="button" aria-label="Next testimonial" onClick={() => move(1)} className="w-12 h-12 rounded-full border border-[#E5E5EF] bg-white flex items-center justify-center hover:border-[#6A38EB] hover:text-[#6A38EB] transition-colors"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="testimonial-reel testimonial-cards" data-rotating={moving} style={{ "--reel-radius": `calc(var(--reel-width) * ${radiusRatio})` } as CSSProperties} role="region" aria-roledescription="carousel" aria-label="Client testimonials. Use the arrow keys or swipe to rotate the reel." tabIndex={0}
        onKeyDown={event => {
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        }}
        onPointerDown={event => {
          if (event.pointerType === "mouse") return;
          pointerStart.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={event => {
          if (pointerStart.current === null) return;
          const distance = event.clientX - pointerStart.current;
          pointerStart.current = null;
          if (Math.abs(distance) > 40) move(distance < 0 ? 1 : -1);
        }}
        onPointerCancel={() => { pointerStart.current = null; }}
      >
        <div className="testimonial-reel-shadow" aria-hidden="true" />
        <div className="testimonial-reel-drum" onTransitionEnd={event => { if (event.target === event.currentTarget && event.propertyName === "transform") setMoving(false); }} style={{ "--reel-turn": `${-rotation * slotAngle}deg` } as CSSProperties}>
          {Array.from({ length: reelSlots }, (_, slot) => {
            const item = testimonials[slot % testimonials.length];
            const front = slot === frontSlot;
            const distance = Math.abs(slot - frontSlot);
            const hoverable = Math.min(distance, reelSlots - distance) <= 1;
            return <div key={slot} className="testimonial-reel-panel" data-front={front} data-hoverable={hoverable} aria-hidden={!hoverable} style={{ "--panel-angle": `${slot * slotAngle}deg` } as CSSProperties}>
              <figure className="testimonial-card rounded-[2rem] bg-white border border-[#EDEDF5] p-7 shadow-[0_6px_28px_rgba(27,20,63,0.04)] flex flex-col justify-between h-full">
                <div><Quote aria-hidden="true" className="w-9 h-9 text-[#CBBDF3] mb-6" /><blockquote className="text-base leading-relaxed text-[#5B5573]">{item.quote}</blockquote></div>
                <figcaption className="flex items-center gap-3 border-t border-[#F2F2F8] mt-7 pt-5"><span className="w-12 h-12 rounded-full bg-[#F0EEFB] text-[#6A38EB] text-sm font-bold flex items-center justify-center shrink-0">{item.initials}</span><div><p className="font-bold text-sm">{item.author}</p><p className="text-sm text-[#655F7D] mt-1">{item.role}</p></div></figcaption>
              </figure>
            </div>;
          })}
        </div>
      </div>
      <div className="flex items-center gap-6 mt-4"><span className="text-sm font-mono tabular-nums" aria-live="polite" aria-atomic="true" aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}>{String(index + 1).padStart(2, "0")}/{String(testimonials.length).padStart(2, "0")}</span><div className="h-1 flex-1 rounded-full bg-[#E8E8F2] overflow-hidden" aria-hidden="true"><div className="h-full bg-[#6A38EB] transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${((index + 1) / testimonials.length) * 100}%` }} /></div></div>
    </div>
  </section>;
}
