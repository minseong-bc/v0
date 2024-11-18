import next, { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import { getUserId } from "./getUserId"

export async function GET(req: NextApiRequest, res: NextApiRequest) {
  const id = await getUserId();

  return NextResponse.json(id);
}