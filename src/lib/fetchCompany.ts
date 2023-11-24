import prisma from "./prisma";

export async function getCompany(id: number) {
  return await prisma.company.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });
}
