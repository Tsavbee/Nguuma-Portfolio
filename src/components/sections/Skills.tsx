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

				<div className="grid border-y border-[var(--light-border)] md:grid-cols-2 md:divide-x md:divide-[var(--light-border)] lg:grid-cols-3">
					{skills.map((group, index) => (
						<article key={group.name} className="border-b border-[var(--light-border)] py-7 first:pt-8 last:border-b-0 md:px-7 md:py-8 md:nth-[3n+1]:border-b-0 lg:px-8 lg:nth-[3n+1]:border-b-0 lg:nth-[3n+2]:border-b-0">
							<div className="flex items-baseline gap-3">
								<span className="font-mono text-[10px] tracking-[0.16em] text-[var(--cyan-deep)]">0{index + 1}</span>
								<h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--light-ink)]">{group.name}</h3>
							</div>
							<ul className="mt-5 grid gap-x-5 gap-y-2.5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
								{group.technologies.map((technology) => (
									<li key={technology} className="group/item flex items-center gap-2.5 text-sm text-[var(--light-muted)] transition-colors hover:text-[var(--light-ink)]">
										<span className="h-px w-3 bg-[var(--cyan-deep)] transition-all group-hover/item:w-5" aria-hidden="true" />
										<span>{technology}</span>
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
