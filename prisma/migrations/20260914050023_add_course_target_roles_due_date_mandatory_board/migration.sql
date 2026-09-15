-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "board" TEXT,
ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "isMandatory" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "targetRoles" TEXT[] DEFAULT ARRAY[]::TEXT[];
