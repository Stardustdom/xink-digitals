# Client logos

Add approved company logos to this folder (SVG, PNG or WebP), then add entries in `src/data/clients.ts`.

```ts
export const clients: ClientLogo[] = [
  { name: "Company name", logo: "/clients/company.svg", website: "https://example.com" },
];
```

The website field is optional. Use transparent backgrounds and tightly cropped images. Cards adapt automatically to the number of clients. Fictional sample wordmarks disappear when the list has entries. Logos scroll in a continuous marquee, pause on hover or keyboard focus, and stay still for reduced-motion users. Only add logos you have permission to show.
