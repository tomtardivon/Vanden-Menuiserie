"use client";
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('a')) {
        setCursorVariant('link');
      } else if (target.matches('button') || target.closest('button')) {
        setCursorVariant('button');
      } else if (target.matches('[data-cursor="hover"]') || target.closest('[data-cursor="hover"]')) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant('default');
    };

    const handleMouseDown = () => {
      setCursorVariant(prev => `${prev} click`);
    };

    const handleMouseUp = () => {
      setCursorVariant(prev => prev.replace(' click', ''));
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add cursor class to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${cursorVariant}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    />
  );
}