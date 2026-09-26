import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { TechStack } from "@/components/projects/TechStack";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProjectHero({ project }: { project: Project }) {
	return (
		<header className="dark-section relative overflow-hidden border-b border-[var(--border)]">
			<div className="pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(183,218,218,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(183,218,218,0.08) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "linear-gradient(90deg, transparent, black 70%)" }} />
			<div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-12 lg:py-20">
				<div className="min-w-0">
					<ScrollReveal>
						<Link href="/projects" className="mb-12 inline-flex min-h-10 items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)] sm:mb-16">
							<span aria-hidden="true">←</span> Back to projects
						</Link>
						<p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[var(--cyan)]">Project <span className="mx-2 text-[var(--muted)]">/</span> {project.category}</p>
						<h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-[var(--off-white)] sm:text-6xl lg:text-7xl xl:text-8xl">{project.title}</h1>
						<p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">{project.summary}</p>
					</ScrollReveal>
					<ScrollReveal delay={100}>
						<div className="mt-10 border-t border-[var(--border)] pt-6">
							<p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Technologies</p>
							<TechStack technologies={project.technologies} />
						</div>
					</ScrollReveal>
				</div>
				<ScrollReveal delay={120}>
					<div className="relative aspect-[4/3] min-h-0 overflow-hidden border border-[rgba(183,218,218,0.18)] bg-[var(--graphite-soft)] lg:aspect-[5/4]">
						<Image src={project.cover} alt={`${project.title} project visual`} fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
					</div>
				</ScrollReveal>
			</div>
		</header>
	);
}
