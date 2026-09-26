"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { Container } from "./Container";
import { useContactModal } from "@/components/ui/ContactModalContext";
import { NavigationDrawer } from "./NavigationDrawer";

export function Navbar() {
	const { openContactModal } = useContactModal();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const closeMenu = useCallback(() => setIsMenuOpen(false), []);
	const openContactFromMenu = useCallback(() => {
		closeMenu();
		openContactModal();
	}, [closeMenu, openContactModal]);

	return (
		<>
			<header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(11,16,18,0.96)]">
				<Container>
					<nav className="flex min-h-16 items-center justify-between gap-6" aria-label="Main navigation">
						<Link href="/" className="shrink-0 text-lg font-semibold tracking-[-0.08em] text-[var(--cyan)]" aria-label="Nguuma Tsavbee home">
							NT.
						</Link>
						<button
							ref={menuButtonRef}
							type="button"
							aria-label="Open navigation"
							aria-expanded={isMenuOpen}
							aria-controls="navigation-drawer"
							onClick={() => setIsMenuOpen(true)}
							className="inline-flex min-h-10 items-center gap-2.5 rounded-sm border border-[rgba(99,230,226,0.42)] px-3 text-xs font-medium text-[var(--off-white)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)]"
						>
							<svg className="h-4 w-5 text-[var(--cyan)]" viewBox="0 0 20 16" fill="none" aria-hidden="true">
								<path d="M4 3h12M4 8h12M4 13h12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
								<circle cx="2.5" cy="3" r="1" fill="currentColor" />
								<circle cx="17.5" cy="8" r="1" fill="currentColor" />
								<circle cx="2.5" cy="13" r="1" fill="currentColor" />
							</svg>
							<span>Menu</span>
						</button>
					</nav>
				</Container>
			</header>
			<NavigationDrawer
				isOpen={isMenuOpen}
				onClose={closeMenu}
				onContact={openContactFromMenu}
				triggerRef={menuButtonRef}
			/>
		</>
	);
}
