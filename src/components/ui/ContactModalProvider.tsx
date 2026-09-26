"use client";

import { useCallback, useState, type ReactNode } from "react";
import { ContactModal } from "@/components/ui/ContactModal";
import { ContactModalContext } from "@/components/ui/ContactModalContext";

export function ContactModalProvider({ children }: { children: ReactNode }) {
	const [isContactOpen, setIsContactOpen] = useState(false);
	const openContactModal = useCallback(() => setIsContactOpen(true), []);
	const closeContactModal = useCallback(() => setIsContactOpen(false), []);

	return (
		<ContactModalContext.Provider value={{ isContactOpen, openContactModal, closeContactModal }}>
			{children}
			<ContactModal open={isContactOpen} onClose={closeContactModal} />
		</ContactModalContext.Provider>
	);
}
