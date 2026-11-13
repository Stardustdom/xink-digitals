export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://xinkdigitals.com";

  const content = `User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

User-Agent: Googlebot
Allow: /
Disallow: /api/

User-Agent: Bingbot
Allow: /
Disallow: /api/

Host: ${baseUrl}
Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}
