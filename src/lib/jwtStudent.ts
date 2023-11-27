"use server";

import { signJwt } from "@/services/authService";

import prisma from "./prisma";

export async function jwtStudent(code: string) {
  const student = await prisma.student.findUnique({ where: { code } });
  if (!student) return null;
  return signJwt({ code }, { expiresIn: 15 * 60 });
}
