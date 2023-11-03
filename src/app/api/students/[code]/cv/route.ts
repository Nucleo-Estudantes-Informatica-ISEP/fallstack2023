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

export async function GET(
  req: NextRequest,
  { params: { code } }: StudentParams
) {
  // TODO: check auth
  // own student and companies that saved him can access its cv

  const student = await prisma.student.findUnique({ where: { code } });

  if (!student)
    return NextResponse.json({ error: "Student not found" }, { status: 404 });

  if (!student.cv)
    return NextResponse.json({ error: "Student has no cv" }, { status: 404 });

  const filename = `distribution/cv/${student.cv}`;

  const [url] = await storage
    .bucket()
    .file(filename)
    .getSignedUrl({
      action: "read",
      version: "v4",
      expires: Date.now() + 5 * 60 * 1000, // 5 minutes
    });

  return NextResponse.json({ url });
}

export async function PUT(
  req: NextRequest,
  { params: { code } }: StudentParams
) {
  // TODO: check auth

  const student = await prisma.student.findUnique({ where: { code } });

  if (!student)
    return NextResponse.json({ error: "Student not found" }, { status: 404 });

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 });

  const { uploadId } = parsed.data;
  const uploaded = `uploaded/cv/${uploadId}`;

  const [exists] = await storage.bucket().file(uploaded).exists();
  if (!exists)
    return NextResponse.json({ error: "Invalid upload id" }, { status: 404 });

  // move to distribution
  const distribution = `distribution/cv/${uploadId}`;
  await storage.bucket().file(uploaded).move(distribution);

  // remove old cv if existent
  if (student.cv) {
    const old = `distribution/cv/${student.cv}`;
    await storage.bucket().file(old).delete();
  }

  // the cv id will be saved, id is used to generate the url
  await prisma.student.update({
    where: { code },
    data: { cv: uploadId },
  });

  return NextResponse.json({ userCode: code, uploadId });
}
