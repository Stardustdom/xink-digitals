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

const categories = ["All", "Branding", "Social Media", "Web Design", "Motion", "Advertising"] as const;

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
    <div className="pt-32 pb-24 min-h-screen bg-[#181329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#754BFF]/20 border border-[#754BFF]/40 text-[#C9BFFF] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Portfolio Archive</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading">
            Our Work —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#754BFF] via-[#FF8CD5] to-[#FFC247]">
              Interactive Art Gallery
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/70 mt-4 leading-relaxed">
            Every case study represents an ambitious challenge solved through bold visual design, cultural relevance, and high-performance technology.
          </p>
        </div>

        {/* Filter, Search & Layout Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#221A38] border border-white/10 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? "bg-[#754BFF] text-white shadow-md shadow-[#754BFF]/30"
                    : "text-white/60 hover:text-white hover:bg-white/5"
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
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#181329] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#754BFF]"
              />
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#181329] border border-white/10">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-[#754BFF] text-white" : "text-white/40 hover:text-white"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-[#754BFF] text-white" : "text-white/40 hover:text-white"
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
          <div className="text-center py-24 rounded-3xl bg-[#221A38]/50 border border-white/5">
            <p className="text-lg font-bold text-white mb-2">No projects found</p>
            <p className="text-sm text-white/50">Try selecting a different filter or search term.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white"
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
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#221A38] hover:border-white/30 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div
                  className="p-8 min-h-[320px] flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${project.colors.primary}25 0%, #181329 100%)`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white backdrop-blur-md">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-white/50">{project.year}</span>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-white/50 mb-1">{project.client}</p>
                    <h3 className="text-2xl font-extrabold text-white font-heading group-hover:text-[#C9F36D] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/70 mt-2 line-clamp-2">{project.tagline}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="bg-black/30 p-2.5 rounded-lg">
                        <p className="text-[10px] text-white/50">{m.label}</p>
                        <p className="text-sm font-bold font-mono text-white">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-[#1B142F] border-t border-white/5 flex items-center justify-between text-xs font-bold text-white/70 group-hover:text-white">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C9F36D] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-[#221A38] border border-white/5 hover:border-white/20 transition-all hover:bg-[#281F42] gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${project.colors.primary}30`, color: project.colors.primary }}
                  >
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#C9BFFF] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs text-white/40 font-mono">• {project.client}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#C9F36D] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-white/5">
                  <div className="text-left md:text-right">
                    <p className="text-xs text-white/50">Primary Metric</p>
                    <p className="text-sm font-bold font-mono text-white">
                      {project.metrics[0].value} ({project.metrics[0].label})
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#754BFF] group-hover:text-white flex items-center justify-center transition-colors">
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
