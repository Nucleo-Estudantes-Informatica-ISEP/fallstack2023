import prisma from "./prisma";

export async function getStats(code: string): Promise<number[]> {
  const result = await prisma.savedStudent.groupBy({
    where: {
      student: {
        code: code,
      },
    },
    by: "isSaved",
    _count: {
      _all: true,
    },
  });

  result.sort(
    (a, b) => (a.isSaved === false ? -1 : 1) - (b.isSaved === false ? -1 : 1)
  );

  const counts = [0, 0];

  result.forEach((item) => {
    const index = item.isSaved === false ? 0 : 1;
    counts[index] = item._count._all;
  });

  return counts;
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
    by: "isSaved",
    _count: {
      _all: true,
    },
  });

  numberOfSavedStudents.sort(
    (a, b) => (a.isSaved === false ? -1 : 1) - (b.isSaved === false ? -1 : 1)
  );

  const counts = [0, 0];

  numberOfSavedStudents.forEach((item) => {
    const index = item.isSaved === false ? 0 : 1;
    counts[index] = item._count._all;
  });

  return counts[1];
}

export async function getCompanyStats(id: number): Promise<number[]> {
  // const result = await prisma.savedStudent.groupBy({
  //   where: {
  //     company: {
  //       id: id,
  //     },
  //   },
  //   by: "isSaved",
  //   _count: {
  //     _all: true,
  //   },
  // });

  // result.sort(
  //   (a, b) => (a.isSaved === false ? -1 : 1) - (b.isSaved === false ? -1 : 1)
  // );

  // const counts = [0, 0];

  // result.forEach((item) => {
  //   const index = item.isSaved === false ? 0 : 1;
  //   counts[index] = item._count._all;
  // });

  // return counts;
  return Promise.resolve([0, 0])
}
