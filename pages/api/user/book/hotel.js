import { PrismaClient } from "@prisma/client";
import { set } from "date-fns";
import { validateHotelBooking } from "../../../../utils/validation";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(501).json({ status: false, error: "Not Allowed" });
  if (!validateHotelBooking(req.body)) {
    return res.status(401).json({ status: false, error: "Data Missing!!!" });
  }

  const { name, number_of_rooms, price, checkIn, checkOut, hotelId, userId } =
    req.body;
  const data = await prisma.transport_bookings.create({
    data: {
      name,
      number_of_rooms,
      price,
      checkIn,
      checkOut,

      userId,
    },
  });
  res.json({ data });
}
