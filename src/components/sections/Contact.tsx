"use client";

import { Container } from "@/components/layout/Container";
import { useContactModal } from "@/components/ui/ContactModalContext";

export function Contact() {
	const { openContactModal } = useContactModal();

	return (
		<section id="contact" className="dark-section relative isolate overflow-hidden border-t border-[var(--border)]" aria-labelledby="contact-title">
			<div className="section-image contact-network-image" aria-hidden="true" />
			<Container className="relative z-10 grid min-w-0 gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16 lg:py-24">
				<div>
					<p className="font-mono text-sm tracking-[0.16em] text-[var(--cyan)]">04.</p>
					<h2 id="contact-title" className="mt-2 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.06em] text-[var(--off-white)] sm:text-6xl">
						Let&apos;s build something meaningful.
					</h2>
					<p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
						Have a project, opportunity, or idea in mind? Send me a message and I&apos;ll get back to you.
					</p>
					<button type="button" onClick={openContactModal} aria-haspopup="dialog" className="mt-7 inline-flex min-h-11 items-center gap-3 border border-[var(--cyan)] px-5 py-3 text-sm font-medium text-[var(--cyan)] transition-colors hover:bg-[var(--cyan)] hover:text-[var(--graphite)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)]">Open contact form<span aria-hidden="true">+</span></button>
				</div>
				<div className="flex items-center gap-4 border-y border-[var(--border)] py-5 text-sm text-[var(--off-white)] sm:gap-6 sm:border-y-0 sm:border-l sm:pl-8">
					<span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true"><span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] opacity-40" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--cyan)]" /></span>
					<span className="font-semibold">Usually replies within 2 business days</span>
				</div>
			</Container>
		</section>
	);
}
