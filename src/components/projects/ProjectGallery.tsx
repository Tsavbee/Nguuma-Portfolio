"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ProjectGalleryProps = {
	images: string[];
	projectTitle: string;
};

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const selectedImage = selectedIndex === null ? null : images[selectedIndex];

	useEffect(() => {
		if (selectedImage === null) return;

		const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				event.preventDefault();
				setSelectedIndex(null);
				return;
			}

			if (event.key !== "Tab") return;
			event.preventDefault();
			closeButtonRef.current?.focus();
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);
			previouslyFocused?.focus();
		};
	}, [selectedImage]);

	if (images.length === 0) return null;

	return (
		<>
			<div className="grid gap-5 sm:grid-cols-2 sm:gap-7">
				{images.map((image, index) => (
					<ScrollReveal key={image} delay={index * 90}>
						<button type="button" aria-label={`Open ${projectTitle} image ${index + 1} fullscreen`} aria-haspopup="dialog" onClick={() => setSelectedIndex(index)} className="group relative block aspect-[16/10] w-full overflow-hidden border border-[rgba(183,218,218,0.18)] bg-[var(--graphite-soft)] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)]">
							<Image src={image} alt={`${projectTitle} project screenshot ${index + 1}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none" />
						</button>
					</ScrollReveal>
				))}
			</div>
			{selectedImage !== null && createPortal(
				<div className="fixed inset-0 z-[110] flex items-center justify-center bg-[rgba(3,7,8,0.92)] p-3 backdrop-blur-sm sm:p-8" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedIndex(null); }}>
					<section role="dialog" aria-modal="true" aria-label={`${projectTitle} image viewer`} className="relative flex h-full max-h-[calc(100dvh-1.5rem)] w-full max-w-7xl items-center justify-center sm:max-h-[calc(100dvh-4rem)]">
						<button ref={closeButtonRef} type="button" onClick={() => setSelectedIndex(null)} aria-label="Close image viewer" className="absolute right-0 top-0 z-10 flex h-12 w-12 items-center justify-center border border-[rgba(183,218,218,0.28)] bg-[var(--graphite)] text-2xl text-[var(--off-white)] transition-colors hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]">×</button>
						<div className="relative h-full w-full">
							<Image src={selectedImage} alt={`${projectTitle} project screenshot ${(selectedIndex ?? 0) + 1}`} fill sizes="100vw" className="object-contain" priority />
						</div>
					</section>
				</div>,
				document.body
			)}
		</>
	);
}