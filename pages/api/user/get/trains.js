import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(req, res) {
  const data = await prisma.train.findMany();
  res.json({ data });
}
