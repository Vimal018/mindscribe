-- CreateTable
CREATE TABLE "journalEntry" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "emotion" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "journalEntry_pkey" PRIMARY KEY ("id")
);
