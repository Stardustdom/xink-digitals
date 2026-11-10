"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, Palette, Megaphone, Monitor, Clapperboard, Sparkles, Filter } from "lucide-react";
import { useSound } from "@/components/SoundManager";

const categories = ["All", "Branding", "Social Media", "Web Design", "Motion", "Advertising"] as const;

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { playPop } = useSound();

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
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#754BFF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FF6575]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6575]/10 border border-[#FF6575]/25 text-[#FF6575] text-xs font-bold uppercase tracking-wider mb-4">
              <span>02 / Flagship Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FFF9F1] font-display font-bold">
              Selected Work —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#754BFF] via-[#FF6575] to-[#FF9E2C]">
                The Star of Xink
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#FFF9F1]/70 max-w-xl mt-3 leading-relaxed">
              We design digital playgrounds and launch viral cultural moments. Every project is engineered for asymmetric impact.
            </p>
          </div>

          <Link
            href="/work"
            onClick={() => playPop()}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#181329] hover:text-white border border-[#181329]/15 text-[#181329] font-bold text-sm shadow-sm transition-all self-start md:self-auto hover:scale-105"
          >
            <span>View All Case Studies ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 text-[#754BFF] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
          </Link>
        </div>

        {/* Blueprint Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-[#FFF9F1]/60 uppercase tracking-widest font-bold mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </div>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playPop();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#754BFF] text-white shadow-md shadow-[#754BFF]/30 scale-105"
                    : "bg-white text-[#181329]/75 hover:text-[#181329] hover:bg-white border border-[#181329]/10 shadow-xs"
                }`}
              >
                {cat !== "All" && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: solid colour tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 || index === 3;
            const dark = ["#754BFF", "#FF6575"].includes(project.colors.primary.toUpperCase());
            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                onClick={() => playPop()}
                style={{ backgroundColor: project.colors.primary }}
                className={`group relative rounded-[2rem] overflow-hidden min-h-[320px] sm:min-h-[400px] p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  dark ? "text-[#FFF9F1]" : "text-[#181329]"
                } ${isWide ? "lg:col-span-2" : ""}`}
              >
                <div
                  className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full opacity-90 transition-transform duration-700 group-hover:scale-150"
                  style={{ backgroundColor: project.colors.secondary }}
                />
                <div className="relative z-10 flex items-start justify-between">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#181329] text-[#FFF9F1]">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                  <span className="w-11 h-11 rounded-full bg-[#FFF9F1] text-[#181329] flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">
                    {project.client} • {project.year}
                  </p>
                  <h3 className="font-display font-bold leading-[1] tracking-tight text-3xl sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base mt-3 max-w-md line-clamp-2 font-medium">
                    {project.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
