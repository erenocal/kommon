'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { KommonInput } from '@/components/ui/kommon-input'
import { KommonButton } from '@/components/ui/kommon-button'
import { KommonCard, KommonCardContent, KommonCardDescription, KommonCardHeader, KommonCardTitle } from '@/components/ui/kommon-card'
import { KommonLogo } from '@/components/ui/kommon-logo'
import { AlertCircle } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
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

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed')
        setIsSubmitting(false)
        return
      }

      // Check if profile is completed
      const profileResponse = await fetch('/api/profile/basic-info')
      if (profileResponse.ok) {
        const profileData = await profileResponse.json()
        if (!profileData.profile || !profileData.profile.profileCompleted) {
          router.push('/profile/create')
          return
        }
      }

      // Redirect to dashboard
      router.push('/dashboard')
    } catch {
      setError('An unexpected error occurred')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0F1419' }}>
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <KommonLogo size="lg" />
        </div>
        
        <KommonCard>
          <KommonCardHeader>
            <KommonCardTitle>Welcome Back</KommonCardTitle>
            <KommonCardDescription>
              Log in to your Kommon account
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
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@university.edu"
                required
              />

              <KommonInput
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />

              <div className="flex justify-end">
                <Link 
                  href="/password-reset" 
                  className="text-sm font-semibold hover:underline"
                  style={{ fontFamily: 'var(--font-lora)', color: '#C86A50' }}
                >
                  Forgot password?
                </Link>
              </div>

              <KommonButton
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Log In'}
              </KommonButton>

              <p className="text-center text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="font-semibold hover:underline" style={{ color: '#C86A50' }}>
                  Sign up
                </Link>
              </p>
            </form>
          </KommonCardContent>
        </KommonCard>
      </div>
    </div>
  )
}
