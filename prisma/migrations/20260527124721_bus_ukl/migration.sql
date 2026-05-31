/*
  Warnings:

  - Added the required column `availableTickets` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalTickets` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schedule` ADD COLUMN `availableTickets` INTEGER NOT NULL,
    ADD COLUMN `totalTickets` INTEGER NOT NULL;
