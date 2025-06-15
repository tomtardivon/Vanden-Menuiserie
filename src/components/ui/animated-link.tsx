"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, MouseEvent } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export const AnimatedLink = ({ 
  href, 
  children, 
  className = "", 
  onClick,
  external = false 
}: AnimatedLinkProps) => {
  const router = useRouter();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    if (external) {
      if (onClick) onClick();
      return;
    }

    e.preventDefault();
    
    if (onClick) onClick();

    // Petite pause pour laisser le temps aux effets visuels
    await new Promise(resolve => setTimeout(resolve, 100));
    
    router.push(href);
  };

  const linkProps = external 
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {external ? (
        <a
          {...linkProps}
          onClick={handleClick}
          className={`inline-block transition-all duration-300 ${className}`}
        >
          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </a>
      ) : (
        <Link
          {...linkProps}
          onClick={handleClick}
          className={`inline-block transition-all duration-300 ${className}`}
        >
          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </Link>
      )}
    </motion.div>
  );
};

// Variante pour les boutons CTA
export const AnimatedButton = ({ 
  href, 
  children, 
  className = "", 
  onClick,
  external = false,
  variant = "primary"
}: AnimatedLinkProps & { variant?: "primary" | "secondary" | "gradient" }) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 ";
  
  const variantClasses = {
    primary: "bg-bleu-marine text-white hover:bg-brun-bois shadow-lg hover:shadow-xl",
    secondary: "border-2 border-bleu-marine text-bleu-marine hover:bg-bleu-marine hover:text-white",
    gradient: "bg-bleu-marine text-white hover:bg-brun-bois shadow-lg hover:shadow-xl"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <AnimatedLink
        href={href}
        onClick={onClick}
        external={external}
        className={`${baseClasses}${variantClasses[variant]} ${className}`}
      >
        {children}
      </AnimatedLink>
    </motion.div>
  );
};