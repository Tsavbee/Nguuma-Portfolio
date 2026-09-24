import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { TechStack } from "@/components/projects/TechStack";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); return <main><ProjectHero project={project} /><ProjectSection title="About"><p>{project.description}</p><TechStack technologies={project.technologies} /></ProjectSection><ProjectSection title="Gallery"><ProjectGallery images={project.images} /></ProjectSection></main>; }
