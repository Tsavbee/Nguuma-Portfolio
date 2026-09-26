import { Resend } from "resend";

type ContactEmailInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(input: ContactEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error("Contact email configuration is incomplete");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: input.email,
    subject: `Portfolio Contact: ${input.subject}`,
    text: [
      "Portfolio Contact Message",
      "",
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Subject: ${input.subject}`,
      "",
      "Message:",
      input.message
    ].join("\n")
  });

  if (error) throw new Error("Resend rejected the contact email");

  return { accepted: true };
}
