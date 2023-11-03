import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { storage } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";

const schema = z.object({
  uploadId: z.string().uuid(),
});

interface StudentParams {
  params: {
    code: string;
  };
}

export async function GET({ params: { code } }: StudentParams) {
  // TODO: check auth

  const student = await prisma.student.findUnique({ where: { code } });

  if (!student)
    return NextResponse.json({ error: "Student not found" }, { status: 404 });

  if (!student.cv)
    return NextResponse.json({ error: "Student has no cv" }, { status: 404 });

  const filename = `cv/${student.cv}`;

  const [url] = await storage
    .bucket()
    .file(filename)
    .getSignedUrl({
      action: "read",
      version: "v4",
      expires: Date.now() + 20 * 60 * 1000, // 20 minutes
      contentType: "application/pdf",
    });

  return NextResponse.json({ url });
}

export async function POST(
  req: NextRequest,
  { params: { code } }: StudentParams
) {
  // TODO auth

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 });

  const { uploadId } = parsed.data;
  const filename = `cv/${uploadId}`;

  const [exists] = await storage.bucket().file(filename).exists();
  if (!exists)
    return NextResponse.json({ error: "Invalid id" }, { status: 404 });

  // TODO: remove old cv if existent
  // ...file(filename).delete()

  // TODO: check if the cv has successfully been uploaded

  // TODO: update authenticated user's cv
  // the cv id will be saved, id is used to generate the url

  return NextResponse.json({ userCode: code, uploadId });
}
