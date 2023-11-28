import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { hashPassword } from "@/services/authService";
import { resetSchema } from "@/schemas/resetSchema";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const parsed = resetSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error }, { status: 400 });

  const { password, token } = parsed.data;

  const reset = await prisma.passwordResetToken.findUnique({
    where: { token },
  });

  if (!reset)
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });

  const hashedPassword = await hashPassword(password);

  const success = await prisma.user.update({
    data: { password: hashedPassword },
    where: { id: reset.userId },
  });

  await prisma.passwordResetToken.delete({ where: { token } });

  if (!success)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );

  return NextResponse.json({ message: "Success" });
}
