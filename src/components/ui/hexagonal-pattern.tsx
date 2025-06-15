'use client'

import { cn } from '@/lib/utils'

interface HexagonalPatternProps {
  className?: string
  size?: number
  color?: string
  fade?: boolean
  opacity?: number
  variant?: 'filled' | 'outline' | 'honeycomb'
}

export function HexagonalPattern({
  className,
  size = 40,
  color = '#1E2B39',
  fade = true,
  opacity = 0.15,
  variant = 'outline'
}: HexagonalPatternProps) {
  const hexHeight = size * Math.sqrt(3)
  const hexWidth = size * 2

  const renderPattern = () => {
    switch (variant) {
      case 'filled':
        return {
          backgroundSize: `${hexWidth * 0.75}px ${hexHeight}px`,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, ${color} 30%, transparent 31%),
            radial-gradient(circle at 50% 50%, ${color} 30%, transparent 31%)
          `,
          backgroundPosition: '0 0, 37.5px 34.6px'
        }
      case 'honeycomb':
        return {
          backgroundSize: `${hexWidth * 0.75}px ${hexHeight}px`,
          backgroundImage: `
            radial-gradient(circle farthest-side at 0% 50%, transparent 47%, ${color} 49%, ${color} 52%, transparent 54%),
            radial-gradient(circle farthest-side at 0% 50%, transparent 47%, ${color} 49%, ${color} 52%, transparent 54%),
            linear-gradient(${color} 14%, transparent 15%, transparent 85%, ${color} 86%)
          `,
          backgroundPosition: '0 0, 37.5px 64.95px, 0 0'
        }
      default: // outline
        const strokeWidth = 1
        return {
          backgroundSize: `${hexWidth * 0.75}px ${hexHeight}px`,
          backgroundImage: `
            linear-gradient(60deg, transparent 20%, ${color} 21%, ${color} 22%, transparent 23%),
            linear-gradient(120deg, transparent 20%, ${color} 21%, ${color} 22%, transparent 23%),
            linear-gradient(0deg, transparent 47%, ${color} 48%, ${color} 52%, transparent 53%)
          `,
          backgroundPosition: '0 0, 0 0, 0 0'
        }
    }
  }

  const patternStyle = renderPattern()

  return (
    <div className="absolute inset-0">
      <div
        className={cn(
          "absolute inset-0",
          className
        )}
        style={{
          ...patternStyle,
          opacity
        }}
      />
      {fade && (
        <div className="pointer-events-none absolute inset-0 bg-inherit [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_70%,transparent_100%)]" />
      )}
    </div>
  )
}