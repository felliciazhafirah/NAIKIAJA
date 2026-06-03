/*
  Warnings:

  - A unique constraint covering the columns `[busId,seatNumber]` on the table `Seat` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Seat_seatNumber_key` ON `seat`;

-- CreateIndex
CREATE UNIQUE INDEX `Seat_busId_seatNumber_key` ON `Seat`(`busId`, `seatNumber`);
