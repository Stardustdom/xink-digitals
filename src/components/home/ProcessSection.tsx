"use client";

import React, { useState } from "react";
import { Lightbulb, PenTool, Code2, Rocket, ArrowRight, Check } from "lucide-react";
import { useSound } from "@/components/SoundManager";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const { playPop } = useSound();

  const steps = [
    {
      id: "01",
      name: "Brainstorm & Disrupt",
      tagline: "Unearthing the unconventional angle",
      icon: Lightbulb,
      color: "#754BFF",
      desc: "We study your competitors only to do the exact opposite. We explore cultural subcultures, extract what makes your product genuinely remarkable, and map out bold artistic concepts.",
      details: [
        "Category sameness audit & contrarian positioning",
        "Sensory moodboarding & sonic direction",
        "Creative narrative architecture",
        "Audience psychological trigger mapping",
      ],
      output: "Brand Playbook & Creative Territory Deck",
    },
    {
      id: "02",
      name: "Design & Prototype",
      tagline: "Crafting tactile, kinetic magic",
      icon: PenTool,
      color: "#FF6575",
      desc: "We translate strategy into tangible visual fireworks. From expressive typography pairings and explosive color tokens to interactive 3D prototypes in Figma and Spline.",
      details: [
        "High-fidelity responsive UI/UX system",
        "3D product modeling & kinetic motion tests",
        "Micro-interaction choreography",
        "Design tokens & component specifications",
      ],
      output: "Interactive Design System & Clickable Prototypes",
    },
    {
      id: "03",
      name: "Build & Animate",
      tagline: "Flawless engineering at 120 FPS",
      icon: Code2,
      color: "#2D9E64",
      desc: "We engineer Next.js websites that feel like video games while loading in under 1.2s. Accessible, search-optimized, and instrumented with real-time conversion tracking.",
      details: [
        "Custom Next.js & TypeScript full-stack build",
        "Sub-second Core Web Vitals optimization",
        "WebGL/Canvas interactive sound & shader layers",
        "Headless CMS, analytics & CRM integration",
      ],
      output: "Production Codebase & Performance Audit (Score 98+)",
    },
    {
      id: "04",
      name: "Launch & Scale",
      tagline: "Igniting cultural frenzy",
      icon: Rocket,
      color: "#0099C6",
      desc: "We don't quietly push a button—we orchestrate an event. Pairing organic viral seeding with high-ROAS paid media and rapid continuous A/B testing.",
      details: [
        "Coordinated social media & drop countdowns",
        "High-velocity ad creative testing cycles",
        "Heatmap & user journey conversion optimization",
        "Ongoing growth sprints & creative refreshes",
      ],
      output: "Category-Disrupting Launch & Growth Engine",
    },
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section className="relative py-28 bg-[#0F0A1C] border-y border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0099C6]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D9E64]/15 border border-[#2D9E64]/30 text-[#2D9E64] text-xs font-bold uppercase tracking-wider mb-4">
            <span>05 / Behind the Creativity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading">
            Our 4-Step Creative Engine —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9E64] via-[#0099C6] to-[#754BFF]">
              From Chaos to Icon
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/55 mt-3">
            How we take raw ambition and forge it into unforgettable digital experiences that scale.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((s, idx) => {
            const isCurrent = activeStep === idx;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => { playPop(); setActiveStep(idx); }}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? "bg-white/10 border-white/25 shadow-lg"
                    : "bg-white/4 border-white/8 hover:border-white/20 text-white/60 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: isCurrent ? `${s.color}25` : "rgba(255,255,255,0.05)",
                      color: isCurrent ? s.color : "rgba(255,255,255,0.4)",
                    }}
                  >
                    STEP {s.id}
                  </span>
                  <Icon className="w-5 h-5" style={{ color: isCurrent ? s.color : "rgba(255,255,255,0.4)" }} />
                </div>
                <p className="font-bold text-sm text-white">{s.name}</p>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-white/5 border border-white/10 overflow-hidden">
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ backgroundColor: current.color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${current.color}20`,
                    color: current.color,
                    border: `1px solid ${current.color}30`,
                  }}
                >
                  <StepIcon className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/40">
                  Phase {current.id} / 04
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white font-heading mb-2">
                {current.name}
              </h3>
              <p className="text-base font-bold mb-6" style={{ color: current.color }}>
                {current.tagline}
              </p>

              <p className="text-base text-white/60 leading-relaxed mb-8">
                {current.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {current.details.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white/70 font-medium">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${current.color}20`, color: current.color }}
                    >
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Core Phase Deliverable
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    {current.output}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30" />
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/8">
                <p className="text-xs font-mono text-white/40 uppercase tracking-wider font-bold mb-4">
                  Studio Workflow Sandbox
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/8 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Sprint Velocity</span>
                    <span className="text-xs font-mono text-[#2D9E64] font-bold">120 FPS Fluidity</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/8 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Client Involvement</span>
                    <span className="text-xs font-mono text-[#FFC247] font-bold">Zero Fluff Sprints</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/8 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Performance Guarantee</span>
                    <span className="text-xs font-mono text-[#0099C6] font-bold">Core Web Vitals ≤1.2s</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs text-white/40">
                  <span>Collaborative Platform</span>
                  <span className="font-mono text-white/70 font-bold">Figma • Next.js • Linear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
