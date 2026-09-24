import { Container } from "@/components/layout/Container";

const focusAreas = ["Backend Development", "Cybersecurity", "AI Integration", "Internet of Things"];

export function Hero() {
	return (
		<section className="dark-section relative isolate overflow-hidden" aria-labelledby="hero-title">
			<div className="hero-network-image" aria-hidden="true" />
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--graphite)_0%,rgba(11,16,18,0.94)_35%,rgba(11,16,18,0.38)_74%,rgba(11,16,18,0.72)_100%)]" aria-hidden="true" />
			<Container className="relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-14 py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-24 lg:py-24">
				<div>
					<p className="mb-8 font-mono text-[11px] font-medium tracking-[0.18em] text-[var(--cyan)]">
						COMPUTER ENGINEER &amp; BACKEND DEVELOPER
					</p>
					<h1 id="hero-title" className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.075em] text-[var(--off-white)] sm:text-7xl lg:text-[7.5rem]">
						Nguuma
						<br />
						Tsavbee
					</h1>
					<p className="mt-9 max-w-2xl text-xl leading-snug tracking-[-0.025em] text-[var(--off-white)] sm:text-2xl">
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

				<div className="relative aspect-[4/5] max-h-[560px] overflow-hidden border border-[var(--border)] bg-[var(--graphite-soft)] p-4 sm:p-5">
					<div className="hero-visual-grid absolute inset-4 border border-[rgba(99,230,226,0.2)] sm:inset-5" aria-hidden="true">
						<div className="hero-visual-line absolute left-[18%] top-[34%] w-[64%] rotate-[24deg]" />
						<div className="hero-visual-line absolute left-[26%] top-[58%] w-[54%] -rotate-[18deg]" />
						<div className="hero-visual-line absolute left-[50%] top-[22%] h-[54%] rotate-[14deg]" />
						<div className="hero-visual-node absolute left-[15%] top-[29%] h-3 w-3" />
						<div className="hero-visual-node absolute right-[17%] top-[27%] h-4 w-4 rounded-full" />
						<div className="hero-visual-node absolute left-[24%] bottom-[34%] h-3 w-3 rounded-full" />
						<div className="absolute left-[45%] top-[42%] h-16 w-16 rounded-full border border-[rgba(99,230,226,0.35)] sm:h-24 sm:w-24" />
						<div className="absolute left-[calc(50%-1px)] top-[calc(42%+2rem)] h-10 border-l border-[rgba(99,230,226,0.3)] sm:top-[calc(42%+3rem)] sm:h-14" />
					</div>
					<div className="relative flex h-full flex-col justify-between p-2 sm:p-3">
						<div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
							<span>System map</span>
							<span>01 / 04</span>
						</div>
						<div className="max-w-[13rem] self-end border-l border-[var(--cyan)] bg-[rgba(16,24,27,0.86)] py-3 pl-4">
							<p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--cyan)]">Focused on</p>
							<ul className="mt-3 space-y-1.5 text-xs leading-5 text-[var(--muted)]">
								{focusAreas.map((area) => <li key={area}>{area}</li>)}
							</ul>
						</div>
					</div>
				</div>
			</Container>

			<Container className="relative border-t border-[var(--border)] py-7">
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
