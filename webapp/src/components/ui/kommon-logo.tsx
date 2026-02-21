import React from 'react'
import { cn } from '@/lib/utils'

interface KommonLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  color?: 'ink' | 'hearth' | 'sage' | 'sunlight' | 'foundation'
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
  xxl: 'w-32 h-32',
}

const colorClasses = {
  ink: 'text-ink',
  hearth: 'text-hearth',
  sage: 'text-sage',
  sunlight: 'text-sunlight',
  foundation: 'text-foundation',
}

export function KommonLogo({ 
  className, 
  size = 'md', 
  color = 'ink' 
}: KommonLogoProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        aria-label="Kommon Community Threshold Logo"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="scale(0.8) translate(-10, 0)">
          <path d="M 40 30 L 40 90 L 150 90" stroke="currentColor" strokeWidth="4" fill="none"/>
          <path d="M 20 30 L 42 30" stroke="currentColor" strokeWidth="4" fill="none"/>

          <g transform="translate(-25, 30)">
            <path d="M 70 60 L 90 60 Q 93 58, 90 54 C 85 52, 78 52, 72 57 L 70 58 Z" stroke="currentColor" strokeWidth="2" fill="var(--sunlight)"/>
            <path d="M 75 60 L 95 60 Q 98 58, 95 54 C 90 52, 83 52, 77 57 L 75 58 Z" stroke="currentColor" strokeWidth="2" fill="var(--sunlight)"/>
          </g>
          <g transform="translate(5, 29)">
            <path d="M 70 60 L 90 60 Q 93 58, 90 54 C 85 52, 78 52, 72 57 L 70 58 Z" stroke="currentColor" strokeWidth="2" fill="var(--hearth)"/>
            <path d="M 75 60 L 95 60 Q 98 58, 95 54 C 90 52, 83 52, 77 57 L 75 58 Z" stroke="currentColor" strokeWidth="2" fill="var(--hearth)"/>
          </g>
          <g transform="translate(35, 29)">
            <path d="M 70 60 L 90 60 Q 93 58, 90 54 C 85 52, 78 52, 72 57 L 70 58 Z" stroke="currentColor" strokeWidth="2" fill="var(--sage)"/>
            <path d="M 75 60 L 95 60 Q 98 58, 95 54 C 90 52, 83 52, 77 57 L 75 58 Z" stroke="currentColor" strokeWidth="2" fill="var(--sage)"/>
          </g>
        </g>
      </svg>
    </div>
  )
}
export default KommonLogo
