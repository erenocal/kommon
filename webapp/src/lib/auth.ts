import bcrypt from 'bcryptjs'
import { randomBytes } from 'crypto'

const SALT_ROUNDS = 12

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export function generateToken(): string {
  return randomBytes(32).toString('hex')
}

export function isEduEmail(email: string): boolean {
  return email.toLowerCase().endsWith('.edu')
}

export function extractUniversity(email: string): string | null {
  const match = email.match(/@([^.]+)\.edu$/i)
  return match ? match[1] : null
}

export async function getUserFromSession(request: Request | NextRequest) {
  const { prisma } = await import('./prisma')
  
  // Suppress unused var warning - request param required for Next.js API route signature
  void request
  
  // Get session token from request cookies
  let sessionToken: string | undefined
  
  if ('cookies' in request && typeof request.cookies.get === 'function') {
    // NextRequest object (API routes)
    sessionToken = request.cookies.get('session_token')?.value
  } else {
    // Regular Request object - shouldn't happen in our use case
    const cookieHeader = request.headers.get('cookie')
    if (cookieHeader) {
      const cookies = cookieHeader.split(';').map(c => c.trim())
      const sessionCookie = cookies.find(c => c.startsWith('session_token='))
      sessionToken = sessionCookie?.split('=')[1]
    }
  }

  if (!sessionToken) {
    return null
  }

  const session = await prisma.session.findUnique({
    where: { token: sessionToken },
    include: { user: true },
  })

  if (!session || session.expiresAt < new Date()) {
    return null
  }

  return session.user
}
