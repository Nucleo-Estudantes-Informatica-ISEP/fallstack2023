import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  bio: z.string(),
  interests: z.array(z.string()),
});

const schemaPartial = schema.partial();

interface StudentProps {
  params: {
    code: string;
  };
}

export async function PATCH(req: NextRequest, { params }: StudentProps) {
  const body = await req.json();

  const safeParse = schemaPartial.safeParse(body);
  if (!safeParse.success)
    return NextResponse.json({ message: safeParse.error });

  const student = await prisma.student.update({
    where: { code: params.code },
    data: {
      bio: body.bio,
      interests: body.interests,
    }
  });

  return NextResponse.json(student);
}

export async function GET(req: NextRequest, { params }: StudentProps) {
  const student = await prisma.student.findUnique({
    where: { code: params.code },
    include: {
      interests: true,
    },
  });

  console.log('STUDENT INTERESTS => ', student?.interests)

  return NextResponse.json(student);
}