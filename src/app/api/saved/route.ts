import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";
import { isSaved } from "@/lib/savedStudents";
import { verifyJwt } from "@/services/authService";
import getServerSession from "@/services/getServerSession";
import { saveSchema } from "@/schemas/saveSchema";

export async function POST(req: NextRequest) {
  const session = await getServerSession();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  const safeParse = saveSchema.safeParse(body);
  if (!safeParse.success)
    return NextResponse.json({ message: safeParse.error }, { status: 400 });

  const { token, code } = safeParse.data;

  let studentCode = code;
  if (token) {
    const decoded = verifyJwt(token) as { code: string };
    studentCode = decoded.code;
  }

  // check if student exists
  const student = await prisma.student.findUnique({
    where: { code: studentCode },
    include: { user: true },
  });

  if (!student)
    return NextResponse.json({ error: "Student not found" }, { status: 404 });

  // check if student is already scanned
  const history = await prisma.savedStudent.findFirst({
    where: { studentId: student.id, savedById: session.id },
  });

  if (history)
    return NextResponse.json(
      { error: "Student already scanned" },
      { status: 200 }
    );

  // create history
  const entry = await prisma.savedStudent.create({
    data: {
      studentId: student.id,
      savedById: session.id,
      isSaved: false,
    },
  });

  if (!entry)
    return NextResponse.json(
      { error: "Error creating history" },
      { status: 500 }
    );

  return NextResponse.json({ message: "Student scanned" }, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession();

  const body = await req.json();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "COMPANY" || !session.company)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const parsed = saveSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error });

  const { token, code } = parsed.data;

  let studentCode = code as string;
  if (token) {
    const decoded = verifyJwt(token) as { code: string };
    studentCode = decoded.code;
  }

  if (await isSaved(session.id, studentCode))
    return NextResponse.json({ error: "Already saved" }, { status: 409 });

  const student = await prisma.student.findUnique({ where: { code: studentCode } });

  if (!student)
    return NextResponse.json({ error: "Invalid student" }, { status: 400 });

  try {
    const result = await prisma.savedStudent.create({
      data: {
        savedById: session.id,
        studentId: student.id,
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
      return NextResponse.json({ error: "Error" }, { status: 500 });
    }
  }
}
