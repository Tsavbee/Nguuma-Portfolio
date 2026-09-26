import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
	let body: unknown;

	try {
		body = await request.json();
	} catch {
		return NextResponse.json({ error: "Invalid contact details" }, { status: 400 });
	}

	const result = contactSchema.safeParse(body);
	if (!result.success || result.data.website) {
		return NextResponse.json({ error: "Invalid contact details" }, { status: 400 });
	}

	try {
		await sendContactEmail(result.data);
		return NextResponse.json({ accepted: true }, { status: 201 });
	} catch {
		return NextResponse.json({ error: "Unable to send your message right now. Please try again later." }, { status: 500 });
	}
}
