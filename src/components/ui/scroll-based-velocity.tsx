"use client";

import React from "react";
import { wrap } from "@motionone/utils";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  children: React.ReactNode;
  defaultVelocity?: number;
  numRows?: number;
  className?: string;
}

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
}

function ParallaxText({ children, baseVelocity = 100, className }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -25, v)}%`);

  const directionFactor = React.useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap w-full max-w-full">
      <motion.div
        className={cn(
          "inline-flex whitespace-nowrap w-max",
          className
        )}
        style={{ x }}
      >
        <span className="mr-10">{children}</span>
        <span className="mr-10">{children}</span>
        <span className="mr-10">{children}</span>
        <span className="mr-10">{children}</span>
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  children,
  defaultVelocity = 5,
  numRows = 2,
  className,
}: VelocityScrollProps) {
  return (
    <div className={cn("relative w-full max-w-full overflow-hidden", className)}>
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxText
          key={i}
          baseVelocity={i % 2 === 0 ? -defaultVelocity : defaultVelocity}
          className="text-4xl font-heading font-bold text-bleu-marine md:text-6xl lg:text-7xl py-2"
        >
          {children}
        </ParallaxText>
      ))}
    </div>
  );
}