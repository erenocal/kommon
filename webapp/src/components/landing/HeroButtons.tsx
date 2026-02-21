'use client'

import { KommonButton } from '@/components/ui/kommon-button'

export function HeroButtons() {
  return (
    <>
      {/* Dual CTA Strategy - Mobile Optimized */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center mb-8 animate-scale-in">
        <KommonButton size="lg" className="w-full sm:w-auto min-h-[48px] px-8 text-base font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200">
          Find Housing
        </KommonButton>
        <KommonButton 
          variant="outline" 
          size="lg" 
          className="w-full sm:w-auto min-h-[48px] px-8 text-base font-semibold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white"
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
        >
          List Your Room
        </KommonButton>
      </div>

      {/* Trust Indicators - Mobile Optimized */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-white/80">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-hearth text-base">500+</span>
          <span className="text-xs sm:text-sm">students housed safely</span>
        </div>
        <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-hearth text-base">95%</span>
          <span className="text-xs sm:text-sm">satisfaction rate</span>
        </div>
        <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-hearth text-xs sm:text-sm">University-verified</span>
          <span className="text-xs sm:text-sm">hosts only</span>
        </div>
      </div>
    </>
  )
}
