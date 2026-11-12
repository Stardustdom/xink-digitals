import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyContent from "@/components/CaseStudyContent";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found — Xink Digitals" };

  return {
    title: `${project.title} — Case Study | Xink Digitals`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyContent project={project} />;
}
