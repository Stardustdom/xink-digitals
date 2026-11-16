"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  faqs,
  faqCategories,
  type FAQItem,
} from "@/data/faqs";
import ScheduleCallModal from "@/components/ScheduleCallModal";
import SiteAuditModal from "@/components/SiteAuditModal";
import {
  Search,
  ChevronDown,
  Building2,
  Stethoscope,
  TrendingUp,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle2,
  X,
} from "lucide-react";

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  // Track open item IDs
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "conv-1": true, // open first by default
  });

  // Modal states
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    faqs.forEach((f) => {
      allOpen[f.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return faqs.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        item.q.toLowerCase().includes(query) ||
        item.a.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  // Group by category when on "all"
  const conversionFaqs = useMemo(
    () => filteredFaqs.filter((f) => f.category === "conversion"),
    [filteredFaqs]
  );
  const realEstateFaqs = useMemo(
    () => filteredFaqs.filter((f) => f.category === "real-estate"),
    [filteredFaqs]
  );
  const healthcareFaqs = useMemo(
    () => filteredFaqs.filter((f) => f.category === "healthcare"),
    [filteredFaqs]
  );

  const renderFaqCard = (faq: FAQItem, index: number) => {
    const isOpen = Boolean(openItems[faq.id]);
    const numDisplay = String(index + 1).padStart(2, "0");

    return (
      <div
        key={faq.id}
        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
          isOpen
            ? "bg-white border-[#6A38EB]/30 shadow-md shadow-[#6A38EB]/5 ring-1 ring-[#6A38EB]/20"
            : "bg-white border-[#EDEDF5] hover:border-[#D5D3E8] hover:shadow-xs"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleItem(faq.id)}
          aria-expanded={isOpen}
          className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none transition-colors"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <span
              className={`shrink-0 font-mono text-xs font-bold px-2 py-1 rounded-md transition-colors ${
                isOpen
                  ? "bg-[#6A38EB] text-white"
                  : "bg-[#F3F2F9] text-[#716A8E]"
              }`}
            >
              {numDisplay}
            </span>
            <span className="font-display font-bold text-base sm:text-lg text-[#1B143F] leading-snug pt-0.5">
              {faq.q}
            </span>
          </div>

          <div
            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 mt-0.5 ${
              isOpen
                ? "bg-[#6A38EB]/10 text-[#6A38EB] rotate-180"
                : "bg-[#F3F2F9] text-[#716A8E]"
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        {isOpen && (
          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-[15px] text-[#5B5573] leading-relaxed border-t border-[#F2F1F8] animate-in fade-in-50 duration-200">
            <div className="pl-9 sm:pl-10">
              <p>{faq.a}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <main className="page-glow bg-[#FFF9F1] text-[#1B143F] min-h-screen px-4 sm:px-8 lg:px-16 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6A38EB]/10 border border-[#6A38EB]/20 text-[#6A38EB] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6A38EB]" />
              <span>Before We Begin · Frequently Asked Questions</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1B143F] leading-tight">
              Good questions. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A38EB] via-[#8553F5] to-[#FF6575]">
                Clear answers.
              </span>
            </h1>

            <p className="text-[#5B5573] max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
              Find transparent answers regarding our strategy, pricing, turnaround times,
              and dedicated frameworks for Real Estate and Healthcare marketing.
            </p>
          </div>

          {/* Search & Actions Bar */}
          <div className="bg-white border border-[#EDEDF5] rounded-3xl p-4 sm:p-5 shadow-sm mb-8 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-[#8C87A5] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions (e.g. pricing, Google rankings, real estate leads, doctor SEO...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-[#FBFBFE] border border-[#E5E5EF] text-xs sm:text-sm text-[#1B143F] placeholder-[#9E9AA7] focus:outline-none focus:border-[#6A38EB] focus:ring-2 focus:ring-[#6A38EB]/15 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C87A5] hover:text-[#1B143F] p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills & Toggle Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                {faqCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-[#1B143F] text-white shadow-xs"
                          : "bg-[#F3F2F9] text-[#5B5573] hover:bg-[#EAE8F5] hover:text-[#1B143F]"
                      }`}
                    >
                      <span>{cat.shortTitle}</span>
                      <span
                        className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-white text-[#716A8E]"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-[#716A8E]">
                <button
                  type="button"
                  onClick={expandAll}
                  className="hover:text-[#6A38EB] font-semibold underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Expand all
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="hover:text-[#6A38EB] font-semibold underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Collapse all
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary if filtering */}
          {searchQuery && (
            <div className="mb-6 px-1 flex items-center justify-between text-xs text-[#5B5573]">
              <span>
                Found <strong>{filteredFaqs.length}</strong> matching questions for &quot;
                {searchQuery}&quot;
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[#6A38EB] font-bold hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}

          {/* No results notice */}
          {filteredFaqs.length === 0 && (
            <div className="rounded-3xl bg-white border border-[#EDEDF5] p-12 text-center my-8">
              <div className="w-12 h-12 rounded-full bg-[#6A38EB]/10 text-[#6A38EB] flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1B143F] mb-1">
                No questions found
              </h3>
              <p className="text-xs text-[#5B5573] max-w-sm mx-auto mb-4">
                We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;. Try a different search term or view all categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="px-4 py-2 rounded-full bg-[#1B143F] text-white text-xs font-bold hover:bg-[#6A38EB] transition-colors"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* PART 1: CONVERSION-FOCUSED FAQS */}
          {(activeCategory === "all" || activeCategory === "conversion") &&
            conversionFaqs.length > 0 && (
              <section className="mb-14" id="conversion-faqs">
                {/* Section Header Banner with Direct Contact Info */}
                <div className="rounded-3xl bg-gradient-to-br from-[#1B143F] to-[#2E2463] text-white p-6 sm:p-8 mb-6 shadow-sm relative overflow-hidden">
                  <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-[#6A38EB]/25 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C9F36D] text-[11px] font-bold uppercase tracking-wider mb-2">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Part 1 · Conversion-Focused</span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                        Conversion-Focused FAQs
                      </h2>
                      <p className="text-white/70 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
                        Learn how we build scalable customer acquisition engines, customize proposals, and ensure measurable ROI.
                      </p>
                    </div>

                    {/* Direct Contact Card */}
                    <div className="shrink-0 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-4 space-y-2 text-xs">
                      <div className="font-bold text-[#C9F36D] text-[11px] uppercase tracking-wider">
                        Direct Assistance
                      </div>
                      <a
                        href="mailto:info@xinkdigitals.com"
                        className="flex items-center gap-2 text-white hover:text-[#C9F36D] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#C9F36D]" />
                        <span>info@xinkdigitals.com</span>
                      </a>
                      <a
                        href="tel:+919230653970"
                        className="flex items-center gap-2 text-white hover:text-[#C9F36D] transition-colors font-mono"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#C9F36D]" />
                        <span>(+91) 92306 53970</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* FAQ Cards Accordion */}
                <div className="space-y-3.5">
                  {conversionFaqs.map((faq, idx) => renderFaqCard(faq, idx))}
                </div>
              </section>
            )}

          {/* PART 2: REAL ESTATE FAQS */}
          {(activeCategory === "all" || activeCategory === "real-estate") &&
            realEstateFaqs.length > 0 && (
              <section className="mb-14" id="real-estate-faqs">
                <div className="rounded-3xl bg-white border border-[#EDEDF5] p-6 sm:p-8 mb-6 shadow-sm">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6A38EB]/10 text-[#6A38EB] text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Building2 className="w-3.5 h-3.5 text-[#6A38EB]" />
                    <span>Part 2 · Real Estate Marketing</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B143F] tracking-tight">
                    Industry-Specific FAQs – Real Estate
                  </h2>
                  <p className="text-[#5B5573] text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                    Real estate businesses need more than website traffic. They need qualified property enquiries, local visibility, and a reliable online reputation.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {realEstateFaqs.map((faq, idx) => renderFaqCard(faq, idx))}
                </div>
              </section>
            )}

          {/* PART 3: HEALTHCARE FAQS */}
          {(activeCategory === "all" || activeCategory === "healthcare") &&
            healthcareFaqs.length > 0 && (
              <section className="mb-14" id="healthcare-faqs">
                <div className="rounded-3xl bg-white border border-[#EDEDF5] p-6 sm:p-8 mb-6 shadow-sm">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C48C]/15 text-[#00A877] text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Stethoscope className="w-3.5 h-3.5 text-[#00A877]" />
                    <span>Part 3 · Healthcare & Medical</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B143F] tracking-tight">
                    Industry-Specific FAQs – Healthcare
                  </h2>
                  <p className="text-[#5B5573] text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                    Healthcare marketing requires special attention to accuracy, patient privacy, professional credibility, and advertising regulations.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {healthcareFaqs.map((faq, idx) => renderFaqCard(faq, idx))}
                </div>
              </section>
            )}

          {/* Bottom Conversion & CTA Panel */}
          <div className="rounded-[2.5rem] bg-[#1B143F] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl mt-16">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#6A38EB]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6575]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C9F36D] text-xs font-bold uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9F36D]" />
                <span>Ready to start?</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
                Have a specific question about your project?
              </h2>

              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-8 max-w-lg mx-auto">
                Talk directly with our digital strategists. We will evaluate your website, competitors, and growth opportunities with no obligation.
              </p>

              {/* Action Buttons (Strictly without arrows) */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsScheduleOpen(true)}
                  className="px-6 py-3.5 rounded-full bg-[#6A38EB] hover:bg-[#5829D6] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-[#6A38EB]/25 cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#C9F36D]" />
                  <span>Schedule a Call</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsAuditOpen(true)}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#1B143F] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm cursor-pointer flex items-center gap-2"
                >
                  <Search className="w-4 h-4 text-[#6A38EB]" />
                  <span>Free Site Audit</span>
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/20 transition-all cursor-pointer flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9F36D]" />
                  <span>Start a Conversation</span>
                </Link>
              </div>

              {/* WhatsApp Redirection Link */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
                <a
                  href="https://wa.me/919230653970?text=Hello%20Xink%20Digitals,%20I%20have%20an%20enquiry%20regarding%20digital%20marketing%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C9F36D] hover:underline font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat directly on WhatsApp: (+91) 92306 53970</span>
                </a>
                <span>·</span>
                <a
                  href="mailto:info@xinkdigitals.com"
                  className="hover:text-white transition-colors"
                >
                  info@xinkdigitals.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Schedule Call Modal */}
      <ScheduleCallModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />

      {/* Site Audit Modal */}
      <SiteAuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />
    </>
  );
}
