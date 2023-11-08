import { Student } from "@prisma/client";

import prisma from "./prisma";

export async function getStudentInterests(student: Student) {
  return await prisma.studentInterest.findMany({
    where: {
      studentId: student.id,
    },
    select: {
      interest: true,
    },
  });
}
