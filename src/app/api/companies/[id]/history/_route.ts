import { NextResponse } from "next/server";

interface CompanyParams {
  params: {
    id: number;
  };
}

export async function GET({ params: { } }: CompanyParams) {
  //   const session = await getServerSession();
  //   if (!session)
  //     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  //   const result = await prisma.savedStudent.findMany({
  //     where: {
  //       savedById: session.role === 'COMPANY' ? session.company?.id : session.student?.id
  //     },
  //     include: {
  //       student: {
  //         select: {
  //           name: true,
  //           interests: {
  //             select: {
  //               name: true,
  //             },
  //           },
  //           code: true,
  //           cv: true,
  //         },
  //       },
  //     },
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   });

  //   if (!result)
  //     return NextResponse.json({ error: "Student not found" }, { status: 404 });

  return NextResponse.json("");
}
