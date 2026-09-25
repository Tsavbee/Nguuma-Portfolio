import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
	return (
		<article className={`group relative grid gap-8 border-t border-[var(--border)] pt-8 transition-colors first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.78fr)] lg:items-center ${project.featured ? "lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]" : index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
			<div className={`relative overflow-hidden border border-[var(--border)] bg-[var(--graphite-soft)] ${project.featured ? "min-h-80" : ""}`}>
				<Image
					src={project.cover}
					alt={`${project.title} project preview`}
					width={1600}
					height={900}
					sizes="(min-width: 1024px) 60vw, 100vw"
					className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
					priority={project.featured}
				/>
				<div className="pointer-events-none absolute inset-0 bg-black/10" aria-hidden="true" />
			</div>

			<div className="flex flex-col lg:pt-2">
				<div className="flex items-start justify-between gap-5">
					<div>
						<p className="font-mono text-xs tracking-[0.12em] text-[var(--cyan)]">{project.category}</p>
						<h3 className={`mt-3 font-semibold leading-tight tracking-[-0.04em] text-[var(--off-white)] ${project.featured ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>
							{project.title}
						</h3>
					</div>
					{project.featured && <span className="shrink-0 border border-[var(--cyan)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--cyan)]">Featured</span>}
				</div>

				<p className="mt-5 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

				<div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
					{project.technologies.map((technology) => <span key={technology} className="font-mono text-[11px] text-[var(--muted)]">{technology}</span>)}
				</div>

				<div className="mt-auto flex flex-wrap gap-5 pt-8 text-sm">
					<Link className="text-[var(--cyan)] transition-colors hover:text-[var(--off-white)]" href={`/projects/${project.slug}`}>
						View project <span aria-hidden="true">↗</span>
					</Link>
					{project.github && <a className="text-[var(--muted)] transition-colors hover:text-[var(--off-white)]" href={project.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
				</div>
			</div>
		</article>
	);
}
