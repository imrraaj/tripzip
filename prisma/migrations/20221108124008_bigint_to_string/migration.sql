-- AlterTable
ALTER TABLE "Bus" ALTER COLUMN "operator_contact" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Flight" ALTER COLUMN "operator_contact" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Hotel" ALTER COLUMN "owner_contact" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "RHomes" ALTER COLUMN "owner_contact" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Train" ALTER COLUMN "operator_contact" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Transport_bookings" ALTER COLUMN "owner_contact" SET DATA TYPE TEXT;
