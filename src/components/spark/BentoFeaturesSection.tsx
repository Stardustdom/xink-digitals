import React from "react";
import RadarBackground from "./RadarBackground";

export default function BentoFeaturesSection() {
  return (
    <section className="relative bg-[#FBFBFE] text-[#1B143F] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden p-6 sm:p-14 border border-[#EAEAFA] shadow-[0_4px_30px_rgba(27,20,63,0.03)] my-6">
      <RadarBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* 1. Rewards that are actually rewarding */}
          <div className="p-8 sm:p-10 rounded-[2.2rem] bg-white border border-[#EDEDF5] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1B143F] leading-tight mb-3">
                Rewards that <br />
                are actually rewarding.
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5573] leading-relaxed mb-6">
                Brands want to reward you. It&apos;s true. They want to reward you, so you shop more. Only on Flash, brands can give you rewards that actually feel rewarding. And not some stupid shit.
              </p>
            </div>

            {/* Visual: Brand pills & AirPods rewards card */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Brand Pills */}
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-bold text-xs">
                  a
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#FF6A3D] text-white flex items-center justify-center font-bold text-xs">
                  K
                </div>
                <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-bold text-xs">
                  ///
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#00A8E1] text-white flex items-center justify-center font-bold text-[10px]">
                  prime
                </div>
              </div>

              {/* Rewards Phone Card */}
              <div className="relative p-4 rounded-2xl bg-[#F8F8FC] border border-[#EBEBF4] w-48 text-center shadow-md">
                {/* Benefits badge */}
                <div className="absolute -top-3 -right-2 px-2.5 py-1 rounded-xl bg-[#6A38EB] text-white text-[9px] font-bold shadow-sm flex items-center gap-1">
                  <span>Benefits unlocked</span>
                  <span className="font-mono">136</span>
                  <span>🎁</span>
                </div>
                <p className="text-[10px] font-bold text-[#8C87A5] mb-2">Open Rewards</p>
                <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-4xl mb-2">
                  🎧
                </div>
                <button className="px-3 py-1 rounded-full bg-white border border-[#D5D3E3] text-[9px] font-bold text-[#1B143F]">
                  View All
                </button>
              </div>
            </div>
          </div>

          {/* 2. 8654357 unread emails */}
          <div className="p-8 sm:p-10 rounded-[2.2rem] bg-white border border-[#EDEDF5] shadow-sm flex flex-col justify-between items-center text-center">
            {/* Green @ Icon */}
            <div className="w-20 h-20 rounded-3xl bg-white border border-[#EDEDF5] shadow-lg flex items-center justify-center text-3xl font-black text-[#00C48C] mb-6">
              @
            </div>

            <div className="my-auto">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1B143F] leading-tight mb-4">
                8654357 unread emails. <br />
                No more.
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5573] leading-relaxed max-w-sm mx-auto">
                Because Flash gives you an Ai powered Flash.co email address, your email isn&apos;t filled with spammy emails from a million shopping apps. Turning your email into what it was meant to be, to begin with. Personal.
              </p>
            </div>
          </div>

          {/* 3. Data is like donuts */}
          <div className="p-8 sm:p-10 rounded-[2.2rem] bg-white border border-[#EDEDF5] shadow-sm flex flex-col justify-between items-center text-center">
            {/* Green @ Icon */}
            <div className="w-20 h-20 rounded-3xl bg-white border border-[#EDEDF5] shadow-lg flex items-center justify-center text-3xl font-black text-[#00C48C] mb-6">
              @
            </div>

            <div className="my-auto">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1B143F] leading-tight mb-4">
                Data is like donuts. <br />
                Not to be shared.
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5573] leading-relaxed max-w-sm mx-auto">
                Needless to say, none of the data you share with us is shared with anyone else. Because the way we see it, your shopping secrets should stay only with you.
              </p>
            </div>
          </div>

          {/* 4. Keep tabs on your shopping (with colorful bar chart) */}
          <div className="p-8 sm:p-10 rounded-[2.2rem] bg-white border border-[#EDEDF5] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1B143F] leading-tight mb-3">
                Keep tabs <br />
                on your shopping.
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5573] leading-relaxed mb-6">
                How much did you spend on food this month? What about beauty or travel? Flash keeps a cool little tab on all your shopping sprees, so you can see where your money&apos;s gone at the end of the month.
              </p>
            </div>

            {/* Interactive Colorful Chart Area */}
            <div className="pt-2 flex flex-col sm:flex-row items-end justify-between gap-6">
              {/* Orders Mini Widget */}
              <div className="p-3.5 rounded-2xl bg-[#F8F8FC] border border-[#EBEBF4] text-[10px] w-36 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#1B143F]">Orders</span>
                  <span className="w-6 h-6 rounded-lg bg-[#FFB800] text-white flex items-center justify-center text-[10px]">
                    🛍️
                  </span>
                </div>
                <p className="font-display font-black text-xl text-[#1B143F] mb-2 font-mono">100</p>
                <div className="space-y-1 text-[9px] text-[#8C87A5]">
                  <div className="flex justify-between">
                    <span>Shopping</span>
                    <span className="font-bold text-[#1B143F]">34</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travel</span>
                    <span className="font-bold text-[#1B143F]">10</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Utility</span>
                    <span className="font-bold text-[#1B143F]">10</span>
                  </div>
                </div>
              </div>

              {/* Vertical Bars Graphic */}
              <div className="relative flex items-end gap-2.5 h-36 flex-1 justify-end">
                {/* Floating pill over 1st bar */}
                <div className="absolute -top-6 left-0 px-2.5 py-1 rounded-xl bg-white border border-[#E5E5EF] shadow-md text-[9px] font-bold text-[#1B143F] flex items-center gap-1 z-10 whitespace-nowrap">
                  <span>🛍️</span>
                  <span>Shopping 34 Orders</span>
                </div>

                <div className="w-8 h-[65%] rounded-xl bg-[#FFB800] text-white text-[9px] font-bold flex items-start justify-center pt-1.5">
                  25%
                </div>
                <div className="w-8 h-[88%] rounded-xl bg-[#FF5A5F] text-white text-[9px] font-bold flex items-start justify-center pt-1.5">
                  38%
                </div>
                <div className="w-8 h-[40%] rounded-xl bg-[#2D7FF9] text-white text-[9px] font-bold flex items-start justify-center pt-1.5">
                  12%
                </div>
                <div className="w-8 h-[75%] rounded-xl bg-[#6A38EB] text-white text-[9px] font-bold flex items-start justify-center pt-1.5">
                  25%
                </div>
                <div className="w-8 h-[55%] rounded-xl bg-[#FF7A00] text-white text-[9px] font-bold flex items-start justify-center pt-1.5">
                  17%
                </div>
                <div className="w-8 h-[80%] rounded-xl bg-[#00C48C] text-white text-[9px] font-bold flex items-start justify-center pt-1.5">
                  33%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
