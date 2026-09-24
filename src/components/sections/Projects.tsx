import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
	return (
		<section id="projects" className="dark-section relative isolate overflow-hidden border-t border-[var(--border)]" aria-labelledby="projects-title">
			<div className="section-image projects-network-image" aria-hidden="true" />
			<Container className="relative z-10 py-24 lg:py-32">
				<div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="font-mono text-sm tracking-[0.16em] text-[var(--cyan)]">02.</p>
						<h2 id="projects-title" className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[var(--off-white)] sm:text-5xl">
							Some Things I&apos;ve Built.
						</h2>
					</div>
					<p className="max-w-sm text-sm leading-6 text-[var(--muted)]">Selected work across software, security, and connected systems.</p>
				</div>

				<div className="relative z-10 grid gap-12">
					{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
				</div>
			</Container>
		</section>
	);
}
