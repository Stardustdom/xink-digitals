"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Our Work",  href: "/work"     },
  { name: "Services",  href: "/services" },
  { name: "About",     href: "/about"    },
  { name: "Contact",   href: "/contact"  },
];

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 pt-4 flex items-center justify-between gap-4">
          {/* Logo wordmark */}
          <Link
            href="/"
            className={`font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white rounded-2xl px-4 py-2.5 transition-colors ${
              scrolled ? "bg-white/10 backdrop-blur-md" : "bg-white/5"
            }`}
          >
            XINK<span className="text-[#C9F36D]">.</span>
          </Link>

          {/* Desktop nav pill */}
          <nav className="hidden md:flex items-center gap-1 rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-1.5">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-[#C9F36D] hover:bg-[#754BFF] hover:text-white text-[#181329] px-5 py-3 text-sm font-semibold transition-colors"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              className="md:hidden rounded-2xl bg-white/10 p-3 text-white"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-30 md:hidden bg-[#0F0A1C] text-white px-6 pt-28 pb-8 flex flex-col justify-between transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-display text-4xl font-bold py-3 border-b border-white/10 text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#C9F36D] text-[#181329] py-4 font-semibold"
        >
          Start a Project <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>
  );
}
