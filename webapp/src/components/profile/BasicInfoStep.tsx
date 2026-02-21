'use client'

import { useState, useEffect } from 'react'
import { KommonInput } from '@/components/ui/kommon-input'
import { KommonButton } from '@/components/ui/kommon-button'
import { AlertCircle, UserCheck, Home } from 'lucide-react'

interface BasicInfoStepProps {
  onNext: () => void
  isSubmitting: boolean
  setIsSubmitting: (value: boolean) => void
}

export default function BasicInfoStep({ onNext, isSubmitting, setIsSubmitting }: BasicInfoStepProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    university: '',
    major: '',
    academicYear: '',
    userType: '',
  })
  const [error, setError] = useState('')

  useEffect(() => {
    // Load existing profile data if available
    const loadProfile = async () => {
      try {
        const response = await fetch('/api/profile/basic-info')
        if (response.ok) {
          const data = await response.json()
          if (data.profile) {
            setFormData({
              fullName: data.profile.fullName || '',
              university: data.profile.university || '',
              major: data.profile.major || '',
              academicYear: data.profile.academicYear || '',
              userType: data.profile.userType || '',
            })
          }
        }
      } catch (err) {
        console.error('Failed to load profile:', err)
      }
    }
    loadProfile()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/profile/basic-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to save basic info')
        setIsSubmitting(false)
        return
      }

      onNext()
    } catch {
      setError('An unexpected error occurred')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderWidth: '1px', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
          <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#ef4444' }} />
          <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#ef4444' }}>
            {error}
          </p>
        </div>
      )}

      <KommonInput
        label="Full Name"
        name="fullName"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        placeholder="John Doe"
        required
      />

      <KommonInput
        label="University"
        name="university"
        type="text"
        value={formData.university}
        onChange={handleInputChange}
        placeholder="Columbia University"
        required
      />

      <KommonInput
        label="Major (Optional)"
        name="major"
        type="text"
        value={formData.major}
        onChange={handleInputChange}
        placeholder="Computer Science"
      />

      <div>
        <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Academic Year (Optional)
        </label>
        <select
          name="academicYear"
          value={formData.academicYear}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded border transition-colors"
          style={{
            fontFamily: 'var(--font-lora)',
            backgroundColor: '#1A1F26',
            borderColor: '#2D3540',
            color: '#E8EAED',
          }}
        >
          <option value="">Select year</option>
          <option value="freshman">Freshman</option>
          <option value="sophomore">Sophomore</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
          <option value="graduate">Graduate</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          I am... *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, userType: 'seeker' }))}
            className="p-4 rounded-lg border-2 transition-all text-left"
            style={{
              backgroundColor: formData.userType === 'seeker' ? 'rgba(200, 106, 80, 0.1)' : '#1A1F26',
              borderColor: formData.userType === 'seeker' ? '#C86A50' : '#2D3540',
            }}
          >
            <UserCheck className="w-6 h-6 mb-2" style={{ color: formData.userType === 'seeker' ? '#C86A50' : '#9BA1A6' }} />
            <p className="font-bold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
              Looking for Housing
            </p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
              I need a room or roommate
            </p>
          </button>

          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, userType: 'provider' }))}
            className="p-4 rounded-lg border-2 transition-all text-left"
            style={{
              backgroundColor: formData.userType === 'provider' ? 'rgba(200, 106, 80, 0.1)' : '#1A1F26',
              borderColor: formData.userType === 'provider' ? '#C86A50' : '#2D3540',
            }}
          >
            <Home className="w-6 h-6 mb-2" style={{ color: formData.userType === 'provider' ? '#C86A50' : '#9BA1A6' }} />
            <p className="font-bold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
              Offering Housing
            </p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
              I have a room available
            </p>
          </button>
        </div>
      </div>

      <KommonButton
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting || !formData.fullName || !formData.university || !formData.userType}
      >
        {isSubmitting ? 'Saving...' : 'Continue'}
      </KommonButton>
    </form>
  )
}
