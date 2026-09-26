import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ProjectSectionProps = {
	title: string;
	tone: "light" | "dark";
	children: React.ReactNode;
};

export function ProjectSection({ title, tone, children }: ProjectSectionProps) {
	const light = tone === "light";

	return (
		<section className={`${light ? "light-section" : "dark-section"} border-b ${light ? "border-[var(--light-border)]" : "border-[var(--border)]"}`} aria-labelledby={`project-${title.toLowerCase()}-title`}>
			<div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
				<ScrollReveal>
					<h2 id={`project-${title.toLowerCase()}-title`} className={`mb-9 text-4xl font-semibold leading-tight sm:mb-12 sm:text-5xl lg:text-6xl ${light ? "text-[var(--light-ink)]" : "text-[var(--off-white)]"}`}>
						{title}
					</h2>
				</ScrollReveal>
				<ScrollReveal delay={80}>{children}</ScrollReveal>
			</div>
		</section>
	);
}
