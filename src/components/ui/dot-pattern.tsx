'use client'

import { cn } from '@/lib/utils'

interface DotPatternProps {
  className?: string
  size?: number
  spacing?: number
  color?: string
  fade?: boolean
}

export function DotPattern({
  className,
  size = 1,
  spacing = 20,
  color = '#d4d4d4',
  fade = true
}: DotPatternProps) {
  return (
    <div className="absolute inset-0">
      <div
        className={cn(
          "absolute inset-0",
          className
        )}
        style={{
          backgroundSize: `${spacing}px ${spacing}px`,
          backgroundImage: `radial-gradient(${color} ${size}px, transparent ${size}px)`
        }}
      />
      {/* Masque de fondu radial optionnel */}
      {fade && (
        <div className="pointer-events-none absolute inset-0 bg-inherit [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      )}
    </div>
  )
}