import React from "react";
import Image from "next/image";
import Link from "next/link";
import RippleRings from "./RippleRings";
import { Apple, Play, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-[660px] lg:h-[92vh] max-h-[880px] bg-[#FBFBFE] text-[#15103A] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden border border-[#EAEAFA] shadow-[0_4px_30px_rgba(27,20,63,0.03)] flex flex-col justify-between p-6 sm:p-10 select-none">
      {/* ── 1. The Dynamic Concentric Ripple Rings (Zero static rings, all in ripple transition from middle) ── */}
      <RippleRings />

      {/* ── 2. Top Navigation Bar (Single, inside the card top) ── */}
      <header className="relative z-30 w-full flex items-center justify-between">
        {/* Left: Xink Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-black text-2xl text-[#15103A] font-mono leading-none tracking-tighter">
            ✕
          </span>
          <span className="font-extrabold text-2xl text-[#15103A] tracking-tight font-display">
            xink
          </span>
        </Link>

        {/* Center: Floating Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#EBEBF4] shadow-[0_2px_10px_rgba(27,20,63,0.04)]">
          {["Features", "Work", "Services", "About", "Contacts"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#544F6D] hover:text-[#15103A] hover:bg-[#F4F4FA] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right: Reserve id pill button */}
        <Link
          href="#contacts"
          className="px-6 py-2 rounded-full border border-[#15103A] text-[#15103A] hover:bg-[#15103A] hover:text-white text-xs font-bold transition-all shadow-xs"
        >
          Reserve id
        </Link>
      </header>

      {/* ── 3. Central Stage: Headline + Hand starting from the bottom + Floating Badges ── */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center">
        {/* ── Main Big Headline: Line 1 = 'Welcome', Line 2 = 'To Xink Digitals' ── */}
        {/* Desktop & Tablet View (sm:flex) with partial phone overlap */}
        <div className="absolute inset-x-0 top-[10%] sm:top-[12%] lg:top-[13%] pointer-events-none z-10 px-4 sm:px-8 lg:px-14 hidden sm:flex flex-col">
          {/* Line 1: 'Welcome' */}
          <div className="w-full flex justify-start pl-2 sm:pl-8 lg:pl-14">
            <h1 className="font-display font-semibold text-[clamp(2.5rem,5.5vw,5.5rem)] text-[#15103A] tracking-tight leading-none">
              Welcome
            </h1>
          </div>

          {/* Line 2: 'To Xink Digitals' with phone partially overlapping in the center */}
          <div className="w-full flex items-baseline justify-between mt-1 sm:mt-2 lg:mt-3">
            {/* Left part of line 2: 'To' slightly tucked behind the phone's left edge */}
            <div className="flex-1 flex justify-end">
              <span className="font-display font-semibold text-[clamp(1.9rem,3.9vw,4.5rem)] text-[#15103A] tracking-tight leading-none -mr-2 sm:-mr-4 lg:-mr-6">
                To
              </span>
            </div>

            {/* Middle Spacer: slightly narrower than the phone so the phone partially covers both edges */}
            <div className="w-[170px] sm:w-[210px] lg:w-[240px] shrink-0 pointer-events-none" />

            {/* Right part of line 2: 'Xink Digitals' starting just behind the phone's right edge */}
            <div className="flex-1 flex justify-start">
              <span className="font-display font-semibold text-[clamp(1.9rem,3.9vw,4.5rem)] text-[#15103A] tracking-tight leading-none whitespace-nowrap -ml-2 sm:-ml-4 lg:-ml-6">
                Xink Digitals
              </span>
            </div>
          </div>
        </div>

        {/* Mobile View (< sm) */}
        <div className="absolute inset-x-0 top-[10%] pointer-events-none z-10 px-4 sm:hidden flex flex-col items-center text-center">
          <h1 className="font-display font-semibold text-4xl text-[#15103A] tracking-tight leading-none mb-1">
            Welcome
          </h1>
          <span className="font-display font-semibold text-2xl text-[#15103A] tracking-tight leading-none">
            To Xink Digitals
          </span>
        </div>

        {/* Floating Left Squircle Badge */}
        <div className="absolute left-[6%] sm:left-[14%] lg:left-[19%] top-[42%] -translate-y-1/2 z-20 animate-float">
          <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-3xl bg-white border border-[#EDEDF5] p-2 shadow-[0_12px_28px_rgba(27,20,63,0.06)] flex items-center justify-center overflow-hidden">
            <Image
              src="/spark/floating_spark_badge.png"
              alt="Digital marketing feature badge"
              width={80}
              height={80}
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Center: Hand starting from the VERY BOTTOM of the card with real digital marketing screen */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
          <div className="relative w-[240px] sm:w-[280px] lg:w-[310px] drop-shadow-[0_20px_40px_rgba(21,16,58,0.2)]">
            <Image
              src="/spark/user_hand_digital_marketing.png"
              alt="Hand holding smartphone with real digital marketing performance analytics"
              width={310}
              height={500}
              className="w-full h-auto object-contain block align-bottom"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Floating Right Woman Avatar Squircle */}
        <div className="absolute right-[6%] sm:right-[14%] lg:right-[19%] top-[45%] -translate-y-1/2 z-20 animate-float-delayed">
          <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-3xl bg-white border border-[#EDEDF5] p-2 shadow-[0_12px_28px_rgba(27,20,63,0.06)] flex items-center justify-center overflow-hidden">
            <Image
              src="/spark/floating_woman_avatar.png"
              alt="Xink marketing client"
              width={75}
              height={75}
              className="w-full h-full object-cover rounded-2xl"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* ── 4. Bottom Elements: Left Tagline + Right Copy & Actions ── */}
      <footer className="relative z-30 w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-6 pt-4">
        {/* Bottom-Left Tagline */}
        <div className="max-w-xs text-center md:text-left">
          <p className="font-display font-semibold text-xl sm:text-2xl text-[#15103A] leading-snug">
            The ultimate marketing <br />
            hack is here.
          </p>
        </div>

        {/* Bottom-Right Description & Buttons */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-sm">
          <p className="text-xs sm:text-[13px] text-[#7E7896] leading-relaxed mb-3.5">
            Bye bye low ROAS. See you later unrewarding ads. <br className="hidden sm:block" />
            Adios tracking nightmares.
          </p>

          <div className="flex items-center gap-3">
            {/* App Store button with pulsing concentric purple ripple pill */}
            <div className="relative group">
              <span className="absolute -inset-1 rounded-full border border-[#7E4FF5]/40 animate-ping opacity-40 pointer-events-none" />
              <span className="absolute -inset-2.5 rounded-full border border-[#7E4FF5]/20 animate-ping opacity-25 pointer-events-none" />
              <a
                href="#download"
                className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#15103A] hover:bg-[#6A38EB] text-white text-xs font-bold transition-all shadow-md"
              >
                <Apple className="w-4 h-4 fill-current" />
                <span>App Store</span>
              </a>
            </div>

            {/* Google Play button */}
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#15103A] hover:bg-[#6A38EB] text-white text-xs font-bold transition-all shadow-md"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
