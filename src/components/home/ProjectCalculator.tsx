"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, Send } from "lucide-react";
import confetti from "canvas-confetti";

export default function ProjectCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Brand Identity & Strategy",
    "Next-Gen Web Design",
  ]);
  const [timeline, setTimeline] = useState<string>("3-4 Weeks");
  const [budgetTier, setBudgetTier] = useState<string>("$10k - $25k");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    { name: "Brand Identity & Strategy", color: "#754BFF" },
    { name: "Next-Gen Web Design", color: "#62D9F5" },
    { name: "Viral Social Media", color: "#FF6575" },
    { name: "Performance Paid Ads", color: "#FFC247" },
    { name: "3D Motion Graphics", color: "#FF8CD5" },
    { name: "SEO & Content Engine", color: "#C9F36D" },
  ];

  const toggleService = (svc: string) => {
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

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#754BFF", "#FF6575", "#FFC247", "#C9F36D", "#62D9F5", "#FF8CD5"],
    });

    setSubmitted(true);
  };

  return (
    <section className="relative py-28 bg-[#140F24] overflow-hidden" id="collaborate">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#754BFF]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#754BFF]/20 border border-[#754BFF]/40 text-[#C9BFFF] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC247]" />
            <span>07 / Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
            Design Your Dream Project —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC247] via-[#FF6575] to-[#754BFF]">
              Get Instant Estimate
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 mt-3">
            Select your desired capabilities below to see how we structure your launch.
          </p>
        </div>

        {/* Interactive Estimator Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1E1733] border border-white/15 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#C9F36D]/20 text-[#C9F36D] border border-[#C9F36D]/40 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-3">
                Inquiry Received! We&apos;re On It.
              </h3>
              <p className="text-base text-white/70 max-w-md mx-auto mb-8">
                Thanks {name || "partner"}! Our creative director will review your brief and reply to{" "}
                <span className="text-[#C9F36D] font-mono">{email}</span> within 24 hours with a custom project proposal.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                Configure Another Scope
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Capabilities selector */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#C9BFFF] font-bold mb-4">
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
                            ? "bg-[#2D214D] border-white/40 text-white shadow-md scale-102"
                            : "bg-[#181329] border-white/5 text-white/60 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: svc.color }}
                          />
                          {svc.name}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C9F36D]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Timeline & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#C9BFFF] font-bold mb-3">
                    2. Desired Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["2 Weeks (Sprint)", "3-4 Weeks", "Ongoing"].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition-all text-center ${
                          timeline === t
                            ? "bg-[#754BFF] border-[#754BFF] text-white"
                            : "bg-[#181329] border-white/5 text-white/60 hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#C9BFFF] font-bold mb-3">
                    3. Estimated Budget Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["$5k - $10k", "$10k - $25k", "$25k+"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudgetTier(b)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition-all text-center ${
                          budgetTier === b
                            ? "bg-[#FF6575] border-[#FF6575] text-white"
                            : "bg-[#181329] border-white/5 text-white/60 hover:text-white"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Contact Input Fields */}
              <div className="pt-4 border-t border-white/10">
                <label className="block text-xs uppercase tracking-widest text-[#C9BFFF] font-bold mb-4">
                  4. Where should we send your project proposal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name / Company"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#181329] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#754BFF]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="work@yourcompany.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#181329] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#754BFF]"
                    />
                  </div>
                </div>
              </div>

              {/* Scope Summary & Submit Button */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-xs text-white/50">Estimated Turnaround:</p>
                  <p className="text-sm font-bold text-[#C9F36D] font-mono">
                    {selectedServices.length} Selected Services • {timeline} Delivery
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C9F36D] hover:bg-[#b8e855] text-[#181329] font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#C9F36D]/20 hover:scale-105"
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
