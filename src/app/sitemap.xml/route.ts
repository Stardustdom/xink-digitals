export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const host =
    request.headers.get("x-forwarded-host") ||
    request.headers.get("host") ||
    url.host;
  const proto = request.headers.get("x-forwarded-proto") || "https";
  const baseUrl = `${proto}://${host}`;
  const lastmod = "2026-11-16";

  const routes = [
    { path: "", priority: "1.0", freq: "weekly" },
    { path: "/services", priority: "0.95", freq: "weekly" },
    { path: "/work", priority: "0.9", freq: "weekly" },
    { path: "/about", priority: "0.8", freq: "monthly" },
    { path: "/faq", priority: "0.85", freq: "weekly" },
    { path: "/contact", priority: "0.85", freq: "monthly" },
    { path: "/privacy", priority: "0.3", freq: "yearly" },
    { path: "/terms", priority: "0.3", freq: "yearly" },
    { path: "/work/lumina-audio", priority: "0.85", freq: "monthly" },
    { path: "/work/volt-kicks", priority: "0.85", freq: "monthly" },
    { path: "/work/zenith-fintech", priority: "0.85", freq: "monthly" },
    { path: "/work/neon-district", priority: "0.85", freq: "monthly" },
    { path: "/work/pulse-energy", priority: "0.85", freq: "monthly" },
    { path: "/work/arc-studios", priority: "0.85", freq: "monthly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}
