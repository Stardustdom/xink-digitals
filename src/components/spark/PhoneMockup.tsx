import React from "react";
import { Bell, ChevronRight, Package, Sparkles } from "lucide-react";

export default function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[280px] sm:w-[310px] bg-black p-2.5 rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(27,20,63,0.35)] border-[3px] border-[#312B4C] ${className}`}
    >
      {/* Dynamic island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

      {/* Screen container */}
      <div className="relative bg-[#F9F9FC] text-[#1B143F] rounded-[2.4rem] overflow-hidden pt-8 pb-5 px-3.5 select-none font-sans text-xs">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EBEBF2]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7E4FF5] to-[#FF8CD5] flex items-center justify-center text-white text-xs font-bold overflow-hidden">
              <span className="text-[10px]">Amit</span>
            </div>
            <div>
              <p className="text-[10px] text-[#8C87A5] font-medium leading-none">Hello!</p>
              <p className="text-xs font-bold text-[#1B143F]">Amiteshwar</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFB800] text-[#553800] text-[10px] font-extrabold shadow-sm">
              <span>🪙</span>
              <span>100</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-white border border-[#E5E5EE] flex items-center justify-center text-[#8C87A5]">
              <Bell className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* In Focus Badge */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[11px] font-bold text-[#1B143F]">In Focus</span>
          <span className="w-4 h-4 rounded-full bg-[#6A38EB] text-white text-[9px] font-bold flex items-center justify-center">
            1
          </span>
        </div>

        {/* Focus Order Card (Adidas) */}
        <div className="p-3 rounded-2xl bg-white border border-[#EDEDF5] shadow-sm mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-black text-white flex items-center justify-center font-bold text-[9px]">
              ///
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold text-[#1B143F] leading-tight">Adidas</p>
              <p className="text-[9px] text-[#8C87A5]">Ordered on 3 Nov</p>
            </div>
          </div>

          <p className="text-[10px] text-[#4A4560] mb-2 font-medium">
            Your adidas order has been received
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-[#F0F0F6]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00C48C] animate-pulse" />
              <span className="text-[9px] font-bold text-[#00C48C]">Order Confirmed</span>
            </div>
            <span className="text-[10px] font-bold text-[#1B143F] font-mono">₹1,721</span>
          </div>
          <p className="text-[8px] text-[#8C87A5] mt-1">Arrives 17 - 27 Sep</p>
        </div>

        {/* All Orders List */}
        <p className="text-[11px] font-bold text-[#1B143F] mb-1.5">All Orders</p>
        <div className="space-y-1.5 mb-3">
          {[
            { name: "Make My Trip", desc: "Delivered · Dec · The Westin...", price: "₹1,721", color: "#FF5A5F" },
            { name: "Hotels.com", desc: "Delivered · Hotels · Tokyo", price: "₹1,721", color: "#D32F2F" },
            { name: "Expedia", desc: "Confirmed · Flight & Hotel", price: "₹1,721", color: "#FFB800" },
            { name: "Third Wave Coffee", desc: "Delivered · 1900 hrs", price: "₹1,721", color: "#00C48C" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2 rounded-xl bg-white/70 border border-[#F0F0F6] text-[10px]"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <div className="truncate">
                  <p className="font-bold text-[#1B143F] truncate leading-tight">{item.name}</p>
                  <p className="text-[8px] text-[#8C87A5] truncate">{item.desc}</p>
                </div>
              </div>
              <span className="font-mono font-bold text-[#1B143F] flex-shrink-0 ml-2">{item.price}</span>
            </div>
          ))}
        </div>

        {/* View Order History Button */}
        <button className="w-full py-2.5 rounded-xl border border-[#D5D3E3] text-[#1B143F] font-bold text-[10px] hover:bg-white transition-colors text-center">
          View Order History
        </button>
      </div>
    </div>
  );
}
