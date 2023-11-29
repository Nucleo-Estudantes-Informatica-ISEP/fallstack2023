import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { BASE_URL } from "@/services/api";
import { signJwt } from "@/services/authService";
import getServerSession from "@/services/getServerSession";

export async function GET() {
  const session = await getServerSession();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (session.role !== "COMPANY")
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const saves = await prisma.savedStudent.findMany({
    where: { savedById: session.id, isSaved: true },
    include: {
      student: {
        include: { user: true },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  const data: string[] = [];
  data.push("Nome,Email,Linkedin,Github,CV,Data guardado,");
  saves.forEach((s) => {
    const token = signJwt({ id: session.id });
    const cvUrl = `${BASE_URL}/export/${s.student.code}/cv?token=${token}`;
    const formatted = new Date(s.createdAt)
      .toLocaleString("pt-PT")
      .replace(",", "");

    return data.push(
      `${s.student.name},${s.student.user.email},${s.student.linkedin || ""},${
        s.student.github || ""
      },${cvUrl},${formatted}`
    );
  });

  // ! the link may not return a cv if the user does not have one

  return new NextResponse(data.join("\n"), {
    headers: {
      "content-disposition": `attachment; filename="fallstack2023.csv"`,
      "content-type": "text/csv; charset=utf-8",
    },
  });
}
