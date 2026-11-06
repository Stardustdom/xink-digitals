"use client";

import React, { useState } from "react";
import Link from "next/link";
import { articles } from "@/data/insights";
import { ArrowUpRight, BookOpen, Clock, Tag, Sparkles } from "lucide-react";

const categories = ["All", "Trends", "Strategy", "Creative", "Development"] as const;

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#181329] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC247]/20 border border-[#FFC247]/40 text-[#FFC247] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Thoughts &amp; Playbooks</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading">
            Insights —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC247] via-[#FF6575] to-[#754BFF]">
              Creative Thinking
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/70 mt-4 leading-relaxed">
            Essays, frameworks, and contrarian perspectives on 2026 design trends, viral algorithmic velocity, and modern web architecture.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#FFC247] text-[#181329] shadow-md shadow-[#FFC247]/20 scale-105"
                  : "bg-[#221A38] text-white/70 hover:text-white hover:bg-[#281F42] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Card (if first matches) */}
        {filteredArticles.length > 0 && (
          <div className="mb-14">
            <Link
              href={`/insights/${filteredArticles[0].slug}`}
              className="group block relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#241C38] via-[#1E1733] to-[#2E1A47] border border-white/15 hover:border-white/30 transition-all shadow-2xl overflow-hidden"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-xs mb-4">
                  <span
                    className="px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${filteredArticles[0].color}25`,
                      color: filteredArticles[0].color,
                    }}
                  >
                    {filteredArticles[0].category}
                  </span>
                  <span className="text-white/50">{filteredArticles[0].date}</span>
                  <span className="text-white/40">•</span>
                  <span className="flex items-center gap-1 text-white/60">
                    <Clock className="w-3.5 h-3.5" />
                    {filteredArticles[0].readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight mb-4 group-hover:text-[#C9F36D] transition-colors">
                  {filteredArticles[0].title}
                </h2>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                  {filteredArticles[0].summary}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs text-white">
                      {filteredArticles[0].author.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">
                        {filteredArticles[0].author.name}
                      </p>
                      <p className="text-[11px] text-white/50">
                        {filteredArticles[0].author.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#C9F36D] flex items-center gap-1">
                    Read Article <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid of Remaining Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group p-8 rounded-3xl bg-[#221A38] border border-white/10 hover:border-white/30 transition-all hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span
                    className="px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${article.color}20`,
                      color: article.color,
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-white/50">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-[#C9F36D] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
                <span>{article.author.name}</span>
                <span className="font-semibold text-white group-hover:text-[#C9F36D] flex items-center gap-1">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
