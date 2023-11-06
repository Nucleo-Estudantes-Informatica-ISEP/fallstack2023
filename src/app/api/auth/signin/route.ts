import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { ZodError } from "zod";

import prisma from "@/lib/prisma";
import { setCookie, signJwt } from "@/services/authService";
import { signInSchema } from "@/schemas/signInSchema";

export async function POST(req: Request) {
  try {
    // check if JWT_SECRET is defined - TS is really annoying if I dont do this
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not defined");
    }

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = signInSchema.parse(requestBody);
    // valid body
    const { email, password } = body;

    // fetch user from database
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // compare password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const { id } = user;

    // create token
    const token = signJwt({ id });

    // set cookie with token
    setCookie(token);

    return NextResponse.json(
      { message: "Sign in successfully" },
      { status: 200 }
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
