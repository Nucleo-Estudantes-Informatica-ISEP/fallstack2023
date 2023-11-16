/*
  Warnings:

  - The primary key for the `Interest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Interest` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `_InterestToStudent` DROP FOREIGN KEY `_InterestToStudent_A_fkey`;

-- DropIndex
DROP INDEX `Interest_name_key` ON `Interest`;

-- AlterTable
ALTER TABLE `Interest` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`name`);

-- AlterTable
ALTER TABLE `_InterestToStudent` MODIFY `A` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `_InterestToStudent` ADD CONSTRAINT `_InterestToStudent_A_fkey` FOREIGN KEY (`A`) REFERENCES `Interest`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
