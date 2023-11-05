import { object, string, number,z } from "zod";

export const postCompanySchema = object({
    userId: number(),
    name: string(),
    tier: z.enum(["DIAMOND", "GOLD", "SILVER", "BRONZE"]),
  });
