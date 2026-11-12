"use client";

import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Article", href: "#article" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About", href: "#about" },
  { name: "Contacts", href: "#contacts" },
];

export default function SparkNavbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-extrabold text-lg text-[#1B143F] flex items-center gap-1.5 font-heading">
            <span className="font-black text-xl text-[#1B143F] font-mono leading-none">✕</span>
            <span className="text-xl tracking-tight">Xink Digitals</span>
          </span>
        </Link>

        {/* Center Pill Menu */}
        <nav className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#E5E5EF] shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#4A4560] hover:text-[#1B143F] hover:bg-[#F2F2F8] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <Link
          href="#contacts"
          className="px-5 py-2.5 rounded-full border border-[#1B143F] text-[#1B143F] hover:bg-[#1B143F] hover:text-white text-xs font-bold transition-all shadow-sm"
        >
          Reserve Id
        </Link>
      </div>
    </header>
  );
}
