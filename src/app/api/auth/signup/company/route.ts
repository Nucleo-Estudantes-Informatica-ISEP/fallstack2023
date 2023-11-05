import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { ZodError, object, string, z } from "zod";
import bcrypt from "bcrypt";
import { createUser, userExists } from "../common";

export async function POST(req: Request) {
  try {
    const authSchema = object({
      email: string().email(),
      password: string(),
      name: string(),
      tier: z.enum(["DIAMOND", "GOLD", "SILVER", "BRONZE"]),
    });

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = authSchema.parse(requestBody);
    // valid body
    const { email, password, name, tier } = body;

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
      "COMPANY"
    );

    // check if user was created
    if (!userCreated) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    // create code for student
    // create student
    const company = await prisma.company.create({
      data: {
        name: name,
        user: {
          connect: {
            id: userCreated.id,
          },
        },
        tier: tier,
      },
    });

    // check if company was created
    if (!company) {
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
