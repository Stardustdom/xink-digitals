"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, Palette, Megaphone, Monitor, Clapperboard, Sparkles, Filter } from "lucide-react";

const categories = ["All", "Branding", "Social Media", "Web Design", "Motion", "Advertising"] as const;

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === selectedCategory ||
            p.secondaryCategories.includes(selectedCategory)
        );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Branding":
        return <Palette className="w-4 h-4" />;
      case "Social Media":
        return <Megaphone className="w-4 h-4" />;
      case "Web Design":
        return <Monitor className="w-4 h-4" />;
      case "Motion":
        return <Clapperboard className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative py-28 bg-[#181329] overflow-hidden" id="work">
      {/* Glow shapes */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#754BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FF6575]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6575]/15 border border-[#FF6575]/30 text-[#FF8CD5] text-xs font-bold uppercase tracking-wider mb-4">
              <span>02 / Flagship Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
              Selected Work —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8CD5] via-[#FF6575] to-[#FFC247]">
                The Star of Xink
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mt-3">
              We design digital playgrounds and launch viral cultural moments. Every project is engineered for asymmetric impact.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all self-start md:self-auto"
          >
            <span>View All Case Studies ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 text-[#C9F36D] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Blueprint Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-white/40 uppercase tracking-widest font-semibold mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </div>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#754BFF] text-white shadow-lg shadow-[#754BFF]/30 scale-105"
                    : "bg-[#241C38] text-white/70 hover:text-white hover:bg-[#2F244A] border border-white/5"
                }`}
              >
                {cat !== "All" && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid (Asymmetric & Interactive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout logic: 1st and 4th card span 2 columns on large screens
            const isWide = index === 0 || index === 3;

            return (
              <div
                key={project.slug}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-[#221A38] transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-2xl flex flex-col justify-between ${
                  isWide ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Visual Banner Preview */}
                <div
                  className="relative p-8 sm:p-10 min-h-[300px] sm:min-h-[360px] flex flex-col justify-between overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.colors.primary}22 0%, #181329 100%)`,
                  }}
                >
                  {/* Subtle animated background orb */}
                  <div
                    className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full blur-3xl opacity-40 transition-transform duration-700 group-hover:scale-125"
                    style={{ backgroundColor: project.colors.primary }}
                  />

                  {/* Top bar with category and external arrow */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/15">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-white/50">{project.year}</span>
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#181329] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Center Visual Art / Typography Motif */}
                  <div className="my-8 relative z-10">
                    <p className="text-xs font-mono text-white/60 uppercase tracking-widest mb-2">
                      Client: {project.client}
                    </p>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#C9F36D] transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 mt-2 max-w-lg line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Verified Impact Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 relative z-10">
                    {project.metrics.slice(0, isWide ? 3 : 2).map((m, idx) => (
                      <div key={idx} className="bg-black/25 backdrop-blur-sm p-3 rounded-xl border border-white/5">
                        <p className="text-xs text-white/50">{m.label}</p>
                        <p className="text-lg font-bold font-mono text-white flex items-center gap-1">
                          {m.value}
                          {m.change && (
                            <span className="text-[10px] text-[#C9F36D] font-normal hidden sm:inline">
                              ↑
                            </span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 py-4 bg-[#1B142F] border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.slice(0, 2).map((del, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-white/60"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-xs font-bold text-[#C9F36D] hover:underline flex items-center gap-1"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
