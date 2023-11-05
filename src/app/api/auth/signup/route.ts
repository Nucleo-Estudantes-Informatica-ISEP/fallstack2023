import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { ZodError, object, string } from "zod";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    // check if JWT_SECRET is defined - TS is really annoying if I dont do this
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not defined");
    }

    const authSchema = object({
      email: string().email(),
      password: string(),
      name: string(),
    });

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = authSchema.parse(requestBody);
    // valid body
    const { email, password } = body;

    // fetch user from database
    const existingUser: User | null = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // the email is already in use
    if (existingUser) {
      return NextResponse.json(
        { message: "That email is already being used" },
        { status: 401 }
      );
    }

    // Hash the password before saving it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user: User = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
    
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
