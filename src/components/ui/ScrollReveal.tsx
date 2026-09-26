"use client";

import { isValidElement, type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
	const elementRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const isSmallItem = isValidElement(children) && children.type === "span";

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting);
		}, { threshold: 0, rootMargin: "48px 0px" });

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={elementRef}
			className={className}
			data-scroll-reveal={isVisible ? "visible" : "hidden"}
			data-scroll-reveal-kind={isSmallItem ? "item" : "content"}
			style={{ "--scroll-reveal-delay": `${isSmallItem ? delay * 1.5 : delay}ms` } as CSSProperties}
		>
			{children}
		</div>
	);
}