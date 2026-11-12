"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
  locale = "en-US",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  locale?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const format = (number: number) => prefix + number.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }) + suffix;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let started = false;
    let disposed = false;
    const run = () => {
      if (started || disposed) return;
      started = true;
      if (motion.matches || duration <= 0) { setValue(to); return; }
      let start: number | undefined;
      const tick = (now: number) => {
        start ??= now;
        const progress = Math.min((now - start) / duration, 1);
        setValue(to * (1 - (1 - progress) ** 3));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const finish = () => {
      if (!motion.matches) return;
      cancelAnimationFrame(frame);
      setValue(to);
    };
    // animationstart fires after the card's CSS entrance delay, so counting
    // begins with the visible fade rather than with the earlier heading reveal.
    const entrance = element.closest<HTMLElement>(".bh-rest, [data-motion-card]");
    const onEntrance = (event: AnimationEvent) => {
      if (event.target === entrance && (event.animationName === "bh-fade-in" || event.animationName === "bento-card-in")) run();
    };
    let observer: IntersectionObserver | undefined;
    if (motion.matches) run();
    else if (entrance) {
      entrance.addEventListener("animationstart", onEntrance);
      const alreadyVisible = entrance.getAnimations().some(animation => {
        const progress = animation.effect?.getComputedTiming().progress;
        return progress !== null && progress !== undefined;
      });
      if (alreadyVisible) run();
    } else {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { run(); observer?.disconnect(); }
      }, { threshold: 0.2 });
      observer.observe(element);
    }
    motion.addEventListener("change", finish);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      entrance?.removeEventListener("animationstart", onEntrance);
      motion.removeEventListener("change", finish);
    };
  }, [to, duration]);

  return <span ref={ref} aria-label={format(to)} className="inline-grid tabular-nums">
    <span aria-hidden="true" className="invisible col-start-1 row-start-1">{format(to)}</span>
    <span aria-hidden="true" className="col-start-1 row-start-1">{format(value)}</span>
  </span>;
}
