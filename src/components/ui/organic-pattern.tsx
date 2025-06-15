'use client'

import { cn } from '@/lib/utils'

interface OrganicPatternProps {
  className?: string
  scale?: number
  color?: string
  fade?: boolean
  opacity?: number
  variant?: 'wood' | 'marble' | 'fabric'
}

export function OrganicPattern({
  className,
  scale = 60,
  color = '#1E2B39',
  fade = true,
  opacity = 0.12,
  variant = 'wood'
}: OrganicPatternProps) {
  const renderPattern = () => {
    switch (variant) {
      case 'marble':
        return {
          backgroundSize: `${scale * 3}px ${scale * 2}px`,
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, transparent 30%, ${color} 31%, ${color} 35%, transparent 36%),
            radial-gradient(ellipse at 70% 60%, transparent 25%, ${color} 26%, ${color} 30%, transparent 31%),
            radial-gradient(ellipse at 40% 80%, transparent 35%, ${color} 36%, ${color} 38%, transparent 39%),
            linear-gradient(45deg, transparent 48%, ${color} 49%, ${color} 50%, transparent 51%)
          `,
          backgroundPosition: '0 0, 40px 20px, 20px 40px, 0 0'
        }
      case 'fabric':
        return {
          backgroundSize: `${scale}px ${scale}px`,
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, ${color} 46%, ${color} 50%, transparent 51%),
            linear-gradient(-45deg, transparent 45%, ${color} 46%, ${color} 50%, transparent 51%),
            radial-gradient(circle at 50% 50%, transparent 65%, ${color} 66%, ${color} 68%, transparent 69%)
          `,
          backgroundPosition: '0 0, 30px 30px, 0 0'
        }
      default: // wood
        return {
          backgroundSize: `${scale * 2}px ${scale}px`,
          backgroundImage: `
            linear-gradient(90deg, 
              transparent 0%, 
              ${color} 1%, 
              transparent 2%, 
              transparent 15%,
              ${color} 16%, 
              ${color} 17%, 
              transparent 18%,
              transparent 30%,
              ${color} 31%, 
              transparent 32%,
              transparent 45%,
              ${color} 46%, 
              ${color} 48%, 
              transparent 49%,
              transparent 65%,
              ${color} 66%, 
              transparent 67%,
              transparent 80%,
              ${color} 81%, 
              ${color} 83%, 
              transparent 84%,
              transparent 100%
            ),
            radial-gradient(ellipse at 25% 50%, transparent 60%, ${color} 61%, ${color} 63%, transparent 64%),
            radial-gradient(ellipse at 75% 30%, transparent 55%, ${color} 56%, ${color} 58%, transparent 59%)
          `,
          backgroundPosition: '0 0, 0 20px, 60px 40px'
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