import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Quote,
  Sparkles,
  Calendar,
  Layers,
  Award,
} from "lucide-react";
import type { Metadata } from "next";

export const instant = false;

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found — Xink Digitals" };

  return {
    title: `${project.title} — Case Study | Xink Digitals`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-32 pb-28 min-h-screen bg-[#FFF9F1] text-[#181329] overflow-hidden">
      {/* Top Banner & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A4E6B] hover:text-[#181329] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Work</span>
        </Link>

        {/* Hero Header */}
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs"
              style={{
                backgroundColor: `${project.colors.primary}15`,
                color: project.colors.primary,
                border: `1px solid ${project.colors.primary}30`,
              }}
            >
              {project.category}
            </span>
            {project.secondaryCategories.map((sec) => (
              <span
                key={sec}
                className="px-3 py-1 rounded-full text-xs font-semibold text-[#5A4E6B] bg-white border border-[#181329]/10"
              >
                {sec}
              </span>
            ))}
            <span className="text-xs font-mono font-semibold text-[#6C5F7D] flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight font-heading leading-tight mb-6">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#4A3E56] font-normal leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Hero Visual Mockup Container (Light Theme) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          className="relative rounded-3xl p-8 sm:p-16 min-h-[400px] sm:min-h-[500px] border border-[#181329]/10 overflow-hidden flex flex-col justify-between shadow-xl"
          style={{
            background: `radial-gradient(circle at 80% 20%, ${project.colors.primary}15 0%, #FFF3E3 100%)`,
          }}
        >
          <div className="flex items-center justify-between relative z-10">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#754BFF]">
              Client: {project.client}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF6575]" />
              <span className="w-3 h-3 rounded-full bg-[#FF9E2C]" />
              <span className="w-3 h-3 rounded-full bg-[#2D9E64]" />
            </div>
          </div>

          {/* Interactive Artwork Motif */}
          <div className="my-12 text-center relative z-10">
            <div className="inline-block p-8 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#181329]/10 shadow-xl">
              <p className="text-xs font-mono text-[#6C5F7D] uppercase tracking-widest font-bold mb-2">
                Creative Direction &amp; Technology Stack
              </p>
              <h2 className="text-2xl sm:text-4xl font-black text-[#181329] font-heading">
                {project.client} × Xink Digitals
              </h2>
            </div>
          </div>

          {/* Verified Metrics Strip (Light Theme) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#181329]/10 relative z-10 empty:hidden">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#181329]/10 shadow-xs">
                <p className="text-xs text-[#6C5F7D] font-medium">{m.label}</p>
                <p className="text-2xl sm:text-3xl font-black font-mono text-[#181329] mt-1">
                  {m.value}
                </p>
                {m.change && (
                  <p className="text-xs text-[#2D9E64] font-bold font-mono mt-0.5">
                    ↑ {m.change}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Core Body (Light Theme) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Storytelling (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Challenge */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6575] mb-3">
                <Sparkles className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#181329] font-heading mb-4">
                Cutting through corporate noise
              </h2>
              <p className="text-base sm:text-lg text-[#4A3E56] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Creative Solution */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#754BFF] mb-3">
                <Sparkles className="w-4 h-4" />
                <span>The Creative Approach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#181329] font-heading mb-4">
                Engineering sensory fascination
              </h2>
              <p className="text-base sm:text-lg text-[#4A3E56] leading-relaxed mb-6">
                {project.solution}
              </p>

              {/* Visual Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-[#181329]/10 shadow-xs">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#0099C6] mb-2 font-bold">
                    Motion &amp; Interaction
                  </p>
                  <p className="text-sm text-[#4A3E56]">
                    High-refresh physics curves, fluid gesture responsiveness, and tactile sonic cues.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-[#181329]/10 shadow-xs">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#D97706] mb-2 font-bold">
                    Conversion Architecture
                  </p>
                  <p className="text-sm text-[#4A3E56]">
                    Seamless journey from initial sensory curiosity directly into high-intent conversion.
                  </p>
                </div>
              </div>
            </div>

            {/* The Results & Verified Impact */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D9E64] mb-3">
                <Award className="w-4 h-4" />
                <span>Verified Impact</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#181329] font-heading mb-4">
                Outcomes that shifted the category
              </h2>
              <p className="text-base sm:text-lg text-[#4A3E56] leading-relaxed mb-8">
                {project.results}
              </p>

              {/* Client Quote Callout */}
              {project.testimonial && (
                <div className="p-8 rounded-3xl bg-gradient-to-r from-[#FFF3E3] via-white to-[#F2E8FF] border border-[#181329]/10 relative shadow-sm">
                  <Quote className="w-8 h-8 text-[#754BFF] mb-4 opacity-75" />
                  <p className="text-lg sm:text-xl italic text-[#181329] leading-relaxed mb-6 font-heading">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-[#181329] text-base">
                      {project.testimonial.author}
                    </p>
                    <p className="text-xs text-[#6C5F7D]">
                      {project.testimonial.role} •{" "}
                      <span className="text-[#754BFF] font-bold">
                        {project.testimonial.company}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Deliverables & Metadata (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Deliverables Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#181329]/10 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#754BFF] mb-4 font-bold">
                <Layers className="w-4 h-4" />
                Deliverables Scope
              </div>
              <ul className="space-y-3">
                {project.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#2D2140] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2D9E64] flex-shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inquire for Similar Work */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#754BFF]/10 to-[#FF6575]/10 border border-[#754BFF]/20 shadow-sm">
              <h3 className="text-lg font-bold text-[#181329] font-heading mb-2">
                Need similar results?
              </h3>
              <p className="text-xs text-[#5A4E6B] mb-4 leading-relaxed">
                Let&apos;s build an unforgettable brand universe and high-performance digital presence for your company.
              </p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#181329] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#754BFF] transition-colors shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Next Project Exploration Recommendation */}
        <div className="mt-24 pt-12 border-t border-[#181329]/10">
          <p className="text-xs uppercase font-mono tracking-widest text-[#6C5F7D] mb-4 font-bold">
            Explore Next Case Study
          </p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-3xl bg-white border border-[#181329]/10 hover:border-[#754BFF]/40 shadow-sm hover:shadow-xl transition-all gap-6"
          >
            <div>
              <span className="text-xs font-bold text-[#754BFF] uppercase tracking-wider">
                {nextProject.category} • {nextProject.client}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#181329] font-heading mt-1 group-hover:text-[#754BFF] transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-sm text-[#5A4E6B] mt-1 max-w-xl">{nextProject.tagline}</p>
            </div>

            <div className="w-14 h-14 rounded-full bg-[#FFF9F1] group-hover:bg-[#181329] text-[#181329] group-hover:text-white border border-[#181329]/10 flex items-center justify-center transition-all group-hover:scale-110 flex-shrink-0 shadow-xs">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
