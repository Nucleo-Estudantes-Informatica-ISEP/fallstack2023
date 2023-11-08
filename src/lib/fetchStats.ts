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
