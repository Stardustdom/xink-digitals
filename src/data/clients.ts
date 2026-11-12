export interface ClientLogo {
  name: string;
  logo: string;
  website?: string;
}

// Place approved logo files in public/clients, then add an entry here.
// Example: { name: "Company name", logo: "/clients/company.svg", website: "https://example.com" }
export const clients: ClientLogo[] = [];

// Fictional brands for layout preview only; these are not client endorsements.
export const sampleClients = [
  { name: "Luma", mark: "◒", style: "font-light tracking-[0.1em]" },
  { name: "northstar", mark: "✳", style: "font-bold tracking-tight" },
  { name: "FORMA", mark: "◇", style: "font-semibold tracking-[0.15em]" },
  { name: "orbit", mark: "◎", style: "font-extrabold tracking-tight" },
  { name: "Bloom", mark: "✿", style: "font-medium tracking-tight" },
  { name: "MONO", mark: "▥", style: "font-black tracking-[0.12em]" },
];
