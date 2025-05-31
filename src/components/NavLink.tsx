import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { setTransitionDirection } from '../utils/transitionState';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  highlight?: boolean;
  isMobile?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({ 
  href, 
  children, 
  highlight = false,
  isMobile = false,
  isActive = false,
  onClick,
  className = ''
}: NavLinkProps) {
  const baseStyles = "font-medium transition-colors relative";
  
  const desktopStyles = className || (highlight
    ? "px-4 py-2 bg-swiss-red text-white hover:bg-swiss-red/80 rounded-md text-base group"
    : `px-3 py-2 text-base group overflow-hidden ${isActive 
      ? 'text-swiss-navy border-b-2 border-swiss-navy -mb-[2px] font-semibold' 
      : 'text-swiss-navy/90 hover:text-swiss-navy rounded-md'}`);
  
  const mobileStyles = className || (highlight
    ? "w-full px-4 py-3 text-swiss-red hover:bg-gray-50 text-base"
    : `w-full px-4 py-3 text-base ${isActive 
      ? 'text-swiss-navy bg-gray-50 font-semibold' 
      : 'text-swiss-navy hover:bg-gray-50'}`);

  return (
    <motion.a
      href={href}
      onClick={(e) => {
        if (typeof window !== 'undefined') {
          const path = href.split('/').filter(Boolean);
          const direction = path.length > 1 ? 'right' : 'left';
          setTransitionDirection(direction as 'left' | 'right');
        }
        
        onClick?.();
      }}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles}`}
      whileHover={{ 
        scale: isActive ? 1 : 1.03,
        transition: { duration: 0.15, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.97 }}
      initial={false}
      style={{ 
        willChange: 'transform',
        backfaceVisibility: 'hidden' 
      }}
    >
      {children}
      
      {!isMobile && !highlight && !isActive && (
        <>
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-swiss-navy rounded-full mx-auto"
            initial={{ width: 0, left: '50%', opacity: 0 }}
            whileHover={{ 
              width: '90%', 
              left: '5%',
              opacity: 1,
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
            style={{ willChange: 'width, opacity, left' }}
          />
          <motion.span
            className="absolute -z-10 inset-0 rounded-md bg-gradient-to-b from-swiss-navy/5 to-swiss-navy/10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
          />
        </>
      )}
      
      {!isMobile && highlight && (
        <motion.div 
          className="absolute inset-0 bg-white rounded-md -z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{ 
            opacity: 0.15, 
            scale: 1,
            transition: { duration: 0.3, ease: 'easeOut' }
          }}
          style={{ willChange: 'opacity, scale' }}
        />
      )}
    </motion.a>
  );
} 