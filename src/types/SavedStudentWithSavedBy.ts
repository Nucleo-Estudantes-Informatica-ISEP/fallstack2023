import { Prisma } from "@prisma/client";

export type SavedStudentWithSavedBy = Prisma.SavedStudentGetPayload<{
  include: { savedBy: { select: { company: true; student: true } } };
}>;
