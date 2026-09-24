import { Container } from "@/components/layout/Container";

const focusAreas = ["Backend Development", "Cybersecurity", "AI Integration", "Internet of Things"];

export function Hero() {
	return (
		<section className="relative overflow-hidden" aria-labelledby="hero-title">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(42,185,186,0.12),transparent_28%)]" />
			<Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-24 lg:py-24">
				<div>
					<p className="mb-7 font-mono text-xs font-medium tracking-[0.18em] text-[var(--cyan)]">
						COMPUTER ENGINEER &amp; BACKEND DEVELOPER
					</p>
					<h1 id="hero-title" className="max-w-3xl text-6xl font-semibold leading-[0.92] tracking-[-0.08em] text-[var(--off-white)] sm:text-7xl lg:text-8xl">
						Nguuma
						<br />
						<span className="text-[var(--cyan)]">Tsavbee</span>
					</h1>
					<p className="mt-8 max-w-xl text-xl leading-relaxed text-[var(--off-white)] sm:text-2xl">
						Building practical systems across software, security, AI, and connected devices.
					</p>
					<p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted)]">
						Computer Engineering graduate focused on backend development, cybersecurity, AI integration, and IoT systems.
					</p>

					<div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
						<a className="transition-colors hover:text-[var(--cyan)]" href="https://github.com/Tsavbee" target="_blank" rel="noreferrer">
							GitHub <span aria-hidden="true">↗</span>
						</a>
						<a className="transition-colors hover:text-[var(--cyan)]" href="https://www.linkedin.com/in/nguuma-tsavbee-982261422" target="_blank" rel="noreferrer">
							LinkedIn <span aria-hidden="true">↗</span>
						</a>
						<a className="transition-colors hover:text-[var(--cyan)]" href="mailto:ntsavbee@gmail.com">
							Email <span aria-hidden="true">↗</span>
						</a>
					</div>
				</div>

				<div className="relative min-h-[360px] border border-[var(--border)] bg-[var(--graphite-soft)] p-5 sm:min-h-[460px]">
					<div className="absolute inset-5 border border-dashed border-[rgba(99,230,226,0.26)]" />
					<div className="absolute left-10 top-10 h-2 w-2 bg-[var(--cyan)] shadow-[0_0_24px_var(--cyan)]" />
					<div className="absolute bottom-10 right-10 h-2 w-2 bg-[var(--cyan)] shadow-[0_0_24px_var(--cyan)]" />
					<div className="relative flex h-full flex-col justify-between p-5">
						<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Profile image / pending</span>
						<div className="max-w-xs self-end border-l border-[var(--cyan)] pl-4">
							<p className="font-mono text-xs leading-6 text-[var(--muted)]">A space reserved for a portrait or visual identity study.</p>
						</div>
					</div>
				</div>
			</Container>

			<Container className="relative border-t border-[var(--border)] py-8">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{focusAreas.map((area, index) => (
						<div key={area} className="flex items-start gap-3 text-sm text-[var(--muted)]">
							<span className="font-mono text-xs text-[var(--cyan)]">0{index + 1}</span>
							<span>{area}</span>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
