"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TransitionType = 'slide' | 'curtain' | 'wipe' | 'fade';

export const SimplePageTransition = ({ 
  children, 
  type = 'slide' 
}: { 
  children: React.ReactNode;
  type?: TransitionType;
}) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  const getTransitionClasses = () => {
    switch (type) {
      case 'slide':
        return {
          overlay: `fixed inset-0 bg-gray-900 z-50 transition-transform duration-300 ease-in-out ${
            isTransitioning ? 'translate-x-0' : 'translate-x-full'
          }`,
          content: `transition-all duration-300 ${
            isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
          }`
        };
      
      case 'curtain':
        return {
          overlay: `fixed inset-0 bg-gray-900 z-50 transition-all duration-300 ease-in-out origin-top ${
            isTransitioning ? 'scale-y-100' : 'scale-y-0'
          }`,
          content: `transition-all duration-300 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`
        };
      
      case 'wipe':
        return {
          overlay: `fixed inset-0 bg-gray-900 z-50 transition-all duration-300 ease-in-out ${
            isTransitioning ? 'clip-path-full' : 'clip-path-none'
          }`,
          content: `transition-all duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`
        };
      
      case 'fade':
      default:
        return {
          overlay: `fixed inset-0 bg-beige-moderne z-50 transition-opacity duration-200 ${
            isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`,
          content: `transition-opacity duration-200 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`
        };
    }
  };

  const classes = getTransitionClasses();

  return (
    <>
      {/* Overlay de transition */}
      <div className={classes.overlay} />
      
      {/* Contenu de la page */}
      <div className={classes.content}>
        {children}
      </div>
      
      {/* CSS personnalisé pour clip-path */}
      <style jsx>{`
        .clip-path-full {
          clip-path: circle(150% at 50% 50%);
        }
        .clip-path-none {
          clip-path: circle(0% at 50% 50%);
        }
      `}</style>
    </>
  );
};