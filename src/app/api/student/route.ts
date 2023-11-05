import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ZodError, object, string, number } from "zod";
import { userExists } from "../common";
import generateRandomCode from "@/utils/GenerateCode";

export async function POST(req: Request) {
  try {
    const studentSchema = object({
      userId: number(),
      year: number(),
      name: string(),
    });

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = studentSchema.parse(requestBody);
    // valid body
    const { userId, name, year } = body;

    // checks if user exists
    if (!(await userExists(userId))) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 401 }
      );
    }

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

    return NextResponse.json(
      { student: student },
      { status: 201 }
    );
  } catch (e) {
    if (e instanceof ZodError)
      return NextResponse.json({ error: e.errors }, { status: 400 });

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
