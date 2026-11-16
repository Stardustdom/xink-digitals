import React from "react";
import Image from "next/image";
import Link from "next/link";
import RippleRings from "./RippleRings";
import DiagonalMarquee from "./DiagonalMarquee";
import { ArrowUpRight, Layers } from "lucide-react";

/*
  The whole hero is a fixed-aspect composition (782 x 520). Everything inside is positioned in %
  and sized in cqw (1cqw = 1% of the card width), so the headline, phone and badges keep exactly
  the same relative placement on every screen size.
*/
const HEADLINE_FONT_SIZE = "7.65cqw";

// 44 solid bubbles radiating outward from the button's edge in every direction (values in em of the button)
const BUBBLE_COUNT = 44;
const BUBBLES = Array.from({ length: BUBBLE_COUNT }).map((_, i) => {
  const t = (i / BUBBLE_COUNT) * Math.PI * 2 + ((i * 37) % 11) * 0.012;
  const c = Math.cos(t);
  const sn = Math.sin(t);
  const far = 0.7 + ((i * 53) % 10) * 0.035; // 0.7 .. 1.0 spread of travel distance
  return {
    s: `${[0.45, 0.6, 0.35, 0.5, 0.4][i % 5]}em`,
    x0: `${(c * 3.6).toFixed(2)}em`,
    y0: `${(sn * 1.2).toFixed(2)}em`,
    dx: `${(c * 8.6 * far).toFixed(2)}em`,
    dy: `${(sn * 4.8 * far).toFixed(2)}em`,
  };
});

const CTAS = [
  { label: "Start a project", href: "/contact", icon: <ArrowUpRight className="w-[1.3em] h-[1.3em] fill-current" /> },
  { label: "Our services", href: "/services", icon: <Layers className="w-[1.15em] h-[1.15em] fill-current" /> },
];

