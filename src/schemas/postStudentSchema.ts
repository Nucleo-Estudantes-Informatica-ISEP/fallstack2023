import { object, string, z } from "zod";

export const postStudentSchema = object({
  name: string(),
  bio: string().optional(),
  year: z.enum([
    "1º Ano Licenciatura",
    "2º Ano Licenciatura",
    "3º Ano Licenciatura",
    "1º Ano Mestrado",
    "2º Ano Mestrado",
  ]),
  interests: z.array(string()),
  avatar: string().uuid().optional(),
  cv: string().uuid().optional(),
});
