import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface KommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const variantClasses = {
  primary: 'bg-hearth hover:bg-hearth/90 text-foundation font-semibold',
  secondary: 'bg-sage hover:bg-sage/90 text-ink font-semibold',
  accent: 'bg-sunlight hover:bg-sunlight/90 text-ink font-semibold',
  outline: 'bg-transparent border-2 border-hearth text-hearth hover:bg-hearth hover:text-foundation focus:bg-hearth focus:text-foundation font-semibold [&:hover]:text-foundation',
}

const sizeClasses = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-12 px-8 text-lg',
}

export function KommonButton({ 
  className, 
  variant = 'primary', 
  size = 'md',
  children,
  ...props 
}: KommonButtonProps) {
  return (
    <Button
      variant={variant === 'outline' ? 'outline' : 'default'}
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        'transition-all duration-200',
        className
      )}
      style={{ fontFamily: 'var(--font-nunito)' }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default KommonButton
