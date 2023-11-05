import { object, string, number } from "zod";

export const postStudentSchema = object({
    userId: number(),
    year: number().min(1).max(5),
    name: string(),
  });