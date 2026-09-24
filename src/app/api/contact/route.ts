import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";
export async function POST(request: Request) { const result = contactSchema.safeParse(await request.json()); if (!result.success) return NextResponse.json({ error: "Invalid contact details" }, { status: 400 }); await sendContactEmail(result.data); return NextResponse.json({ accepted: true }, { status: 201 }); }
