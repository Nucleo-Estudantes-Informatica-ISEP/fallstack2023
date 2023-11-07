import { z } from "zod";

export const avatarSchema = z.object({
  uploadId: z.string().uuid(),
});
