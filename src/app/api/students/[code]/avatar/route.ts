import { NextRequest, NextResponse } from "next/server";

import { storage } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";
import { avatarSchema } from "@/schemas/avatarSchema";

interface StudentParams {
  params: {
    code: string;
  };
}

export async function POST(
  req: NextRequest,
  { params: { code } }: StudentParams
) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "STUDENT" || session.student?.code !== code)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await req.json();
  const parsed = avatarSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 });

  const { uploadId } = parsed.data;
  const uploaded = `uploaded/avatar/${uploadId}`;

  const [exists] = await storage.bucket().file(uploaded).exists();
  if (!exists)
    return NextResponse.json({ error: "Invalid upload id" }, { status: 400 });

  // move to distribution
  const distribution = `distribution/avatar/${uploadId}`;
  await storage.bucket().file(uploaded).move(distribution);

  // create a public accessible url
  const [meta] = await storage.bucket().file(distribution).makePublic();

  const { bucket, object } = meta;
  const url = `https://${bucket}.storage.googleapis.com/${object}`;

  // remove old avatar if existent
  if (session.student.image) {
    const imageId = session.student.image.split("/").reverse()[0];
    const old = `distribution/avatar/${imageId}`;
    await storage.bucket().file(old).delete({ ignoreNotFound: true });
  }

  await prisma.student.update({
    where: { code },
    data: { image: url },
  });

  return NextResponse.json({ url });
}
