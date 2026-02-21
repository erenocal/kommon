'use client'

import { useState } from 'react'
import { KommonButton } from '@/components/ui/kommon-button'
import { AlertCircle, ChevronLeft } from 'lucide-react'

interface LifestyleStepProps {
  onNext: () => void
  onBack: () => void
  isSubmitting: boolean
  setIsSubmitting: (value: boolean) => void
}

export default function LifestyleStep({ onNext, onBack, isSubmitting, setIsSubmitting }: LifestyleStepProps) {
  const [formData, setFormData] = useState({
    cleanliness: 3,
    socialHabits: 3,
    noiseLevel: 3,
    sleepSchedule: 'moderate',
    guestsFrequency: 'sometimes',
    petsComfortable: true,
    smokingComfortable: false,
    studyLocation: 'both',
    studyHours: 4,
    studyQuiet: true,
    lifestyleTags: [] as string[],
  })
  const [error, setError] = useState('')

  const handleSliderChange = (name: string, value: number) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
    setError('')
  }

  const toggleTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      lifestyleTags: prev.lifestyleTags.includes(tag)
        ? prev.lifestyleTags.filter(t => t !== tag)
        : [...prev.lifestyleTags, tag],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const payload = {
        cleanliness: formData.cleanliness,
        socialHabits: formData.socialHabits,
        noiseLevel: formData.noiseLevel,
        sleepSchedule: formData.sleepSchedule,
        guestsFrequency: formData.guestsFrequency,
        petsComfortable: formData.petsComfortable,
        smokingComfortable: formData.smokingComfortable,
        studyHabits: {
          location: formData.studyLocation,
          hoursPerDay: formData.studyHours,
          needsQuiet: formData.studyQuiet,
        },
        lifestyleTags: formData.lifestyleTags,
      }

      const response = await fetch('/api/profile/lifestyle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to save lifestyle preferences')
        setIsSubmitting(false)
        return
      }

      onNext()
    } catch {
      setError('An unexpected error occurred')
      setIsSubmitting(false)
    }
  }

  const availableTags = [
    'Fitness', 'Cooking', 'Gaming', 'Music', 'Reading', 'Sports',
    'Art', 'Photography', 'Travel', 'Meditation', 'Vegan', 'Vegetarian',
  ]

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

      {/* Cleanliness */}
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Cleanliness: {formData.cleanliness}/5
        </label>
        <input
          type="range"
          min="1"
          max="5"
          value={formData.cleanliness}
          onChange={(e) => handleSliderChange('cleanliness', parseInt(e.target.value))}
          className="w-full"
          style={{ accentColor: '#C86A50' }}
        />
        <div className="flex justify-between text-xs mt-1" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
          <span>Relaxed</span>
          <span>Very Tidy</span>
        </div>
      </div>

      {/* Social Habits */}
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Social Habits: {formData.socialHabits}/5
        </label>
        <input
          type="range"
          min="1"
          max="5"
          value={formData.socialHabits}
          onChange={(e) => handleSliderChange('socialHabits', parseInt(e.target.value))}
          className="w-full"
          style={{ accentColor: '#C86A50' }}
        />
        <div className="flex justify-between text-xs mt-1" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
          <span>Introverted</span>
          <span>Extroverted</span>
        </div>
      </div>

      {/* Noise Level */}
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Noise Level: {formData.noiseLevel}/5
        </label>
        <input
          type="range"
          min="1"
          max="5"
          value={formData.noiseLevel}
          onChange={(e) => handleSliderChange('noiseLevel', parseInt(e.target.value))}
          className="w-full"
          style={{ accentColor: '#C86A50' }}
        />
        <div className="flex justify-between text-xs mt-1" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
          <span>Very Quiet</span>
          <span>Lively</span>
        </div>
      </div>

      {/* Sleep Schedule */}
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Sleep Schedule
        </label>
        <select
          name="sleepSchedule"
          value={formData.sleepSchedule}
          onChange={handleSelectChange}
          className="w-full px-4 py-3 rounded border transition-colors"
          style={{
            fontFamily: 'var(--font-lora)',
            backgroundColor: '#1A1F26',
            borderColor: '#2D3540',
            color: '#E8EAED',
          }}
        >
          <option value="early_bird">Early Bird (sleep before 11pm)</option>
          <option value="moderate">Moderate (11pm - 1am)</option>
          <option value="night_owl">Night Owl (after 1am)</option>
        </select>
      </div>

      {/* Guests Frequency */}
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          How often do you have guests?
        </label>
        <select
          name="guestsFrequency"
          value={formData.guestsFrequency}
          onChange={handleSelectChange}
          className="w-full px-4 py-3 rounded border transition-colors"
          style={{
            fontFamily: 'var(--font-lora)',
            backgroundColor: '#1A1F26',
            borderColor: '#2D3540',
            color: '#E8EAED',
          }}
        >
          <option value="never">Never</option>
          <option value="rarely">Rarely</option>
          <option value="sometimes">Sometimes</option>
          <option value="often">Often</option>
        </select>
      </div>

      {/* Pets & Smoking */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex items-center gap-3 p-4 rounded-lg border cursor-pointer" style={{ backgroundColor: '#1A1F26', borderColor: '#2D3540' }}>
          <input
            type="checkbox"
            checked={formData.petsComfortable}
            onChange={(e) => handleCheckboxChange('petsComfortable', e.target.checked)}
            className="w-5 h-5"
            style={{ accentColor: '#C86A50' }}
          />
          <span style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>Comfortable with pets</span>
        </label>

        <label className="flex items-center gap-3 p-4 rounded-lg border cursor-pointer" style={{ backgroundColor: '#1A1F26', borderColor: '#2D3540' }}>
          <input
            type="checkbox"
            checked={formData.smokingComfortable}
            onChange={(e) => handleCheckboxChange('smokingComfortable', e.target.checked)}
            className="w-5 h-5"
            style={{ accentColor: '#C86A50' }}
          />
          <span style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>Comfortable with smoking</span>
        </label>
      </div>

      {/* Lifestyle Tags */}
      <div>
        <label className="block text-sm font-semibold mb-3" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Interests & Hobbies (Optional)
        </label>
        <div className="flex flex-wrap gap-2">
          {availableTags.map(tag => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              style={{
                fontFamily: 'var(--font-nunito)',
                backgroundColor: formData.lifestyleTags.includes(tag) ? '#C86A50' : '#1A1F26',
                color: formData.lifestyleTags.includes(tag) ? '#F7F5F2' : '#9BA1A6',
                borderWidth: '1px',
                borderColor: formData.lifestyleTags.includes(tag) ? '#C86A50' : '#2D3540',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <KommonButton
          type="button"
          onClick={onBack}
          variant="outline"
          size="lg"
          className="flex-1"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back
        </KommonButton>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 h-12 px-8 text-lg bg-hearth hover:bg-hearth/90 text-foundation font-semibold transition-all duration-200 rounded-md"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          {isSubmitting ? 'Saving...' : 'Continue'}
        </button>
      </div>
    </form>
  )
}
