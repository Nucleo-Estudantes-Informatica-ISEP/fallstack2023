import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const interests = await prisma.interest.findMany();
  return NextResponse.json(interests);
}