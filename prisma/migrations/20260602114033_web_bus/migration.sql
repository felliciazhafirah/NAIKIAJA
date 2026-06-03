/*
  Warnings:

  - Added the required column `Email` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `KTP` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Namalengkap` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NoHp` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` ADD COLUMN `Email` VARCHAR(191) NOT NULL,
    ADD COLUMN `KTP` VARCHAR(191) NOT NULL,
    ADD COLUMN `Namalengkap` VARCHAR(191) NOT NULL,
    ADD COLUMN `NoHp` VARCHAR(191) NOT NULL;
