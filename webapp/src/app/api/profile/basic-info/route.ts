import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { basicInfoSchema } from '@/lib/profile-validation'
import { getUserFromSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromSession(request)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = basicInfoSchema.parse(body)

    // Create or update user profile
    const profile = await prisma.userProfile.upsert({
      where: { userId: user.id },
      update: {
        fullName: validatedData.fullName,
        university: validatedData.university,
        major: validatedData.major,
        academicYear: validatedData.academicYear,
        userType: validatedData.userType,
      },
      create: {
        userId: user.id,
        fullName: validatedData.fullName,
        university: validatedData.university,
        major: validatedData.major,
        academicYear: validatedData.academicYear,
        userType: validatedData.userType,
      },
    })

    return NextResponse.json({ success: true, profile })
  } catch (error) {
    console.error('Basic info error:', error)
    if (error instanceof Error && 'issues' in error) {
      return NextResponse.json({ error: 'Validation failed', details: error }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to save basic info' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromSession(request)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
    })

    return NextResponse.json({ profile })
  } catch (error) {
    console.error('Get profile error:', error)
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}
