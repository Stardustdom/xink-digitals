export interface ClientLogo {
  name: string;
  logo: string;
  website: string;
}

export const clients: ClientLogo[] = [
  {
    name: "Tat Tvam Asi",
    logo: "/clients/tat-tvam-asi.png",
    website: "http://tat-tvam-asi.in/",
  },
  {
    name: "Poorba",
    logo: "/clients/poorba.png",
    website: "https://poorba.us/",
  },
  {
    name: "Doctor A2Z",
    logo: "/clients/doctor-a2z.png",
    website: "https://doctora2z.com/",
  },
  {
    name: "Delhi Rohini Puja Samiti",
    logo: "/clients/drps.png",
    website: "https://drps.org.in/",
  },
  {
    name: "Scholavar",
    logo: "/clients/scholavar.png",
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
