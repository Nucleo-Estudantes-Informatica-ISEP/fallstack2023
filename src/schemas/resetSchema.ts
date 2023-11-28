import { z } from "zod";

export const resetSchema = z.object({
  token: z.string(),
  password: z.string().min(8),
});
