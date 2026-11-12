"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

function MotionSurface({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const surface = ref.current;
    if (!surface) return;

    // Immediately reveal elements in or near the viewport with zero artificial delay
    const reveals = surface.querySelectorAll<HTMLElement>("[data-reveal]");
    reveals.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${(index % 3) * 30}ms`);
      if (element.getBoundingClientRect().top < window.innerHeight + 150) {
        element.dataset.revealed = "true";
      } else {
        element.dataset.revealed = "false";
      }
    });

    if (!window.IntersectionObserver) {
      reveals.forEach((el) => {
        el.dataset.revealed = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.dataset.revealed = "true";
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px 100px 0px" }
    );

    reveals.forEach((element) => {
      if (element.dataset.revealed !== "true") {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} className="page-motion">{children}</div>;
}

export default function PageMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (!["/services", "/work", "/contact", "/faq", "/about"].includes(pathname)) return children;
  return <MotionSurface key={pathname}>{children}</MotionSurface>;
}
