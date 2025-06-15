'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const GridBeam: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <div className={cn('relative w-full h-full', className)}>
    <Beam />
    {children}
  </div>
)

const Beam = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    fill="none"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip)">
      <motion.rect
        width="1"
        height="400"
        x="100"
        fill="url(#gradient)"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: [0, 1, 0], y: [0, 400] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.rect
        width="1"
        height="400"
        x="200"
        fill="url(#gradient)"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: [0, 1, 0], y: [0, 400] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.rect
        width="1"
        height="400"
        x="300"
        fill="url(#gradient)"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: [0, 1, 0], y: [0, 400] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </g>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
        <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
        <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip">
        <rect width="400" height="400" />
      </clipPath>
    </defs>
  </svg>
)