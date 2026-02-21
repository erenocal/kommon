'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { KommonInput } from '@/components/ui/kommon-input'
import { KommonButton } from '@/components/ui/kommon-button'
import { KommonCard, KommonCardContent, KommonCardDescription, KommonCardHeader, KommonCardTitle } from '@/components/ui/kommon-card'
import { KommonLogo } from '@/components/ui/kommon-logo'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Sign up failed')
        setIsSubmitting(false)
        return
      }

      setSuccess(true)
    } catch {
      setError('An unexpected error occurred')
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0F1419' }}>
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <KommonLogo size="lg" />
          </div>
          
          <KommonCard>
            <KommonCardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <CheckCircle className="w-8 h-8" style={{ color: '#4ade80' }} />
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                Check Your Email
              </h2>
              <p className="mb-6" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                We&apos;ve sent a verification link to <strong style={{ color: '#E8EAED' }}>{formData.email}</strong>. 
                Click the link to verify your account and complete sign up.
              </p>
              
              {/* DEV ONLY: Quick verify button */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(243, 221, 164, 0.1)', borderWidth: '1px', borderColor: 'rgba(243, 221, 164, 0.3)' }}>
                  <p className="text-sm mb-3" style={{ fontFamily: 'var(--font-lora)', color: '#F3DDA4' }}>
                    Development Mode: Skip email verification
                  </p>
                  <KommonButton
                    variant="outline"
                    className="w-full"
                    onClick={async () => {
                      try {
                        await fetch('/api/auth/dev-verify', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ email: formData.email }),
                        })
                        router.push('/login')
                      } catch (err) {
                        console.error('Dev verify error:', err)
                      }
                    }}
                  >
                    Quick Verify (Dev Only)
                  </KommonButton>
                </div>
              )}
              
              <Link href="/login">
                <KommonButton className="w-full">
                  Go to Login
                </KommonButton>
              </Link>
            </KommonCardContent>
          </KommonCard>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0F1419' }}>
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <KommonLogo size="lg" />
        </div>
        
        <KommonCard>
          <KommonCardHeader>
            <KommonCardTitle>Create Your Account</KommonCardTitle>
            <KommonCardDescription>
              Join Kommon with your university email
            </KommonCardDescription>
          </KommonCardHeader>
          <KommonCardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderWidth: '1px', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                  <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#ef4444' }} />
                  <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#ef4444' }}>
                    {error}
                  </p>
                </div>
              )}

              <KommonInput
                label="University Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@university.edu"
                required
                helperText="Must be a valid .edu email address"
              />

              <KommonInput
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a strong password"
                required
                helperText="At least 8 characters with uppercase, lowercase, and number"
              />

              <KommonInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Re-enter your password"
                required
              />

              <KommonButton
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Sign Up'}
              </KommonButton>

              <p className="text-center text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                Already have an account?{' '}
                <Link href="/login" className="font-semibold hover:underline" style={{ color: '#C86A50' }}>
                  Log in
                </Link>
              </p>
            </form>
          </KommonCardContent>
        </KommonCard>
      </div>
    </div>
  )
}
