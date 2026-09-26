import { Container } from "./Container";

const navigation = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/#about" },
	{ label: "Projects", href: "/projects" },
	{ label: "Skills", href: "/#skills" },
	{ label: "Contact", href: "/#contact" }
];

const socials = [
	{ label: "GitHub", href: "https://github.com/Tsavbee" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/nguuma-tsavbee-982261422" },
	{ label: "Email", href: "mailto:ntsavbee@gmail.com" }
];

export function Footer() {
	return (
		<footer className="light-section relative isolate overflow-hidden border-t border-[var(--light-border)]" aria-label="Footer">
			<div className="section-image footer-network-image" aria-hidden="true" />
			<Container className="relative z-10 py-10">
				<div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-sm font-medium text-[var(--light-ink)]">© {new Date().getFullYear()} Nguuma Tsavbee</p>
						<p className="mt-2 text-sm text-[var(--light-muted)]">Built with curiosity.</p>
					</div>

					<div className="flex flex-col gap-5 text-sm md:items-end">
						<nav className="flex flex-wrap gap-x-5 gap-y-2 text-[var(--light-muted)]" aria-label="Footer navigation">
							{navigation.map((link) => <a key={link.label} className="transition-colors hover:text-[var(--light-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan-deep)]" href={link.href}>{link.label}</a>)}
						</nav>
						<nav className="flex flex-wrap gap-x-5 gap-y-2 text-[var(--light-muted)]" aria-label="Social links">
							{socials.map((link) => <a key={link.label} className="transition-colors hover:text-[var(--cyan-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan-deep)]" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>{link.label} <span aria-hidden="true">↗</span></a>)}
						</nav>
					</div>
				</div>
			</Container>
		</footer>
	);
}
