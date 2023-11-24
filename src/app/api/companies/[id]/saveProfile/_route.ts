import { NextResponse } from "next/server";

interface CompanyParams {
  params: {
    id: string;
  };
}

export async function POST(
  { params: { } }: CompanyParams
) {
  //   const session = await getServerSession();

  //   const body = await req.json();

  //   if (!session)
  //     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  //   if (session.role !== "COMPANY" || session.company?.id !== Number(id))
  //     return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  //   try {
  //     const result = await prisma.savedStudent.create({
  //       data: {
  //         companyId: session.company.id,
  //         studentId: body.studentId,
  //         isSaved: true,
  //       },
  //     });

  return NextResponse.json("");
  //   } catch (error) {
  //     if (
  //       error instanceof Prisma.PrismaClientKnownRequestError &&
  //       error.code === "P2002"
  //     ) {
  //       // P2002 is the Prisma error code for unique constraint violation
  //       return NextResponse.json(
  //         { error: "Student already saved" },
  //         { status: 400 }
  //       );
  //     } else {
  //       console.log(error);
  //       return NextResponse.json({ error: "Error" }, { status: 500 });
  //     }
  //   }
}
