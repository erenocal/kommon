import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect()
    
    // Test basic query
    const userCount = await prisma.user.count()
    
    // Test creating a test user (we'll delete it right after)
    const testUser = await prisma.user.create({
      data: {
        email: `test-${Date.now()}@university.edu`,
        passwordHash: 'test-hash',
        university: 'Test University',
        emailVerified: false
      }
    })
    
    // Clean up test user
    await prisma.user.delete({
      where: { id: testUser.id }
    })
    
    // Test verification tokens table
    const tokenCount = await prisma.verificationToken.count()
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      details: {
        userCount,
        tokenCount,
        testUserCreated: testUser.id,
        timestamp: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('Database test failed:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
