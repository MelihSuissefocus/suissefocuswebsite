import { motion } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../ScrollReveal';

// SVG animations for pictograms
const innovationAnimation = {
  rocket: {
    initial: { y: 0 },
    animate: { y: [-10, 10, -10], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } }
  },
  flame: {
    initial: { scale: 1 },
    animate: { scale: [1, 1.2, 0.9, 1.1, 1], transition: { repeat: Infinity, duration: 1, ease: "easeInOut" } }
  }
};

const qualityAnimation = {
  cross: {
    initial: { rotate: 0 },
    animate: { rotate: 360, transition: { repeat: Infinity, duration: 20, ease: "linear" } }
  },
  star: {
    initial: { scale: 1, opacity: 0.8 },
    animate: { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } }
  }
};

const securityAnimation = {
  lock: {
    initial: { y: 0 },
    animate: { y: [0, -5, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } }
  },
  shield: {
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } }
  }
};

const tailoredAnimation = {
  scissors: {
    initial: { rotate: 0 },
    animate: { rotate: [-5, 5, -5], transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } }
  },
  thread: {
    initial: { pathLength: 0 },
    animate: { pathLength: 1, transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } }
  }
};

// Core values data
const coreValues = [
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Wir entwickeln zukunftsweisende KI-Lösungen, die den Schweizer Markt neu definieren. Unsere Forschung ist stets am Puls der Zeit.',
    renderPictogram: () => (
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g 
          initial={innovationAnimation.rocket.initial}
          animate={innovationAnimation.rocket.animate}
        >
          <path d="M60 20C62 40 80 50 80 80H40C40 50 58 40 60 20Z" fill="#2563EB" stroke="#1E293B" strokeWidth="2" />
          <path d="M50 85H70V95C70 100 65 105 60 105C55 105 50 100 50 95V85Z" fill="#2563EB" stroke="#1E293B" strokeWidth="2" />
          <circle cx="60" cy="45" r="10" fill="white" stroke="#1E293B" strokeWidth="2" />
        </motion.g>
        <motion.g 
          initial={innovationAnimation.flame.initial}
          animate={innovationAnimation.flame.animate}
        >
          <path d="M45 85L35 105" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
          <path d="M75 85L85 105" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
        </motion.g>
      </svg>
    )
  },
  {
    id: 'swiss-quality',
    title: 'Schweizer Qualität',
    description: 'Präzision, Zuverlässigkeit und Exzellenz – wir verkörpern die berühmte Schweizer Qualität in jeder Zeile Code und jedem Kundenkontakt.',
    renderPictogram: () => (
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="60" height="60" rx="2" fill="#DC2626" stroke="#1E293B" strokeWidth="2" />
        <motion.g 
          initial={qualityAnimation.cross.initial}
          animate={qualityAnimation.cross.animate}
          style={{ originX: "60px", originY: "60px" }}
        >
          <path d="M45 60H75" stroke="white" strokeWidth="10" strokeLinecap="round" />
          <path d="M60 45V75" stroke="white" strokeWidth="10" strokeLinecap="round" />
        </motion.g>
        <motion.path 
          d="M20 20L30 30M100 20L90 30M20 100L30 90M100 100L90 90"
          stroke="#1E293B"
          strokeWidth="2"
          strokeLinecap="round"
          initial={qualityAnimation.star.initial}
          animate={qualityAnimation.star.animate}
        />
      </svg>
    )
  },
  {
    id: 'data-sovereignty',
    title: 'Datensouveränität',
    description: 'Ihre Daten bleiben in der Schweiz. Wir garantieren höchste Sicherheitsstandards und vollständige Kontrolle über Ihre Unternehmensdaten.',
    renderPictogram: () => (
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M60 20L90 35V60C90 75 75 90 60 90C45 90 30 75 30 60V35L60 20Z"
          fill="#2563EB"
          stroke="#1E293B"
          strokeWidth="2"
          initial={securityAnimation.shield.initial}
          animate={securityAnimation.shield.animate}
          style={{ originX: "60px", originY: "60px" }}
        />
        <motion.g 
          initial={securityAnimation.lock.initial}
          animate={securityAnimation.lock.animate}
        >
          <rect x="45" y="50" width="30" height="25" rx="2" fill="#1E293B" />
          <path d="M50 50V40C50 35 55 30 60 30C65 30 70 35 70 40V50" stroke="#1E293B" strokeWidth="4" />
          <circle cx="60" cy="60" r="5" fill="white" />
          <path d="M60 60V70" stroke="white" strokeWidth="2" />
        </motion.g>
      </svg>
    )
  },
  {
    id: 'tailored-solutions',
    title: 'Massgeschneiderte Lösungen',
    description: 'Keine Einheitsgrösse – wir entwickeln personalisierte KI-Strategien, die perfekt auf Ihre Geschäftsziele und Branchenanforderungen abgestimmt sind.',
    renderPictogram: () => (
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g 
          initial={tailoredAnimation.scissors.initial}
          animate={tailoredAnimation.scissors.animate}
          style={{ originX: "60px", originY: "60px" }}
        >
          <path d="M40 40L80 80" stroke="#1E293B" strokeWidth="2" />
          <path d="M40 40C35 35 25 35 25 45C25 55 35 55 40 50L45 55C40 60 30 60 30 70C30 80 40 80 45 75" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
          <path d="M80 40C85 35 95 35 95 45C95 55 85 55 80 50L75 55C80 60 90 60 90 70C90 80 80 80 75 75" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
          <circle cx="40" cy="40" r="5" fill="#DC2626" />
          <circle cx="80" cy="80" r="5" fill="#DC2626" />
        </motion.g>
        <motion.path 
          d="M30 90C40 75 60 70 80 90"
          stroke="#22C55E"
          strokeWidth="2"
          strokeDasharray="100"
          initial={tailoredAnimation.thread.initial}
          animate={tailoredAnimation.thread.animate}
        />
      </svg>
    )
  }
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-swiss-navy mb-4">Unsere Kernwerte</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Bei suissefocus verbinden wir Schweizer Präzision mit KI-Innovation, um Ihr Unternehmen auf die nächste Stufe zu bringen.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {coreValues.map((value, index) => (
            <ScrollReveal 
              key={value.id} 
              delay={0.15 * index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {value.renderPictogram()}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-swiss-navy mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6} direction="up">
          <div className="mt-20 text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Wir integrieren hochmoderne KI-Technologien und robuste IT-Infrastruktur,
              um Ihr Unternehmen mit KI-Lösungen zu transformieren, die wirkliche Wettbewerbsvorteile schaffen.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a 
                href="/about" 
                className="inline-block px-6 py-3 border-2 border-swiss-navy rounded-lg
                          text-swiss-navy font-medium transition-all
                          hover:bg-swiss-navy hover:text-white"
              >
                Mehr über uns erfahren
              </a>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 