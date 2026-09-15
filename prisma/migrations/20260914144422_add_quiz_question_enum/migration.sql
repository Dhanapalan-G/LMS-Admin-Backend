-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('MCQ', 'TRUE_FALSE', 'MATCH_THE_FOLLOWING', 'IMAGE_BASED', 'AUDIO_BASED');

-- AlterTable
ALTER TABLE "QuizQuestion" ADD COLUMN     "explanation" TEXT,
ADD COLUMN     "questionType" "QuestionType" NOT NULL DEFAULT 'MCQ';
