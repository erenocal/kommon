'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { KommonCard, KommonCardContent, KommonCardHeader, KommonCardTitle, KommonCardDescription } from '@/components/ui/kommon-card'
import { KommonButton } from '@/components/ui/kommon-button'
import { User, Home, Settings, LogOut } from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<{ fullName: string; university: string; major?: string; userType: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch('/api/profile/basic-info')
        if (response.ok) {
          const data = await response.json()
          if (!data.profile || !data.profile.profileCompleted) {
            router.push('/profile/create')
            return
          }
          setProfile(data.profile)
        } else {
          router.push('/login')
        }
      } catch (err) {
        console.error('Failed to load profile:', err)
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }
    loadProfile()
  }, [router])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0F1419' }}>
        <p style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F1419' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
              Dashboard
            </h1>
            <KommonButton onClick={handleLogout} variant="outline">
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </KommonButton>
          </div>

          {profile && (
            <div className="mb-8">
              <p className="text-xl mb-2" style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                Welcome back, {profile.fullName}!
              </p>
              <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                {profile.university} {profile.major && `• ${profile.major}`}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <KommonCard>
              <KommonCardHeader>
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6" style={{ color: '#C86A50' }} />
                  <KommonCardTitle>Profile</KommonCardTitle>
                </div>
              </KommonCardHeader>
              <KommonCardContent>
                <KommonCardDescription className="mb-4">
                  View and edit your profile information
                </KommonCardDescription>
                <KommonButton variant="outline" className="w-full" onClick={() => router.push('/profile/view')}>
                  View Profile
                </KommonButton>
              </KommonCardContent>
            </KommonCard>

            <KommonCard>
              <KommonCardHeader>
                <div className="flex items-center gap-3">
                  <Home className="w-6 h-6" style={{ color: '#C86A50' }} />
                  <KommonCardTitle>Housing</KommonCardTitle>
                </div>
              </KommonCardHeader>
              <KommonCardContent>
                <KommonCardDescription className="mb-4">
                  {profile?.userType === 'seeker' ? 'Browse available rooms' : 'Manage your listings'}
                </KommonCardDescription>
                <KommonButton 
                  variant="outline" 
                  className="w-full"
                  onClick={() => router.push('/listings')}
                >
                  {profile?.userType === 'seeker' ? 'Find Housing' : 'My Listings'}
                </KommonButton>
              </KommonCardContent>
            </KommonCard>

            <KommonCard>
              <KommonCardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6" style={{ color: '#C86A50' }} />
                  <KommonCardTitle>Settings</KommonCardTitle>
                </div>
              </KommonCardHeader>
              <KommonCardContent>
                <KommonCardDescription className="mb-4">
                  Manage your account settings
                </KommonCardDescription>
                <KommonButton variant="outline" className="w-full">
                  Settings
                </KommonButton>
              </KommonCardContent>
            </KommonCard>
          </div>

          <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: '#1A1F26', borderWidth: '1px', borderColor: '#2D3540' }}>
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
              Phase 2A Complete
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
              Room listings are now available! Browse rooms, create listings, and find your perfect match.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
