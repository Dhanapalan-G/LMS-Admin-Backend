-- AlterTable
ALTER TABLE "QuizQuestion" ADD COLUMN     "questionMediaUrl" TEXT;

-- CreateTable
CREATE TABLE "QuizMatchPair" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "columnA" TEXT NOT NULL,
    "columnB" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuizMatchPair_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "QuizMatchPair_questionId_idx" ON "QuizMatchPair"("questionId");

-- AddForeignKey
ALTER TABLE "QuizMatchPair" ADD CONSTRAINT "QuizMatchPair_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuizQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
