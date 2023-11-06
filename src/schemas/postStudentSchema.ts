import { object, string, number, z } from "zod";

export const postStudentSchema = object({
  userId: number(),
  year: z.enum(["1º Ano Licenciatura", "2º Ano Licenciatura", "3º Ano Licenciatura", "1º Ano Mestrado", "2º Ano Mestrado"]),
  name: string(),
});
