import { NextRequest, NextResponse } from "next/server";

import { getStudent } from "@/lib/fetchStudent";
import prisma from "@/lib/prisma";
import { isSaved } from "@/lib/savedStudents";
import getServerSession from "@/services/getServerSession";
import { saveSchema } from "@/schemas/saveSchema";

interface SaveProps {
  params: {
    code: string;
  };
}

export async function POST(req: NextRequest, { params: { code } }: SaveProps) {
  const session = await getServerSession();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = saveSchema.safeParse(req.body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error });

  const student = await getStudent(code);
  if (!student)
    return NextResponse.json(
      { error: "Invalid student code" },
      { status: 400 }
    );

  if (await isSaved(session.id, code))
    return NextResponse.json({ error: "Already saved" }, { status: 409 });

  const save = await prisma.savedStudent.create({
    data: {
      studentId: student.id,
      savedById: session.id,
    },
  });

  if (!save)
    return NextResponse.json(
      { error: "Could not save student" },
      { status: 500 }
    );

  return NextResponse.json(save, { status: 201 });
}
