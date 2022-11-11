import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(req, res) {
  const id = req.headers.id;
  if (!id) {
    res.status(404).json({ status: false, error: "No Id matched" });
    return;
  }
  const data = await prisma.rHomes.update({
    where: {
      id,
    },
    data: {
      amenities: "awdsfghjhmgfdsadsfhk,hjghgds",
      name: "The Retail Home(Updated)",
      owner_contact: "1234567890",
      price: 999,
      rating: 4.2,
      total_rooms: 5,
    },
  });
  res.json({ data });
}
