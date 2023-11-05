import prisma from "@/lib/prisma";

export async function userExists(id: number): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user ? true : false;
}
