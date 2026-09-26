"use client";

import Link from "next/link";
import { type RefObject, useEffect, useRef } from "react";

const navigationItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/#about" },
	{ label: "Projects", href: "/projects" },
	{ label: "Skills", href: "/#skills" }
];

type NavigationDrawerProps = {
	isOpen: boolean;
	onClose: () => void;
	onContact: () => void;
	triggerRef: RefObject<HTMLButtonElement | null>;
};

export function NavigationDrawer({ isOpen, onClose, onContact, triggerRef }: NavigationDrawerProps) {
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isOpen) return;

		const trigger = triggerRef.current;
		const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				event.preventDefault();
				onClose();
				return;
			}

			if (event.key !== "Tab") return;
			const focusable = document.querySelectorAll<HTMLElement>("#navigation-drawer a[href], #navigation-drawer button:not([disabled])");
			const first = focusable.item(0);
			const last = focusable.item(focusable.length - 1);

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last?.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first?.focus();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);
			(previouslyFocused ?? trigger)?.focus();
		};
	}, [isOpen, onClose, triggerRef]);

	return (
		<div className="navigation-drawer-layer" data-navigation-open={isOpen} aria-hidden={!isOpen}>
			<button type="button" tabIndex={-1} aria-hidden="true" onClick={onClose} className="navigation-drawer-backdrop" />
			<aside id="navigation-drawer" role="dialog" aria-label="Navigation" aria-modal={isOpen ? true : undefined} inert={!isOpen} className="navigation-drawer-panel">
				<div className="flex min-h-full flex-col px-6 pb-7 pt-6 sm:px-9 sm:pb-9 sm:pt-8">
					<div className="flex items-start justify-between border-b border-[var(--border)] pb-6">
						<div>
							<p className="text-lg font-semibold tracking-[-0.08em] text-[var(--cyan)]">NT.</p>
							<h2 className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Navigation</h2>
						</div>
						<button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close navigation" className="flex h-11 w-11 items-center justify-center border border-[var(--border)] text-xl text-[var(--muted)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]">
							<svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
								<path d="m3 3 10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
							</svg>
						</button>
					</div>

					<nav className="mt-5" aria-label="Site navigation">
						<ul>
							{navigationItems.map((item, index) => (
								<li key={item.label}>
									<Link href={item.href} onClick={onClose} style={{ "--navigation-delay": `${index * 35}ms` } as React.CSSProperties} className="navigation-drawer-item flex min-h-[4.25rem] items-center gap-5 border-b border-[var(--border)] text-2xl font-medium text-[var(--off-white)] transition-colors hover:text-[var(--cyan)] sm:min-h-[4.5rem] sm:text-3xl">
										<span className="w-6 font-mono text-[10px] text-[var(--cyan)]">0{index + 1}</span>{item.label}
									</Link>
								</li>
							))}
							<li>
								<button type="button" onClick={onContact} aria-haspopup="dialog" className="navigation-drawer-item flex min-h-[4.25rem] w-full items-center gap-5 border-b border-[var(--border)] text-left text-2xl font-medium text-[var(--off-white)] transition-colors hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)] sm:min-h-[4.5rem] sm:text-3xl" style={{ "--navigation-delay": "140ms" } as React.CSSProperties}>
									<span className="w-6 font-mono text-[10px] text-[var(--cyan)]">05</span>Contact
								</button>
							</li>
							<li>
								<a href="/documents/Nguuma_Tsavbee_CV.pdf" target="_blank" rel="noopener noreferrer" onClick={onClose} className="navigation-drawer-item flex min-h-[4.25rem] items-center gap-5 border-b border-[var(--border)] text-2xl font-medium text-[var(--off-white)] transition-colors hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)] sm:min-h-[4.5rem] sm:text-3xl" style={{ "--navigation-delay": "175ms" } as React.CSSProperties}>
									<span className="w-6 font-mono text-[10px] text-[var(--cyan)]">06</span>Resume <span aria-hidden="true" className="ml-auto text-sm text-[var(--muted)]">↗</span>
								</a>
							</li>
						</ul>
					</nav>

					<div className="mt-auto flex gap-6 pt-8 text-sm text-[var(--muted)]">
						<a href="https://github.com/Tsavbee" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)]">GitHub <span aria-hidden="true">↗</span></a>
						<a href="https://www.linkedin.com/in/nguuma-tsavbee-982261422" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)]">LinkedIn <span aria-hidden="true">↗</span></a>
					</div>
				</div>
			</aside>
		</div>
	);
}