import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
	return (
		<article className={`group border border-[var(--border)] bg-[var(--graphite-soft)] p-5 transition-colors hover:border-[rgba(99,230,226,0.4)] sm:p-6 ${project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-8" : ""}`}>
			<div className={`relative flex min-h-56 items-end overflow-hidden border border-[var(--border)] bg-[var(--graphite)] p-5 ${project.featured ? "lg:min-h-80" : ""}`}>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,230,226,0.12),transparent_38%)] opacity-80" />
				<span className="relative font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Project visual / pending</span>
			</div>

			<div className="flex flex-col pt-6 lg:pt-2">
				<div className="flex items-start justify-between gap-5">
					<div>
						<p className="font-mono text-xs tracking-[0.12em] text-[var(--cyan)]">{project.category}</p>
						<h3 className={`mt-3 font-semibold leading-tight tracking-[-0.04em] text-[var(--off-white)] ${project.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
							{project.title}
						</h3>
					</div>
					{project.featured && <span className="shrink-0 border border-[var(--cyan)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--cyan)]">Featured</span>}
				</div>

				<p className="mt-5 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

				<div className="mt-6 flex flex-wrap gap-2">
					{project.technologies.map((technology) => <span key={technology} className="border border-[var(--border)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--off-white)]">{technology}</span>)}
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
