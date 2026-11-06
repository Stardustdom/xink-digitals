"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest(".interactive-card") ||
        target?.closest("[role='button']")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    let animId: number;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animId = requestAnimationFrame(follow);
    };
    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer trailing ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out pointer-events-none ${
          isHovered
            ? "w-14 h-14 border-[#754BFF] bg-[#754BFF]/15 scale-125"
            : "w-8 h-8 border-[#FF8CD5]/50 bg-[#754BFF]/5"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 28 : 16)}px, ${
            trailingPos.y - (isHovered ? 28 : 16)
          }px, 0)`,
        }}
      />
      {/* Center dot */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-transform duration-75 ${
          isHovered ? "w-2.5 h-2.5 bg-[#C9F36D] scale-150" : "w-1.5 h-1.5 bg-[#FF6575]"
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 5 : 3)}px, ${
            position.y - (isHovered ? 5 : 3)
          }px, 0)`,
        }}
      />
    </div>
  );
}
