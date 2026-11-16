"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import CaseStudyModal from "@/components/CaseStudyModal";
import type { Project } from "@/data/projects";
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
  X,
  BarChart3,
  Play,
} from "lucide-react";
import { useSound } from "@/components/SoundManager";

const categories = ["All", "Branding", "Social Media", "Web Design", "Motion", "Advertising"] as const;

const evidence = [
  { n: 1, platform: "LinkedIn", title: "Single post, 3,669 impressions", note: "Organic reach on one thought-leadership post." },
  { n: 2, platform: "LinkedIn", title: "94% out-of-network discovery", note: "729 impressions and 556 members reached." },
  { n: 3, platform: "LinkedIn", title: "Impressions climbing week on week", note: "Cumulative impressions, 19-25 Aug." },
  { n: 4, platform: "LinkedIn", title: "+404% impressions vs prior 7 days", note: "1,876 impressions, 6-12 Aug." },
  { n: 5, platform: "LinkedIn", title: "93% of reach from new audiences", note: "1,189 impressions, 818 members reached." },
  { n: 6, platform: "LinkedIn", title: "+253% impressions vs prior 7 days", note: "1,189 cumulative impressions, 5-11 Aug." },
  { n: 7, platform: "LinkedIn", title: "92% out-of-network reach", note: "967 impressions, 670 members reached." },
  { n: 8, platform: "LinkedIn", title: "+187% impressions vs prior 7 days", note: "967 cumulative impressions, 5-11 Aug." },
  { n: 9, platform: "Facebook", title: "54,649 views, +454%", note: "28 Feb - 20 Mar, 70% from non-followers." },
  { n: 10, platform: "Facebook", title: "95,116 views, +133%", note: "1 Sep - 2 Oct, 72% from non-followers." },
  { n: 11, platform: "Facebook", title: "85,079 views, +397%", note: "20 Feb - 5 May, 3-second views up 1,590%." },
  { n: 12, platform: "LinkedIn", title: "+2,624% impressions in 7 days", note: "1,117 impressions, 623 members reached." },
];

const creativeSamples = [
  { type: "image", n: 1, w: 1028, h: 1028, title: "Hiring poster - Social Media Operations Executive", tag: "Recruitment creative" },
  { type: "image", n: 2, w: 1028, h: 1028, title: "Hiring poster - Executive Assistant", tag: "Recruitment creative" },
  { type: "image", n: 3, w: 1026, h: 576, title: "Digital marketing agency banner", tag: "Agency promotion" },
  { type: "image", n: 4, w: 1068, h: 716, title: "Free website audit ad - variant A", tag: "Lead generation" },
  { type: "image", n: 5, w: 1200, h: 834, title: "Free website audit ad - variant B", tag: "Lead generation" },
  { type: "image", n: 6, w: 1068, h: 716, title: "Free website audit ad - variant C", tag: "Lead generation" },
  { type: "image", n: 7, w: 1080, h: 1350, title: "Hospitality brand social post", tag: "Social media" },
  { type: "image", n: 8, w: 1026, h: 576, title: "Digital marketing agency in Kolkata banner", tag: "Agency promotion" },
  { type: "video", n: 1, title: "Video sample 01", tag: "Video" },
  { type: "video", n: 2, title: "Video sample 02", tag: "Video" },
] as const;

