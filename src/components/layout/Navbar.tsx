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
		<header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(11,16,18,0.88)] backdrop-blur-md">
			<Container>
				<nav className="flex min-h-20 items-center justify-between gap-8" aria-label="Main navigation">
					<Link href="/" className="text-xl font-semibold tracking-[-0.08em] text-[var(--cyan)]" aria-label="Nguuma Tsavbee home">
						NT.
					</Link>

					<div className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
						{links.map((link) => (
							<Link key={link.href} href={link.href} className="transition-colors hover:text-[var(--off-white)]">
								{link.label}
							</Link>
						))}
					</div>

					<a
						href="/documents/nguuma-tsavbee-cv.pdf"
						className="border border-[var(--cyan)] px-4 py-2 text-sm font-medium text-[var(--cyan)] transition-colors hover:bg-[var(--cyan)] hover:text-[var(--graphite)]"
					>
						Resume
					</a>
				</nav>
			</Container>
		</header>
	);
}
