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
      company: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json(result);
}
