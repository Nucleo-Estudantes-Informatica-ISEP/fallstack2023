import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

interface StudentParams {
  params: {
    code: string;
  };
}

export async function GET(
  req: NextRequest,
  { params: { code } }: StudentParams
) {
  const session = await getServerSession();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "STUDENT" || session.student?.code !== code)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const result = await prisma.savedStudent.findMany({
    where: {
      studentId: session.student.id,
    },
    include: {
      student: true,
      savedBy: {
        include: {
          company: true,
        },
      },
    },
  });

  // Map the result to include company name for companies
  const mappedResult = result.map((savedStudent) => {
    const user = savedStudent.savedBy;

    // Check if the user is a company
    if (user.role === "COMPANY") {
      return {
        ...savedStudent,
        companyName: user.company?.name,
      };
    }

    return savedStudent;
  });

  return NextResponse.json(mappedResult);
}
