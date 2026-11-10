import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/insights";
import { ArrowLeft, Clock, Calendar, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const instant = false;

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found — Xink Digitals" };

  return {
    title: `${article.title} | Xink Digitals Insights`,
    description: article.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="pt-32 pb-28 min-h-screen bg-[#FFF9F1] text-[#181329]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A4E6B] hover:text-[#181329] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </Link>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
          <span
            className="px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-2xs"
            style={{
              backgroundColor: `${article.color}15`,
              color: article.color,
            }}
          >
            {article.category}
          </span>
          <span className="text-[#6C5F7D] font-medium flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="text-[#181329]/30">•</span>
          <span className="text-[#6C5F7D] font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-heading leading-tight mb-8">
          {article.title}
        </h1>

        {/* Author Byline */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-[#181329]/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#181329] flex items-center justify-center font-bold text-sm text-white shadow-xs">
              {article.author.avatar}
            </div>
            <div>
              <p className="text-sm font-bold text-[#181329]">{article.author.name}</p>
              <p className="text-xs text-[#6C5F7D]">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#754BFF]">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>Xink Research</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-6 text-[#3A2E4C] leading-relaxed font-normal text-base sm:text-lg">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom Callout (Light Theme) */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#181329]/10 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#181329] font-heading mb-1">
              Want to apply these ideas to your brand?
            </h3>
            <p className="text-xs text-[#5A4E6B]">
              We collaborate with ambitious founders to build unforgettable digital experiences.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#181329] hover:bg-[#754BFF] text-white font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap shadow-xs"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </div>
    </article>
  );
}
