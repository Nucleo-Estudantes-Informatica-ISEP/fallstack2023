import { COOKIE_NAME } from "@/services/cookies";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    // deletes the auth cookie
    cookies().delete({
      name: COOKIE_NAME
    });

    return NextResponse.json(
      { message: "Signout successfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
