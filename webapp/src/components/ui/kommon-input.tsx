import React, { useId } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface KommonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export function KommonInput({ 
  className, 
  label,
  error,
  helperText,
  id,
  ...props 
}: KommonInputProps) {
  const generatedId = useId()
  const inputId = id || generatedId
  
  return (
    <div className="space-y-2">
      {label && (
        <Label 
          htmlFor={inputId}
          className="text-sm font-semibold"
          style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}
        >
          {label}
        </Label>
      )}
      <Input
        id={inputId}
        className={cn(
          'border-sage focus:border-hearth focus:ring-hearth',
          error && 'border-destructive focus:border-destructive focus:ring-destructive',
          className
        )}
        style={{ fontFamily: 'var(--font-lora)', color: '#E8EAED', backgroundColor: '#1A1F26' }}
        {...props}
      />
      {error && (
        <p className="text-sm text-destructive" style={{ fontFamily: 'var(--font-lora)' }}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="text-sm" style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
          {helperText}
        </p>
      )}
    </div>
  )
}

export default KommonInput
