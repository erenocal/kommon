import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { lifestylePreferencesSchema } from '@/lib/profile-validation'
import { getUserFromSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    console.log('[Lifestyle API] Request received')
    
    const user = await getUserFromSession(request)
    console.log('[Lifestyle API] User from session:', user ? user.id : 'null')
    
    if (!user) {
      console.log('[Lifestyle API] Unauthorized - no user found')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has a profile
    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
    })
    console.log('[Lifestyle API] Profile found:', profile ? profile.id : 'null')

    if (!profile) {
      console.log('[Lifestyle API] Profile not found')
      return NextResponse.json({ error: 'Profile not found. Complete basic info first.' }, { status: 400 })
    }

    const body = await request.json()
    console.log('[Lifestyle API] Request body:', JSON.stringify(body, null, 2))
    
    const validatedData = lifestylePreferencesSchema.parse(body)
    console.log('[Lifestyle API] Validation passed')

    // Create or update lifestyle preferences
    const preferences = await prisma.lifestylePreferences.upsert({
      where: { profileId: profile.id },
      update: {
        cleanliness: validatedData.cleanliness,
        socialHabits: validatedData.socialHabits,
        noiseLevel: validatedData.noiseLevel,
        sleepSchedule: validatedData.sleepSchedule,
        guestsFrequency: validatedData.guestsFrequency,
        petsComfortable: validatedData.petsComfortable,
        smokingComfortable: validatedData.smokingComfortable,
        studyHabits: validatedData.studyHabits || undefined,
        lifestyleTags: validatedData.lifestyleTags?.length ? validatedData.lifestyleTags : undefined,
      },
      create: {
        profileId: profile.id,
        cleanliness: validatedData.cleanliness,
        socialHabits: validatedData.socialHabits,
        noiseLevel: validatedData.noiseLevel,
        sleepSchedule: validatedData.sleepSchedule,
        guestsFrequency: validatedData.guestsFrequency,
        petsComfortable: validatedData.petsComfortable,
        smokingComfortable: validatedData.smokingComfortable,
        studyHabits: validatedData.studyHabits || undefined,
        lifestyleTags: validatedData.lifestyleTags?.length ? validatedData.lifestyleTags : undefined,
      },
    })
    console.log('[Lifestyle API] Preferences saved:', preferences.id)

    return NextResponse.json({ success: true, preferences })
  } catch (error) {
    console.error('[Lifestyle API] Error:', error)
    if (error instanceof Error && 'issues' in error) {
      console.error('[Lifestyle API] Validation error:', error)
      return NextResponse.json({ error: 'Validation failed', details: error }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to save lifestyle preferences' }, { status: 500 })
  }
}
