/*
  Warnings:

  - You are about to drop the `journalEntry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "journalEntry";

-- CreateTable
CREATE TABLE "JournalEntry" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "emotion" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JournalEntry_pkey" PRIMARY KEY ("id")
);
