import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { articles } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xinkdigitals.com";
  const staticDate = new Date("2026-10-30T00:00:00.000Z");

  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: staticDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: staticDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: staticDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
