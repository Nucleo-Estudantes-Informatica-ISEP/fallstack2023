import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { ZodError, object, string, z } from "zod";
import bcrypt from "bcrypt";
import { createUser, userExists, createCode } from "../common";

export async function POST(req: Request) {
  try {
    const authSchema = object({
      email: string().email(),
      password: string(),
      name: string(),
    });

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = authSchema.parse(requestBody);
    // valid body
    const { email, password, name } = body;

    // check if email is already being used
    if (await userExists(email)) {
      return NextResponse.json(
        { message: "That email is already being used" },
        { status: 401 }
      );
    }

    // Hash the password before saving it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const userCreated: User | null = await createUser(
      email,
      hashedPassword,
      "STUDENT"
    );

    // check if user was created
    if (!userCreated) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    // create code for student
    const code = await createCode();
    if (!code) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    // create student
    const student = await prisma.student.create({
      data: {
        name: name,
        code: code,
        year: new Date().getFullYear(),
        user: {
          connect: {
            id: userCreated.id,
          },
        },
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
