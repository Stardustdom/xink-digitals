import WaterButton from "@/components/WaterButton";
export const metadata = { title: "About | Xink Digitals", description: "Meet the approach behind Xink Digitals: focused strategy, thoughtful creative and clear digital marketing reporting." };
const values = [
  [
    "Start with the business",
    "Your audience, offer and goals guide the work. We choose channels because they serve a purpose, not because they are fashionable.",
    "circle",
  ],
  [
    "Discover niche",
    "We uncover high-intent audience pockets and underserved market segments where your business can build genuine authority rather than competing on price.",
    "hexagon",
  ],
  [
    "Competitor analysis",
    "We deconstruct competitor playbooks, traffic channels, keyword gaps and ad creative to spot market vulnerabilities and craft an unfair advantage.",
    "cross",
  ],
  [
    "Brand building",
    "From distinctive visual identity to crisp positioning, we build brand equity that makes your business instantly recognizable, valued and trusted.",
    "star",
  ],
  [
    "Make the message clear",
    "Useful content and thoughtful design help people understand what you offer, build genuine conviction and take the next step.",
    "square",
  ],
  [
    "Outreach",
    "Multi-channel engagement engineered to initiate high-value conversations, connect with key decision-makers and drive consistent pipeline growth.",
    "pill",
  ],
  [
    "Explain the numbers",
    "We focus reporting on agreed measures, discuss what the data can tell us and stay transparent about performance and strategic next steps.",
    "triangle",
  ],
  [
    "Build together",
    "A clear scope, shared priorities and direct feedback keep your team and ours moving in the same direction toward long-term scale.",
    "diamond",
  ],
];
const disciplines = [
  "Strategy",
  "Niche Discovery",
  "Brand Building",
  "Outreach",
  "Competitor Intel",
  "Content",
  "Paid media",
  "Reporting",
];
const glyphs = ["ab-g-circle", "ab-g-square", "ab-g-triangle", "ab-g-diamond"];

function Marquee() {
 const row = disciplines.concat(disciplines).map((word, i) => <span key={i} className="ab-marquee-item"><i className={`ab-glyph ${glyphs[i % glyphs.length]}`} aria-hidden="true" />{word}</span>);
 return <div className="ab-marquee" aria-hidden="true"><div className="ab-marquee-track">{row}{row}</div></div>;
}

export default function AboutPage() {
 return <main className="about-page page-glow bg-[#FFF9F1] text-[#1B143F] px-6 pt-36 pb-24 sm:px-16"><div className="max-w-6xl mx-auto">
 <header className="ab-hero">
  <div className="ab-shapes" aria-hidden="true">
   <span className="ab-ring" /><span className="ab-ring ab-ring-dash" /><span className="ab-square" /><span className="ab-tri" /><span className="ab-orb" /><span className="ab-dots" /><span className="ab-bar" />
  </div>
  <p className="ab-rise text-xs uppercase tracking-[0.2em] text-[#6A38EB] font-bold mb-4" style={{ "--d": "0ms" } as React.CSSProperties}>About Xink Digitals</p>
  <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.04]">
   <span className="ab-line"><span style={{ "--d": "120ms" } as React.CSSProperties}>Creative thinking.</span></span>
   <span className="ab-line"><span className="ab-grad" style={{ "--d": "300ms" } as React.CSSProperties}>A clear direction for growth.</span></span>
  </h1>
  <p className="ab-rise text-lg text-[#5B5573] leading-relaxed max-w-3xl mt-8" style={{ "--d": "520ms" } as React.CSSProperties}>Xink Digitals is a digital marketing agency bringing strategy, content, paid media and web design together. We help businesses communicate their value, reach relevant audiences and make informed marketing decisions.</p>
 </header>

 <Marquee />

 <section data-reveal className="ab-connect rounded-[2rem] p-8 sm:p-12 my-14">
  <div className="ab-connect-copy">
   <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">One plan. Connected work.</h2>
   <p className="leading-relaxed max-w-xl">A strong ad needs a useful landing page. A good website needs the right traffic. A memorable brand needs a consistent message. We look at how those pieces fit together, then build a practical plan around the work your business needs most.</p>
  </div>
  <div className="ab-venn" aria-hidden="true">
   <span className="ab-venn-a"><b>Ads</b></span><span className="ab-venn-b"><b>Pages</b></span><span className="ab-venn-c"><b>Brand</b></span>
  </div>
 </section>

 <h2 data-reveal className="font-display text-3xl sm:text-4xl font-bold mb-8">How we approach your work.</h2>
 <div className="grid sm:grid-cols-2 gap-6">{values.map(([title, text, shape], i) => <article data-reveal key={title} className="ab-card rounded-[2rem] bg-white border border-[#EDEDF5] p-8 sm:p-10">
  <span className="ab-card-line" aria-hidden="true" />
  <span className={`ab-card-shape ab-shape-${shape}`} aria-hidden="true" />
  <span className="ab-card-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
  <h3 className="relative font-display text-xl sm:text-2xl font-bold mb-4">{title}</h3><p className="relative text-sm text-[#5B5573] leading-relaxed">{text}</p>
 </article>)}</div>

 <WaterButton href="/contact" tone="purple" className="mt-12">Tell us what you&apos;re building ↗</WaterButton>
 </div></main>;
}
