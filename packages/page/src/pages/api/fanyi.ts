// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import translate, { TransQuery } from "./services/baiduFanyi";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const r = await translate((req as any).query as TransQuery);
  res.status(200).json(r);
}
