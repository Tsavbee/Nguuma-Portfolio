import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function generateStaticParams() {
	return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = projects.find((item) => item.slug === slug);
	if (!project) notFound();

	return (
		<main>
			<ProjectHero project={project} />
			<ProjectSection title="About" tone="light">
				<p className="max-w-3xl text-lg leading-8 text-[var(--light-ink)] sm:text-xl sm:leading-9">
					{project.description}
				</p>
			</ProjectSection>
			{project.images.length > 0 && (
				<ProjectSection title="Gallery" tone="dark">
					<ProjectGallery images={project.images} projectTitle={project.title} />
				</ProjectSection>
			)}
			<section className="light-section border-t border-[var(--light-border)]">
				<div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
					<ScrollReveal>
						<Link href="/projects" className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-[var(--light-ink)] transition-colors hover:text-[var(--cyan-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan-deep)]">
							<span aria-hidden="true">←</span> Back to projects
						</Link>
					</ScrollReveal>
					{project.github && (
						<ScrollReveal delay={80}>
							<a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--light-muted)] transition-colors hover:text-[var(--cyan-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan-deep)]">
								View source <span aria-hidden="true">↗</span>
							</a>
						</ScrollReveal>
					)}
				</div>
			</section>
		</main>
	);
}