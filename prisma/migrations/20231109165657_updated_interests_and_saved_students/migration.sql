/*
  Warnings:

  - The primary key for the `SavedStudent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SavedStudent` table. All the data in the column will be lost.
  - You are about to drop the `StudentInterest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `StudentInterest` DROP FOREIGN KEY `StudentInterest_interestId_fkey`;

-- DropForeignKey
ALTER TABLE `StudentInterest` DROP FOREIGN KEY `StudentInterest_studentId_fkey`;

-- AlterTable
ALTER TABLE `SavedStudent` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`studentId`, `companyId`);

-- DropTable
DROP TABLE `StudentInterest`;

-- CreateTable
CREATE TABLE `_InterestToStudent` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_InterestToStudent_AB_unique`(`A`, `B`),
    INDEX `_InterestToStudent_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_InterestToStudent` ADD CONSTRAINT `_InterestToStudent_A_fkey` FOREIGN KEY (`A`) REFERENCES `Interest`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InterestToStudent` ADD CONSTRAINT `_InterestToStudent_B_fkey` FOREIGN KEY (`B`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
