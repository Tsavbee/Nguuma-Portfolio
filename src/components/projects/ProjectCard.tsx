"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);

	useEffect(() => {
		if (!isLightboxOpen) return;

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsLightboxOpen(false);
		};
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", closeOnEscape);

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", closeOnEscape);
		};
	}, [isLightboxOpen]);

	const isFeatured = project.featured;
	const isReversed = !isFeatured && index % 2 === 1;

	return (
		<article className={`group relative grid gap-8 border-t border-[var(--border)] pt-10 lg:items-center ${isFeatured ? "lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.85fr)] lg:gap-12 lg:pt-12" : "lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:gap-16"}`}>
			<div className={`relative overflow-hidden border-y border-[rgba(99,230,226,0.2)] bg-[var(--graphite-soft)] ${isFeatured ? "aspect-[16/10]" : "aspect-[16/9] lg:aspect-[5/3]"} ${isReversed ? "lg:order-2" : ""}`}>
				<button
					type="button"
					className="absolute inset-0 z-10 cursor-pointer"
					aria-label={`Open ${project.title} image`}
					onClick={() => setIsLightboxOpen(true)}
				/>
				<Image
					src={project.cover}
					alt={`${project.title} project preview`}
					fill
					sizes={isFeatured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 52vw, 100vw"}
					className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
					priority={isFeatured}
				/>
				<div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" aria-hidden="true" />
			</div>

			<div className={`flex flex-col ${isReversed ? "lg:order-1" : ""}`}>
				<div className="flex items-start justify-between gap-5">
					<div>
						<p className="font-mono text-xs tracking-[0.12em] text-[var(--cyan)]">{project.category}</p>
						<h3 className={`mt-3 font-semibold leading-tight tracking-[-0.04em] text-[var(--off-white)] ${isFeatured ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>
							{project.title}
						</h3>
					</div>
					{isFeatured && <span className="shrink-0 border border-[var(--cyan)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--cyan)]">Featured</span>}
				</div>

				<p className="mt-5 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

				<div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
					{project.technologies.map((technology) => <span key={technology} className="font-mono text-[11px] text-[var(--muted)]">{technology}</span>)}
				</div>

				<div className="mt-auto flex flex-wrap gap-5 pt-8 text-sm">
					<Link className="text-[var(--cyan)] transition-colors hover:text-[var(--off-white)]" href={`/projects/${project.slug}`}>
						View project <span aria-hidden="true">↗</span>
					</Link>
					{project.github && <a className="text-[var(--muted)] transition-colors hover:text-[var(--off-white)]" href={project.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
				</div>
			</div>

			{isLightboxOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(3,7,8,0.9)] p-4 sm:p-8"
					role="dialog"
					aria-modal="true"
					aria-label={`${project.title} image preview`}
					onMouseDown={() => setIsLightboxOpen(false)}
				>
					<button
						type="button"
						className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-[rgba(255,255,255,0.3)] bg-[rgba(11,16,18,0.72)] text-2xl text-[var(--off-white)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
						aria-label="Close image preview"
						onClick={() => setIsLightboxOpen(false)}
					>
						<span aria-hidden="true">×</span>
					</button>
					<div className="relative h-[min(82vh,900px)] w-[min(92vw,1400px)]" onMouseDown={(event) => event.stopPropagation()}>
						<Image src={project.cover} alt={`${project.title} project preview`} fill sizes="92vw" className="object-contain" />
					</div>
				</div>
			)}
		</article>
	);
}
