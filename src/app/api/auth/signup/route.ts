import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ZodError} from "zod";
import bcrypt from "bcrypt";
import { signUpSchema } from "@/schemas/signUpSchema";

export async function POST(req: Request) {
  try {

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = signUpSchema.parse(requestBody);
    // valid body
    const { email, password, role } = body;

    // check if email is already being used
    const emailExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailExists) {
      return NextResponse.json(
        { message: "That email is already being used" },
        { status: 401 }
      );
    }

    // Hash the password before saving it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        role: role !== undefined ? "COMPANY" : "STUDENT",
      },
    });

    // check if user was created
    if (!user) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Signup successfully" },
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
