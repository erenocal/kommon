import React from 'react'
import { cn } from '@/lib/utils'

interface KommonWordmarkProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'ink' | 'hearth' | 'sage' | 'sunlight' | 'foundation'
}

const sizeClasses = {
  sm: 'w-32 h-8',
  md: 'w-44 h-12',
  lg: 'w-56 h-16',
  xl: 'w-72 h-20',
}

const colorClasses = {
  ink: 'text-ink',
  hearth: 'text-hearth',
  sage: 'text-sage',
  sunlight: 'text-sunlight',
  foundation: 'text-foundation',
}

export function KommonWordmark({ 
  className, 
  size = 'md', 
  color = 'ink' 
}: KommonWordmarkProps) {
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
        viewBox="0 0 220 60"
        className="w-full h-full"
        aria-label="Kommon Wordmark"
        preserveAspectRatio="xMidYMid meet"
      >
        <text 
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fontFamily="var(--font-nunito), sans-serif" 
          fontSize="36" 
          fill="currentColor" 
          fontWeight="bold"
        >
          Kommon
        </text>
      </svg>
    </div>
  )
}

export default KommonWordmark
