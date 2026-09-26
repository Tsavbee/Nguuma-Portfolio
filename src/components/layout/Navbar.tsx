"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { ContactModal } from "@/components/ui/ContactModal";

const links = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/#about" },
	{ label: "Projects", href: "/projects" },
	{ label: "Skills", href: "/#skills" },
	{ label: "Contact", href: "/contact" }
];

export function Navbar() {
	const [isContactOpen, setIsContactOpen] = useState(false);
	const closeContact = useCallback(() => setIsContactOpen(false), []);

	return (
		<header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(11,16,18,0.96)]">
			<Container>
				<nav className="flex min-h-16 items-center gap-6" aria-label="Main navigation">
					<Link href="/" className="shrink-0 text-lg font-semibold tracking-[-0.08em] text-[var(--cyan)]" aria-label="Nguuma Tsavbee home">
						NT.
					</Link>

					<div className="ml-auto flex items-center gap-5 overflow-x-auto whitespace-nowrap text-xs text-[var(--muted)] sm:gap-6 sm:text-sm">
						{links.map((link) => link.label === "Contact" ? (
							<button key={link.href} type="button" onClick={() => setIsContactOpen(true)} aria-haspopup="dialog" aria-expanded={isContactOpen} className="shrink-0 bg-transparent p-0 text-left transition-colors hover:text-[var(--off-white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)]">
								{link.label}
							</button>
						) : (
							<Link key={link.href} href={link.href} className="shrink-0 transition-colors hover:text-[var(--off-white)]">
								{link.label}
							</Link>
						))}
					</div>

					<a
						href="/documents/Nguuma_Tsavbee_CV.pdf"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open Nguuma Tsavbee resume in a new tab"
						className="inline-flex shrink-0 items-center gap-2 border border-[var(--cyan)] px-3 py-2 text-xs font-medium text-[var(--cyan)] transition-colors hover:bg-[var(--cyan)] hover:text-[var(--graphite)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)] sm:px-4 sm:text-sm"
					>
						<svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<path d="M4 1.75h5l3 3v9.5H4v-12.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
							<path d="M9 1.75v3h3M6 8h4M6 10.5h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<span>Resume</span>
					</a>
				</nav>
			</Container>
			<ContactModal open={isContactOpen} onClose={closeContact} />
		</header>
	);
}
