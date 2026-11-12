export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  color: string;
  accentBg: string;
  iconName: string;
  deliverables: string[];
  metrics: string;
  tools: string[];
}

export const services: Service[] = [
  {
    id: "branding",
    number: "01",
    title: "Brand Strategy & Visual Identity",
    shortDesc: "Bold identities, explosive color systems, and distinctive guidelines that command category leadership.",
    fullDesc:
      "We build iconic brand systems that cut through corporate sameness. From naming and positioning to custom typography, color tokens, and motion guidelines, we make your brand unforgettable.",
    color: "#754BFF",
    accentBg: "rgba(117, 75, 255, 0.15)",
    iconName: "Palette",
    deliverables: [
      "Brand Positioning & Voice Guidelines",
      "Logo System & Iconography",
      "Typography & Color Hierarchy",
      "Packaging & Environmental Design",
      "Design System & Token Library",
    ],
    metrics: "Scope and success measures agreed before kickoff",
    tools: ["Figma", "Illustrator", "Photoshop", "After Effects", "Tokens Studio"],
  },
  {
    id: "web-design",
    number: "02",
    title: "Website Design & Development",
    shortDesc: "Hyper-fast, kinetic, accessible web playgrounds built with Next.js, WebGL, and micro-interactions.",
    fullDesc:
      "We design and engineer websites that feel alive. Forget static templates—we combine fluid layout geometry, kinetic scrolling, micro-interactions, and 3D graphics with rock-solid Next.js architecture.",
    color: "#62D9F5",
    accentBg: "rgba(98, 217, 245, 0.15)",
    iconName: "Laptop",
    deliverables: [
      "Custom Next.js & TypeScript Architecture",
      "Interactive 3D / WebGL Integration",
      "Mobile-First Responsive Engineering",
      "Headless CMS & E-Commerce Integration",
      "Core Web Vitals Review & Optimization",
    ],
    metrics: "Scope and success measures agreed before kickoff",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "GSAP / Motion"],
  },
  {
    id: "social-media",
    number: "03",
    title: "Social Media & Content",
    shortDesc: "Culture-first video production, TikTok/Reels orchestration, and community-driven organic hype.",
    fullDesc:
      "We create scroll-stopping social content engineered for algorithmic velocity. We don't post filler—we script, produce, and edit high-retention video content that turns casual viewers into brand evangelists.",
    color: "#FF6575",
    accentBg: "rgba(255, 101, 117, 0.15)",
    iconName: "Flame",
    deliverables: [
      "Short-Form Video Production (Reels/TikTok)",
      "Sound Design & Audio Trend Seeding",
      "Creator & Influencer Partnership Roster",
      "Editorial Content Calendar & Copy",
      "Community Moderation & Engagement",
    ],
    metrics: "Scope and success measures agreed before kickoff",
    tools: ["CapCut Pro", "Premiere", "After Effects", "TikTok Creative Center", "Sprout Social"],
  },
  {
    id: "performance-marketing",
    number: "04",
    title: "Performance Marketing & Paid Ads",
    shortDesc: "Goal-focused paid acquisition, conversion rate optimization, and relentless A/B creative testing.",
    fullDesc:
      "Creative is the new targeting. We combine bold, narrative-driven ad creatives with deep quantitative media buying across Meta, Google, TikTok, and YouTube to drive profitable customer acquisition at scale.",
    color: "#FFC247",
    accentBg: "rgba(255, 194, 71, 0.15)",
    iconName: "TrendingUp",
    deliverables: [
      "Paid Social Campaigns (Meta, TikTok, Pinterest)",
      "Google Search, YouTube & PMax Strategy",
      "Creative Fatigue Rotation & Testing",
      "Landing Page Funnel & CRO Audits",
      "Attribution Modeling & Real-Time Reporting",
    ],
    metrics: "Scope and success measures agreed before kickoff",
    tools: ["Meta Ads Manager", "Google Ads", "TripleWhale", "PostHog", "Klaviyo"],
  },
  {
    id: "motion-3d",
    number: "05",
    title: "3D Motion Graphics & Spatial Design",
    shortDesc: "Cinematic product visualizations, kinetic typography, and fluid visual effects that captivate.",
    fullDesc:
      "Bring your product concepts into hyper-realistic 3D space. From floating liquid textures and futuristic mechanics to playful character animation, our motion studio crafts eye-widening visual magic.",
    color: "#FF8CD5",
    accentBg: "rgba(255, 140, 213, 0.15)",
    iconName: "Sparkles",
    deliverables: [
      "Photorealistic 3D Product Renders",
      "Kinetic Typography Sequences",
      "Animated Brand Idents & Showreels",
      "Interactive 3D Assets for Web",
      "Holographic & 3D Billboard Content",
    ],
    metrics: "Scope and success measures agreed before kickoff",
    tools: ["Blender", "Cinema 4D", "Octane Render", "After Effects", "Spline"],
  },
  {
    id: "seo-strategy",
    number: "06",
    title: "SEO & Organic Search",
    shortDesc: "Data-driven programmatic SEO, technical site architecture, and authoritative editorial content.",
    fullDesc:
      "We build organic discovery engines that capture high-intent demand while you sleep. Combining technical performance, semantic topical authority, and PR link-earning campaigns.",
    color: "#C9F36D",
    accentBg: "rgba(201, 243, 109, 0.15)",
    iconName: "Compass",
    deliverables: [
      "Technical SEO & Core Web Vitals Auditing",
      "Programmatic Keyword Architecture",
      "High-Value Editorial Content Production",
      "Authoritative Digital PR & Backlink Strategy",
      "Local & International Multi-Region SEO",
    ],
    metrics: "Scope and success measures agreed before kickoff",
    tools: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog", "Schema.org"],
  },
];

export const pricingPlans = [
  {
    name: "Sprint",
    badge: "Fast Launch",
    price: "Custom quote",
    period: "one-off project",
    desc: "Perfect for fast-moving startups and product drops needing high-impact creative execution.",
    color: "#62D9F5",
    features: [
      "Targeted Creative Scope (e.g. Identity or Landing Page)",
      "Delivery timeline agreed in your proposal",
      "Dedicated Senior Designer & Developer",
      "Full Source Files & Asset Ownership",
      "Post-launch support scoped in your proposal",
    ],
  },
  {
    name: "Growth Partner",
    badge: "Most Popular",
    price: "Custom quote",
    period: "per month",
    desc: "Full-service creative, development, and marketing horsepower integrated seamlessly into your team.",
    color: "#754BFF",
    popular: true,
    features: [
      "Ongoing Multi-Discipline Execution (Design, Code, Ads, Social)",
      "Weekly Strategic Sprint Calls & Slack Channel",
      "Rapid Turnaround on Ad Creatives & Video Content",
      "Continuous Conversion Rate Optimization",
      "Priority Queue with Zero Friction",
    ],
  },
  {
    name: "Integrated Marketing",
    badge: "Full Transformation",
    price: "Custom",
    period: "tailored scope",
    desc: "Complete multi-market brand re-engineering, custom headless platforms, and omnichannel campaigns.",
    color: "#FF6575",
    features: [
      "End-to-End Brand Universe & Architecture",
      "Complex Custom 3D & Web Applications",
      "Global Paid Media Management & Retainers",
      "Executive Creative Direction & CMO Advisory",
      "Dedicated Multi-Disciplinary Studio Pod",
    ],
  },
];
