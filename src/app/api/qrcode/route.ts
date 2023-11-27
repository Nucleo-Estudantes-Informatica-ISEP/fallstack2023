import { NextResponse } from "next/server";

import { signJwt } from "@/services/authService";
import getServerSession from "@/services/getServerSession";

export async function GET() {
  const session = await getServerSession();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "STUDENT" || !session.student)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const data = signJwt(session.student.code);

  return NextResponse.json({ data });
}
