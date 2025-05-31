import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

export default function OfficeLocation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform">
              <img 
                src="/Buero.jpg" 
                alt="suissefocus Büro in Oensingen" 
                className="w-full h-auto object-cover"
                style={{ maxHeight: '500px' }} 
              />
              <div className="bg-swiss-navy py-4 px-6 flex items-center justify-between">
                <span className="text-white font-medium tracking-wide">Eichengasse 3, 4702 Oensingen</span>
                <a 
                  href="https://maps.google.com/?q=Eichengasse+3,+4702+Oensingen,+Switzerland" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 1.586l-4 4V17h8V5.586l-4-4zM2 6v14h16V6h-4v11H6V6H2z" clipRule="evenodd" />
                  </svg>
                  <span>Maps</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6 lg:pl-10">
              <h2 className="text-4xl font-bold text-swiss-navy">Besuchen Sie uns in Oensingen</h2>
              <p className="text-lg text-gray-700">
                Unser modernes Büro im Herzen der Schweiz bietet den idealen Raum für Innovationen und Kundengespräche. 
                Hier verbinden wir Schweizer Präzision mit zukunftsweisender KI-Technologie.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-swiss-navy flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-swiss-navy">Zentrale Lage</h3>
                    <p className="text-gray-600">Nur 30 Minuten von Bern, Basel und Zürich entfernt</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-swiss-navy flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-swiss-navy">Vereinbaren Sie einen Termin</h3>
                    <p className="text-gray-600">+41 76 680 82 02 oder <a href="mailto:info@suissefocus.ch" className="text-primary hover:underline">info@suissefocus.ch</a></p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a 
                  href="/contact" 
                  className="inline-block mt-6 px-8 py-3 bg-swiss-red text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Kontakt aufnehmen
                </a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 