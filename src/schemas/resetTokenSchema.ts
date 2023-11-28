import { z } from "zod";

export const resetTokenSchema = z.object({
  id: z.number(),
});
