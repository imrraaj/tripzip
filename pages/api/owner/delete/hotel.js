import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(req, res) {
  const id = req.headers["id"];
  if (!id) {
    res.status(404).json({ status: false, error: "No Id matched" });
    return;
  }
  const data = await prisma.hotel.delete({
    where: {
      id,
    },
  });
  res.json({ data });
}
