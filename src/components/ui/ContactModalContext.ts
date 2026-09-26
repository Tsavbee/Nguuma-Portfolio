"use client";

import { createContext, useContext } from "react";

export type ContactModalContextValue = {
	isContactOpen: boolean;
	openContactModal: () => void;
	closeContactModal: () => void;
};

export const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
	const context = useContext(ContactModalContext);
	if (!context) throw new Error("useContactModal must be used within ContactModalProvider");
	return context;
}
