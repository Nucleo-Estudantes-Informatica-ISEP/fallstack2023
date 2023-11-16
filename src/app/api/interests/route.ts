import { getInterests } from "@/lib/interests";

export async function GET() {
  const interests = await getInterests();
  return Response.json(interests);
}
