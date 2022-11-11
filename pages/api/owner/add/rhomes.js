import { PrismaClient } from "@prisma/client";
import { validateRhomes } from "../../../../utils/validation";
const prisma = new PrismaClient();
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(501).json({ status: false, error: "Not Allowed" });
  if (!validateRhomes(req.body)) {
    return res.status(401).json({ status: false, error: "Data Missing!!!" });
  }
  const { amenities, name, owner_contact, price, rating, total_rooms } = body;
  const data = await prisma.rHomes.create({
    data: {
      amenities,
      name,
      owner_contact,
      price,
      rating,
      total_rooms,
    },
  });
  res.json({ data });
}
