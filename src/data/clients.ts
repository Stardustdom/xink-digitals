export interface ClientLogo {
  name: string;
  logo: string;
  website: string;
}

export const clients: ClientLogo[] = [
  {
    name: "Tat Tvam Asi",
    logo: "/clients/tat-tvam-asi.jpg",
    website: "http://tat-tvam-asi.in/",
  },
  {
    name: "Poorba",
    logo: "/clients/poorba.jpg",
    website: "https://poorba.us/",
  },
  {
    name: "Doctor A2Z",
    logo: "/clients/doctor-a2z.jpg",
    website: "https://doctora2z.com/",
  },
  {
    name: "Delhi Rohini Puja Samiti",
    logo: "/clients/drps.jpg",
    website: "https://drps.org.in/",
  },
  {
    name: "Scholavar",
    logo: "/clients/scholavar.jpg",
    website: "https://www.scholavar.com/",
  },
];

// Fictional brands for layout preview only; these are not client endorsements.
export const sampleClients = [
  { name: "Luma", mark: "◒", style: "font-light tracking-[0.1em]" },
  { name: "northstar", mark: "✳", style: "font-bold tracking-tight" },
  { name: "FORMA", mark: "◇", style: "font-semibold tracking-[0.15em]" },
  { name: "orbit", mark: "◎", style: "font-extrabold tracking-tight" },
  { name: "Bloom", mark: "✿", style: "font-medium tracking-tight" },
  { name: "MONO", mark: "▥", style: "font-black tracking-[0.12em]" },
];
