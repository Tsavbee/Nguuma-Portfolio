import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(5000),
  website: z.string().max(0).optional().default("")
});
