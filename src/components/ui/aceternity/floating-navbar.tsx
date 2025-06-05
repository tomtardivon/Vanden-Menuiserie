"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  // Transform values for smooth morphing
  const navWidth = useTransform(scrollY, [0, 300], ["100%", "max-content"]);
  const navPadding = useTransform(scrollY, [0, 300], ["1.5rem 0", "0.5rem 2rem"]);
  const navMargin = useTransform(scrollY, [0, 300], ["0", "1.5rem auto"]);
  const navBorderRadius = useTransform(scrollY, [0, 300], ["0", "9999px"]);
  const navBackground = useTransform(
    scrollY,
    [0, 300],
    ["rgba(245, 241, 230, 0)", "rgba(253, 251, 247, 0.95)"]
  );
  const navBoxShadow = useTransform(
    scrollY,
    [0, 300],
    ["0 0 0 0 rgba(0,0,0,0)", "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"]
  );
  const navBorderColor = useTransform(
    scrollY,
    [0, 300],
    ["rgba(0,0,0,0)", "rgba(232, 232, 232, 0.3)"]
  );
  const logoTextOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const logoTextScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const itemSpacing = useTransform(scrollY, [0, 300], ["2rem", "1rem"]);
  const navY = useTransform(scrollY, [0, 600, 700], [0, 0, -100]) as MotionValue<number>;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    
    // Only hide/show after significant scroll
    if (currentScrollY > 700) {
      if (currentScrollY > lastScrollY + 5) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setVisible(true);
      }
    } else {
      setVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  });

  return (
    <motion.nav
      style={{
        width: navWidth,
        padding: navPadding,
        margin: navMargin,
        borderRadius: navBorderRadius,
        backgroundColor: navBackground,
        boxShadow: navBoxShadow,
        borderColor: navBorderColor,
        y: visible ? navY : -100,
      }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 backdrop-blur-sm border transition-all",
        className
      )}
    >
      <motion.div 
        className="max-w-7xl mx-auto flex items-center justify-between px-4"
        style={{ gap: itemSpacing }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
          <motion.div 
            className="w-10 h-10 bg-brun-bois rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-blanc-casse font-bold text-xl">V</span>
          </motion.div>
          <motion.span 
            className="text-bleu-marine font-heading font-bold text-xl hidden md:block whitespace-nowrap overflow-hidden"
            style={{ opacity: logoTextOpacity, scale: logoTextScale }}
          >
            Vanden Menuiserie
          </motion.span>
        </Link>

        {/* Navigation Items */}
        <motion.div 
          className="hidden md:flex items-center"
          style={{ gap: itemSpacing }}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className="text-bleu-marine hover:text-brun-bois transition-colors font-medium whitespace-nowrap"
            >
              {navItem.name}
            </Link>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="bg-brun-bois hover:bg-brun-bois-dark text-blanc-casse px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};