import { KommonCard, KommonCardContent, KommonCardDescription, KommonCardHeader, KommonCardTitle } from '@/components/ui/kommon-card'
import { KommonInput } from '@/components/ui/kommon-input'
import { KommonButton } from '@/components/ui/kommon-button'

export function UniversityPartnerFormSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#1A1F26' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Form Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
              Partner with Kommon
            </h2>
            <p className="text-lg mb-8" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
              Join our network of university partners and help your students find safe, verified housing options near campus.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(200, 106, 80, 0.1)' }}>
                  <span className="text-sm font-bold" style={{ color: '#C86A50' }}>✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                    Enhanced Student Safety
                  </h3>
                  <p style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                    Provide your students with pre-vetted, university-approved housing options
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(200, 106, 80, 0.1)' }}>
                  <span className="text-sm font-bold" style={{ color: '#C86A50' }}>✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                    Reduced Housing Stress
                  </h3>
                  <p style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                    Help students find housing before arrival, reducing transition stress
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(200, 106, 80, 0.1)' }}>
                  <span className="text-sm font-bold" style={{ color: '#C86A50' }}>✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                    Community Building
                  </h3>
                  <p style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                    Foster connections between students through shared housing experiences
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <KommonCard className="border">
              <KommonCardHeader className="text-center">
                <KommonCardTitle>Get in Touch</KommonCardTitle>
                <KommonCardDescription>
                  Let&apos;s discuss how Kommon can support your students
                </KommonCardDescription>
              </KommonCardHeader>
              <KommonCardContent className="space-y-4">
                <KommonInput
                  label="University Name"
                  placeholder="Enter your university name"
                />
                <KommonInput
                  label="Your Name"
                  placeholder="Enter your full name"
                />
                <KommonInput
                  label="Title/Role"
                  placeholder="e.g., Housing Director, Student Affairs"
                />
                <KommonInput
                  label="University Email"
                  type="email"
                  placeholder="your.email@university.edu"
                  helperText="Must be an official university email address"
                />
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
                    Message
                  </label>
                  <textarea 
                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                    rows={4}
                    placeholder="Tell us about your housing needs and how we can help your students..."
                    style={{ 
                      fontFamily: 'var(--font-lora)',
                      backgroundColor: '#1A1F26',
                      borderWidth: '1px',
                      borderColor: '#2D3540',
                      color: '#E8EAED'
                    }}
                  />
                </div>
                <KommonButton className="w-full" size="lg">
                  Send Partnership Request
                </KommonButton>
                <p className="text-sm text-center" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
                  We&apos;ll respond within 1-2 business days
                </p>
              </KommonCardContent>
            </KommonCard>
          </div>
        </div>
      </div>
    </section>
  )
}
