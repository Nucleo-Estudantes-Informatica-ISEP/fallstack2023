import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { Session } from "@/types/Session";
import config from "@/config";
import prisma from "@/lib/prisma";

const getServerSession = async () => {
  const cookie = cookies().get(config.cookies.auth.name);
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
