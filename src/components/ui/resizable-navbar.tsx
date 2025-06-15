"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLink } from "./animated-link";

import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ visible?: boolean }>,
                { visible: false }
              )
            : child
        )}
      </div>
    );
  }

  return (
    <motion.div className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "70%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "600px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-6 py-3 lg:flex",
        visible ? "bg-white" : "bg-transparent",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (
            child.type === NavItems ||
            child.type === NavbarLogo ||
            child.type === NavbarButton
          ) {
            return React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            );
          }
          // Handle nested elements (like divs containing NavbarLogo or NavbarButton)
          if (child.props && (child.props as any).children) {
            return React.cloneElement(child as any, {
              children: React.Children.map(
                (child.props as any).children,
                (nestedChild) => {
                  if (
                    React.isValidElement(nestedChild) &&
                    (nestedChild.type === NavbarLogo ||
                      nestedChild.type === NavbarButton)
                  ) {
                    return React.cloneElement(
                      nestedChild as React.ReactElement<{ visible?: boolean }>,
                      { visible }
                    );
                  }
                  // Handle double nested elements (div > div > NavbarButton)
                  if (React.isValidElement(nestedChild) && nestedChild.props && (nestedChild.props as any).children) {
                    return React.cloneElement(nestedChild as any, {
                      children: React.Children.map(
                        (nestedChild.props as any).children,
                        (doubleNestedChild) => {
                          if (
                            React.isValidElement(doubleNestedChild) &&
                            (doubleNestedChild.type === NavbarButton)
                          ) {
                            return React.cloneElement(
                              doubleNestedChild as React.ReactElement<{ visible?: boolean }>,
                              { visible }
                            );
                          }
                          return doubleNestedChild;
                        }
                      ),
                    });
                  }
                  return nestedChild;
                }
              ),
            });
          }
        }
        return child;
      })}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
  visible,
}: NavItemsProps & { visible?: boolean }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute left-1/2 transform -translate-x-1/2 hidden flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        visible ? "text-bleu-marine" : "text-bleu-marine",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          onMouseEnter={() => setHovered(idx)}
          className="relative"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className={cn(
                "absolute inset-0 h-full w-full rounded-full",
                visible ? "bg-gris-perle" : "bg-gris-perle"
              )}
            />
          )}
          <AnimatedLink
            href={item.link}
            onClick={onItemClick}
            className={cn(
              "relative z-20 px-4 py-2 font-medium transition-colors",
              visible ? "text-bleu-marine" : "text-bleu-marine"
            )}
          >
            {item.name}
          </AnimatedLink>
        </div>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(10px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "85%" : "100%",
        paddingRight: visible ? "16px" : "0px",
        paddingLeft: visible ? "16px" : "0px",
        borderRadius: visible ? "2rem" : "0rem",
        y: visible ? 12 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between py-2 lg:hidden",
        visible ? "px-0" : "px-4",
        visible ? "bg-white" : "bg-transparent",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === MobileNavHeader) {
          return React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible }
          );
        }
        return child;
      })}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
  visible,
}: MobileNavHeaderProps & { visible?: boolean }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-4",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          (child.type === NavbarLogo || child.type === MobileNavToggle)
        ) {
          return React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible }
          );
        }
        return child;
      })}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-beige-moderne px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
  visible,
}: {
  isOpen: boolean;
  onClick: () => void;
  visible?: boolean;
}) => {
  const iconClass = cn(
    "h-6 w-6 cursor-pointer transition-colors",
    visible ? "text-bleu-marine" : "text-bleu-marine"
  );

  return isOpen ? (
    <X className={iconClass} onClick={onClick} />
  ) : (
    <Menu className={iconClass} onClick={onClick} />
  );
};

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      <div className="w-10 h-10 relative flex-shrink-0">
        <img
          src="/logo-whitout-background.png"
          alt="Vanden Menuiserie"
          className="w-full h-full object-contain"
        />
      </div>
      <AnimatePresence mode="wait">
        {!visible && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "font-heading font-bold text-bleu-marine whitespace-nowrap"
            )}
          >
            Vanden Menuiserie
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  visible,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  visible?: boolean;
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-full text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary: visible 
      ? "bg-beige-moderne text-bleu-marine shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      : "bg-beige-moderne text-bleu-marine shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: visible
      ? "bg-transparent shadow-none text-bleu-marine"
      : "bg-transparent shadow-none text-bleu-marine",
    dark: "bg-bleu-marine text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient: visible
      ? "bg-bleu-marine text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
      : "bg-bleu-marine text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
