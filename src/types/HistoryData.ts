import { Prisma } from "@prisma/client";

export interface HistoryData {
  isSaved: boolean;
  createdAt: string;
  studentId: number;
  savedById: number;
  student: Prisma.StudentGetPayload<{ include: { interests: true } }>;
  savedBy: {
    company?: {
      name: string;
    };
    student?: {
      name: string;
    };
  };
}
