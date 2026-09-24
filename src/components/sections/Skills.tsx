import { skills } from "@/data/skills";
import { Container } from "@/components/layout/Container";

export function Skills() {
	return (
		<section id="skills" className="border-t border-[var(--border)]" aria-labelledby="skills-title">
			<Container className="py-24 lg:py-32">
				<div className="mb-12">
					<p className="font-mono text-sm tracking-[0.16em] text-[var(--cyan)]">03.</p>
					<h2 id="skills-title" className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[var(--off-white)] sm:text-5xl">
						Tools &amp; Technologies.
					</h2>
				</div>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{skills.map((group) => (
						<article key={group.name} className="border border-[var(--border)] bg-[var(--graphite-soft)] p-6">
							<h3 className="text-xl font-medium tracking-[-0.03em] text-[var(--off-white)]">{group.name}</h3>
							<ul className="mt-6 space-y-3 border-t border-[var(--border)] pt-5">
								{group.technologies.map((technology) => (
									<li key={technology} className="flex items-center gap-3 text-sm text-[var(--muted)]">
										<span className="h-1.5 w-1.5 bg-[var(--cyan)]" aria-hidden="true" />
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
