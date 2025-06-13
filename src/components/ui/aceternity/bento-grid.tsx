"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  const Component = href ? motion.a : motion.div;
  const extraProps = href ? { href } : {};

  return (
    <Component
      {...extraProps}
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 dark:bg-bleu-marine dark:border-white/[0.2] bg-beige-moderne border border-transparent justify-between flex flex-col space-y-4 min-h-[320px]",
        className
      )}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </Component>
  );
};