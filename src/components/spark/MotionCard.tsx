"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export default function MotionCard({ children, className, index }: {
  children: ReactNode;
  className: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const card = ref.current;
    if (!card || !window.IntersectionObserver) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    card.dataset.motionState = "pending";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        card.dataset.motionState = "visible";
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} data-motion-card className={className} style={{ "--card-delay": `${(index % 2) * 160}ms` } as CSSProperties}>{children}</div>;
}
