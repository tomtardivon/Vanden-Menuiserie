'use client'

import { cn } from '@/lib/utils'

interface WavePatternProps {
  className?: string
  amplitude?: number
  frequency?: number
  color?: string
  fade?: boolean
  opacity?: number
  variant?: 'sine' | 'organic' | 'layered'
}

export function WavePattern({
  className,
  amplitude = 20,
  frequency = 80,
  color = '#1E2B39',
  fade = true,
  opacity = 0.2,
  variant = 'sine'
}: WavePatternProps) {
  const renderPattern = () => {
    switch (variant) {
      case 'organic':
        return {
          backgroundSize: `${frequency * 2}px ${amplitude * 4}px`,
          backgroundImage: `
            radial-gradient(ellipse at 0% 50%, transparent 20%, ${color} 21%, ${color} 25%, transparent 26%),
            radial-gradient(ellipse at 100% 50%, transparent 20%, ${color} 21%, ${color} 25%, transparent 26%)
          `,
          backgroundPosition: '0 0, 0 50%'
        }
      case 'layered':
        return {
          backgroundSize: `${frequency}px ${amplitude * 2}px, ${frequency * 1.5}px ${amplitude * 3}px`,
          backgroundImage: `
            linear-gradient(90deg, transparent 46%, ${color} 49%, ${color} 51%, transparent 54%),
            linear-gradient(90deg, transparent 46%, rgba(166, 124, 82, 0.3) 49%, rgba(166, 124, 82, 0.3) 51%, transparent 54%)
          `,
          backgroundPosition: '0 0, 0 25%'
        }
      default: // sine
        return {
          backgroundSize: `${frequency}px ${amplitude * 2}px`,
          backgroundImage: `
            linear-gradient(90deg, 
              transparent 0%, 
              transparent 25%, 
              ${color} 26%, 
              ${color} 30%, 
              transparent 31%, 
              transparent 69%, 
              ${color} 70%, 
              ${color} 74%, 
              transparent 75%, 
              transparent 100%
            )
          `
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