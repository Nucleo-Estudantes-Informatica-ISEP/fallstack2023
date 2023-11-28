import { object, string, z } from "zod";

export const signUpSchema = object({
  email: string().email(),
  password: string().min(8),
  role: z.enum(["COMPANY"]).optional(),
});
