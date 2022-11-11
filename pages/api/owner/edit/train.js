import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const id = req.headers.id;
  if (!id) {
    res.status(404).json({ status: false, error: "No Id matched" });
    return;
  }
  const data = await prisma.train.update({
    where: {
      id,
    },
    data: {
      amenities: "awdsfghjhmgfdsadsfhk,hjghgds",
      name: "The Skyline (Updated)123",
      owner_contact: "1234567890",
      price: 999,
      rating: 4.2,
      total_rooms: 188,
      vacant_rooms: 90,
    },
  });
  res.json({ data });
}
