import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import { AUTH_COOKIE_MAX_AGE, COOKIE_NAME } from "@/services/cookies";
import { Session } from "@/types/Session";

const validatePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

const signJwt = (data: Session) => {
  const token = jwt.sign(data, process.env.JWT_SECRET as string);
  return token;
};

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

const verifyJwt = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};

const setCookie = (token: string) => {
  cookies().set({
    name: COOKIE_NAME,
    maxAge: AUTH_COOKIE_MAX_AGE,
    value: token,
    path: "/",
    sameSite: "strict",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
};

export {
  validatePassword,
  signJwt,
  hashPassword,
  comparePassword,
  verifyJwt,
  setCookie,
};
