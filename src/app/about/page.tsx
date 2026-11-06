import React from "react";
import Link from "next/link";
import { teamMembers, awards } from "@/data/team";
import { Sparkles, Trophy, Heart, ArrowUpRight, Flame, Shield, Compass, Zap } from "lucide-react";

export const metadata = {
  title: "About Us — Xink Digitals",
  description:
    "We are a digital creative playground. Discover our philosophy, meet the leadership team, and see how we build category-defining brands.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Maximalism with Purpose",
      desc: "Color, motion, and expressive typography should never be decoration for its own sake. Every visual choice must amplify brand positioning and solve customer friction.",
      icon: Flame,
      color: "#FF6575",
    },
    {
      title: "120 FPS Engineering Rigor",
      desc: "A gorgeous website that drops frames or lags is a broken website. We obsess over Lighthouse scores, Core Web Vitals, and hardware-accelerated shaders.",
      icon: Zap,
      color: "#62D9F5",
    },
    {
      title: "Radical Directness",
      desc: "No corporate fluff, no vanity decks. We tell founders what actually works, cut through bureaucratic nonsense, and execute with relentless momentum.",
      icon: Shield,
      color: "#C9F36D",
    },
    {
      title: "Cultural Relevance",
      desc: "Marketing doesn't live in a boardroom; it lives in comment sections, group chats, and viral sound charts. We design for internet culture as it happens in real-time.",
      icon: Compass,
      color: "#754BFF",
    },
  ];

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#181329] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF8CD5]/20 border border-[#FF8CD5]/40 text-[#FF8CD5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>The Xink Story</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-tight mb-8">
            We built a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8CD5] via-[#FF6575] to-[#FFC247]">
              Creative Playground
            </span>{" "}
            for the boldest brands on Earth.
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 font-normal leading-relaxed">
            Founded on the conviction that corporate sameness is the fastest way to get ignored. We combine high-voltage visual identity, kinetic motion, and performance engineering.
          </p>
        </div>

        {/* Agency Philosophy Section */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#221A38] border border-white/10 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#754BFF]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading mb-6">
              Why Xink Digitals exists
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-white/70 leading-relaxed">
              <p>
                In 2024, our founders looked across the agency landscape and saw a sea of beige. Agencies had become cautious factories producing identical minimalist websites, generic slide decks, and sterile ad campaigns that generated zero cultural spark.
              </p>
              <p>
                We started Xink Digitals to be the antidote. A studio where designers, creative coders, and viral strategists collaborate directly with visionary founders. No account managers playing telephone. No 50-page strategy decks that sit unopened.
              </p>
              <p className="font-semibold text-white">
                Just pure creative electricity, rapid iteration, and digital experiences that leave your competitors wondering how you did it.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Our Operating Values
            </h2>
            <p className="text-sm text-white/60 mt-2">
              The four principles that govern every single brief, code commit, and design sprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#221A38] border border-white/10 hover:border-white/25 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${v.color}25`, color: v.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">{v.title}</h3>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Profiles */}
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9F36D] font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>The Minds Behind Xink</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Leadership Team
              </h2>
            </div>
            <p className="text-sm text-white/60 max-w-md">
              A tight-knit collective of veteran creatives, WebGL hackers, and performance architects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-3xl bg-[#221A38] border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black font-heading text-[#181329] shadow-lg flex-shrink-0"
                    style={{ backgroundColor: member.favoriteColor }}
                  >
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">{member.name}</h3>
                    <p className="text-xs text-[#C9BFFF]">{member.role}</p>
                  </div>
                </div>

                <p className="text-xs text-white/70 leading-relaxed mb-4">{member.bio}</p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-white/40">Superpower:</span>
                  <span className="font-semibold text-white/90 text-right">{member.superpower}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Shelf */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1E1733] border border-white/10 text-center">
          <Trophy className="w-10 h-10 text-[#FFC247] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-3">
            Industry Recognition
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto mb-8">
            Honored by international design and technology juries for pushing the boundaries of web craft.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {awards.map((award, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <p className="text-xs font-mono text-[#C9F36D] font-bold">{award.year}</p>
                <p className="text-xs font-bold text-white mt-1">{award.org}</p>
                <p className="text-[10px] text-white/50 mt-0.5">{award.award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
