import Link from "next/link";
import { Container } from "./Container";

const links = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/#about" },
	{ label: "Projects", href: "/projects" },
	{ label: "Skills", href: "/#skills" },
	{ label: "Contact", href: "/contact" }
];

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(11,16,18,0.96)]">
			<Container>
				<nav className="flex min-h-16 items-center gap-6" aria-label="Main navigation">
					<Link href="/" className="shrink-0 text-lg font-semibold tracking-[-0.08em] text-[var(--cyan)]" aria-label="Nguuma Tsavbee home">
						NT.
					</Link>

					<div className="ml-auto flex items-center gap-5 overflow-x-auto whitespace-nowrap text-xs text-[var(--muted)] sm:gap-6 sm:text-sm">
						{links.map((link) => (
							<Link key={link.href} href={link.href} className="shrink-0 transition-colors hover:text-[var(--off-white)]">
								{link.label}
							</Link>
						))}
					</div>

					<a
						href="/documents/nguuma-tsavbee-cv.pdf"
						className="shrink-0 border border-[var(--cyan)] px-3 py-2 text-xs font-medium text-[var(--cyan)] transition-colors hover:bg-[var(--cyan)] hover:text-[var(--graphite)] sm:px-4 sm:text-sm"
					>
						Resume
					</a>
				</nav>
			</Container>
		</header>
	);
}
