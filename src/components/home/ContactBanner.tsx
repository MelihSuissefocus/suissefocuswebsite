import { motion } from 'framer-motion';

export default function ContactBanner() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-blue-600 text-white py-12 sticky bottom-0 md:relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Lassen Sie uns über Ihr Projekt sprechen
        </motion.h2>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center"
        >
          <a
            href="#footer"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium
                     hover:bg-gray-50 transition-colors shadow-lg
                     focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
                     flex items-center space-x-2"
            aria-label="Zum Kontaktformular scrollen"
          >
            <span>Kontakt</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
} 