import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TechStack({ technologies }: { technologies: string[] }) {
	return (
		<ul className="flex flex-wrap gap-2.5" aria-label="Project technologies">
			{technologies.map((technology, index) => (
				<li key={technology}>
					<ScrollReveal delay={index * 45}>
						<span className="inline-flex min-h-9 items-center border border-[rgba(183,218,218,0.22)] px-3 py-1.5 text-xs leading-5 text-[var(--off-white)] sm:text-sm">
							{technology}
						</span>
					</ScrollReveal>
				</li>
			))}
		</ul>
	);
}
