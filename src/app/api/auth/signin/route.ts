import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ZodError} from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AUTH_COOKIE_MAX_AGE, COOKIE_NAME } from "@/services/cookies";
import { signInSchema } from "@/schemas/signinSchema";

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

    // create token
    const token = jwt.sign(
      { userId: user.id, userRole: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // set cookie with token
    cookies().set({
      name: COOKIE_NAME,
      maxAge: AUTH_COOKIE_MAX_AGE,
      value: token,
      path: "/",
      sameSite: "strict",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

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
