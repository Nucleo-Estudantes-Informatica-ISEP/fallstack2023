/*
  Warnings:

  - The primary key for the `SavedStudent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `isScanned` on the `SavedStudent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `SavedStudent` DROP PRIMARY KEY,
    DROP COLUMN `isScanned`,
    ADD COLUMN `isSaved` BOOLEAN NOT NULL DEFAULT false,
    ADD PRIMARY KEY (`studentId`, `companyId`, `isSaved`);
