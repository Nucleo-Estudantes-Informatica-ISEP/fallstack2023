import { NextRequest, NextResponse } from "next/server";

import { HttpError } from "@/types/HttpError";
import getStudentHistory from "@/lib/getStudentHistory";

interface StudentParams {
  params: {
    code: string;
  };
}

export async function GET(
  req: NextRequest,
  { params: { code } }: StudentParams
) {
  const history = await getStudentHistory(code);

  if (history instanceof HttpError)
    return NextResponse.json(history.message, { status: history.status });

  return NextResponse.json(history);
}
