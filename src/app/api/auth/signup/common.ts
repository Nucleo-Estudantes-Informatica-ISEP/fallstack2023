import { User } from "@prisma/client";
import prisma from "@/lib/prisma";
import generateRandomCode from "@/utils/GenerateCode";

export async function userExists(id: number): Promise<boolean> {
  const user: User | null = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user ? true : false;
}

export async function createCode(): Promise<string> {
  let code: string = "";
  let codeExists = true;

  while (codeExists) {
    code = generateRandomCode();

    const student = await prisma.student.findUnique({
      where: {
        code: code,
      },
    });

    codeExists = student !== null;
  }

  return code;
}
