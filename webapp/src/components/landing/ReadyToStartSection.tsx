'use client'

import { KommonButton } from '@/components/ui/kommon-button'

export function ReadyToStartSection() {
  return (
    <section className="py-16 px-4 bg-hearth">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-6" style={{ fontFamily: 'var(--font-nunito)' }}>
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-lora)' }}>
          Join thousands of students who have found safe, affordable housing through our verified community
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <KommonButton 
            size="lg" 
            className="w-full sm:w-auto min-h-[48px] px-8 text-base font-semibold bg-white text-hearth hover:bg-white/90 hover:scale-105 transition-all duration-200"
          >
            Find Housing Now
          </KommonButton>
          <KommonButton 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto min-h-[48px] px-8 text-base font-semibold border-white text-white hover:bg-white transition-all duration-200"
            style={{
              ['--hover-text-color' as string]: 'var(--hearth)',
            } as React.CSSProperties}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--hearth)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            List Your Room
          </KommonButton>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">500+</span>
            <span>students housed safely</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">95%</span>
            <span>satisfaction rate</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">University-verified</span>
            <span>hosts only</span>
          </div>
        </div>
      </div>
    </section>
  )
}
