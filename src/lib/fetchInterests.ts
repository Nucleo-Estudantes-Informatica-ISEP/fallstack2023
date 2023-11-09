import { Student } from "@prisma/client";

import prisma from "./prisma";

export async function getStudentInterests(student: Student) {
  return await prisma.student.findUnique({
    where: {
      id: student.id,
    },
    select: {
      interests: true,
    },
  });
}
