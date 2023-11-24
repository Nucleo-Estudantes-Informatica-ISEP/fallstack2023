/*
  Warnings:

  - The primary key for the `SavedStudent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `companyId` on the `SavedStudent` table. All the data in the column will be lost.
  - Added the required column `savedById` to the `SavedStudent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `SavedStudent` DROP FOREIGN KEY `SavedStudent_companyId_fkey`;

-- AlterTable
ALTER TABLE `SavedStudent` DROP PRIMARY KEY,
    DROP COLUMN `companyId`,
    ADD COLUMN `savedById` INTEGER NOT NULL,
    ADD PRIMARY KEY (`studentId`, `savedById`, `isSaved`);

-- AddForeignKey
ALTER TABLE `SavedStudent` ADD CONSTRAINT `SavedStudent_savedById_fkey` FOREIGN KEY (`savedById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
