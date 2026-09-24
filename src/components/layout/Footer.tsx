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
		<footer className="border-t border-[var(--border)]" aria-label="Footer">
			<Container className="py-10">
				<div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-xl font-semibold tracking-[-0.08em] text-[var(--cyan)]">NT.</p>
						<p className="mt-4 text-sm font-medium text-[var(--off-white)]">Nguuma Tsavbee</p>
						<p className="mt-1 text-sm text-[var(--muted)]">Computer Engineer <span aria-hidden="true">•</span> Backend Developer</p>
					</div>

					<div className="flex flex-col gap-5 text-sm md:items-end">
						<nav className="flex flex-wrap gap-x-5 gap-y-2 text-[var(--muted)]" aria-label="Footer navigation">
							{navigation.map((link) => <a key={link.label} className="transition-colors hover:text-[var(--off-white)]" href={link.href}>{link.label}</a>)}
						</nav>
						<nav className="flex flex-wrap gap-x-5 gap-y-2 text-[var(--muted)]" aria-label="Social links">
							{socials.map((link) => <a key={link.label} className="transition-colors hover:text-[var(--cyan)]" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{link.label} <span aria-hidden="true">↗</span></a>)}
						</nav>
					</div>
				</div>
				<p className="mt-10 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted)]">© {new Date().getFullYear()} Nguuma Tsavbee</p>
			</Container>
		</footer>
	);
}
