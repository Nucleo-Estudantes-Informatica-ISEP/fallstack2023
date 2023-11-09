import prisma from "./prisma";

export async function getStudent(code: string) {
  return await prisma.student.findUnique({
    where: {
      code: code,
    },
    include: {
      user: true,
      interests: true,
    },
  });
}
