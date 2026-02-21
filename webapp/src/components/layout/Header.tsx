'use client'

import { useState } from 'react'
import { KommonBrand } from '@/components/ui/kommon-brand'
import { KommonButton } from '@/components/ui/kommon-button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-dark-surface border-b border-dark backdrop-blur-sm bg-dark-surface/95 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-hearth/20 rounded-lg"
              aria-label="Go to top of page"
            >
              <KommonBrand variant="logo-wordmark" size="md" color="foundation" />
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#features" className="text-dark-text hover:text-hearth transition-colors font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
              Features
            </a>
            <a href="#how-it-works" className="text-dark-text hover:text-hearth transition-colors font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
              How It Works
            </a>
            <a href="#testimonials" className="text-dark-text hover:text-hearth transition-colors font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
              Testimonials
            </a>
            <a href="#universities" className="text-dark-text hover:text-hearth transition-colors font-medium" style={{ fontFamily: 'var(--font-nunito)' }}>
              Universities
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login">
              <KommonButton variant="outline" size="sm" className="hover:scale-105 transition-all duration-200">
                Log In
              </KommonButton>
            </a>
            <a href="/signup">
              <KommonButton size="sm" className="hover:scale-105 transition-all duration-200">
                Sign Up
              </KommonButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-dark-elevated transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-dark-text" />
            ) : (
              <Menu className="w-6 h-6 text-dark-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-dark">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="#features" 
                className="text-dark-text hover:text-hearth transition-colors font-medium py-2" 
                style={{ fontFamily: 'var(--font-nunito)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-dark-text hover:text-hearth transition-colors font-medium py-2" 
                style={{ fontFamily: 'var(--font-nunito)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="text-dark-text hover:text-hearth transition-colors font-medium py-2" 
                style={{ fontFamily: 'var(--font-nunito)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#universities" 
                className="text-dark-text hover:text-hearth transition-colors font-medium py-2" 
                style={{ fontFamily: 'var(--font-nunito)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Universities
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-dark">
                <a href="/login">
                  <KommonButton variant="outline" size="sm" className="w-full hover:scale-105 transition-all duration-200">
                    Log In
                  </KommonButton>
                </a>
                <a href="/signup">
                  <KommonButton size="sm" className="w-full hover:scale-105 transition-all duration-200">
                    Sign Up
                  </KommonButton>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
