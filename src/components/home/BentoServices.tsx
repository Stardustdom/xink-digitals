import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { Palette, Laptop, Flame, TrendingUp, Sparkles, Compass, ArrowUpRight } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5" />,
  Laptop: <Laptop className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
};

export default function BentoServices() {
  return (
    <section className="bg-[#161617] text-white py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <h2 className="font-display font-semibold text-center text-3xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight max-w-3xl mx-auto">
          All the must haves of a{" "}
          <span className="inline-block bg-[#C9F36D] text-[#161617] px-3 sm:px-4 rounded-2xl">
            creative studio.
          </span>
        </h2>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Link
              key={s.id}
              href="/services"
              className={`group relative flex flex-col justify-between min-h-[320px] rounded-3xl bg-white/[0.06] border border-white/10 p-7 hover:bg-white/[0.1] transition-colors ${
                i % 3 === 1 ? "lg:translate-y-10" : i % 3 === 2 ? "lg:translate-y-4" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="w-12 h-12 rounded-full bg-white/10 text-[#C9F36D] flex items-center justify-center">
                  {icons[s.iconName]}
                </span>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#C9F36D] transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium leading-snug">{s.title}</h3>
                <div className="my-4 border-t border-dotted border-white/25" />
                <p className="text-sm text-white/60 leading-relaxed">{s.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
