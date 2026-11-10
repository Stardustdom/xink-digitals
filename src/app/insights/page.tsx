"use client";

import React, { useState } from "react";
import Link from "next/link";
import { articles } from "@/data/insights";
import { ArrowUpRight, Clock } from "lucide-react";
import { useSound } from "@/components/SoundManager";

const categories = ["All", "Trends", "Strategy", "Creative", "Development"] as const;

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { playPop } = useSound();

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#FFF9F1] text-[#181329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF9E2C]/15 border border-[#FF9E2C]/30 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Thoughts &amp; Playbooks</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-heading">
            Insights —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#754BFF] via-[#FF6575] to-[#D97706]">
              Creative Thinking
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#5A4E6B] mt-4 leading-relaxed">
            Essays, frameworks, and contrarian perspectives on 2026 design trends, viral algorithmic velocity, and modern web architecture.
          </p>
        </div>

        {/* Category Filters (Light Theme) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playPop();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#754BFF] text-white shadow-md shadow-[#754BFF]/25 scale-105"
                  : "bg-white text-[#181329]/75 hover:text-[#181329] border border-[#181329]/10 shadow-xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Card (Light Theme) */}
        {filteredArticles.length > 0 && (
          <div className="mb-14">
            <Link
              href={`/insights/${filteredArticles[0].slug}`}
              onClick={() => playPop()}
              className="group block relative p-8 sm:p-12 rounded-3xl bg-white border border-[#181329]/10 hover:border-[#754BFF]/40 transition-all shadow-sm hover:shadow-xl overflow-hidden"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 text-xs mb-4">
                  <span
                    className="px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${filteredArticles[0].color}15`,
                      color: filteredArticles[0].color,
                    }}
                  >
                    {filteredArticles[0].category}
                  </span>
                  <span className="text-[#6C5F7D] font-medium">{filteredArticles[0].date}</span>
                  <span className="text-[#181329]/30">•</span>
                  <span className="flex items-center gap-1 text-[#6C5F7D] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {filteredArticles[0].readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-[#181329] font-heading leading-tight mb-4 group-hover:text-[#754BFF] transition-colors">
                  {filteredArticles[0].title}
                </h2>

                <p className="text-sm sm:text-base text-[#4A3E56] leading-relaxed mb-6">
                  {filteredArticles[0].summary}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[#181329]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#181329] flex items-center justify-center font-bold text-xs text-white">
                      {filteredArticles[0].author.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#181329]">
                        {filteredArticles[0].author.name}
                      </p>
                      <p className="text-[11px] text-[#6C5F7D]">
                        {filteredArticles[0].author.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#754BFF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid of Remaining Articles (Light Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              onClick={() => playPop()}
              className="group p-8 rounded-3xl bg-white border border-[#181329]/10 hover:border-[#754BFF]/40 transition-all shadow-xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span
                    className="px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${article.color}15`,
                      color: article.color,
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#6C5F7D] font-medium">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#181329] font-heading mb-3 group-hover:text-[#754BFF] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#5A4E6B] leading-relaxed line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#181329]/8 flex items-center justify-between text-xs text-[#6C5F7D]">
                <span>{article.author.name}</span>
                <span className="font-bold text-[#181329] group-hover:text-[#754BFF] flex items-center gap-1">
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