function CtaButtons() {
  return (
    <div className="flex flex-wrap items-center gap-[0.8em]">
      {CTAS.map((b) => (
        <div key={b.label} className="store-btn">
          <span className="store-btn-ring" />
          <span className="store-btn-ring store-btn-ring-2" />
          <span className="store-btn-ring store-btn-ring-3" />
          {BUBBLES.map((bb, i) => (
            <span
              key={i}
              className="store-btn-bubble"
              style={{ "--s": bb.s, "--x0": bb.x0, "--y0": bb.y0, "--dx": bb.dx, "--dy": bb.dy } as React.CSSProperties}
            />
          ))}
          <a href={b.href} className="store-btn-link">
            <span className="store-btn-water" />
            <span className="store-btn-content">
              {b.icon}
              <span>{b.label}</span>
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full sm:h-svh bg-[#FBFBFE] overflow-hidden flex flex-col items-center justify-center">
      {/* Mobile header: real-size, readable */}
      <header className="sm:hidden relative z-30 w-full px-4 pt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Xink Digitals" width={320} height={153} className="h-11 w-auto object-contain" priority />
          </Link>
          <Link href="/contact" prefetch={true} className="px-5 py-2.5 rounded-full border border-[#15103A] text-[#15103A] active:bg-[#15103A] active:text-white text-sm font-bold">
            Let&apos;s talk
          </Link>
        </div>
        <nav className="flex flex-nowrap whitespace-nowrap items-center justify-between rounded-full bg-white/95 border border-[#EBEBF4] shadow-[0_2px_10px_rgba(27,20,63,0.06)] px-1.5 py-1.5">
          {[{ label: "Services", href: "/services" }, { label: "Work", href: "/work" }, { label: "About", href: "/about" }, { label: "FAQs", href: "/faq" }, { label: "Contact", href: "/contact" }].map((item) => (
            <Link key={item.label} href={item.href} prefetch={true} className="px-[clamp(6px,2vw,10px)] py-2 rounded-full text-[clamp(11px,3.4vw,13px)] font-semibold text-[#544F6D] active:bg-[#F1ECFF]">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    <div
      style={{ containerType: "inline-size" }}
      className="relative w-full -mt-[9vw] sm:mt-0 overflow-hidden sm:overflow-visible sm:w-[min(100%,calc(100svh*1.50385))] aspect-[782/520] text-[#15103A] select-none"
    >
      {/* Ripple rings */}
      <RippleRings />

      {/* Top navigation (sizes in em, base = 1cqw) */}
      <header
        style={{ fontSize: "1cqw" }}
        className="absolute z-30 inset-x-[3.2%] top-[5%] hidden sm:flex items-center justify-between"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Xink Digitals"
            width={320}
            height={153}
            className="h-[5.2em] w-auto object-contain transition-transform hover:scale-105"
            priority
          />
        </Link>

        <nav className="flex items-center gap-[0.5em] px-[1.8em] py-[0.9em] rounded-full bg-white/95 backdrop-blur-md border border-[#EBEBF4] shadow-[0_2px_10px_rgba(27,20,63,0.04)]">
          {[{ label: "Services", href: "/services" }, { label: "Work", href: "/work" }, { label: "About", href: "/about" }, { label: "FAQs", href: "/faq" }, { label: "Contact", href: "/contact" }].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              prefetch={true}
              className="nav-hover-link px-[1.25em] py-[0.6em] rounded-full text-[1.18em] font-semibold text-[#544F6D]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          prefetch={true}
          className="px-[1.8em] py-[0.65em] rounded-full border border-[#15103A] text-[#15103A] hover:bg-[#15103A] hover:text-white text-[0.88em] font-bold transition-all"
        >
          Let&apos;s talk
        </Link>
      </header>

      {/* Hero headline */}
      <h1 aria-label="Grow with Xink Digitals"
        className="absolute z-10 pointer-events-none font-display font-semibold tracking-tight leading-none whitespace-nowrap text-[#15103A] left-[2.8%] top-[18.1%]"
        style={{ fontSize: HEADLINE_FONT_SIZE }}
      >
        Grow with
      </h1>
      <p
        className="absolute z-10 pointer-events-none font-display font-semibold tracking-tight leading-none whitespace-nowrap text-[#15103A] left-[35.2%] top-[30.6%]"
        style={{ fontSize: HEADLINE_FONT_SIZE }}
      >
        Xink Digitals.
      </p>

      {/* Floating left badge (diagonal bubble marquee) */}
      <div className="absolute left-[15%] top-[45%] z-20 animate-float" style={{ width: "8.7cqw", height: "8.7cqw" }}>
        <div className="relative w-full h-full rounded-[2.2cqw] bg-white border border-[#EDEDF5] shadow-[0_12px_28px_rgba(27,20,63,0.06)] overflow-hidden">
          <DiagonalMarquee />
        </div>
      </div>

      {/* Hand + phone: phone body centred at 56% of the card, top just under the headline */}
      <div className="absolute z-20 pointer-events-none left-[41.6%] top-[35.8%]" style={{ width: "27cqw" }}>
        <div className="drop-shadow-[0_20px_40px_rgba(21,16,58,0.2)]">
          <Image
            src="/spark/user_hand_marketing_v5.png"
            alt="Hand holding smartphone showing a digital marketing dashboard"
            width={635}
            height={1184}
            className="w-full h-auto block"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Floating right badge */}
      <div className="absolute left-[81.8%] top-[54.2%] z-20 animate-float-delayed" style={{ width: "8.7cqw", height: "8.7cqw" }}>
        <div className="w-full h-full rounded-[2.2cqw] bg-white border border-[#EDEDF5] shadow-[0_12px_28px_rgba(27,20,63,0.06)] overflow-hidden flex items-end justify-center pt-[0.8cqw] px-[0.6cqw]">
          <Image
            src="/spark/woman_cutout_hd.png"
            alt="Portrait illustration"
            width={333}
            height={399}
            className="w-full h-auto block"
            unoptimized
          />
        </div>
      </div>

      {/* Bottom-left tagline */}
      <p
        className="absolute z-30 left-[3.2%] bottom-[6%] hidden sm:block font-display font-semibold leading-snug text-[#15103A]"
        style={{ fontSize: "1.75cqw" }}
      >
        Digital marketing. <br />
        Built around your business.
      </p>

      {/* Bottom-right copy + store buttons */}
      <div
        style={{ fontSize: "1cqw" }}
        className="absolute z-30 right-[3.2%] bottom-[6%] hidden sm:flex flex-col items-end text-right"
      >
        <p className="text-[0.95em] text-[#7E7896] leading-relaxed mb-[1em]">
          SEO, paid ads, social media and websites. <br />
          A clear plan. A team to make it happen.
        </p>

        <CtaButtons />
      </div>
    </div>

      {/* Mobile tagline + buttons: real-size, readable */}
      <div className="sm:hidden relative z-30 w-full px-4 pt-5 pb-8 flex flex-col gap-4 bg-[#FBFBFE]">
        <p className="font-display font-semibold text-xl leading-snug text-[#15103A]">
          Digital marketing. <br />
          Built around your business.
        </p>
        <p className="text-sm text-[#6B6584] leading-relaxed">
          SEO, paid ads, social media and websites. A clear plan. A team to make it happen.
        </p>
        <div style={{ fontSize: "13px" }}>
          <CtaButtons />
        </div>
      </div>
    </section>
  );
}
