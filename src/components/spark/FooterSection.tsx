"use client";

import React, { useState } from "react";
import Link from "next/link";
import WaterButton from "@/components/WaterButton";
import LegalLink from "@/components/LegalLink";
import ScheduleCallModal from "@/components/ScheduleCallModal";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  FileCode,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function FooterSection() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  return (
    <>
      <footer
        id="contacts"
        className="bg-[#FBFBFE] text-[#1B143F] px-6 py-16 sm:p-16 border-t border-[#EDEDF5]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Top Banner with CTAs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#EBEBF4]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6A38EB] font-bold mb-3">
                Your next chapter
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[#1B143F]">
                Let&apos;s grow your business.
              </h2>
              <p className="text-sm text-[#5B5573] mt-3">
                Tell us where you are and where you want to go.
              </p>
            </div>

            {/* CTA Buttons: Schedule Call & Start Conversation */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsScheduleModalOpen(true)}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1B143F] hover:bg-[#6A38EB] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C9F36D] group-hover:text-white transition-colors" />
                <span>Schedule a call</span>
                <span className="transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </button>
              <WaterButton href="/contact" className="self-start">
                Start a conversation ↗
              </WaterButton>
            </div>
          </div>

          {/* 4-Column Grid: Brand & Socials, Explore, Office Address, Direct Connect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
            {/* Col 1: Brand & Social Media */}
            <div className="space-y-4">
              <Link
                href="/"
                prefetch={true}
                className="font-display font-extrabold text-2xl tracking-tight inline-block"
              >
                Xink Digitals<span className="text-[#6A38EB]">.</span>
              </Link>
              <p className="text-sm text-[#5B5573] leading-relaxed">
                Digital marketing, creative strategy, and high-converting web
                experiences built around measurable business goals.
              </p>

              {/* Social Media Links */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1B143F] mb-3">
                  Follow Our Journey
                </p>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.linkedin.com/company/xinkdigitals"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn company page"
                    title="LinkedIn"
                    className="w-9 h-9 rounded-full bg-white border border-[#EDEDF5] text-[#5B5573] hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#F4F8FC] flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@xinkdigitals"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube channel"
                    title="YouTube"
                    className="w-9 h-9 rounded-full bg-white border border-[#EDEDF5] text-[#5B5573] hover:text-[#FF0000] hover:border-[#FF0000] hover:bg-[#FFF5F5] flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/61577021811720/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook page"
                    title="Facebook"
                    className="w-9 h-9 rounded-full bg-white border border-[#EDEDF5] text-[#5B5573] hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#F2F6FC] flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Navigation / Explore */}
            <div>
              <h3 className="font-bold text-sm text-[#1B143F] uppercase tracking-wider mb-4">
                Explore
              </h3>
              <nav
                aria-label="Footer Navigation"
                className="flex flex-col space-y-2.5 text-sm text-[#5B5573]"
              >
                {[
                  ["Services", "/services"],
                  ["Selected Work", "/work"],
                  ["About Us", "/about"],
                  ["Client FAQs", "/faq"],
                  ["Contact Page", "/contact"],
                ].map(([name, href]) => (
                  <Link
                    key={href}
                    href={href}
                    prefetch={true}
                    className="hover:text-[#6A38EB] transition-colors"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 3: Office Address */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-[#1B143F] uppercase tracking-wider mb-4">
                Office Location
              </h3>
              <div className="flex items-start gap-2.5 text-sm text-[#5B5573] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#6A38EB] shrink-0 mt-1" />
                <a
                  href="https://xinkdigitals.com/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6A38EB] transition-colors"
                >
                  11 Hospital Link Rd, Eastern Park, Santoshpur, Kolkata, India
                  700075
                </a>
              </div>
              <p className="text-xs text-[#8C87A5] pt-1">
                Kolkata Innovation Hub · Serving ambitious clients worldwide.
              </p>
            </div>

            {/* Col 4: Direct Contact & Schedule */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-[#1B143F] uppercase tracking-wider mb-4">
                Direct Contact
              </h3>
              <div className="space-y-2.5 text-sm text-[#5B5573]">
                <a
                  href="tel:+919230653970"
                  className="flex items-center gap-2.5 hover:text-[#6A38EB] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#6A38EB] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">(+91) 92306 53970</span>
                </a>
                <a
                  href="mailto:contact@xinkdigitals.com"
                  className="flex items-center gap-2.5 hover:text-[#6A38EB] transition-colors break-all group"
                >
                  <Mail className="w-4 h-4 text-[#6A38EB] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>contact@xinkdigitals.com</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsScheduleModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#6A38EB]/30 bg-[#6A38EB]/5 hover:bg-[#6A38EB] hover:text-white text-[#6A38EB] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule a Call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Legal, and Site Map (XML Sitemap) */}
          <div className="border-t border-[#EBEBF4] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C87A5]">
            <span>&copy; 2026 Xink Digitals. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <Link
                href="/sitemap.xml"
                prefetch={false}
                className="hover:text-[#6A38EB] transition-colors flex items-center gap-1.5 font-medium"
              >
                <FileCode className="w-3.5 h-3.5 text-[#6A38EB]" />
                <span>Site Map (XML Sitemap)</span>
              </Link>
              <LegalLink kind="privacy">Privacy Policy</LegalLink>
              <LegalLink kind="terms">Terms</LegalLink>
            </div>
          </div>
        </div>
      </footer>

      {/* Schedule Call Modal Popup with blurred background */}
      <ScheduleCallModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
    </>
  );
}
