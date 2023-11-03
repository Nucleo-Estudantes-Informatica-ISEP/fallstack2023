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

export async function PUT(
  req: NextRequest,
  { params: { code } }: StudentParams
) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 });

  const { uploadId } = parsed.data;
  const uploaded = `uploaded/profile/${uploadId}`;

  // check if file exists
  const [exists] = await storage.bucket().file(uploaded).exists();
  if (!exists)
    return NextResponse.json({ error: "Invalid upload id" }, { status: 404 });

  // move to distribution
  const distribution = `distribution/profile/${uploadId}`;
  await storage.bucket().file(uploaded).move(distribution);

  // create a public accessible url
  const [meta] = await storage.bucket().file(distribution).makePublic();

  // https://storage.googleapis.com/<bucket>/<object>
  const { bucket, object } = meta;
  const url = `https://storage.googleapis.com/${bucket}/${object}`;

  // TODO: remove old avatar if existent
  // ...file(filename).delete()

  // TODO: update authenticated user's avatar
  await prisma.student.update({
    where: { code },
    data: { image: url },
  });

  return NextResponse.json({ userCode: code, url });
}
