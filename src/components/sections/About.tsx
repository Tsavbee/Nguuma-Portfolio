import { Container } from "@/components/layout/Container";

const focusLabels = ["Backend", "Security", "AI Integration", "IoT"];

export function About() {
	return (
		<section id="about" className="light-section relative isolate overflow-hidden border-t border-[var(--light-border)]" aria-labelledby="about-title">
			<div className="section-image about-network-image" aria-hidden="true" />
			<Container className="relative z-10 grid gap-12 py-24 lg:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] lg:gap-24 lg:py-32">
				<div>
					<p className="font-mono text-sm tracking-[0.16em] text-[var(--cyan-deep)]">01.</p>
					<h2 id="about-title" className="mt-8 max-w-md text-4xl font-semibold leading-tight tracking-[-0.06em] text-[var(--light-ink)] sm:text-5xl">
						Engineering for a safer, smarter world.
					</h2>
				</div>

				<div className="max-w-2xl text-base leading-7 text-[var(--light-muted)] sm:text-lg sm:leading-8">
					<p>
						I&apos;m Nguuma Tsavbee, a Computer Engineering graduate with interests in backend development, cybersecurity, AI integration, and IoT systems.
					</p>
					<p className="mt-6">
						My experience has taken me from supporting computer systems, networking, and troubleshooting in an ICT environment to building database-driven applications, REST APIs, security-focused backend systems, and connected IoT solutions.
					</p>
					<p className="mt-6">
						I&apos;m focused on continuous learning, building practical projects, and improving my understanding of how software, security, intelligent workflows, and connected devices work together.
					</p>

					<div className="mt-10 flex flex-wrap gap-3" aria-label="Areas of focus">
						{focusLabels.map((label) => (
							<span key={label} className="border border-[var(--light-border)] bg-white px-3 py-2 font-mono text-xs text-[var(--light-ink)]">
								{label}
							</span>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
