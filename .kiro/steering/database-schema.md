---
inclusion: fileMatch
fileMatchPattern: "**/prisma/**/*.{prisma,ts}"
---

# Database Schema (Prisma + PostgreSQL)

**Location**: `webapp/prisma/schema.prisma`

**Current Models**: 
- User (email, passwordHash, emailVerified, university, createdAt, updatedAt)
- VerificationToken (token, expiresAt, usedAt, userId)
- PasswordResetToken (token, expiresAt, usedAt, userId)
- Session (token, expiresAt, userId)
- UserProfile (fullName, university, major, academicYear, bio, profilePhotoUrl, userType, profileCompleted)
- LifestylePreferences (cleanliness, socialHabits, noiseLevel, sleepSchedule, guestsFrequency, petsComfortable, smokingComfortable, studyHabits, lifestyleTags)
- HousingPreferences (maxBudget, preferredNeighborhoods, moveInDate, leaseDuration, housingType, amenitiesRequired)

**Phase 2A Models** (add when needed):
- RoomListing: title, monthlyRent, address, neighborhood, roomType, availableFrom, description, amenities (Json), photos (Json), isActive, providerId

**Conventions**: PascalCase models, camelCase fields, snake_case DB (@map), uuid() IDs, createdAt/updatedAt timestamps

**Security**: Never expose emails, use passwordHash only, FERPA-compliant, consider soft deletes (deletedAt)

**Commands**: `pnpm db:migrate` (migrations), `pnpm db:push` (quick), `pnpm db:generate` (client), `pnpm db:studio` (GUI)

**Optimization**: Use select/include, add @@index for queries, paginate large sets, validate server-side
