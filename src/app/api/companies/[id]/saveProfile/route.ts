import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

interface CompanyParams {
  params: {
    id: string;
  };
}

export async function POST(
  req: NextRequest,
  { params: { id } }: CompanyParams
) {
  const session = await getServerSession();

  const body = await req.json();

  console.log(body);

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "COMPANY" || session.company?.id !== Number(id))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const result = await prisma.savedStudent.create({
    data: {
      companyId: session.company.id,
      studentId: body.studentId,
      isSaved: true,
    },
  });

  return NextResponse.json(result);
}
