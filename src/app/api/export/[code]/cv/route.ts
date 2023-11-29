import { NextRequest, NextResponse } from "next/server";

import { storage } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";

interface StudentParams {
  params: {
    code: string;
  };
}

export async function GET(
  req: NextRequest,
  { params: { code } }: StudentParams
) {
  // fetch student as the logged user may be a company
  const student = await prisma.student.findUnique({ where: { code } });

  if (!student)
    return new NextResponse("Este perfil não existe.", { status: 404 });

  if (!student.cv)
    return new NextResponse("O estudante não tem CV.", { status: 404 });

  const filename = `distribution/cv/${student.cv}`;

  const [url] = await storage
    .bucket()
    .file(filename)
    .getSignedUrl({
      action: "read",
      version: "v4",
      expires: Date.now() + 5 * 60 * 1000, // 5 minutes
      virtualHostedStyle: true,
    });

  return new NextResponse(null, { headers: { Location: url }, status: 307 });
}
