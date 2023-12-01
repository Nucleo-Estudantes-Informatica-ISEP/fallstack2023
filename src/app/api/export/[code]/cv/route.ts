import { NextRequest, NextResponse } from "next/server";

import { Session } from "@/types/Session";
import { storage } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";
import { isSaved } from "@/lib/savedStudents";
import { verifyJwt } from "@/services/authService";

interface StudentParams {
  params: {
    code: string;
  };
}

export async function GET(
  req: NextRequest,
  { params: { code } }: StudentParams
) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const decoded = verifyJwt(token) as Session | null;
  if (!decoded)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
    select: { company: true },
  });
  if (!user || !user.company)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  // fetch student as the logged user may be a company
  const student = await prisma.student.findUnique({ where: { code } });

  if (!student)
    return new NextResponse("Este perfil não existe.", { status: 404 });

  if (!(await isSaved(decoded.id, student.code)))
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

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
