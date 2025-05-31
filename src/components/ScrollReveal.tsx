import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Define children type without using ReactNode
interface ScrollRevealProps {
  children: any; // Using 'any' as a simple workaround 
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = '',
  threshold = 0.1,
  once = true
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -100px 0px' // Adds a bit of buffer before triggering
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once, threshold]);

  // Set initial animation states based on direction
  let initialY = 0;
  let initialX = 0;
  
  switch (direction) {
    case 'up':
      initialY = 40;
      break;
    case 'down':
      initialY = -40;
      break;
    case 'left':
      initialX = 40;
      break;
    case 'right':
      initialX = -40;
      break;
    default:
      initialY = 0;
      initialX = 0;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          y: initialY, 
          x: initialX 
        }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : initialY, 
          x: isVisible ? 0 : initialX
        }}
        transition={{ 
          duration: duration,
          delay: delay,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
} 