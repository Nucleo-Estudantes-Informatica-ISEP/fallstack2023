import { Student } from "@prisma/client";

import prisma from "./prisma";

export async function getAvatar(student: Student) {
  return await prisma.student.findUnique({
    where: {
      id: student.id,
    },
    select: {
      avatar: true,
    },
  });
}
