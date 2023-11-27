import { HttpError } from "@/types/HttpError";
import { SavedStudentWithSavedBy } from "@/types/SavedStudentWithSavedBy";
import getServerSession from "@/services/getServerSession";

import prisma from "./prisma";

const getCompanyHistory = async () => {
  const session = await getServerSession();

  if (!session) return new HttpError("Unauthorized", 401);

  if (session.role !== "COMPANY" || !session.company)
    return new HttpError("Forbidden", 403);

  const result = await prisma.savedStudent.findMany({
    where: {
      savedById: session.id,
    },
    include: {
      savedBy: {
        select: {
          company: true,
          student: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return result as SavedStudentWithSavedBy[];
};

export default getCompanyHistory;
