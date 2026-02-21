'use client'

import { useState } from 'react'
import { KommonButton } from '@/components/ui/kommon-button'
import { KommonInput } from '@/components/ui/kommon-input'
import { AlertCircle, ChevronLeft } from 'lucide-react'

interface HousingStepProps {
  onComplete: () => void
  onBack: () => void
  isSubmitting: boolean
  setIsSubmitting: (value: boolean) => void
}

export default function HousingStep({ onComplete, onBack, isSubmitting, setIsSubmitting }: HousingStepProps) {
  const [formData, setFormData] = useState({
    maxBudget: '',
    preferredNeighborhoods: [] as string[],
    moveInDate: '',
    leaseDuration: 'flexible',
    housingType: 'private_room',
    amenitiesRequired: [] as string[],
  })
  const [error, setError] = useState('')

  const nycNeighborhoods = [
    'Upper West Side', 'Upper East Side', 'Midtown', 'Chelsea', 'Greenwich Village',
    'East Village', 'Lower East Side', 'Financial District', 'Tribeca', 'SoHo',
    'Williamsburg', 'Brooklyn Heights', 'Park Slope', 'Astoria', 'Long Island City',
    'Harlem', 'Washington Heights', 'Inwood', 'Bronx', 'Queens',
  ]

  const amenitiesList = [
    'Laundry', 'Gym', 'Doorman', 'Elevator', 'Parking',
    'Dishwasher', 'Air Conditioning', 'Heating', 'WiFi', 'Furnished',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const toggleNeighborhood = (neighborhood: string) => {
    setFormData(prev => ({
      ...prev,
      preferredNeighborhoods: prev.preferredNeighborhoods.includes(neighborhood)
        ? prev.preferredNeighborhoods.filter(n => n !== neighborhood)
        : [...prev.preferredNeighborhoods, neighborhood],
    }))
    setError('')
  }

  const toggleAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenitiesRequired: prev.amenitiesRequired.includes(amenity)
        ? prev.amenitiesRequired.filter(a => a !== amenity)
        : [...prev.amenitiesRequired, amenity],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.preferredNeighborhoods.length === 0) {
      setError('Please select at least one neighborhood')
      return
    }

    if (!formData.maxBudget || parseInt(formData.maxBudget) <= 0) {
      setError('Please enter a valid budget')
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        maxBudget: parseInt(formData.maxBudget),
        preferredNeighborhoods: formData.preferredNeighborhoods,
        moveInDate: formData.moveInDate || undefined,
        leaseDuration: formData.leaseDuration,
        housingType: formData.housingType,
        amenitiesRequired: formData.amenitiesRequired.length > 0 ? formData.amenitiesRequired : undefined,
      }

      const response = await fetch('/api/profile/housing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to save housing preferences')
        setIsSubmitting(false)
        return
      }

      onComplete()
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
        label="Maximum Monthly Budget ($)"
        name="maxBudget"
        type="number"
        value={formData.maxBudget}
        onChange={handleInputChange}
        placeholder="1500"
        required
      />

      {/* Housing Type */}
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Housing Type
        </label>
        <select
          name="housingType"
          value={formData.housingType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded border transition-colors"
          style={{
            fontFamily: 'var(--font-lora)',
            backgroundColor: '#1A1F26',
            borderColor: '#2D3540',
            color: '#E8EAED',
          }}
        >
          <option value="private_room">Private Room</option>
          <option value="shared_room">Shared Room</option>
          <option value="studio">Studio</option>
          <option value="apartment">Full Apartment</option>
        </select>
      </div>

      {/* Preferred Neighborhoods */}
      <div>
        <label className="block text-sm font-semibold mb-3" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Preferred Neighborhoods *
        </label>
        <div className="max-h-48 overflow-y-auto p-3 rounded-lg border" style={{ backgroundColor: '#1A1F26', borderColor: '#2D3540' }}>
          <div className="grid grid-cols-2 gap-2">
            {nycNeighborhoods.map(neighborhood => (
              <label key={neighborhood} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.preferredNeighborhoods.includes(neighborhood)}
                  onChange={() => toggleNeighborhood(neighborhood)}
                  className="w-4 h-4"
                  style={{ accentColor: '#C86A50' }}
                />
                <span className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED' }}>
                  {neighborhood}
                </span>
              </label>
            ))}
          </div>
        </div>
        <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
          Selected: {formData.preferredNeighborhoods.length}
        </p>
      </div>

      {/* Move-in Date */}
      <KommonInput
        label="Preferred Move-in Date (Optional)"
        name="moveInDate"
        type="date"
        value={formData.moveInDate}
        onChange={handleInputChange}
      />

      {/* Lease Duration */}
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Lease Duration
        </label>
        <select
          name="leaseDuration"
          value={formData.leaseDuration}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded border transition-colors"
          style={{
            fontFamily: 'var(--font-lora)',
            backgroundColor: '#1A1F26',
            borderColor: '#2D3540',
            color: '#E8EAED',
          }}
        >
          <option value="3_months">3 Months</option>
          <option value="6_months">6 Months</option>
          <option value="12_months">12 Months</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      {/* Amenities */}
      <div>
        <label className="block text-sm font-semibold mb-3" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
          Required Amenities (Optional)
        </label>
        <div className="flex flex-wrap gap-2">
          {amenitiesList.map(amenity => (
            <button
              key={amenity}
              type="button"
              onClick={() => toggleAmenity(amenity)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              style={{
                fontFamily: 'var(--font-nunito)',
                backgroundColor: formData.amenitiesRequired.includes(amenity) ? '#C86A50' : '#1A1F26',
                color: formData.amenitiesRequired.includes(amenity) ? '#F7F5F2' : '#9BA1A6',
                borderWidth: '1px',
                borderColor: formData.amenitiesRequired.includes(amenity) ? '#C86A50' : '#2D3540',
              }}
            >
              {amenity}
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
        <KommonButton
          type="submit"
          className="flex-1"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Completing...' : 'Complete Profile'}
        </KommonButton>
      </div>
    </form>
  )
}
