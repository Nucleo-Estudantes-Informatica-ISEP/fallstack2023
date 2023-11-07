import { NextResponse } from "next/server";

import getServerSession from "@/services/getServerSession";

export async function GET() {
  const session = await getServerSession();
  if (!session) return new NextResponse(null, { status: 401 });
  return NextResponse.json(session, { status: 200 });
}
