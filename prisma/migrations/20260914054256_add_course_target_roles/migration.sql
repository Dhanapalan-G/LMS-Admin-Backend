/*
  Warnings:

  - You are about to drop the column `targetRoles` on the `courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "courses" DROP COLUMN "targetRoles";

-- CreateTable
CREATE TABLE "CourseTargetRole" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "learnerTypeId" TEXT NOT NULL,

    CONSTRAINT "CourseTargetRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CourseTargetRole_courseId_idx" ON "CourseTargetRole"("courseId");

-- CreateIndex
CREATE INDEX "CourseTargetRole_learnerTypeId_idx" ON "CourseTargetRole"("learnerTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseTargetRole_courseId_learnerTypeId_key" ON "CourseTargetRole"("courseId", "learnerTypeId");

-- AddForeignKey
ALTER TABLE "CourseTargetRole" ADD CONSTRAINT "CourseTargetRole_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTargetRole" ADD CONSTRAINT "CourseTargetRole_learnerTypeId_fkey" FOREIGN KEY ("learnerTypeId") REFERENCES "LearnerType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
