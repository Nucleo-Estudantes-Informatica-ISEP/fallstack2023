import { NextResponse } from "next/server";
import { ZodError } from "zod";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";
import { postCompanySchema } from "@/schemas/postCompanySchema";

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = postCompanySchema.parse(requestBody);

    // valid body
    const userId = session.id;
    const { name, tier } = body;

    // checks if company already exists
    const existingCompany = await prisma.company.findFirst({
      where: {
        userId: userId,
      },
    });

    if (existingCompany) {
      return NextResponse.json(
        { message: "Company already exists" },
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
