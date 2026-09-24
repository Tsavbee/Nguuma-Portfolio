import { Container } from "@/components/layout/Container";

export function Contact() {
	return (
		<section id="contact" className="dark-section relative isolate overflow-hidden border-t border-[var(--border)]" aria-labelledby="contact-title">
			<div className="section-image contact-network-image" aria-hidden="true" />
			<Container className="relative z-10 grid gap-12 py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end lg:gap-24 lg:py-32">
				<div>
					<p className="font-mono text-sm tracking-[0.16em] text-[var(--cyan)]">04.</p>
					<h2 id="contact-title" className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.06em] text-[var(--off-white)] sm:text-6xl">
						Let&apos;s build something meaningful.
					</h2>
					<p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
						I&apos;m always open to discussing new opportunities, interesting projects, or having a conversation about technology.
					</p>
					<a href="mailto:ntsavbee@gmail.com" className="mt-9 inline-flex border border-[var(--cyan)] px-5 py-3 text-sm font-medium text-[var(--cyan)] transition-colors hover:bg-[var(--cyan)] hover:text-[var(--graphite)]">
						Send an Email <span className="ml-3" aria-hidden="true">↗</span>
					</a>
				</div>

				<div className="space-y-4 border-l border-[var(--border)] pl-6 text-sm">
					<a className="block text-[var(--muted)] transition-colors hover:text-[var(--cyan)]" href="mailto:ntsavbee@gmail.com">Email <span className="ml-2 text-[var(--off-white)]">ntsavbee@gmail.com</span></a>
					<a className="block text-[var(--muted)] transition-colors hover:text-[var(--cyan)]" href="https://github.com/Tsavbee" target="_blank" rel="noreferrer">GitHub <span className="ml-2 text-[var(--off-white)]">↗</span></a>
					<a className="block text-[var(--muted)] transition-colors hover:text-[var(--cyan)]" href="https://www.linkedin.com/in/nguuma-tsavbee-982261422" target="_blank" rel="noreferrer">LinkedIn <span className="ml-2 text-[var(--off-white)]">↗</span></a>
				</div>
			</Container>
		</section>
	);
}
