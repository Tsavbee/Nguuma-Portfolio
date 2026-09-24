export async function sendContactEmail(input: { name: string; email: string; message: string }) {
  console.info("Contact message received", input.email);
  return { accepted: true };
}
