import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { getTransitionDirection, clearNavigationState } from '../utils/transitionState';

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  // Get the transition direction from session storage
  const direction = typeof window !== 'undefined' 
    ? getTransitionDirection() 
    : 'right';
  
  // Create variants based on the direction
  const variants = createPageTransitionVariants(direction);
  
  // Clear navigation state after transition completes
  useEffect(() => {
    // Small delay to ensure animation completes
    const timer = setTimeout(() => {
      clearNavigationState();
    }, 400);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function createPageTransitionVariants(direction: 'left' | 'right' | 'up' | 'down' = 'right') {
  const variants = {
    initial: {
      opacity: 0,
      x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
      y: direction === 'up' ? -20 : direction === 'down' ? 20 : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier curve for natural motion
      },
    },
    exit: {
      opacity: 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return variants;
} 