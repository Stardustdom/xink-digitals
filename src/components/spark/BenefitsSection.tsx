import React from "react";
import RadarBackground from "./RadarBackground";

export default function BenefitsSection() {
  return (
    <section id="features" className="relative bg-[#FBFBFE] text-[#1B143F] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden p-6 sm:p-14 border border-[#EAEAFA] shadow-[0_4px_30px_rgba(27,20,63,0.03)] my-6">
      <RadarBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,4.75rem)] text-[#1B143F] tracking-tight leading-[1.05] mb-4">
            <span className="block">One simple hack.</span>
            <span className="block text-[#9C99B2]">Many wowser benefits.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5B5573] max-w-xl mx-auto leading-relaxed">
            One email address (you@flash.co) One Ai magic dashboard for all your shopping. Live tracking, across multiple shopping platforms. Rewards and benefits that are built around you. Hack much?
          </p>
        </div>

        {/* Two Bento Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Vertical Stat Card (4 cols) */}
          <div className="lg:col-span-3 p-8 rounded-[2.2rem] bg-white border border-[#EDEDF5] shadow-sm flex flex-col justify-between items-center text-center min-h-[300px]">
            <p className="text-xl sm:text-2xl font-bold text-[#1B143F]">Get Up to</p>

            <div className="my-auto py-6">
              <span className="font-display font-black text-6xl sm:text-7xl text-[#6A38EB] tracking-tight block">
                120<sup className="text-4xl -top-6">+</sup>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#8C87A5] font-semibold">Online shops</p>
          </div>

          {/* Right Wide Tracking Card (9 cols) */}
          <div className="lg:col-span-9 p-8 sm:p-10 rounded-[2.2rem] bg-white border border-[#EDEDF5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
            {/* Card Text */}
            <div className="max-w-md">
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1B143F] leading-tight mb-4">
                <span className="block">Shop anywhere.</span>
                <span className="block text-[#9C99B2]">Track here.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5573] leading-relaxed">
                Once you sign up on Flash, and use your Flash.co email address, it doesn&apos;t matter which platform you shop on. You can track everything here. And import earlier orders too, by using your existing gmail address.
              </p>
            </div>

            {/* Right Visual: Phone mockup with floating sneaker & delivery cards */}
            <div className="relative w-full max-w-[320px] flex items-center justify-center">
              {/* Backing Phone Screen Outline */}
              <div className="w-56 h-72 rounded-[2.2rem] bg-[#F4F4FA] border border-[#E5E5EF] p-4 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-[#1B143F]">Amiteshwar</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#FFB800] text-[8px] font-bold">100</span>
                </div>
                <div className="space-y-2">
                  <div className="h-10 rounded-xl bg-white p-2 text-[9px] font-bold text-[#1B143F] flex items-center justify-between">
                    <span>Adidas</span>
                    <span className="font-mono">₹1,721</span>
                  </div>
                  <div className="h-10 rounded-xl bg-white p-2 text-[9px] font-bold text-[#1B143F] flex items-center justify-between">
                    <span>Make My Trip</span>
                    <span className="font-mono">₹1,721</span>
                  </div>
                </div>
              </div>

              {/* Floating Adidas Sneaker Card */}
              <div className="absolute -left-4 top-1/3 -translate-y-1/2 p-3 rounded-2xl bg-white border border-[#EDEDF5] shadow-xl animate-float">
                <div className="w-24 h-16 bg-[#F9F9FC] rounded-xl flex items-center justify-center text-3xl">
                  👟
                </div>
              </div>

              {/* Floating Purple "Out For Delivery" pill card */}
              <div className="absolute -right-2 top-10 p-3 rounded-2xl bg-gradient-to-r from-[#6A38EB] to-[#7E4FF5] text-white shadow-xl animate-float-delayed">
                <p className="text-[9px] font-bold uppercase tracking-wider mb-1">Out For Delivery</p>
                <div className="flex items-center gap-1.5 text-xs">
                  <span>📦</span>
                  <span>🍾</span>
                  <span>🧴</span>
                  <span>🥤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
