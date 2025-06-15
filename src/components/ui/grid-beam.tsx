'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GridBeamProps {
  children: React.ReactNode
  className?: string
  color?: string
  variant?: 'vertical' | 'horizontal' | 'cross'
  speed?: number
}

export const GridBeam: React.FC<GridBeamProps> = ({
  children,
  className,
  color = '#A67C52',
  variant = 'vertical',
  speed = 3
}) => (
  <div className={cn('relative w-full h-full overflow-hidden', className)}>
    <Beam color={color} variant={variant} speed={speed} />
    {children}
  </div>
)

interface BeamProps {
  color: string
  variant: 'vertical' | 'horizontal' | 'cross'
  speed: number
}

const Beam: React.FC<BeamProps> = ({ color, variant, speed }) => {
  const beamPositions = variant === 'cross' 
    ? [80, 160, 240, 320] 
    : [100, 200, 300]
  
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      fill="none"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip)">
        {/* Vertical beams */}
        {(variant === 'vertical' || variant === 'cross') && beamPositions.map((x, index) => (
          <motion.rect
            key={`v-${x}`}
            width="2"
            height="400"
            x={x}
            fill={`url(#gradient-v-${index})`}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: [0, 0.8, 0], y: [0, 400] }}
            transition={{ 
              duration: speed, 
              repeat: Infinity, 
              delay: index * (speed / beamPositions.length),
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Horizontal beams */}
        {(variant === 'horizontal' || variant === 'cross') && beamPositions.map((y, index) => (
          <motion.rect
            key={`h-${y}`}
            width="400"
            height="2"
            y={y}
            fill={`url(#gradient-h-${index})`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: [0, 0.8, 0], x: [0, 400] }}
            transition={{ 
              duration: speed, 
              repeat: Infinity, 
              delay: index * (speed / beamPositions.length) + speed / 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </g>
      
      <defs>
        {beamPositions.map((_, index) => (
          <React.Fragment key={index}>
            <linearGradient id={`gradient-v-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0" />
              <stop offset="30%" stopColor={color} stopOpacity="0.6" />
              <stop offset="50%" stopColor={color} stopOpacity="1" />
              <stop offset="70%" stopColor={color} stopOpacity="0.6" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
            <linearGradient id={`gradient-h-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color} stopOpacity="0" />
              <stop offset="30%" stopColor={color} stopOpacity="0.6" />
              <stop offset="50%" stopColor={color} stopOpacity="1" />
              <stop offset="70%" stopColor={color} stopOpacity="0.6" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </React.Fragment>
        ))}
        <clipPath id="clip">
          <rect width="400" height="400" />
        </clipPath>
      </defs>
    </svg>
  )
}