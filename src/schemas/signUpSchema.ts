import { object, string, z } from "zod";

export const signUpSchema = object({
  email: string().email(),
  password: string(),
  role: z.enum(["COMPANY"]).optional(),
});
