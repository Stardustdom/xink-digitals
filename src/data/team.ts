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

export const clientLogos: { name: string; logo: string }[] = [];

export const awards: { year: string; award: string; org: string; project: string }[] = [];

export const testimonials: { quote: string; author: string; role: string; company: string; rating: number; highlight: string }[] = [];
