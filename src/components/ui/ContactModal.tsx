"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Container } from "@/components/layout/Container";

const initialForm = { name: "", email: "", subject: "", message: "", website: "" };

type ContactModalProps = {
	open: boolean;
	onClose: () => void;
};

function CircuitSendIcon() {
	return (
		<svg className="h-5 w-7 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" viewBox="0 0 28 20" fill="none" aria-hidden="true">
			<path d="M2 10h7l3-6h5l3 6h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
			<circle cx="2" cy="10" r="1.5" fill="currentColor" />
			<circle cx="17" cy="4" r="1.5" fill="currentColor" />
			<path d="m23 6 3 4-3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function SignalIcon() {
	return (
		<svg className="h-4 w-5 shrink-0 text-[var(--cyan)]" viewBox="0 0 20 16" fill="none" aria-hidden="true">
			<path d="M1.5 8h5l2-4h3l2 4h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
			<circle cx="1.5" cy="8" r="1.2" fill="currentColor" />
			<circle cx="18.5" cy="8" r="1.2" fill="currentColor" />
		</svg>
	);
}

function ContactBody({ standalone = false }: { standalone?: boolean }) {
	const [form, setForm] = useState(initialForm);
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
	const Heading = standalone ? "h1" : "h2";

	const updateField = (field: keyof typeof form, value: string) => {
		setForm((current) => ({ ...current, [field]: value }));
		if (status !== "idle" && status !== "sending") setStatus("idle");
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (status === "sending") return;
		setStatus("sending");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form)
			});

			if (!response.ok) throw new Error("Contact request failed");
			setForm(initialForm);
			setStatus("success");
		} catch {
			setStatus("error");
		}
	};

	return (
		<div>
			<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--cyan)]">Contact</p>
			<Heading id="contact-dialog-title" className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[var(--off-white)] sm:text-4xl">
				Let&apos;s build something meaningful.
			</Heading>
			<p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
				Have a project, opportunity, or idea in mind? Send me a message and I&apos;ll get back to you.
			</p>
			<p className="mt-5 inline-flex items-center gap-3 text-sm font-semibold leading-6 text-[var(--off-white)] sm:text-base">
				<span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true"><span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] opacity-40" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--cyan)]" /></span>
				Usually replies within 2 business days
			</p>

			<form className="mt-7" onSubmit={handleSubmit}>
				<div className="grid min-w-0 gap-x-7 gap-y-5 sm:grid-cols-2">
					<label className="flex min-w-0 flex-col gap-2 text-xs font-medium text-[var(--muted)]">
						Name
						<input required maxLength={100} name="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" className="w-full min-w-0 border-b border-[var(--border)] bg-transparent px-0 py-2.5 text-base text-[var(--off-white)] outline-none transition-colors focus:border-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]" />
					</label>
					<label className="flex min-w-0 flex-col gap-2 text-xs font-medium text-[var(--muted)]">
						Email
						<input required maxLength={254} type="email" name="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} autoComplete="email" className="w-full min-w-0 border-b border-[var(--border)] bg-transparent px-0 py-2.5 text-base text-[var(--off-white)] outline-none transition-colors focus:border-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]" />
					</label>
				</div>
				<label className="mt-5 flex min-w-0 flex-col gap-2 text-xs font-medium text-[var(--muted)]">
					Subject
					<input required maxLength={150} name="subject" value={form.subject} onChange={(event) => updateField("subject", event.target.value)} className="w-full min-w-0 border-b border-[var(--border)] bg-transparent px-0 py-2.5 text-base text-[var(--off-white)] outline-none transition-colors focus:border-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]" />
				</label>
				<label className="mt-5 flex min-w-0 flex-col gap-2 text-xs font-medium text-[var(--muted)]">
					Message
					<textarea required maxLength={5000} name="message" value={form.message} onChange={(event) => updateField("message", event.target.value)} className="min-h-24 w-full min-w-0 resize-y border-b border-[var(--border)] bg-transparent px-0 py-2.5 text-base text-[var(--off-white)] outline-none transition-colors focus:border-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]" />
				</label>
				<div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
					<label>Website<input name="website" value={form.website} onChange={(event) => updateField("website", event.target.value)} autoComplete="off" tabIndex={-1} /></label>
				</div>
				<div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
					<button type="submit" disabled={status === "sending"} className="group inline-flex min-h-11 items-center gap-3 border border-[var(--cyan)] px-5 py-3 text-sm font-medium text-[var(--cyan)] transition-colors hover:bg-[var(--cyan)] hover:text-[var(--graphite)] disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)]">
						<span>{status === "sending" ? "Sending..." : "Send message"}</span><CircuitSendIcon />
					</button>
					<p className="min-w-0 text-sm text-[var(--muted)]" aria-live={status === "error" ? "assertive" : "polite"} role={status === "error" ? "alert" : "status"}>
						{status === "success" && "Message sent successfully. I'll get back to you soon."}
						{status === "error" && "Unable to send your message right now. Please try again later."}
					</p>
				</div>
			</form>

			<div className="mt-7 border-t border-[var(--border)] pt-5">
				<p className="mb-3 text-xs font-medium text-[var(--muted)]">Or connect with me</p>
				<div className="flex flex-col gap-x-6 sm:flex-row sm:flex-wrap">
					<a className="inline-flex min-h-10 items-center gap-2 border-b border-[var(--border)] text-sm text-[var(--off-white)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)] sm:border-0" href="mailto:ntsavbee@gmail.com">
						<SignalIcon /><span>Email</span><span className="text-xs text-[var(--muted)]">ntsavbee@gmail.com</span>
					</a>
					<a className="inline-flex min-h-10 items-center gap-2 border-b border-[var(--border)] text-sm text-[var(--off-white)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)] sm:border-0" href="https://github.com/Tsavbee" target="_blank" rel="noopener noreferrer">
						<SignalIcon /><span>GitHub</span>
					</a>
					<a className="inline-flex min-h-10 items-center gap-2 border-b border-[var(--border)] text-sm text-[var(--off-white)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)] sm:border-0" href="https://www.linkedin.com/in/nguuma-tsavbee-982261422" target="_blank" rel="noopener noreferrer">
						<SignalIcon /><span>LinkedIn</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export function ContactModal({ open, onClose }: ContactModalProps) {
	const dialogRef = useRef<HTMLElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!open) return;

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

			if (event.key !== "Tab" || !dialogRef.current) return;
			const focusable = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])");
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
			previouslyFocused?.focus();
		};
	}, [open, onClose]);

	if (!open) return null;

	return createPortal(
		<div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[rgba(3,7,8,0.78)] p-3 backdrop-blur-[2px] sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
			<section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" tabIndex={-1} className="relative my-auto max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl overflow-y-auto rounded-md border border-[var(--border)] bg-[var(--graphite-soft)] p-5 shadow-2xl sm:max-h-[calc(100dvh-3rem)] sm:p-8">
				<button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close contact dialog" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-2xl leading-none text-[var(--muted)] transition-colors hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)] sm:right-5 sm:top-5">×</button>
				<div className="pr-10 sm:pr-12"><ContactBody /></div>
			</section>
		</div>,
		document.body
	);
}

export function ContactPageContent() {
	return (
		<main className="dark-section min-h-[calc(100svh-4rem)] py-10 sm:py-16">
			<Container>
				<div className="mx-auto max-w-2xl rounded-md border border-[var(--border)] bg-[var(--graphite-soft)] p-5 sm:p-8">
					<ContactBody standalone />
				</div>
			</Container>
		</main>
	);
}