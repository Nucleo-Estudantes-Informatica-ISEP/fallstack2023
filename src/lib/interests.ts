import { Interest } from "@prisma/client";
import prisma from "./prisma";

export async function getInterests(): Promise<Interest[]> {
  return prisma.interest.findMany();
}
