"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Send } from "lucide-react";
import confetti from "canvas-confetti";
import { useSound } from "@/components/SoundManager";

export default function ProjectCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Brand Identity & Strategy",
    "Next-Gen Web Design",
  ]);
  const [timeline,   setTimeline]   = useState<string>("3-4 Weeks");
  const [budgetTier, setBudgetTier] = useState<string>("$10k - $25k");
  const [email,      setEmail]      = useState("");
  const [name,       setName]       = useState("");
  const [submitted,  setSubmitted]  = useState(false);
  const { playPop, playSuccess } = useSound();

  const availableServices = [
    { name: "Brand Identity & Strategy", color: "#754BFF" },
    { name: "Next-Gen Web Design",        color: "#0099C6" },
    { name: "Viral Social Media",          color: "#FF6575" },
    { name: "Performance Paid Ads",        color: "#FFC247" },
    { name: "3D Motion Graphics",          color: "#FF8CD5" },
    { name: "SEO & Content Engine",        color: "#2D9E64" },
  ];

  const toggleService = (svc: string) => {
    playPop();
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    playSuccess();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#754BFF", "#FF6575", "#FFC247", "#C9F36D", "#62D9F5", "#FF8CD5"],
    });
    setSubmitted(true);
  };

  return (
    <section className="relative py-28 bg-[#0F0A1C] overflow-hidden" id="collaborate">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#754BFF]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#754BFF]/10 border border-[#754BFF]/25 text-[#754BFF] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC247]" />
            <span>07 / Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
            Design Your Dream Project —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6575] via-[#754BFF] to-[#FFC247]">
              Get Instant Estimate
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/55 mt-3">
            Select your desired capabilities below to see how we structure your launch.
          </p>
        </div>

        {/* Interactive Estimator Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#2D9E64]/15 text-[#2D9E64] border border-[#2D9E64]/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mb-3">
                Inquiry Received! We&apos;re On It.
              </h3>
              <p className="text-base text-white/60 max-w-md mx-auto mb-8">
                Thanks {name || "partner"}! Our creative director will review your brief and reply to{" "}
                <span className="text-[#C9F36D] font-bold font-mono">{email}</span> within 24 hours with a custom project proposal.
              </p>
              <button
                onClick={() => { playPop(); setSubmitted(false); }}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#754BFF] text-white text-xs font-bold border border-white/15 transition-colors"
              >
                Configure Another Scope
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Capabilities selector */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-4">
                  1. Which capabilities do you need? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {availableServices.map((svc) => {
                    const isSelected = selectedServices.includes(svc.name);
                    return (
                      <button
                        type="button"
                        key={svc.name}
                        onClick={() => toggleService(svc.name)}
                        className={`p-3.5 rounded-2xl border text-left text-xs font-bold transition-all duration-200 flex items-center justify-between ${
                          isSelected
                            ? "bg-white/10 border-white/30 text-white shadow-sm"
                            : "bg-white/4 border-white/8 text-white/55 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: svc.color }} />
                          {svc.name}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4" style={{ color: svc.color }} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Timeline & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-3">
                    2. Desired Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["2 Weeks (Sprint)", "3-4 Weeks", "Ongoing"].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => { playPop(); setTimeline(t); }}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                          timeline === t
                            ? "bg-[#754BFF] border-[#754BFF] text-white"
                            : "bg-white/4 border-white/8 text-white/55 hover:text-white hover:border-white/20"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-3">
                    3. Estimated Budget Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["$5k - $10k", "$10k - $25k", "$25k+"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => { playPop(); setBudgetTier(b); }}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                          budgetTier === b
                            ? "bg-[#FF6575] border-[#FF6575] text-white"
                            : "bg-white/4 border-white/8 text-white/55 hover:text-white hover:border-white/20"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Contact Inputs */}
              <div className="pt-4 border-t border-white/8">
                <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-4">
                  4. Where should we send your project proposal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name / Company"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#754BFF]"
                  />
                  <input
                    type="email"
                    placeholder="work@yourcompany.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#754BFF]"
                  />
                </div>
              </div>

              {/* Scope Summary & Submit */}
              <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-xs text-white/40 font-medium">Estimated Turnaround:</p>
                  <p className="text-sm font-bold text-[#C9F36D] font-mono">
                    {selectedServices.length} Selected Services • {timeline} Delivery
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#754BFF] hover:bg-[#683cee] text-white font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#754BFF]/30 hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Brief</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
