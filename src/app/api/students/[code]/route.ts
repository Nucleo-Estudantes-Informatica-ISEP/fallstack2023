import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(255),
  bio: z.string().min(3).max(255),
  year: z.number(),
  interests: z.array(z.string().min(3).max(255)),
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

  // check if interests values are correct
  const interests = await prisma.interest.findMany({
    where: { name: { in: safeParse.data.interests } },
  });

  const student = await prisma.student.update({
    where: { code: params.code },
    data: {
      ...safeParse.data,
      interests: {
        connect: interests.map((interest) => ({ id: interest.id })),
      },
    },
  });

  return NextResponse.json({ student });
}