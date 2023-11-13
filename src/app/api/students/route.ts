import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { storage } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";
import { postStudentSchema } from "@/schemas/postStudentSchema";
import generateRandomCode from "@/utils/GenerateCode";

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    if (session.role !== "STUDENT" || session.student !== null)
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    // validate the request body against the schema
    const requestBody = await req.json();
    const body = postStudentSchema.parse(requestBody);

    // valid body
    const userId = session.id;
    const { name, year, avatar, cv } = body;

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

    const uploaded = `uploaded/avatar/${avatar}`;

    const [exists] = await storage.bucket().file(uploaded).exists();
    if (!exists)
      return NextResponse.json({ error: "Invalid upload id" }, { status: 404 });

    let avatarUrl = null;
    if (avatar) {
      // move avatar to distribution
      const distribution = `distribution/avatar/${avatar}`;
      await storage.bucket().file(uploaded).move(distribution);

      // create a public accessible url
      const [meta] = await storage.bucket().file(distribution).makePublic();

      const { bucket, object } = meta;
      avatarUrl = `https://${bucket}.storage.googleapis.com/${object}`;
    }

    if (cv) {
      const uploaded = `uploaded/cv/${cv}`;

      const [cvExists] = await storage.bucket().file(uploaded).exists();
      if (!cvExists)
        return NextResponse.json(
          { error: "Invalid CV upload id" },
          { status: 404 }
        );

      // move to distribution
      const distribution = `distribution/cv/${cv}`;
      await storage.bucket().file(uploaded).move(distribution);
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
        image: avatarUrl,
        cv,
      },
    });

    // check if student was created
    if (!student) {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }

    return NextResponse.json({ student: student }, { status: 201 });
  } catch (e) {
    if (e instanceof ZodError)
      return NextResponse.json({ error: e.errors }, { status: 400 });

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
