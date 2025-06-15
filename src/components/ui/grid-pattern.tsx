'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface GridPatternProps {
  color?: string
  cellSize?: string | number
  strokeWidth?: number | string
  className?: string
  style?: React.CSSProperties
  fade?: boolean
  opacity?: number
  [key: string]: any
}

export const GridPattern: React.FC<GridPatternProps> = ({
  color = '#1E2B39',
  cellSize = '25px',
  strokeWidth = '1px', 
  className,
  fade = true,
  opacity = 0.4,
  style,
  ...props
}) => {
  // SVG optimisé pour une grille nette et précise
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}' fill-opacity='${opacity}' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  const maskStyle: React.CSSProperties = fade
    ? {
        maskImage: 'radial-gradient(ellipse at top, white, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at top, white, transparent 70%)',
      }
    : {}

  return (
    <div
      className={cn(`pointer-events-none absolute inset-0 left-0 top-0 flex h-full w-full`, className)}
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: cellSize,
        ...maskStyle,
        ...style,
      }}
      {...props}
    />
  )
}

export default GridPattern