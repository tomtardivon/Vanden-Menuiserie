'use client'

import { cn } from '@/lib/utils'

interface GridPatternProps {
  className?: string
  size?: number
  strokeWidth?: number
  color?: string
  fade?: boolean
}

export function GridPattern({
  className,
  size = 20,
  strokeWidth = 1,
  color = '#e4e4e7',
  fade = true
}: GridPatternProps) {
  return (
    <div className="absolute inset-0">
      <div
        className={cn(
          "absolute inset-0",
          className
        )}
        style={{
          backgroundSize: `${size}px ${size}px`,
          backgroundImage: `linear-gradient(to right, ${color} ${strokeWidth}px, transparent ${strokeWidth}px), linear-gradient(to bottom, ${color} ${strokeWidth}px, transparent ${strokeWidth}px)`
        }}
      />
      {/* Masque de fondu radial optionnel */}
      {fade && (
        <div className="pointer-events-none absolute inset-0 bg-inherit [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      )}
    </div>
  )
}