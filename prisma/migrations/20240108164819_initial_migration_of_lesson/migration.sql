-- CreateTable
CREATE TABLE "Lesson" (
    "taskId" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "userAttempts" INTEGER NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("taskId")
);
