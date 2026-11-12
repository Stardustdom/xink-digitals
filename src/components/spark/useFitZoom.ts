"use client";

import { useEffect, type RefObject } from "react";

const MIN_ZOOM = 0.5;
const PAGE_MARGIN = 0;
const MAX_GROW = 1.9;

/*
  Shrinks `ref` (via CSS zoom) just enough that its parent <section> fits inside one screen height.
  Only applies on tablet/desktop widths; phones keep the normal stacked, scrolling layout.
*/
export function useFitZoom(ref: RefObject<HTMLElement | null>, grow = false) {
  useEffect(() => {
    const el = ref.current;
    const section = el?.closest("section") as HTMLElement | null;
    if (!el || !section) return;

    const fit = () => {
      el.style.zoom = "1";
      if (window.innerWidth < 1280) return;
      const target = window.innerHeight - PAGE_MARGIN;
      const fits = (z: number) => {
        el.style.zoom = String(z);
        return section.getBoundingClientRect().height <= target + 1;
      };
      // Largest zoom (MIN_ZOOM..max) at which the whole section still fits in one screen
      let lo = MIN_ZOOM;
      let hi = grow ? MAX_GROW : 1;
      if (fits(hi)) return;
      for (let i = 0; i < 10; i++) {
        const mid = (lo + hi) / 2;
        if (fits(mid)) lo = mid;
        else hi = mid;
      }
      el.style.zoom = String(lo);
    };

    fit();
    window.addEventListener("resize", fit);
    const t = setTimeout(fit, 400); // after fonts/images settle
    return () => {
      window.removeEventListener("resize", fit);
      clearTimeout(t);
    };
  }, [ref, grow]);
}
