import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { housingPreferencesSchema } from '@/lib/profile-validation'
import { getUserFromSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromSession(request)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has a profile
    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
    })

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found. Complete basic info first.' }, { status: 400 })
    }

    const body = await request.json()
    const validatedData = housingPreferencesSchema.parse(body)

    // Create or update housing preferences
    const preferences = await prisma.housingPreferences.upsert({
      where: { profileId: profile.id },
      update: {
        maxBudget: validatedData.maxBudget,
        preferredNeighborhoods: validatedData.preferredNeighborhoods,
        moveInDate: validatedData.moveInDate ? new Date(validatedData.moveInDate) : null,
        leaseDuration: validatedData.leaseDuration,
        housingType: validatedData.housingType,
        amenitiesRequired: validatedData.amenitiesRequired?.length ? validatedData.amenitiesRequired : undefined,
      },
      create: {
        profileId: profile.id,
        maxBudget: validatedData.maxBudget,
        preferredNeighborhoods: validatedData.preferredNeighborhoods,
        moveInDate: validatedData.moveInDate ? new Date(validatedData.moveInDate) : null,
        leaseDuration: validatedData.leaseDuration,
        housingType: validatedData.housingType,
        amenitiesRequired: validatedData.amenitiesRequired?.length ? validatedData.amenitiesRequired : undefined,
      },
    })

    // Mark profile as completed
    await prisma.userProfile.update({
      where: { id: profile.id },
      data: { profileCompleted: true },
    })

    return NextResponse.json({ success: true, preferences })
  } catch (error) {
    console.error('Housing preferences error:', error)
    if (error instanceof Error && 'issues' in error) {
      return NextResponse.json({ error: 'Validation failed', details: error }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to save housing preferences' }, { status: 500 })
  }
}
