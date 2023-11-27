/*
  Warnings:

  - The primary key for the `SavedStudent` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `SavedStudent` DROP PRIMARY KEY,
    ADD COLUMN `isAccepted` BOOLEAN NOT NULL DEFAULT false,
    ADD PRIMARY KEY (`studentId`, `savedById`);
