'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { KommonCard, KommonCardContent, KommonCardHeader, KommonCardTitle, KommonCardDescription } from '@/components/ui/kommon-card'
import { KommonButton } from '@/components/ui/kommon-button'
import { KommonLogo } from '@/components/ui/kommon-logo'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BasicInfoStep from '@/components/profile/BasicInfoStep'
import LifestyleStep from '@/components/profile/LifestyleStep'
import HousingStep from '@/components/profile/HousingStep'

export default function CreateProfilePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps = [
    { number: 1, title: 'Basic Info', description: 'Tell us about yourself' },
    { number: 2, title: 'Lifestyle', description: 'Your living preferences' },
    { number: 3, title: 'Housing', description: 'What you\'re looking for' },
  ]

  const handleNext = () => {
    if (currentStep < 3) {
      setIsSubmitting(false) // Reset submitting state when moving to next step
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setIsSubmitting(false) // Reset submitting state when going back
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen px-4 py-8" style={{ backgroundColor: '#0F1419' }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <KommonLogo size="md" />
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors"
                  style={{
                    backgroundColor: currentStep >= step.number ? '#C86A50' : '#242A33',
                    color: currentStep >= step.number ? '#F7F5F2' : '#9BA1A6',
                    fontFamily: 'var(--font-nunito)',
                  }}
                >
                  {step.number}
                </div>
                <p
                  className="text-sm font-semibold text-center"
                  style={{
                    fontFamily: 'var(--font-nunito)',
                    color: currentStep >= step.number ? '#E8EAED' : '#9BA1A6',
                  }}
                >
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className="h-0.5 flex-1 mx-2 mt-[-24px]"
                  style={{
                    backgroundColor: currentStep > step.number ? '#C86A50' : '#242A33',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <KommonCard>
          <KommonCardHeader>
            <KommonCardTitle>{steps[currentStep - 1].title}</KommonCardTitle>
            <KommonCardDescription>
              {steps[currentStep - 1].description}
            </KommonCardDescription>
          </KommonCardHeader>
          <KommonCardContent>
            {currentStep === 1 && (
              <BasicInfoStep onNext={handleNext} isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} />
            )}
            {currentStep === 2 && (
              <LifestyleStep onNext={handleNext} onBack={handleBack} isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} />
            )}
            {currentStep === 3 && (
              <HousingStep onComplete={handleComplete} onBack={handleBack} isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} />
            )}
          </KommonCardContent>
        </KommonCard>
      </div>
    </div>
  )
}
