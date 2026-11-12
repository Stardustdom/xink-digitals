"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

export default function ServiceRoadmap({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const steps = Array.from(root.querySelectorAll<HTMLElement>(".roadmap-step"));
    const svg = root.querySelector<SVGSVGElement>(".roadmap-svg")!;
    const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path"));
    const progressPath = svg.querySelector<SVGPathElement>(".roadmap-draw")!;
    const marker = root.querySelector<HTMLElement>(".roadmap-traveler")!;
    let length = 1;
    let checkpoints: number[] = [];
    let svgOffsetLeft = 0;
    const measure = () => {
      const height = root.clientHeight;
      const mobile = window.matchMedia("(max-width: 959px)").matches;
      const width = mobile ? 40 : 260;
      const x = mobile ? 20 : 130;
      const rBox = root.getBoundingClientRect();
      const sBox = svg.getBoundingClientRect();
      svgOffsetLeft = sBox.left - rBox.left;
      checkpoints = steps.map(step => {
        const checkpoint = step.querySelector<HTMLElement>(".roadmap-point")!;
        return step.offsetTop + checkpoint.offsetTop + checkpoint.offsetHeight / 2;
      });
      const points = checkpoints.concat(height);
      let d = `M ${x} 0`;
      let previousY = 0;
      points.forEach((y, index) => {
        const bend = mobile ? 4 : 60;
        const direction = index % 2 === 0 ? 1 : -1;
        const gap = y - previousY;
        d += ` C ${x + bend * direction} ${previousY + gap / 3}, ${x + bend * direction} ${previousY + gap * 2 / 3}, ${x} ${y}`;
        previousY = y;
      });
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      paths.forEach(path => path.setAttribute("d", d));
      length = progressPath.getTotalLength();
      progressPath.style.strokeDasharray = String(length);
    };
    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = root.getBoundingClientRect();
      const cursor = window.innerHeight * 0.72;
      const distance = Math.max(0, Math.min(bounds.height, cursor - bounds.top));
      let low = 0, high = length;
      for (let i = 0; i < 16; i++) {
        const midpoint = (low + high) / 2;
        if (progressPath.getPointAtLength(midpoint).y < distance) low = midpoint;
        else high = midpoint;
      }
      const traveled = preference.matches ? length : (low + high) / 2;
      progressPath.style.strokeDashoffset = String(length - traveled);
      const point = progressPath.getPointAtLength(traveled);
      marker.style.transform = `translate3d(${svgOffsetLeft + point.x}px, ${point.y}px, 0)`;
      marker.style.opacity = distance > 0 && distance < bounds.height ? "1" : "0";
      steps.forEach((step, index) => {
        const arrived = preference.matches || point.y >= checkpoints[index] - 90;
        step.dataset.arrived = String(arrived);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    root.dataset.roadMotion = "true";
    measure();
    update();
    const resize = new ResizeObserver(() => { measure(); schedule(); });
    resize.observe(root);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
      steps.forEach(step => {
        delete step.dataset.arrived;
      });
      delete root.dataset.roadMotion;
    };
  }, []);

  return <div ref={ref} className="service-roadmap mb-28">
    <svg className="roadmap-svg" aria-hidden="true" preserveAspectRatio="none">
      <defs><linearGradient id="service-road-gradient" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#754BFF"/><stop offset=".5" stopColor="#B48BFF"/><stop offset="1" stopColor="#FF6575"/></linearGradient></defs>
      <path className="roadmap-road-shadow" /><path className="roadmap-road" />
      <path className="roadmap-draw" /><path className="roadmap-lanes" />
    </svg>
    <div className="roadmap-traveler" aria-hidden="true"><span>{"\u2726"}</span></div>
    <div className="roadmap-start" aria-hidden="true"><span className="roadmap-eyebrow">YOUR NEXT BIG MOVE</span><strong>Different skills.<br/><em>One direction.</em></strong><span className="roadmap-scroll">SCROLL TO EXPLORE {"\u2193"}</span></div>
    {children}
    <span className="roadmap-finish" aria-hidden="true" />
  </div>;
}
