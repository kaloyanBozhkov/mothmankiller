import { env } from "@/env";
import { type NextApiRequest, type NextApiResponse } from "next";
import { z } from "zod";

const adminSchema = z.object({
  secret: z.literal(env.ADMIN_SECRET),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    adminSchema.parse(req.query);
    const ADMIN_PAGE =
      "https://docs.google.com/spreadsheets/d/1q1u2RKcqyx1w4fGeXwTcdoo4haym9EJQnE0FLpWm6I0/edit?gid=0#gid=0";

    res.status(301).redirect(ADMIN_PAGE);
  } catch (error) {
    res.status(301).redirect("/");
  }
}
