"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isFloating = false,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isFloating?: boolean;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer hover:opacity-[0.9] transition-colors",
          isFloating 
            ? "text-bleu-marine hover:text-brun-bois text-sm font-medium" 
            : "text-white hover:text-beige-moderne text-lg font-medium"
        )}
      >
        {item}
      </motion.p>
      {active !== null && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-gris-perle/30 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const HybridNavigation = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [isFloating, setIsFloating] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Transform to floating menu after scrolling 10% of the page
      setIsFloating(current > 0.1);
    }
  });

  return (
    <>
      {/* Hero Navigation - Full Width */}
      <AnimatePresence mode="wait">
        {!isFloating && (
          <motion.nav
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed top-0 left-0 right-0 z-50 bg-bleu-marine/95 backdrop-blur-md border-b border-white/10",
              className
            )}
            onMouseLeave={() => setActive(null)}
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brun-bois rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">V</span>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-white font-heading font-bold text-xl">
                      Vanden Menuiserie
                    </span>
                  </div>
                </Link>

                {/* Navigation Items */}
                <div className="hidden md:flex items-center space-x-8">
                  {navItems.map((navItem, idx) => (
                    <MenuItem
                      key={idx}
                      setActive={setActive}
                      active={active}
                      item={navItem.name}
                      isFloating={false}
                    >
                      {navItem.children}
                    </MenuItem>
                  ))}
                </div>

                {/* Contact Button */}
                <motion.button
                  className="bg-brun-bois hover:bg-brun-bois text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating Navigation - Compact */}
      <AnimatePresence mode="wait">
        {isFloating && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <nav
              onMouseLeave={() => setActive(null)}
              className="relative rounded-full border border-gris-perle/50 bg-white backdrop-blur-md shadow-2xl flex justify-center items-center space-x-6 px-8 py-4"
            >
              {/* Compact Logo */}
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-brun-bois rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
              </Link>

              {/* Separator */}
              <div className="w-px h-6 bg-gris-perle"></div>

              {/* Navigation Items */}
              {navItems.map((navItem, idx) => (
                <MenuItem
                  key={idx}
                  setActive={setActive}
                  active={active}
                  item={navItem.name}
                  isFloating={true}
                >
                  {navItem.children}
                </MenuItem>
              ))}

              {/* Separator */}
              <div className="w-px h-6 bg-gris-perle"></div>

              {/* Contact Button */}
              <motion.button
                className="bg-brun-bois hover:bg-brun-bois text-white px-4 py-2 rounded-full font-medium text-sm transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-3 p-2 rounded-lg hover:bg-beige-moderne/50 transition-colors">
      <img
        src={src}
        width={60}
        height={40}
        alt={title}
        className="shrink-0 rounded-md shadow-sm object-cover"
      />
      <div>
        <h4 className="text-sm font-semibold mb-1 text-bleu-marine">
          {title}
        </h4>
        <p className="text-bleu-marine/70 text-xs max-w-[10rem] leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, href, ...rest }: any) => {
  return (
    <Link
      href={href}
      {...rest}
      className="text-bleu-marine/80 hover:text-brun-bois text-sm py-2 px-3 rounded-lg hover:bg-beige-moderne/30 transition-colors block"
    >
      {children}
    </Link>
  );
};