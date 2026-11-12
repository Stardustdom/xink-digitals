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

export default function HeroSection() {
  return (
    <section className="relative w-full h-svh bg-[#FBFBFE] overflow-hidden flex items-center justify-center">
    <div
      style={{ containerType: "inline-size" }}
      className="relative w-[min(100%,calc(100svh*1.50385))] aspect-[782/520] text-[#15103A] select-none"
    >
      {/* Ripple rings */}
      <RippleRings />

      {/* Top navigation (sizes in em, base = 1cqw) */}
      <header
        style={{ fontSize: "1cqw" }}
        className="absolute z-30 inset-x-[3.2%] top-[5%] flex items-center justify-between"
      >
        <Link href="/" className="flex items-center gap-[0.8em]">
          <span className="font-black text-[1.75em] text-[#15103A] font-mono leading-none tracking-tighter">✕</span>
          <span className="font-extrabold text-[1.75em] text-[#15103A] tracking-tight font-display">Xink Digitals</span>
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
        className="absolute z-30 left-[3.2%] bottom-[6%] font-display font-semibold leading-snug text-[#15103A]"
        style={{ fontSize: "1.75cqw" }}
      >
        Digital marketing. <br />
        Built around your business.
      </p>

      {/* Bottom-right copy + store buttons */}
      <div
        style={{ fontSize: "1cqw" }}
        className="absolute z-30 right-[3.2%] bottom-[6%] flex flex-col items-end text-right"
      >
        <p className="text-[0.95em] text-[#7E7896] leading-relaxed mb-[1em]">
          SEO, paid ads, social media and websites. <br />
          A clear plan. A team to make it happen.
        </p>

        <div className="flex items-center gap-[1em]">
          {[
            { label: "Start a project", href: "/contact", icon: <ArrowUpRight className="w-[1.3em] h-[1.3em] fill-current" /> },
            { label: "Our services", href: "/services", icon: <Layers className="w-[1.15em] h-[1.15em] fill-current" /> },
          ].map((b) => (
            <div key={b.label} className="store-btn">
              <span className="store-btn-ring" />
              <span className="store-btn-ring store-btn-ring-2" />
              <span className="store-btn-ring store-btn-ring-3" />
              {BUBBLES.map((b, i) => (
                <span
                  key={i}
                  className="store-btn-bubble"
                  style={{ "--s": b.s, "--x0": b.x0, "--y0": b.y0, "--dx": b.dx, "--dy": b.dy } as React.CSSProperties}
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
      </div>
    </div>
    </section>
  );
}
