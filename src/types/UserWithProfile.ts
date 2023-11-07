import { Prisma } from "@prisma/client";

export type UserWithProfile = Prisma.UserGetPayload<{
  include: { company: true; student: true };
}>;
