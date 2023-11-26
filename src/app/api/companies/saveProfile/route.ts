import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

export async function POST(req: NextRequest) {
  const session = await getServerSession();

  const body = await req.json();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "COMPANY" || !session.company)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    await prisma.savedStudent.create({
      data: {
        savedById: session.id,
        studentId: body.studentId,
        isSaved: false,
      },
    });

    const result = await prisma.savedStudent.create({
      data: {
        savedById: session.id,
        studentId: body.studentId,
        isSaved: true,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      // P2002 is the Prisma error code for unique constraint violation
      return NextResponse.json(
        { error: "Student already saved" },
        { status: 400 }
      );
    } else {
      console.log(error);
      return NextResponse.json({ error: "Error" }, { status: 500 });
    }
  }
}
