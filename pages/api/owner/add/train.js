import { PrismaClient } from "@prisma/client";
import { set } from "date-fns";
import { validateTrain } from "../../../../utils/validation";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(501).json({ status: false, error: "Not Allowed" });
  //   if (!validateTrain(req.body)) {
  //     return res.status(401).json({ status: false, error: "Data Missing!!!" });
  //   }
  const data = await prisma.train.create({
    data: {
      from: "Ahmedabad",
      to: "Rajkot",
      arrival_time: set(new Date(), { hours: "12", minutes: "40" }),
      departure_time: set(new Date(), { hours: "13", minutes: "50" }),
      operator_contact: "123456789",
      operator_name: "RAAJ",
      price: 2435,
      total_seats: 23,
      vacant_seats: 23,
    },
  });
  res.json({ data });
}
