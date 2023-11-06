import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { COOKIE_NAME } from "@/services/cookies";
import prisma from "@/lib/prisma";
import { Session } from "@/types/Session";

const getServerSession = async () => {
  const cookie = cookies().get(COOKIE_NAME);
  const token = cookie?.value as string;
  if (!token) return null;

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) return null;

  try {
    const decoded = jwt.verify(token, jwtSecret) as Session;
    const user = await prisma.user.findUserWithProfile(decoded.id);
    if (!user) return null;
    return user;
  } catch (error) {
    return null;
  }
};

export default getServerSession;
