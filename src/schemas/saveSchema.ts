import { z } from "zod";

export const saveSchema = z.object({
  isScan: z.boolean(),
});
