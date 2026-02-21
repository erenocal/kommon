import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface KommonCardProps {
  className?: string
  children: React.ReactNode
}

interface KommonCardHeaderProps {
  className?: string
  children: React.ReactNode
}

interface KommonCardContentProps {
  className?: string
  children: React.ReactNode
}

export function KommonCard({ className, children }: KommonCardProps) {
  return (
    <Card className={cn(
      'shadow-sm hover:shadow-md transition-shadow duration-200',
      className
    )} style={{ backgroundColor: '#242A33', borderColor: '#2D3540' }}>
      {children}
    </Card>
  )
}

export function KommonCardHeader({ className, children }: KommonCardHeaderProps) {
  return (
    <CardHeader className={cn('pb-3', className)}>
      {children}
    </CardHeader>
  )
}

export function KommonCardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <CardTitle className={cn('text-lg md:text-xl font-bold', className)} style={{ fontFamily: 'var(--font-nunito)', color: '#E8EAED' }}>
      {children}
    </CardTitle>
  )
}

export function KommonCardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <CardDescription className={cn('text-base', className)} style={{ fontFamily: 'var(--font-lora)', color: '#9BA1A6' }}>
      {children}
    </CardDescription>
  )
}

export function KommonCardContent({ className, children }: KommonCardContentProps) {
  return (
    <CardContent className={cn('pt-0', className)}>
      {children}
    </CardContent>
  )
}