function Watermark({ position = "bottom-right" }: { position?: "bottom-right" | "top-right" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none absolute ${position === "top-right" ? "top-3" : "bottom-3"} right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-[2px] text-white/90 text-[10px] font-black uppercase tracking-[0.18em]`}
    >
      <Image src="/logo-icon.png" alt="" width={14} height={14} className="w-3.5 h-3.5" />
      Xink Digitals
    </span>
  );
}

function Popup({ label, onClose, children }: { label: string; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden overscroll-contain"
      onClick={onClose}
    >
      <div
        className="relative max-w-[min(92vw,960px)] max-h-[90vh] overflow-hidden rounded-2xl bg-white border border-[#181329]/15 shadow-[0_24px_80px_rgba(24,19,41,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close preview"
          onClick={onClose}
          className="absolute top-2.5 left-2.5 z-10 w-9 h-9 rounded-full bg-white text-[#181329] shadow-md flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default function WorkClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { playPop } = useSound();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [sampleBox, setSampleBox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % evidence.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + evidence.length) % evidence.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    if (sampleBox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSampleBox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sampleBox]);

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

  const tiltMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--tilt-x", `${((0.5 - y) * 6).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${((x - 0.5) * 8).toFixed(2)}deg`);
  };
  const tiltLeave = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--tilt-x", "0deg");
    e.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

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
        <div className="work-hero page-intro mb-14">
          <span className="work-orb work-orb-a" aria-hidden="true" />
          <span className="work-orb work-orb-b" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#754BFF]/10 border border-[#754BFF]/25 text-[#754BFF] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="work-live-dot" aria-hidden="true" /><span>Portfolio Archive</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-heading leading-[1.02]">
              Our Work —{" "}
              <span className="work-shimmer-text">Interactive Art Gallery</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A4E6B] mt-5 leading-relaxed">
              Every case study represents an ambitious challenge solved through bold visual design, cultural relevance, and high-performance technology.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#work-evidence" className="px-4 py-2 rounded-full bg-[#754BFF] text-white text-xs font-bold">Work Evidence</a>
              <a href="#sample-work" className="px-4 py-2 rounded-full bg-white border border-[#181329]/15 text-[#181329] text-xs font-bold">Sample Work</a>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {[[String(projects.length).padStart(2, "0"), "Case studies"], [String(categories.length - 1).padStart(2, "0"), "Disciplines"], ["100%", "Bespoke"]].map(([n, l]) => (
                <div key={l} className="work-stat"><strong>{n}</strong><span>{l}</span></div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 1: Work Evidence */}
        <section id="work-evidence" className="scroll-mt-28 mb-24" aria-labelledby="work-evidence-title">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#754BFF]/10 border border-[#754BFF]/25 text-[#754BFF] text-xs font-bold uppercase tracking-wider mb-4">
              <BarChart3 className="w-3.5 h-3.5" /> Section 01
            </div>
            <h2 id="work-evidence-title" className="text-3xl sm:text-5xl font-black tracking-tight font-heading">Work Evidence</h2>
            <p className="text-sm sm:text-base text-[#5A4E6B] mt-3 leading-relaxed">
              Real analytics from live accounts we have grown. Client names and company details are blurred to protect confidentiality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidence.map((e, i) => (
              <button
                type="button"
                key={e.n}
                onClick={() => { playPop(); setLightbox(i); }}
                className="group text-left rounded-2xl overflow-hidden bg-white border border-[#181329]/10 shadow-sm hover:shadow-lg hover:border-[#754BFF]/40 transition-all"
                aria-label={`Open ${e.platform} analytics: ${e.title}`}
              >
                <div className="relative aspect-[16/10] bg-[#FAF5ED] overflow-hidden">
                  <Image
                    src={`/work-evidence/evidence-${String(e.n).padStart(2, "0")}.jpg`}
                    alt={`${e.platform} analytics screenshot: ${e.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#754BFF]">{e.platform}</span>
                  <h3 className="text-sm font-black text-[#181329] mt-1">{e.title}</h3>
                  <p className="text-xs text-[#5A4E6B] mt-1">{e.note}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Section 2: Sample Work */}
        <section id="sample-work" className="scroll-mt-28" aria-labelledby="sample-work-title">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#754BFF]/10 border border-[#754BFF]/25 text-[#754BFF] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Section 02
            </div>
            <h2 id="sample-work-title" className="text-3xl sm:text-5xl font-black tracking-tight font-heading">Sample Work</h2>
            <p className="text-sm sm:text-base text-[#5A4E6B] mt-3 leading-relaxed">
              Concept and showcase projects across branding, social, web, motion and advertising.
            </p>
          </div>

          <h3 className="text-xl font-black font-heading mb-5">Creative Samples</h3>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mb-16">
            {creativeSamples.map((c, i) => (
              <figure key={`${c.type}-${c.n}`} className="mb-6 break-inside-avoid rounded-2xl overflow-hidden bg-white border border-[#181329]/10 shadow-sm">
                {c.type === "image" ? (
                  <button
                    type="button"
                    onClick={() => { playPop(); setSampleBox(i); }}
                    className="relative block w-full group"
                    aria-label={`Open ${c.title}`}
                  >
                    <Image
                      src={`/work-samples/sample-${String(c.n).padStart(2, "0")}.jpg`}
                      alt={`${c.title} by Xink Digitals`}
                      width={c.w}
                      height={c.h}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <Watermark />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => { playPop(); setSampleBox(i); }}
                    className="relative block w-full bg-black group"
                    aria-label={`Play ${c.title}`}
                  >
                    <video
                      src={`/work-samples/sample-video-${String(c.n).padStart(2, "0")}.mp4#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto max-h-[560px] pointer-events-none"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <span className="w-14 h-14 rounded-full bg-white/90 text-[#754BFF] flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                      </span>
                    </span>
                    <Watermark position="top-right" />
                  </button>
                )}
                <figcaption className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#754BFF]">{c.tag}</span>
                  <p className="text-sm font-black text-[#181329] mt-1">{c.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <h3 className="text-xl font-black font-heading mb-5">Case Studies</h3>
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
            {filteredProjects.map((project, index) => (
              <button
                type="button"
                key={project.slug}
                data-reveal
                aria-haspopup="dialog"
                style={{ "--plan-color": project.colors.primary } as React.CSSProperties}
                onPointerMove={tiltMove}
                onPointerLeave={tiltLeave}
                onClick={() => { playPop(); setActiveProject(project); }}
                className="work-card plan-card group text-left relative rounded-3xl overflow-hidden border border-[#181329]/10 bg-white shadow-sm flex flex-col justify-between"
              >
                <span className="work-card-bar" aria-hidden="true" />
                <span className="work-ghost" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div
                  className="relative p-8 min-h-[320px] flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${project.colors.primary}15 0%, #FFFFFF00 100%)`,
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
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <button
                type="button"
                key={project.slug}
                data-reveal
                aria-haspopup="dialog"
                onClick={() => { playPop(); setActiveProject(project); }}
                className="group w-full text-left flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white border border-[#181329]/10 hover:border-[#754BFF]/40 shadow-xs hover:shadow-md transition-all gap-4"
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
              </button>
            ))}
          </div>
        )}
        </section>
      </div>
      {sampleBox !== null && (
        <Popup label="Sample work preview" onClose={() => setSampleBox(null)}>
          <div className="relative">
            {creativeSamples[sampleBox].type === "image" ? (
              <Image
                src={`/work-samples/sample-${String(creativeSamples[sampleBox].n).padStart(2, "0")}.jpg`}
                alt={`${creativeSamples[sampleBox].title} by Xink Digitals`}
                width={creativeSamples[sampleBox].w}
                height={creativeSamples[sampleBox].h}
                className="block w-auto h-auto max-h-[80vh] max-w-full"
              />
            ) : (
              <video
                src={`/work-samples/sample-video-${String(creativeSamples[sampleBox].n).padStart(2, "0")}.mp4`}
                controls
                autoPlay
                playsInline
                className="block w-auto h-auto max-h-[80vh] max-w-full bg-black"
              />
            )}
            <Watermark position={creativeSamples[sampleBox].type === "video" ? "top-right" : "bottom-right"} />
          </div>
        </Popup>
      )}
      {lightbox !== null && (
        <Popup label="Work evidence preview" onClose={() => setLightbox(null)}>
          <Image
            src={`/work-evidence/evidence-${String(evidence[lightbox].n).padStart(2, "0")}.jpg`}
            alt={`${evidence[lightbox].platform} analytics screenshot: ${evidence[lightbox].title}`}
            width={1400}
            height={700}
            className="block w-auto h-auto max-h-[70vh] max-w-full"
          />
          <p className="px-4 py-3 text-sm font-bold text-[#181329]">
            {evidence[lightbox].title} - <span className="font-normal text-[#5A4E6B]">{evidence[lightbox].note}</span>
          </p>
        </Popup>
      )}
      {activeProject && <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} onNext={setActiveProject} />}
    </div>
  );
}
