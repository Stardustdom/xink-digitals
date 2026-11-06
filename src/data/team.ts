export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  favoriteColor: string;
  superpower: string;
  avatar: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Aria Thorne",
    role: "Founder & Executive Creative Director",
    bio: "Ex-Pentagram & Wieden+Kennedy. Believes beige is a moral crime and kinetic typography is modern poetry.",
    favoriteColor: "#754BFF",
    superpower: "Turning dry briefs into award-winning spectacles",
    avatar: "AT",
  },
  {
    name: "Kai Nakamura",
    role: "Partner & Head of Creative Technology",
    bio: "WebGL wizard, creative coder, and shader obsessive. Specializes in building digital playgrounds that run at 120 FPS.",
    favoriteColor: "#62D9F5",
    superpower: "Making browsers do things they weren't meant to do",
    avatar: "KN",
  },
  {
    name: "Soren Patel",
    role: "Strategy & Culture Director",
    bio: "Culture archaeologist. Dissects TikTok algorithmic subcultures and translates internet phenomena into market share.",
    favoriteColor: "#FF6575",
    superpower: "Predicting the next cultural meme 3 weeks before Twitter",
    avatar: "SP",
  },
  {
    name: "Chloe Chen",
    role: "Principal Motion Designer & 3D Lead",
    bio: "Obsessed with physics simulations, kinetic branding, and organic gloss textures that you want to touch.",
    favoriteColor: "#FFC247",
    superpower: "Crafting hypnotic 3D eye candy",
    avatar: "CC",
  },
  {
    name: "Marcus Sterling",
    role: "Performance Media Architect",
    bio: "Data scientist turned ad creative strategist. Managed $50M+ in profitable ad spend across global DTC brands.",
    favoriteColor: "#C9F36D",
    superpower: "Engineering 8x ROAS campaigns without breaking a sweat",
    avatar: "MS",
  },
  {
    name: "Zoe Kalu",
    role: "Head of Client Experience & Production",
    bio: "Keeps wild creative energy synchronized with on-time delivery, crystal-clear roadmaps, and zero client friction.",
    favoriteColor: "#FF8CD5",
    superpower: "Zero delays, flawless delivery",
    avatar: "ZK",
  },
];

export const clientLogos = [
  { name: "Sony Music", logo: "SONY MUSIC" },
  { name: "RedBull Labs", logo: "RED BULL" },
  { name: "Hypebeast", logo: "HYPEBEAST" },
  { name: "Volt Kicks", logo: "VOLT" },
  { name: "Zenith Global", logo: "ZENITH" },
  { name: "Pulse Beverages", logo: "PULSE" },
  { name: "Lumina Labs", logo: "LUMINA" },
  { name: "Arc Studios", logo: "ARC FILM" },
  { name: "Neon District", logo: "NEON DIST" },
  { name: "Astra Bio", logo: "ASTRA" },
];

export const awards = [
  { year: "2026", award: "Site of the Year Nominee", org: "Awwwards", project: "Lumina Spatial" },
  { year: "2026", award: "Studio of the Year", org: "CSS Design Awards", project: "Xink Digitals" },
  { year: "2025", award: "Best Mobile Web Experience", org: "FWA of the Day", project: "Neon District" },
  { year: "2025", award: "Brand Identity of the Year", org: "Design Week Awards", project: "Zenith Fintech" },
  { year: "2025", award: "Social Campaign Gold", org: "Clio Awards", project: "Volt Sneaker Drop" },
  { year: "2024", award: "Webby Honoree", org: "The Webby Awards", project: "Arc Kinetic Showcase" },
];

export const testimonials = [
  {
    quote:
      "Working with Xink Digitals was like plugging our brand straight into 10,000 volts of creative lightning. They helped us break Kickstarter records and made us an overnight category leader.",
    author: "Julian Vance",
    role: "Co-Founder & Chief Product Officer",
    company: "Lumina Labs",
    rating: 5,
    highlight: "+182% Conversion Rate",
  },
  {
    quote:
      "We liquidated 15,000 pairs of sneakers in 14 minutes with zero paid media. Xink doesn't just make ads; they engineer cultural frenzy that people can't stop sharing.",
    author: "Maya Lin",
    role: "VP of Brand Marketing",
    company: "Volt Athletics",
    rating: 5,
    highlight: "45M Organic Views",
  },
  {
    quote:
      "Our old corporate website was putting customers to sleep. Xink turned our platform into a vibrant digital playground. App signups are up 340% and our Series B closed in record time.",
    author: "Marcus Sterling",
    role: "Chief Executive Officer",
    company: "Zenith Global Pay",
    rating: 5,
    highlight: "+340% App Signups",
  },
];
