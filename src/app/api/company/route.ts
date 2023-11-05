import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { ZodError, object, string, number, z } from "zod";
import bcrypt from "bcrypt";
import { userExists } from "../common";

export async function POST(req: Request) {
  try {
    const companySchema = object({
      userId: number(),
      name: string(),
      tier: z.enum(["DIAMOND", "GOLD", "SILVER", "BRONZE"]),
    });

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = companySchema.parse(requestBody);
    // valid body
    const { userId, name, tier } = body;

    // checks if user exists
    if (!(await userExists(userId))) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 401 }
      );
    }

    // create company
    const company = await prisma.company.create({
      data: {
        name: name,
        user: {
          connect: {
            id: userId,
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

    return NextResponse.json({ company: company }, { status: 201 });
  } catch (e) {
    if (e instanceof ZodError)
      return NextResponse.json({ error: e.errors }, { status: 400 });

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
