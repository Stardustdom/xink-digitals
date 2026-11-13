import React from "react";
import Link from "next/link";
import LegalLink from "@/components/LegalLink";
import { ArrowUpRight, Heart, Mail, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F0A1C] border-t border-white/10 overflow-hidden text-white pt-20 pb-12">
      {/* Background glow flares */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#754BFF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6575]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* High-energy Big Banner CTA */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#241C38] via-[#181329] to-[#2E1A47] border border-white/15 overflow-hidden mb-20 shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#FFC247]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-4 right-8 hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9F36D]/15 border border-[#C9F36D]/30 text-[#C9F36D] text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#C9F36D] animate-ping" />
            Taking on select Q1/Q2 briefs
          </div>

          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-[#FF8CD5] font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Next Step
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white font-heading mb-6">
              Got a wild idea?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC247] via-[#FF6575] to-[#FF8CD5]">
                Let&apos;s make it real.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
              We collaborate with ambitious founders and bold marketing leaders ready to build digital spectacles that people remember forever.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#754BFF] hover:bg-[#683cee] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#754BFF]/30 hover:scale-105"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all"
              >
                <span>Explore Portfolio</span>
                <span className="text-xs text-[#C9F36D]">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
                XINK <span className="text-[#FF8CD5] font-light">DIGITALS</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-sm mb-6 leading-relaxed">
              A digital marketing & creative agency engineering high-voltage brand identities, viral social campaigns, and immersive web playgrounds.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#C9BFFF]">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#62D9F5]" />
                Brooklyn • London • Tokyo
              </span>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-[#C9F36D] transition-colors flex items-center gap-1.5"
                >
                  Our Work <span className="text-[10px] text-[#C9F36D] font-mono">★</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/services#branding" className="hover:text-[#754BFF] transition-colors">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/services#web-design" className="hover:text-[#62D9F5] transition-colors">
                  Next-Gen Websites
                </Link>
              </li>
              <li>
                <Link href="/services#social-media" className="hover:text-[#FF6575] transition-colors">
                  Viral Social Drops
                </Link>
              </li>
              <li>
                <Link href="/services#performance" className="hover:text-[#FFC247] transition-colors">
                  Performance Ads
                </Link>
              </li>
              <li>
                <Link href="/services#motion-3d" className="hover:text-[#FF8CD5] transition-colors">
                  3D & Motion Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Social */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70 mb-6">
              <li>
                <a
                  href="mailto:contact@xinkdigitals.com"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF8CD5]" />
                  contact@xinkdigitals.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919230653970"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span className="text-[#62D9F5]">📞</span>
                  (+91) 92306 53970
                </a>
              </li>
              <li className="text-xs text-white/60 leading-relaxed pt-1">
                <a
                  href="https://xinkdigitals.com/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-start gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C9F36D] shrink-0 mt-0.5" />
                  <span>11 Hospital Link Rd, Eastern Park, Santoshpur, Kolkata, India 700075</span>
                </a>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <a
                href="https://www.linkedin.com/company/xinkdigitals"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#0A66C2] hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@xinkdigitals"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#FF0000] hover:text-white transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/61577021811720/"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#1877F2] hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Xink Digitals Inc. All rights reserved.</p>
          <p className="flex items-center gap-1 text-white/60">
            Crafted with playful maximalism &amp; kinetic passion
            <Heart className="w-3.5 h-3.5 text-[#FF6575] fill-[#FF6575] ml-0.5" />
          </p>
          <div className="flex items-center gap-4">
            <LegalLink kind="privacy" className="hover:text-white transition-colors">Privacy</LegalLink>
            <LegalLink kind="terms" className="hover:text-white transition-colors">Terms</LegalLink>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
