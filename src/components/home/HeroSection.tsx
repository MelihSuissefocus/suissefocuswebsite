import { motion } from 'framer-motion';
import HeroVideoBackground from './HeroVideoBackground';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Video Background */}
      <HeroVideoBackground />
      
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1 
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: { 
                  duration: 0.8,
                  ease: [0.1, 0.9, 0.2, 1] // Custom easing for a nice bounce effect
                }
              }
            }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            suissefocus
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: { 
                  duration: 0.7,
                  ease: "easeOut"
                }
              }
            }}
            className="mt-6 text-xl text-white/90 max-w-2xl mx-auto"
          >
            Wir verbinden IT-Know-how mit KI – für Lösungen mit Weitblick.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: { 
                  duration: 0.5,
                  ease: "easeOut"
                }
              }
            }}
            className="mt-10"
          >
            <button
              onClick={() => (window as any).plausible('demo_click')}
              className="px-8 py-3 bg-swiss-red text-white rounded-lg font-medium 
                       hover:bg-swiss-red/90 transition-colors
                       focus-visible:ring-2 focus-visible:ring-swiss-red focus-visible:ring-offset-2
                       relative overflow-hidden group"
              aria-label="Demo buchen und Produkte kennenlernen"
            >
              <span className="relative z-10">Demo buchen</span>
              <motion.span 
                className="absolute inset-0 bg-white/20 z-0"
                initial={{ scale: 0, x: "-50%", y: "-50%" }}
                whileHover={{ scale: 3 }}
                transition={{ duration: 0.5 }}
                style={{ borderRadius: "100%", left: "50%", top: "50%", originX: "50%", originY: "50%" }}
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 