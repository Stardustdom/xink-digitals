"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InteriorNavigation() {
  const path = usePathname();
  if (path === "/") return null;
  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 py-5 sm:px-10">
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto rounded-3xl border border-[#EDEDF5] bg-white/95 text-[#1B143F] px-5 py-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <Link href="/" prefetch={true} className="font-display text-lg font-extrabold">
          Xink Digitals<span className="text-[#6A38EB]">.</span>
        </Link>
        <div className="flex flex-wrap gap-1 text-xs sm:text-sm">
          {[
            ["Services", "/services"],
            ["Work", "/work"],
            ["About", "/about"],
            ["FAQs", "/faq"],
            ["Contact", "/contact"],
          ].map(([name, href]) => (
            <Link
              key={href}
              href={href}
              prefetch={true}
              aria-current={path === href ? "page" : undefined}
              className={`nav-hover-link rounded-full px-3 py-2 ${
                path === href ? "text-[#6A38EB] font-bold" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
