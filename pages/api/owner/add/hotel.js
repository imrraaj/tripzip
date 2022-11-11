import { PrismaClient } from "@prisma/client";
import { validateHotel } from "../../../../utils/validation";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(501).json({ status: false, error: "Not Allowed" });
  if (!validateHotel(req.body)) {
    return res.status(401).json({ status: false, error: "Data Missing!!!" });
  }
  const data = await prisma.hotel.create({
    data: {
      amenities: req.body.amenities,
      name: req.body.name,
      owner_contact: req.body.owner_contact,
      price: req.body.price,
      rating: req.body.rating,
      total_rooms: req.body.total_rooms,
      vacant_rooms: req.body.vacant_rooms,
    },
  });
  res.json({ data });
}
