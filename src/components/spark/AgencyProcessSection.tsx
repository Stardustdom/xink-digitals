"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Lightbulb, Rocket } from "lucide-react";

const steps = [
  { title: "Understand your business", text: "We start with your audience, offer and goals. Together, we identify what needs attention and agree the measures of success.", stage: "Discover", note: "Your goals set the direction", icon: Compass },
  { title: "Build a focused plan", text: "Get a clear scope covering channels, creative, budget and responsibilities. We agree what to launch first and what can wait.", stage: "Plan", note: "A shared roadmap to launch", icon: Lightbulb },
  { title: "Launch, learn, improve", text: "We review campaign performance, test new ideas and explain the next steps. Progress is measured against your goals, not just activity.", stage: "Grow", note: "Keep learning. Keep improving.", icon: Rocket },
];
const road = "M 24 350 C 200 230 390 230 580 320 S 960 410 1136 290";

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = ref.current;
    const canvas = section?.querySelector(".process-roadmap");
    const path = section?.querySelector<SVGPathElement>(".process-road-progress");
    const head = section?.querySelector<SVGGElement>(".process-road-head");
    if (!section || !canvas || !path || !head || !window.IntersectionObserver) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const stages = Array.from(section.querySelectorAll<HTMLElement>(".process-stage"));
    const strokes = section.querySelectorAll<SVGPathElement>("[data-road-draw]");
    const length = path.getTotalLength();
    // Find each junction on the real curve rather than estimating its distance.
    const junctions = stages.map((stage, i) => {
      const targetX = ((i + 0.5) / stages.length) * 1160;
      let lo = 0;
      let hi = length;
      for (let n = 0; n < 24; n++) {
        const mid = (lo + hi) / 2;
        if (path.getPointAtLength(mid).x < targetX) lo = mid;
        else hi = mid;
      }
      const distance = (lo + hi) / 2;
      stage.style.setProperty("--junction-y", `${path.getPointAtLength(distance).y}px`);
      return distance / length;
    });
    const journey = [
      { at: 0, progress: 0 },
      { at: 1400, progress: junctions[0] },
      { at: 3300, progress: junctions[0] },
      { at: 5600, progress: junctions[1] },
      { at: 7500, progress: junctions[1] },
      { at: 9800, progress: junctions[2] },
      { at: 11700, progress: junctions[2] },
      { at: 13100, progress: 1 },
    ];
    let frame = 0;
    let disposed = false;
    let started = false;
    let start: number | undefined;
    const finish = () => {
      cancelAnimationFrame(frame);
      section.dataset.roadmap = "complete";
      strokes.forEach(stroke => { stroke.style.strokeDashoffset = "0"; });
      stages.forEach(stage => { stage.dataset.reached = "true"; });
    };
    const tick = (now: number) => {
      if (disposed) return;
      start ??= now;
      const elapsed = Math.min(now - start, journey[journey.length - 1].at);
      const nextIndex = journey.findIndex(point => point.at > elapsed);
      if (nextIndex < 0) { finish(); return; }
      const previous = journey[nextIndex - 1];
      const next = journey[nextIndex];
      const t = (elapsed - previous.at) / (next.at - previous.at);
      const ease = t * t * (3 - 2 * t);
      const progress = previous.progress + (next.progress - previous.progress) * ease;
      strokes.forEach(stroke => { stroke.style.strokeDashoffset = String(1 - progress); });
      const point = path.getPointAtLength(progress * length);
      head.setAttribute("transform", `translate(${point.x} ${point.y})`);
      junctions.forEach((junction, i) => {
        if (progress >= junction - 0.00001 && stages[i].dataset.reached !== "true") {
          stages[i].dataset.reached = "true";
        }
      });
      frame = requestAnimationFrame(tick);
    };
    section.dataset.roadmap = "pending";
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      section.dataset.roadmap = "visible";
      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.18 });
    observer.observe(canvas);
    const onMotionChange = () => { if (motion.matches) finish(); };
    motion.addEventListener("change", onMotionChange);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <section ref={ref} id="process" aria-labelledby="process-heading" className="bg-white text-[#1B143F] px-6 py-20 sm:px-12 lg:px-20 xl:px-28 sm:py-28 overflow-hidden">
    <div className="max-w-[1200px] mx-auto">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6A38EB] mb-4">From brief to better decisions</p>
      <h2 id="process-heading" className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight">A clear process. At every step.</h2>
      <div className="flex flex-wrap items-center justify-between gap-3 mt-5 mb-8"><p className="text-base leading-relaxed text-[#5B5573]">A shared direction, from the first conversation to the next opportunity.</p><span className="xl:hidden inline-flex items-center gap-2 text-xs font-semibold text-[#6A38EB]">Swipe to explore <ArrowRight className="w-4 h-4" aria-hidden="true" /></span></div>
      <div className="process-scroll" tabIndex={0} role="region" aria-label="Our three-step process. Scroll horizontally to explore.">
        <div className="process-roadmap">
          <svg className="process-road" viewBox="0 0 1160 640" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="process-road-gradient" x1="0" y1="0" x2="1160" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#A378FA" /><stop offset=".5" stopColor="#6A38EB" /><stop offset="1" stopColor="#9D75F5" /></linearGradient>
              <filter id="process-road-blur" x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="7" /></filter>
              <mask id="process-road-reveal"><path data-road-draw d={road} pathLength={1} fill="none" stroke="white" strokeWidth="36" strokeLinecap="round" className="process-road-mask" /></mask>
            </defs>
            <path d={road} fill="none" stroke="#E8E1F8" strokeWidth="30" strokeLinecap="round" />
            <path data-road-draw className="process-road-halo" d={road} pathLength={1} fill="none" stroke="#9A6BFA" strokeWidth="42" strokeLinecap="round" filter="url(#process-road-blur)" />
            <path data-road-draw className="process-road-progress" d={road} pathLength={1} fill="none" stroke="url(#process-road-gradient)" strokeWidth="30" strokeLinecap="round" />
            <path className="process-road-dashes" d={road} fill="none" stroke="white" strokeOpacity=".85" strokeWidth="2" strokeDasharray="7 10" mask="url(#process-road-reveal)" />
            <g className="process-road-head" transform="translate(24 350)">
              <circle className="process-head-aura" r="20" fill="#A378FA" opacity=".8" filter="url(#process-road-blur)" />
              <circle r="9" fill="white" opacity=".95" /><circle r="4" fill="#6A38EB" />
            </g>
          </svg>
          <ol className="process-stages">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return <li key={step.title} className={`process-stage process-stage-${i + 1}`} style={{ "--step-index": i, "--junction-y": `${[271.53, 320, 368.47][i]}px` } as CSSProperties}>
                <article className="process-step-card">
                  <div className="process-checkpoint"><span>Step 0{i + 1}</span><Icon className="w-4 h-4" aria-hidden="true" /></div>
                  <div className="p-6"><h3 className="font-display font-bold text-xl mb-3">{step.title}</h3><p className="text-sm leading-relaxed text-[#5B5573]">{step.text}</p></div>
                </article>
                <span className="process-connector" aria-hidden="true" />
                <span className="process-node" aria-hidden="true"><span /></span>
                <div className="process-milestone" aria-hidden="true"><span className="process-milestone-icon"><Icon className="w-7 h-7" /></span><span className="font-display font-bold text-xl">{step.stage}</span><span className="text-xs text-[#655F7D] mt-2">{step.note}</span></div>
              </li>;
            })}
          </ol>
        </div>
      </div>
      <Link href="/faq" className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-[#6A38EB] hover:underline">Questions before we start? Read our FAQs <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
    </div>
  </section>;
}
