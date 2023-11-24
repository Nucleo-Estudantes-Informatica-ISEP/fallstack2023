import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";
import { historySchema } from "@/schemas/historySchema";

export async function POST(req: NextRequest) {
  // const session = await getServerSession();

  // if (!session)
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // if (session.role !== "COMPANY" || !session.company)
  //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  // const body = await req.json();

  // const safeParse = historySchema.safeParse(body);
  // if (!safeParse.success)
  //   return NextResponse.json({ message: safeParse.error });

  // const { studentCode } = body;

  // // check if student exists
  // const student = await prisma.student.findUnique({
  //   where: { code: studentCode },
  //   include: {
  //     user: true,
  //   },
  // });

  // if (!student)
  //   return NextResponse.json({ error: "Student not found" }, { status: 404 });

  // // check if student is already scanned
  // const history = await prisma.savedStudent.findFirst({
  //   where: { studentId: student.id, companyId: session.company.id },
  // });

  // if (history)
  //   return NextResponse.json(
  //     { error: "Student already scanned" },
  //     { status: 200 }
  //   );

  // // create history
  // const entry = await prisma.savedStudent.create({
  //   data: {
  //     studentId: student.id,
  //     companyId: session.company.id,
  //   },
  // });

  // if (!entry)
  //   return NextResponse.json(
  //     { error: "Error creating history" },
  //     { status: 500 }
  //   );

  return NextResponse.json({ message: "Student scanned" }, { status: 201 });
}
