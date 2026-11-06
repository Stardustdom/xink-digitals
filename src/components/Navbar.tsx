"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Work", href: "/work", prominent: true, badge: "Selected" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#181329]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#754BFF] rounded-lg p-1"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#754BFF] via-[#FF6575] to-[#FFC247] p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                <div className="w-full h-full bg-[#181329] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-lg text-white tracking-tighter">
                    X<span className="text-[#C9F36D]">.</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                  XINK
                  <span className="text-[#FF8CD5] font-light">DIGITALS</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#C9BFFF] font-semibold">
                  Creative Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#241C38]/60 backdrop-blur-md border border-white/10 shadow-lg">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-[#754BFF] text-white shadow-md shadow-[#754BFF]/40"
                        : item.prominent
                        ? "text-white bg-white/5 hover:bg-white/10 hover:text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {item.name}
                      {item.badge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#C9F36D] text-[#181329] font-bold leading-none uppercase">
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#181329] bg-[#C9F36D] hover:bg-[#b8e855] transition-all duration-300 shadow-lg shadow-[#C9F36D]/20 hover:shadow-[#C9F36D]/40 hover:scale-105"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#241C38] border border-white/10 text-white hover:text-[#C9F36D] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 md:hidden bg-[#181329]/95 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between p-6 pt-28 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        }`}
      >
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-[#C9BFFF] font-semibold mb-2">
            Navigation
          </p>
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between p-3.5 rounded-2xl text-lg font-bold transition-all ${
                  isActive
                    ? "bg-[#754BFF] text-white"
                    : "bg-[#241C38]/60 text-white/90 hover:bg-[#241C38] hover:text-white"
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className="flex items-center gap-2">
                  {item.name}
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C9F36D] text-[#181329] font-bold uppercase">
                      {item.badge}
                    </span>
                  )}
                </span>
                <ArrowUpRight className="w-5 h-5 opacity-60" />
              </Link>
            );
          })}
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>● Available for new projects</span>
            <span className="text-[#C9F36D] font-mono">Q1 / Q2 2026</span>
          </div>

          <Link
            href="/contact"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#C9F36D] text-[#181329] font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#C9F36D]/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start a Project</span>
          </Link>
        </div>
      </div>
    </>
  );
}
