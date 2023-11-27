import prisma from "./prisma";

export async function getStudents() {
  return await prisma.student.findMany({
    include: {
      user: {
        select: {
          email: true,
        },
      },
    },
  });
}
