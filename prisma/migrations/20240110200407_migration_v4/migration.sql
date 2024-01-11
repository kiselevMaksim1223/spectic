/*
  Warnings:

  - The primary key for the `Lesson` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `taskId` on the `Lesson` table. All the data in the column will be lost.
  - Added the required column `lessonId` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_pkey",
DROP COLUMN "taskId",
ADD COLUMN     "lessonId" INTEGER NOT NULL,
ADD CONSTRAINT "Lesson_pkey" PRIMARY KEY ("lessonId");
