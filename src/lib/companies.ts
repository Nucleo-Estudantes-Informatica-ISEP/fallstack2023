import prisma from "./prisma";

export async function getCompanies() {
  return await prisma.company.findMany({
    include: {
      user: true,
    },
  });
}
