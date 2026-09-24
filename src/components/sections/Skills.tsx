import { skills } from "@/data/skills";
import { Container } from "@/components/layout/Container";

export function Skills() {
	return (
		<section id="skills" className="light-section relative isolate overflow-hidden border-t border-[var(--light-border)]" aria-labelledby="skills-title">
			<div className="section-image skills-network-image" aria-hidden="true" />
			<Container className="relative z-10 py-24 lg:py-32">
				<div className="mb-12">
					<p className="font-mono text-sm tracking-[0.16em] text-[var(--cyan)]">03.</p>
					<h2 id="skills-title" className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[var(--light-ink)] sm:text-5xl">
						Tools &amp; Technologies.
					</h2>
				</div>

				<div className="grid divide-y divide-[var(--light-border)] border-y border-[var(--light-border)] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
					{skills.map((group) => (
						<article key={group.name} className="p-6">
							<h3 className="text-xl font-medium tracking-[-0.03em] text-[var(--light-ink)]">{group.name}</h3>
							<ul className="mt-5 space-y-3">
								{group.technologies.map((technology) => (
									<li key={technology} className="flex items-center gap-3 text-sm text-[var(--light-muted)]">
										<span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-deep)]" aria-hidden="true" />
										{technology}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
