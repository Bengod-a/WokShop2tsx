-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Landmark" DROP CONSTRAINT "Landmark_profileId_fkey";

-- AddForeignKey
ALTER TABLE "Landmark" ADD CONSTRAINT "Landmark_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;
