import { Role, User } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function userExists(email: string): Promise<boolean> {
  const user: User | null = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user ? true : false;
}

export async function createUser(
  email: string,
  password: string,
  role: Role
): Promise<User | null> {
  try {
    // create user
    const user: User = await prisma.user.create({
      data: {
        email: email,
        password: password,
        role: role,
      },
    });
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function createCode(
  entity: "STUDENT" | "COMPANY"
): Promise<string> {
  let code: string = "";
  let codeExists = true;
  let ent = null;

  while (codeExists) {
    code = generateRandomCode();

    if (entity === "STUDENT") {
      ent = await prisma.student.findUnique({
        where: {
          code: code,
        },
      });
    }else{
      ent = await prisma.company.findUnique({
        where: {
          slug: code,
        },
      });
    }

    codeExists = ent !== null;
  }

  return code;
}

function generateRandomCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  return code;
}