"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InteriorNavigation() {
  const path = usePathname();
  if (path === "/") return null;
  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 py-5 sm:px-10">
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto rounded-3xl border border-[#EDEDF5] bg-white/95 text-[#1B143F] px-5 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <Link href="/" prefetch={true} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Xink Digitals"
            width={240}
            height={115}
            className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-105"
            priority
          />
        </Link>
        <div className="flex flex-nowrap whitespace-nowrap w-full sm:w-auto justify-between sm:justify-start gap-0.5 sm:gap-1 text-[clamp(11px,3.4vw,13px)] sm:text-sm">
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
              className={`nav-hover-link rounded-full px-[clamp(6px,2vw,12px)] sm:px-3 py-2 ${
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
