"use client";

import React, { useState } from "react";
import {
  Mail,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useSound } from "@/components/SoundManager";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$10k - $25k",
    timeline: "3-4 Weeks",
    service: "Brand Identity & Strategy",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { playSuccess } = useSound();

  const servicesList = [
    "Brand Identity & Strategy",
    "Next-Gen Web Design & Dev",
    "Viral Social Media & Content",
    "Performance Marketing & Ads",
    "3D Motion Graphics",
    "Full-Scale Creative Transformation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccess();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#754BFF", "#FF6575", "#FFC247", "#C9F36D", "#62D9F5", "#FF8CD5"],
    });
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#0F0A1C] text-white">
      {/* Background glow */}
      <div className="fixed top-1/4 left-1/4 w-[600px] h-[600px] bg-[#754BFF]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#754BFF]/10 border border-[#754BFF]/25 text-[#754BFF] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Project</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-heading text-white">
            Let&apos;s Build Something —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#754BFF] via-[#FF6575] to-[#FFC247]">
              Unforgettable
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/55 mt-4 leading-relaxed">
            Have a project, rebrand, or wild idea? Fill out the brief below and our creative director will be in touch within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#2D9E64]/15 text-[#2D9E64] border border-[#2D9E64]/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-white font-heading mb-3">
                  Inquiry Sent Successfully!
                </h2>
                <p className="text-base text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>! We&apos;ve received your brief and sent an automated confirmation to{" "}
                  <span className="text-[#C9F36D] font-bold font-mono">{formData.email}</span>. A principal designer will review your vision and reply promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#754BFF] text-white text-xs font-bold border border-white/15 transition-colors"
                >
                  Submit Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#754BFF]"
                  >
                    {servicesList.map((s) => (
                      <option key={s} value={s} className="bg-[#181329] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Alex Morgan"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#754BFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#754BFF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-2">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Innovations"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#754BFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#754BFF]"
                    >
                      <option value="$5k - $10k" className="bg-[#181329]">$5k - $10k (Sprint)</option>
                      <option value="$10k - $25k" className="bg-[#181329]">$10k - $25k (Standard)</option>
                      <option value="$25k - $50k" className="bg-[#181329]">$25k - $50k (Comprehensive)</option>
                      <option value="$50k+" className="bg-[#181329]">$50k+ (Enterprise Disruption)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#C9F36D] font-bold mb-2">
                    Tell us about the project &amp; your goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What are you building? What is the challenge you need to solve?"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#754BFF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-[#754BFF] hover:bg-[#683cee] text-white font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#754BFF]/30 hover:scale-102"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Studios (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Info */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white font-heading mb-6">
                Direct Channels
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6575]/15 flex items-center justify-center text-[#FF6575]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-medium">New Business</p>
                    <a
                      href="mailto:hello@xinkdigitals.com"
                      className="font-bold text-white hover:text-[#C9F36D] transition-colors"
                    >
                      hello@xinkdigitals.com
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0099C6]/15 flex items-center justify-center text-[#62D9F5]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-medium">Response Guarantee</p>
                    <p className="font-bold text-white">Under 24 hours</p>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2D9E64]/15 flex items-center justify-center text-[#2D9E64]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-medium">Book Instant Intro Call</p>
                    <a
                      href="https://cal.com"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[#C9F36D] hover:underline"
                    >
                      Pick 20-min slot on Calendar ↗
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Global Studio Hubs */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white font-heading mb-4">
                Studio Locations
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/5 border border-white/8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">New York / Brooklyn</p>
                    <p className="text-xs text-white/40">DUMBO Creative District</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#62D9F5]">EST (UTC-5)</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">London</p>
                    <p className="text-xs text-white/40">Shoreditch High St</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#FF8CD5]">GMT (UTC+0)</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">Tokyo</p>
                    <p className="text-xs text-white/40">Shibuya Stream</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#2D9E64]">JST (UTC+9)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
