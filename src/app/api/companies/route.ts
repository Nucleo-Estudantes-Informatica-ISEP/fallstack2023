import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { storage } from "@/lib/firebaseAdmin";
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
    const { name, tier, avatar } = body;

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

    let avatarUrl = null;
    if (avatar) {
      const uploaded = `uploaded/avatar/${avatar}`;

      const [exists] = await storage.bucket().file(uploaded).exists();
      if (!exists)
        return NextResponse.json(
          { error: "Invalid avatar upload id" },
          { status: 400 }
        );

      // move avatar to distribution
      const distribution = `distribution/avatar/${avatar}`;
      await storage.bucket().file(uploaded).move(distribution);

      // create a public accessible url
      const [meta] = await storage.bucket().file(distribution).makePublic();

      const { bucket, object } = meta;
      avatarUrl = `https://${bucket}.storage.googleapis.com/${object}`;
    }

    await prisma.company.update({
      data: { avatar: avatarUrl },
      where: { id: company.id },
    });

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

export async function GET() {
  const companies = await prisma.company.findMany({
    include: {
      user: true,
    },
  });

  return NextResponse.json(companies);
}
