"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  ArrowUpRight,
  Palette,
  Megaphone,
  Monitor,
  Clapperboard,
  Sparkles,
  LayoutGrid,
  List,
  Search,
} from "lucide-react";
import { useSound } from "@/components/SoundManager";

const categories = ["All", "Branding", "Social Media", "Web Design", "Motion", "Advertising"] as const;

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { playPop } = useSound();

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" ||
      p.category === selectedCategory ||
      p.secondaryCategories.includes(selectedCategory);

    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Branding":
        return <Palette className="w-3.5 h-3.5" />;
      case "Social Media":
        return <Megaphone className="w-3.5 h-3.5" />;
      case "Web Design":
        return <Monitor className="w-3.5 h-3.5" />;
      case "Motion":
        return <Clapperboard className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FFF9F1] text-[#181329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#754BFF]/10 border border-[#754BFF]/25 text-[#754BFF] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Portfolio Archive</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-heading">
            Our Work —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#754BFF] via-[#FF6575] to-[#D97706]">
              Interactive Art Gallery
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#5A4E6B] mt-4 leading-relaxed">
            Every case study represents an ambitious challenge solved through bold visual design, cultural relevance, and high-performance technology.
          </p>
        </div>

        {/* Filter, Search & Layout Controls (Light Theme) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#181329]/10 shadow-sm mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playPop();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-[#754BFF] text-white shadow-md shadow-[#754BFF]/30"
                    : "text-[#181329]/70 hover:text-[#181329] hover:bg-[#181329]/5"
                }`}
              >
                {cat !== "All" && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Search bar & View toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-56">
              <Search className="w-4 h-4 text-[#181329]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#FFF9F1] border border-[#181329]/15 text-xs text-[#181329] placeholder-[#181329]/40 focus:outline-none focus:border-[#754BFF]"
              />
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#FFF9F1] border border-[#181329]/10">
              <button
                onClick={() => {
                  playPop();
                  setViewMode("grid");
                }}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-[#754BFF] text-white shadow-2xs" : "text-[#181329]/50 hover:text-[#181329]"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  playPop();
                  setViewMode("list");
                }}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-[#754BFF] text-white shadow-2xs" : "text-[#181329]/50 hover:text-[#181329]"
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project View Rendering */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 rounded-3xl bg-white border border-[#181329]/10 shadow-xs">
            <p className="text-lg font-bold text-[#181329] mb-2">No projects found</p>
            <p className="text-sm text-[#5A4E6B]">Try selecting a different filter or search term.</p>
            <button
              onClick={() => {
                playPop();
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#181329] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                onClick={() => playPop()}
                className="group relative rounded-3xl overflow-hidden border border-[#181329]/10 bg-white hover:border-[#754BFF]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div
                  className="p-8 min-h-[320px] flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${project.colors.primary}15 0%, #FFFFFF 100%)`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#181329] shadow-xs border border-[#181329]/10">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#6C5F7D]">{project.year}</span>
                  </div>

                  <div>
                    <p className="text-xs font-mono font-bold text-[#754BFF] mb-1">{project.client}</p>
                    <h3 className="text-2xl font-black text-[#181329] font-heading group-hover:text-[#754BFF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#5A4E6B] mt-2 line-clamp-2 leading-relaxed">{project.tagline}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#181329]/10 empty:hidden">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="bg-[#FFF9F1] p-2.5 rounded-lg border border-[#181329]/8">
                        <p className="text-[10px] text-[#6C5F7D] font-medium">{m.label}</p>
                        <p className="text-sm font-black font-mono text-[#181329]">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-[#FAF5ED] border-t border-[#181329]/5 flex items-center justify-between text-xs font-bold text-[#181329]/75 group-hover:text-[#754BFF]">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#754BFF] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                onClick={() => playPop()}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white border border-[#181329]/10 hover:border-[#754BFF]/40 shadow-xs hover:shadow-md transition-all gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs"
                    style={{ backgroundColor: `${project.colors.primary}15`, color: project.colors.primary }}
                  >
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#754BFF] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs text-[#6C5F7D] font-mono">• {project.client}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#181329] font-heading group-hover:text-[#754BFF] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-[#181329]/5">
                  <div className="text-left md:text-right">
                    <p className="text-xs text-[#6C5F7D]">{project.category}</p>
                    <p className="text-sm font-black font-mono text-[#181329]">
                      {project.metrics[0]
                        ? `${project.metrics[0].value} (${project.metrics[0].label})`
                        : `${project.year} • Sample project`}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FFF9F1] group-hover:bg-[#754BFF] group-hover:text-white flex items-center justify-center transition-colors border border-[#181329]/10">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
