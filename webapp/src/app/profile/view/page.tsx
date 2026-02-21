'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { KommonCard, KommonCardContent, KommonCardHeader, KommonCardTitle } from '@/components/ui/kommon-card'
import { KommonButton } from '@/components/ui/kommon-button'
import { KommonLogo } from '@/components/ui/kommon-logo'
import { ChevronLeft, User, Heart, Home, Edit } from 'lucide-react'

interface ProfileData {
  fullName: string
  university: string
  major?: string
  academicYear?: string
  userType: string
  lifestylePreferences?: {
    cleanliness: number
    socialHabits: number
    noiseLevel: number
    sleepSchedule: string
    guestsFrequency: string
    petsComfortable: boolean
    smokingComfortable: boolean
    studyHabits: any
    lifestyleTags: any
  }
  housingPreferences?: {
    maxBudget: number
    preferredNeighborhoods: any
    moveInDate: string
    leaseDuration: string
    housingType: string
    amenitiesRequired: any
  }
}

export default function ViewProfilePage() {
  const router = useRouter()
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch('/api/profile/view', { credentials: 'include' })
        if (response.ok) {
          const data = await response.json()
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0F1419' }}>
        <p style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>Loading...</p>
      </div>
    )
  }

  if (!profile) {
    return null
  }

  const lifestyle = profile.lifestylePreferences
  const housing = profile.housingPreferences

  return (
    <div className="min-h-screen px-4 py-8" style={{ backgroundColor: '#0F1419' }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <KommonLogo size="md" />
        </div>

        <div className="flex items-center justify-between mb-6">
          <KommonButton onClick={() => router.push('/dashboard')} variant="outline">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </KommonButton>
          <KommonButton onClick={() => router.push('/profile/create')} variant="outline">
            <Edit className="w-5 h-5 mr-2" />
            Edit Profile
          </KommonButton>
        </div>

        <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Your Profile
        </h1>

        {/* Basic Info */}
        <KommonCard className="mb-6">
          <KommonCardHeader>
            <div className="flex items-center gap-3">
              <User className="w-6 h-6" style={{ color: '#C86A50' }} />
              <KommonCardTitle>Basic Information</KommonCardTitle>
            </div>
          </KommonCardHeader>
          <KommonCardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                  Full Name
                </p>
                <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>{profile.fullName}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                  University
                </p>
                <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>{profile.university}</p>
              </div>
              {profile.major && (
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                    Major
                  </p>
                  <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>{profile.major}</p>
                </div>
              )}
              {profile.academicYear && (
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                    Academic Year
                  </p>
                  <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                    {profile.academicYear.charAt(0).toUpperCase() + profile.academicYear.slice(1)}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                  Profile Type
                </p>
                <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                  {profile.userType === 'seeker' ? 'Looking for Housing' : 'Offering Housing'}
                </p>
              </div>
            </div>
          </KommonCardContent>
        </KommonCard>

        {/* Lifestyle Preferences */}
        {lifestyle && (
          <KommonCard className="mb-6">
            <KommonCardHeader>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6" style={{ color: '#C86A50' }} />
                <KommonCardTitle>Lifestyle Preferences</KommonCardTitle>
              </div>
            </KommonCardHeader>
            <KommonCardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Cleanliness
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>{lifestyle.cleanliness}/5</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Social Habits
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>{lifestyle.socialHabits}/5</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Noise Level
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>{lifestyle.noiseLevel}/5</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Sleep Schedule
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                      {lifestyle.sleepSchedule === 'early_bird' && 'Early Bird'}
                      {lifestyle.sleepSchedule === 'moderate' && 'Moderate'}
                      {lifestyle.sleepSchedule === 'night_owl' && 'Night Owl'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Guests Frequency
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                      {lifestyle.guestsFrequency.charAt(0).toUpperCase() + lifestyle.guestsFrequency.slice(1)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: lifestyle.petsComfortable ? '#12B76A' : '#D92D20' }}
                    />
                    <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                      {lifestyle.petsComfortable ? 'Comfortable' : 'Not comfortable'} with pets
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: lifestyle.smokingComfortable ? '#12B76A' : '#D92D20' }}
                    />
                    <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                      {lifestyle.smokingComfortable ? 'Comfortable' : 'Not comfortable'} with smoking
                    </p>
                  </div>
                </div>
                {lifestyle.lifestyleTags && Array.isArray(lifestyle.lifestyleTags) && lifestyle.lifestyleTags.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Interests
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {lifestyle.lifestyleTags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            fontFamily: 'var(--font-nunito)',
                            backgroundColor: '#C86A50',
                            color: '#F7F5F2',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </KommonCardContent>
          </KommonCard>
        )}

        {/* Housing Preferences */}
        {housing && (
          <KommonCard>
            <KommonCardHeader>
              <div className="flex items-center gap-3">
                <Home className="w-6 h-6" style={{ color: '#C86A50' }} />
                <KommonCardTitle>Housing Preferences</KommonCardTitle>
              </div>
            </KommonCardHeader>
            <KommonCardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                    Max Budget
                  </p>
                  <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                    ${housing.maxBudget.toLocaleString()}/month
                  </p>
                </div>
                {housing.preferredNeighborhoods && Array.isArray(housing.preferredNeighborhoods) && housing.preferredNeighborhoods.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Preferred Neighborhoods
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {housing.preferredNeighborhoods.map((neighborhood: string) => (
                        <span
                          key={neighborhood}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            fontFamily: 'var(--font-nunito)',
                            backgroundColor: '#1A1F26',
                            color: '#E8EAED',
                            borderWidth: '1px',
                            borderColor: '#2D3540',
                          }}
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Move-in Date
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                      {new Date(housing.moveInDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Lease Duration
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                      {housing.leaseDuration.replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                    Housing Type
                  </p>
                  <p style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                    {housing.housingType.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </p>
                </div>
                {housing.amenitiesRequired && Array.isArray(housing.amenitiesRequired) && housing.amenitiesRequired.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#9BA1A6' }}>
                      Required Amenities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {housing.amenitiesRequired.map((amenity: string) => (
                        <span
                          key={amenity}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{
                            fontFamily: 'var(--font-nunito)',
                            backgroundColor: '#1A1F26',
                            color: '#E8EAED',
                            borderWidth: '1px',
                            borderColor: '#2D3540',
                          }}
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </KommonCardContent>
          </KommonCard>
        )}
      </div>
    </div>
  )
}
