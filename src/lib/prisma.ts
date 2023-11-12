import { PrismaClient } from "@prisma/client";

// https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

function exclude<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([key]) => !keys.includes(key as K))
      .map(([key, value]) => [key, value])
  ) as Omit<T, K>;
}

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    model: {
      user: {
        async findUserWithProfile(id: number) {
          try {
            const user = await prisma.user.findUnique({
              where: { id },
              include: {
                company: true,
                student: { include: { interests: true } },
              },
            });
            if (!user) return null;
            return exclude(user, ["password"]);
          } catch (error) {
            console.log(error);
          }
        },
      },
    },
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
