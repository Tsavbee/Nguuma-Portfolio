import Image from "next/image";

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

				<div className="relative aspect-[4/5] w-full max-h-[560px] overflow-hidden rounded-lg border border-[rgba(99,230,226,0.22)] bg-[var(--graphite-soft)]">
					<Image
						src="/images/profile/Main Photo.png"
						alt="Nguuma Tsavbee"
						fill
						priority
						sizes="(max-width: 768px) 100vw, 45vw"
						className="object-cover object-center"
					/>
					<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(11,16,18,0.96)] via-[rgba(11,16,18,0.72)] to-transparent px-4 pb-4 pt-20 sm:px-5 sm:pb-5">
						<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--cyan)]">Focused on</p>
						<div className="mt-3 flex flex-wrap gap-2">
							{focusAreas.map((area) => (
								<span key={area} className="rounded-full border border-[rgba(99,230,226,0.38)] bg-[rgba(11,16,18,0.62)] px-2.5 py-1 text-[11px] leading-4 text-white backdrop-blur-sm">
									{area}
								</span>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
