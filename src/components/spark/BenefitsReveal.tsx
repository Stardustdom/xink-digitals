"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFitZoom } from "./useFitZoom";

// Starts the heading animation when the heading scrolls into view, then reveals the rest of the content
export default function BenefitsReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);
  useFitZoom(ref);

  useEffect(() => {
    const target = ref.current?.querySelector("h2");
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-play={play ? "true" : "false"} className={`bh ${className ?? ""}`}>
      {children}
    </div>
  );
}
