import React from 'react'
import { KommonLogo } from './kommon-logo'
import { KommonWordmark } from './kommon-wordmark'
import { cn } from '@/lib/utils'

interface KommonBrandProps {
  className?: string
  variant?: 'logo-only' | 'wordmark-only' | 'logo-wordmark' | 'full-brand'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'ink' | 'hearth' | 'sage' | 'sunlight' | 'foundation'
  tagline?: boolean
}

const sizeClasses = {
  sm: '-gap-3',
  md: '-gap-3',
  lg: '-gap-3',
  xl: '-gap-3',
}

const colorClasses = {
  ink: 'text-ink',
  hearth: 'text-hearth',
  sage: 'text-sage',
  sunlight: 'text-sunlight',
  foundation: 'text-foundation',
}

export function KommonBrand({ 
  className, 
  variant = 'logo-wordmark',
  size = 'md',
  color = 'ink',
  tagline = false
}: KommonBrandProps) {
  const logoSize = size === 'sm' ? 'sm' : size === 'md' ? 'md' : size === 'lg' ? 'lg' : 'xl'
  const wordmarkSize = size === 'sm' ? 'sm' : size === 'md' ? 'md' : size === 'lg' ? 'lg' : 'xl'

  if (variant === 'logo-only') {
    return (
      <div className={cn('flex items-center', className)}>
        <KommonLogo size={logoSize} color={color} />
      </div>
    )
  }

  if (variant === 'wordmark-only') {
    return (
      <div className={cn('flex items-center', className)}>
        <KommonWordmark size={wordmarkSize} color={color} />
      </div>
    )
  }

  if (variant === 'full-brand') {
    return (
      <div className={cn('flex flex-col items-center', sizeClasses[size], colorClasses[color], className)}>
        <div className="flex items-center gap-3">
          <KommonLogo size={logoSize} color={color} />
          <KommonWordmark size={wordmarkSize} color={color} />
        </div>
        {tagline && (
          <p className="text-sm font-body text-ink/80" style={{ fontFamily: 'var(--font-lora)' }}>
            Find Your Community.
          </p>
        )}
      </div>
    )
  }

  // Default: logo-wordmark
  return (
    <div className={cn('flex items-center', sizeClasses[size], colorClasses[color], className)}>
      <KommonLogo size={logoSize} color={color} />
      <KommonWordmark size={wordmarkSize} color={color} />
    </div>
  )
}

export default KommonBrand
