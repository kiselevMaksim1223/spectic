/*
  Warnings:

  - Changed the type of `lessonId` on the `UserLessonAttempt` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserLessonAttempt" DROP COLUMN "lessonId",
ADD COLUMN     "lessonId" INTEGER NOT NULL;
