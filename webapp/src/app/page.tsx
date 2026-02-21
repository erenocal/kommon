import { KommonButton } from '@/components/ui/kommon-button'
import { KommonCard, KommonCardContent, KommonCardDescription, KommonCardHeader, KommonCardTitle } from '@/components/ui/kommon-card'
import { KommonInput } from '@/components/ui/kommon-input'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { TrustIndicatorsSection } from '@/components/landing/TrustIndicatorsSection'
import { BenefitHighlight1 } from '@/components/landing/BenefitHighlight1'
import { BenefitHighlight2 } from '@/components/landing/BenefitHighlight2'
import { BenefitHighlight3 } from '@/components/landing/BenefitHighlight3'
import { HowItWorksSection } from '@/components/landing/HowItWorksSection'
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'
import { ReadyToStartSection } from '@/components/landing/ReadyToStartSection'
import { UniversityPartnersSection } from '@/components/landing/UniversityPartnersSection'
import { UniversityPartnerFormSection } from '@/components/landing/UniversityPartnerFormSection'
import { HeroButtons } from '@/components/landing/HeroButtons'

export default function Home() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="py-16 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/landing/brownstone_horizontal4.webp)',
          minHeight: '600px'
        }}
      >
        {/* Background Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 animate-fade-in" style={{ fontFamily: 'var(--font-nunito)' }}>
            Find Safe, Verified Student Housing Near Your Campus
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ fontFamily: 'var(--font-lora)' }}>
            Connect directly with verified university students for safe, affordable housing options.
          </p>
          
          <HeroButtons />
        </div>
      </section>

      {/* Feature Highlight Section (Trust Indicators) */}
      <TrustIndicatorsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Benefit Highlight 1 - Find affordable housing */}
      <BenefitHighlight1 />

      {/* Benefit Highlight 2 - Don't get scammed */}
      <BenefitHighlight2 />

      {/* Benefit Highlight 3 - Lock down apartment */}
      <BenefitHighlight3 />

      {/* Student Testimonials */}
      <TestimonialsSection />

      {/* Ready to Get Started Section */}
      <ReadyToStartSection />

      {/* University Logos */}
      <UniversityPartnersSection />

      {/* University Partner Form */}
      <UniversityPartnerFormSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}