import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

interface CompanyParams {
  params: {
    id: number;
  };
}

export async function GET(
  req: NextRequest,
  { params: { id } }: CompanyParams
) {
  const session = await getServerSession();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "COMPANY" || session.company?.id !== id)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const result = await prisma.savedStudent.findMany({
    where: {
      companyId: session.company.id,
    },
    include: {
      student: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(result);
}
