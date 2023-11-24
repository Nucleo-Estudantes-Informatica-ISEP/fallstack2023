import prisma from "./prisma";

export async function isSaved(uid: number, code: string) {
  const s = await prisma.savedStudent.findMany({
    where: {
      AND: [{ savedById: uid }, { student: { code } }],
    },
  });

  return !!s.length;
}
