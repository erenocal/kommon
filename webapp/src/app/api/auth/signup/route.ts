import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword, generateToken, extractUniversity } from '@/lib/auth'
import { signUpSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const result = signUpSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0].message },
        { status: 400 }
      )
    }

    const { email, password } = result.data

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const passwordHash = await hashPassword(password)

    // Generate verification token
    const verificationToken = generateToken()
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    // Extract university from email
    const university = extractUniversity(email)

    // Create user and verification token
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        passwordHash,
        university,
        verificationTokens: {
          create: {
            token: verificationToken,
            expiresAt,
          },
        },
      },
    })

    // TODO: Send verification email
    // For now, we'll just return success
    // In production, integrate with Resend or SendGrid

    return NextResponse.json(
      {
        message: 'Account created successfully. Please check your email to verify your account.',
        userId: user.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Sign up error:', error)
    return NextResponse.json(
      { error: 'An error occurred during sign up' },
      { status: 500 }
    )
  }
}
