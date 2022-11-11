/*
  Warnings:

  - You are about to drop the column `amenities` on the `Transport_bookings` table. All the data in the column will be lost.
  - You are about to drop the column `owner_contact` on the `Transport_bookings` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Transport_bookings` table. All the data in the column will be lost.
  - You are about to drop the column `total_rooms` on the `Transport_bookings` table. All the data in the column will be lost.
  - You are about to drop the column `vacant_rooms` on the `Transport_bookings` table. All the data in the column will be lost.
  - Added the required column `no_of_seats` to the `Transport_bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainId` to the `Transport_bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transport_bookings" DROP COLUMN "amenities",
DROP COLUMN "owner_contact",
DROP COLUMN "rating",
DROP COLUMN "total_rooms",
DROP COLUMN "vacant_rooms",
ADD COLUMN     "arrival_time" TIMESTAMP(3),
ADD COLUMN     "departure_time" TIMESTAMP(3),
ADD COLUMN     "no_of_seats" INTEGER NOT NULL,
ADD COLUMN     "trainId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Transport_bookings" ADD CONSTRAINT "Transport_bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transport_bookings" ADD CONSTRAINT "Transport_bookings_trainId_fkey" FOREIGN KEY ("trainId") REFERENCES "Train"("id") ON DELETE CASCADE ON UPDATE CASCADE;
