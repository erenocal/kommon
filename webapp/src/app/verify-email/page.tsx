'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { KommonCard, KommonCardContent } from '@/components/ui/kommon-card'
import { KommonButton } from '@/components/ui/kommon-button'
import { KommonLogo } from '@/components/ui/kommon-logo'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

function VerifyEmailContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get('token')
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      setMessage('No verification token provided')
      return
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch(`/api/auth/verify-email?token=${token}`)
        const data = await response.json()

        if (response.ok) {
          setStatus('success')
          setMessage('Your email has been verified successfully!')
          
          // Redirect to login after 3 seconds
          setTimeout(() => {
            router.push('/login')
          }, 3000)
        } else {
          setStatus('error')
          setMessage(data.error || 'Verification failed')
        }
      } catch {
        setStatus('error')
        setMessage('An unexpected error occurred')
      }
    }

    verifyEmail()
  }, [token, router])

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0F1419' }}>
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <KommonLogo size="lg" />
        </div>
        
        <KommonCard>
          <KommonCardContent className="pt-6 text-center">
            {status === 'loading' && (
              <>
                <Loader2 className="w-16 h-16 mx-auto mb-6 animate-spin" style={{ color: '#C86A50' }} />
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                  Verifying Your Email
                </h2>
                <p style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                  Please wait while we verify your email address...
                </p>
              </>
            )}

            {status === 'success' && (
              <>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                  <CheckCircle className="w-8 h-8" style={{ color: '#4ade80' }} />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                  Email Verified!
                </h2>
                <p className="mb-6" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                  {message}
                </p>
                <p className="text-sm mb-6" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                  Redirecting to login...
                </p>
                <Link href="/login">
                  <KommonButton className="w-full">
                    Go to Login
                  </KommonButton>
                </Link>
              </>
            )}

            {status === 'error' && (
              <>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                  <XCircle className="w-8 h-8" style={{ color: '#ef4444' }} />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                  Verification Failed
                </h2>
                <p className="mb-6" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                  {message}
                </p>
                <Link href="/signup">
                  <KommonButton className="w-full">
                    Back to Sign Up
                  </KommonButton>
                </Link>
              </>
            )}
          </KommonCardContent>
        </KommonCard>
      </div>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0F1419' }}>
        <Loader2 className="w-16 h-16 animate-spin" style={{ color: '#C86A50' }} />
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  )
}
