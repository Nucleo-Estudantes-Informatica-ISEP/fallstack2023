import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Session } from "@/types/Session";
import config from "@/config";

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
    name: config.cookies.auth.name,
    maxAge: config.cookies.auth.maxAge,
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
