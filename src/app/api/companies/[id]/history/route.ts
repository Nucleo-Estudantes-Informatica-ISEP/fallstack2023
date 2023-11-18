import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

interface CompanyParams {
  params: {
    id: number;
  };
}

export async function GET(req: NextRequest, { params: { id } }: CompanyParams) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "COMPANY" || session.company?.id !== Number(id))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const result = await prisma.savedStudent.findMany({
    where: {
      companyId: session.company.id,
      isSaved: true,
    },
    include: {
      student: {
        select: {
          name: true,
          interests: {
            select: {
              name: true,
            },
          },
          code: true,
          cv: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(result);

  if (!result)
    return NextResponse.json({ error: "Student not found" }, { status: 404 });

  return NextResponse.json(result);
}
