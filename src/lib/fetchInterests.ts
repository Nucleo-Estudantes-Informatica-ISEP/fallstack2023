import { Student } from "@prisma/client";

import prisma from "./prisma";

export async function getStudentInterests(student: Student) {
  return await prisma.student.findMany({
    where: {
      id: student.id,
    },
    select: {
      interests: true,
    },
  });
}
