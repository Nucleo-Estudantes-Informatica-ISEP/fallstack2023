import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

export async function GET() {
  const session = await getServerSession();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "COMPANY" || !session.company)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const result = await prisma.savedStudent.findMany({
    where: {
      savedById: session.id,
    },
    include: {
      student: {
        select: {
          name: true,
          code: true,
        },
      },
      savedBy: {
        select: {
          id: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(result);
}
