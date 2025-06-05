"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CompareProps {
  firstImage: string;
  secondImage: string;
  className?: string;
  slideMode?: "hover" | "click";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare: React.FC<CompareProps> = ({
  firstImage,
  secondImage,
  className,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}) => {
  const [sliderXPercent, setSliderXPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (autoplay && !isDragging) {
      const interval = setInterval(() => {
        setSliderXPercent((prev) => {
          const newVal = prev + 1;
          return newVal > 100 ? 0 : newVal;
        });
      }, autoplayDuration / 100);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDuration, isDragging]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (slideMode !== "hover" && !isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderXPercent(Math.max(0, Math.min(100, percent)));
  };

  const handleMouseDown = () => {
    if (slideMode === "click") {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-neutral-200 cursor-col-resize select-none",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Before Image */}
      <div className="relative h-full w-full">
        <Image
          alt="first image"
          src={firstImage}
          className="absolute inset-0 h-full w-full object-cover"
          width={1000}
          height={1000}
          priority
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          Avant
        </div>
      </div>

      {/* After Image with animated clip path */}
      <motion.div
        className="absolute inset-0 h-full w-full"
        style={{
          clipPath: `polygon(${sliderXPercent}% 0%, 100% 0%, 100% 100%, ${sliderXPercent}% 100%)`,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      >
        <Image
          alt="second image"
          src={secondImage}
          className="absolute inset-0 h-full w-full object-cover"
          width={1000}
          height={1000}
          priority
        />
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          Après
        </div>
      </motion.div>

      {/* Slider Handle */}
      {showHandlebar && (
        <motion.div
          className="absolute top-0 h-full w-1 bg-white shadow-lg z-30 cursor-col-resize"
          style={{
            left: `${sliderXPercent}%`,
            transform: "translateX(-50%)",
          }}
          transition={{ type: "tween", duration: 0.1 }}
        >
          <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-neutral-300 flex items-center justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full"></div>
          </div>
        </motion.div>
      )}

      {/* Instructions */}
      <AnimatePresence>
        {slideMode === "hover" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm"
          >
            Survolez pour comparer
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};