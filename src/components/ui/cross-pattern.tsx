'use client'

import { cn } from '@/lib/utils'

interface CrossPatternProps {
  className?: string
  size?: number
  spacing?: number
  color?: string
  fade?: boolean
}

export function CrossPattern({
  className,
  size = 1,
  spacing = 20,
  color = '#d4d4d4',
  fade = true
}: CrossPatternProps) {
  const crossSize = size * 4; // Taille totale de la croix
  
  return (
    <div className="absolute inset-0">
      <div
        className={cn(
          "absolute inset-0",
          className
        )}
        style={{
          backgroundSize: `${spacing}px ${spacing}px`,
          backgroundImage: `
            linear-gradient(to right, transparent ${(spacing - size) / 2}px, ${color} ${(spacing - size) / 2}px, ${color} ${(spacing + size) / 2}px, transparent ${(spacing + size) / 2}px),
            linear-gradient(to bottom, transparent ${(spacing - crossSize) / 2}px, ${color} ${(spacing - crossSize) / 2}px, ${color} ${(spacing + crossSize) / 2}px, transparent ${(spacing + crossSize) / 2}px)
          `
        }}
      />
      {/* Masque de fondu radial optionnel */}
      {fade && (
        <div className="pointer-events-none absolute inset-0 bg-inherit [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      )}
    </div>
  )
}