import { NextResponse } from "next/server";
import { ZodError } from "zod";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";
import { postStudentSchema } from "@/schemas/postStudentSchema";
import generateRandomCode from "@/utils/GenerateCode";

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    if (session.role !== "STUDENT" || session.student !== null)
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = postStudentSchema.parse(requestBody);

    // valid body
    const userId = session.id;
    const { name, year } = body;

    // create code for student
    let code: string = "";
    let codeExists = true;

    while (codeExists) {
      code = generateRandomCode();

      const student = await prisma.student.findUnique({
        where: {
          code: code,
        },
      });

      codeExists = student !== null;
    }

    // create student
    const student = await prisma.student.create({
      data: {
        name: name,
        code: code,
        user: {
          connect: {
            id: userId,
          },
        },
        year: year,
      },
    });

    // check if student was created
    if (!student) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    return NextResponse.json({ student: student }, { status: 201 });
  } catch (e) {
    if (e instanceof ZodError)
      return NextResponse.json({ error: e.errors }, { status: 400 });

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
