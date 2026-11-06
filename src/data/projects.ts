export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "Branding" | "Social Media" | "Web Design" | "Motion" | "Advertising";
  secondaryCategories: string[];
  tagline: string;
  year: string;
  featured: boolean;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bgGlow: string;
  };
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  challenge: string;
  solution: string;
  results: string;
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const projects: Project[] = [
  {
    slug: "lumina-audio",
    title: "Lumina Spatial Audio",
    client: "Lumina Labs Inc.",
    category: "Branding",
    secondaryCategories: ["Web Design", "3D Experience"],
    tagline: "A 3D sonic identity and immersive web presence for spatial acoustic pioneers.",
    year: "2026",
    featured: true,
    colors: {
      primary: "#754BFF",
      secondary: "#C9F36D",
      accent: "#FF8CD5",
      bgGlow: "rgba(117, 75, 255, 0.25)",
    },
    metrics: [
      { label: "Pre-order Sales", value: "$4.8M", change: "+240% of target" },
      { label: "Avg Session Time", value: "4m 18s", change: "4.5x industry avg" },
      { label: "Conversion Rate", value: "6.2%", change: "+182% baseline" },
    ],
    challenge:
      "Lumina engineered proprietary acoustic drivers providing true 360-degree spatial audio. However, their existing brand identity felt like a dry medical hardware supplier rather than a consumer audio revolution.",
    solution:
      "We conceived an electric, multi-sensory brand universe centered around kinetic soundwaves, luminous iridescent hues, and a tactile WebGL experience that lets users test 3D audio directly in their browser.",
    results:
      "Within 72 hours of launch, the campaign reached front-page trending across tech media, broke Kickstarter pre-order records, and established Lumina as the definitive audiophile disruptor of 2026.",
    deliverables: [
      "Brand Identity & Sonic Logo",
      "Interactive 3D Web Experience",
      "Product Packaging Design",
      "Global Launch Film & 3D Renders",
      "Direct-to-Consumer E-Commerce Flow",
    ],
    testimonial: {
      quote:
        "Xink Digitals didn't just give us a logo—they captured the emotional feeling of sound itself. Our pre-orders blew past our 6-month goal in less than four days.",
      author: "Julian Vance",
      role: "Co-Founder & Chief Product Officer",
      company: "Lumina Labs",
    },
  },
  {
    slug: "volt-kicks",
    title: "Volt Kicks Viral Drop",
    client: "Volt Athletics",
    category: "Social Media",
    secondaryCategories: ["Motion", "Advertising"],
    tagline: "Viral TikTok and Reels launch generating 45M organic impressions and 100% sellout in 14 minutes.",
    year: "2026",
    featured: true,
    colors: {
      primary: "#FF6575",
      secondary: "#FFC247",
      accent: "#754BFF",
      bgGlow: "rgba(255, 101, 117, 0.25)",
    },
    metrics: [
      { label: "Organic Views", value: "45.2M", change: "100% unpaid viral" },
      { label: "Sold Out In", value: "14 Min", change: "15,000 pairs" },
      { label: "Blended ROAS", value: "8.4x", change: "During campaign" },
    ],
    challenge:
      "Volt developed a modular high-rebound running shoe but had to compete with heritage multi-billion dollar athletic giants with virtually zero traditional TV advertising budget.",
    solution:
      "We engineered a culture-first campaign: micro-drop teasers featuring 3D hyper-kinetic animation, community discord ciphers, and unboxing reaction clips paired with bespoke audio tracks that took over TikTok sound charts.",
    results:
      "The entire inventory of 15,000 sneaker pairs was liquidated in exactly 14 minutes and 32 seconds, with zero paid Google or Meta media—pure community fervor and viral motion craft.",
    deliverables: [
      "3D Kinetic Sneaker Animations",
      "TikTok & Reels Sound Creation",
      "Micro-Influencer Seeding Strategy",
      "Hype Drop Countdown Microsite",
      "Interactive Discord Community Engine",
    ],
    testimonial: {
      quote:
        "The hype was unlike anything we've ever witnessed. Xink turned our sneaker drop into the cultural event of the season.",
      author: "Maya Lin",
      role: "VP of Brand Marketing",
      company: "Volt Athletics",
    },
  },
  {
    slug: "zenith-fintech",
    title: "Zenith Neobank Rebrand",
    client: "Zenith Global Pay",
    category: "Branding",
    secondaryCategories: ["Web Design", "Mobile UI"],
    tagline: "Transforming a traditional B2B fintech into a vibrant, high-energy wealth platform for the next generation.",
    year: "2025",
    featured: true,
    colors: {
      primary: "#62D9F5",
      secondary: "#754BFF",
      accent: "#C9F36D",
      bgGlow: "rgba(98, 217, 245, 0.25)",
    },
    metrics: [
      { label: "App Signups", value: "+340%", change: "Within 60 days" },
      { label: "Deposit Volume", value: "$140M+", change: "Total locked" },
      { label: "App Store Rating", value: "4.9/5", change: "Over 24K reviews" },
    ],
    challenge:
      "Zenith possessed institutional-grade clearing infrastructure, but their corporate aesthetic made them invisible to digital-native founders, gig workers, and modern investors.",
    solution:
      "We stripped away the cold grey bank aesthetic and injected electric neon gradients, playful gamified cards, tactile micro-animations, and plain-English messaging that makes wealth building feel exhilarating.",
    results:
      "Organic customer acquisition skyrocketed by 340%, average account size expanded from $400 to $3,200, and Zenith closed their $40M Series B led by tier-1 global venture funds.",
    deliverables: [
      "Global Brand Guidelines",
      "Design System & UI Library",
      "iOS & Android App Redesign",
      "Marketing Website & Bento Grids",
      "Performance Ad Creative Suite",
    ],
    testimonial: {
      quote:
        "Xink Digitals helped us shed the stodgy corporate skin and step into our true identity. Our brand finally matches our engineering horsepower.",
      author: "Marcus Sterling",
      role: "Chief Executive Officer",
      company: "Zenith Global Pay",
    },
  },
  {
    slug: "neon-district",
    title: "Neon District Cyber-Retail",
    client: "Neon District Apparel",
    category: "Web Design",
    secondaryCategories: ["Advertising", "E-Commerce"],
    tagline: "An interactive editorial e-commerce universe bridging futuristic streetwear and interactive game aesthetics.",
    year: "2026",
    featured: true,
    colors: {
      primary: "#FF8CD5",
      secondary: "#62D9F5",
      accent: "#FF6575",
      bgGlow: "rgba(255, 140, 213, 0.25)",
    },
    metrics: [
      { label: "Checkout Conversion", value: "+215%", change: "Vs prior Shopify" },
      { label: "Average Order Value", value: "$182", change: "+44% growth" },
      { label: "Repeat Purchase Rate", value: "41.8%", change: "Industry leading" },
    ],
    challenge:
      "Neon District produces limited-edition techwear, but their default online storefront looked identical to thousands of cookie-cutter fast-fashion stores.",
    solution:
      "We built a high-speed Next.js headless storefront featuring interactive 360-degree garment inspection, a virtual neon showroom, and smooth animated checkout transitions with zero lag.",
    results:
      "Conversion doubled overnight, customer dwell time increased to over 5 minutes, and international orders surged to represent 55% of total gross merchandise volume.",
    deliverables: [
      "Custom Headless Next.js Storefront",
      "Interactive 3D Apparel Viewer",
      "High-ROAS Meta & TikTok Ads",
      "Dynamic Cart Gamification Engine",
      "Localized International Checkout",
    ],
    testimonial: {
      quote:
        "Our customers don't just shop on our site—they hang out there. Xink transformed our store into a digital flagship showroom.",
      author: "Sora Takahashi",
      role: "Creative Director",
      company: "Neon District",
    },
  },
  {
    slug: "pulse-energy",
    title: "Pulse Botanical Tonic Launch",
    client: "Pulse Beverages Group",
    category: "Advertising",
    secondaryCategories: ["Branding", "Packaging"],
    tagline: "Electric branding, packaging, and high-energy retail launch for an all-natural nootropic soda.",
    year: "2025",
    featured: true,
    colors: {
      primary: "#C9F36D",
      secondary: "#FFC247",
      accent: "#754BFF",
      bgGlow: "rgba(201, 243, 109, 0.25)",
    },
    metrics: [
      { label: "Retail Stores Stocked", value: "2,400+", change: "Nationwide rollout" },
      { label: "1st Month Units Sold", value: "350,000", change: "Fastest CPG launch" },
      { label: "Earned Media Value", value: "$1.8M", change: "PR & creator mentions" },
    ],
    challenge:
      "The functional beverage aisle is crowded with loud, chaotic neon cans. Pulse needed a look that stood out on grocery shelves while conveying clean, brain-boosting organic ingredients.",
    solution:
      "We engineered tactile matte-finish cans with pop-art botanical typography, paired with vibrant out-of-home billboards, playful 3D digital billboards in NYC & London, and targeted TikTok creator challenges.",
    results:
      "Pulse secured distribution in Whole Foods, Target, and Sprouts within 90 days of launch, beating initial sales projections by 320%.",
    deliverables: [
      "Packaging & Can Design (5 Flavors)",
      "Omnichannel Retail Launch Campaign",
      "Digital 3D Billboard Animations",
      "Creator Gifting Kits & Unboxing",
      "Direct-to-Consumer Subscription Portal",
    ],
    testimonial: {
      quote:
        "Every retailer buyer who saw the deck was hooked on the branding before even tasting the liquid. Xink delivered absolute gold.",
      author: "Elena Rostova",
      role: "Founder & CEO",
      company: "Pulse Beverages",
    },
  },
  {
    slug: "arc-studios",
    title: "Arc Kinetic Film Studio",
    client: "Arc Animation & Film",
    category: "Motion",
    secondaryCategories: ["Web Design", "Branding"],
    tagline: "Dynamic motion identity and portfolio experience showcasing Hollywood-grade VFX and 3D character design.",
    year: "2025",
    featured: true,
    colors: {
      primary: "#FFC247",
      secondary: "#FF6575",
      accent: "#62D9F5",
      bgGlow: "rgba(255, 194, 71, 0.25)",
    },
    metrics: [
      { label: "Inbound Lead Quality", value: "+400%", change: "Tier-1 enterprise briefs" },
      { label: "Industry Awards", value: "3 Awwwards", change: "Site of the Day" },
      { label: "Organic Backlinks", value: "1,200+", change: "Design press features" },
    ],
    challenge:
      "Arc creates world-class visual effects for blockbuster movies and game studios, but their existing portfolio was a slow Vimeo reel on a generic portfolio template.",
    solution:
      "We created a show-stopping dark-mode website powered by kinetic typography, smooth interactive scrubbing through VFX breakdowns, and an audio-reactive sound layer.",
    results:
      "The site won Site of the Day on Awwwards, FWA, and CSS Design Awards, directly yielding major new commercial contracts with Netflix and Riot Games.",
    deliverables: [
      "VFX Breakdown Interactive Player",
      "Kinetic Motion Design System",
      "Showreel Editing & Sound Design",
      "Full-Stack Next.js Portfolio Engine",
      "Global PR & Award Submissions",
    ],
    testimonial: {
      quote:
        "The site blew up across the international design community. It immediately positioned us in the top 1% of animation studios worldwide.",
      author: "Darius Vance",
      role: "Executive Creative Director",
      company: "Arc Animation",
    },
  },
];
