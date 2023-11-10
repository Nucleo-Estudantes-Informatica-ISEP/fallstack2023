import prisma from "./prisma";

export async function getStats(code: string): Promise<number[]> {
  const result = await prisma.savedStudent.groupBy({
    where: {
      student: {
        code: code,
      },
    },
    by: "isScanned",
    _count: {
      _all: true,
    },
  });

  return result.map((item) => item._count._all) as number[];
}

export async function getTodayStats(id: number): Promise<number> {
  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const numberOfSavedStudents = await prisma.savedStudent.groupBy({
    where: {
      studentId: id,
      createdAt: {
        gte: startOfDay,
      },
    },
    by: "isScanned",
    _count: {
      _all: true,
    },
  });

  return numberOfSavedStudents[1]?._count._all ?? 0;
}
