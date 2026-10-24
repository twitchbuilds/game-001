// Example backend route: GET /api/visits counts visitors in ~/data/visits.json.
import { load, save } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const visits = (await load("visits", 0)) + 1;
  await save("visits", visits);
  return Response.json({ visits });
}
