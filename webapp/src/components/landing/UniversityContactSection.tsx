'use client'

import { useState } from 'react'
import { KommonCard, KommonCardContent, KommonCardDescription, KommonCardHeader, KommonCardTitle } from '@/components/ui/kommon-card'
import { KommonInput } from '@/components/ui/kommon-input'
import { KommonButton } from '@/components/ui/kommon-button'
import { Mail, Phone, School } from 'lucide-react'

export function UniversityContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    title: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        university: '',
        title: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-16 px-4" style={{ backgroundColor: '#1A1F26' }}>
        <div className="container mx-auto max-w-2xl">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <Mail className="w-8 h-8" style={{ color: '#4ade80' }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
              Thank You!
            </h3>
            <p className="text-lg" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
              We&apos;ve received your message and will get back to you within 24 hours to discuss partnership opportunities.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#1A1F26' }}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
            Partner with Kommon
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
            Are you a university representative interested in providing verified housing solutions for your students? 
            Let&apos;s work together to create a safer housing experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                Why Partner with Kommon?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <School className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#C86A50' }} />
                  <div>
                    <h4 className="font-semibold" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                      Verified Student Safety
                    </h4>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                      University email verification ensures only your students access housing through our platform
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#C86A50' }} />
                  <div>
                    <h4 className="font-semibold" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                      Reduced Housing Stress
                    </h4>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                      Help your students find compatible roommates and safe housing options
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#C86A50' }} />
                  <div>
                    <h4 className="font-semibold" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                      University Integration
                    </h4>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                      Seamless integration with your existing student services and housing programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <KommonCard>
              <KommonCardHeader>
                <KommonCardTitle>Get in Touch</KommonCardTitle>
                <KommonCardDescription>
                  Tell us about your university and how we can work together
                </KommonCardDescription>
              </KommonCardHeader>
              <KommonCardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <KommonInput
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                    <KommonInput
                      label="Job Title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., Director of Housing"
                      required
                    />
                  </div>
                  
                  <KommonInput
                    label="University Name"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    placeholder="Your university name"
                    required
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <KommonInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@university.edu"
                      required
                    />
                    <KommonInput
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                      placeholder="Tell us about your interest in partnering with Kommon..."
                      required
                      style={{ 
                        fontFamily: 'var(--font-lora)',
                        backgroundColor: '#242A33',
                        borderWidth: '1px',
                        borderColor: '#2D3540',
                        color: '#E8EAED'
                      }}
                    />
                  </div>
                  
                  <KommonButton 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </KommonButton>
                </form>
              </KommonCardContent>
            </KommonCard>
          </div>
        </div>
      </div>
    </section>
  )
}
