import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const swiftModules = [
  { 
    id: 'chat', 
    name: 'Chat', 
    emoji: '💬', 
    description: 'Automatisieren Sie bis zu 70 % der Kundenanfragen mit einem sicheren LLM-Chatbot.' 
  },
  { 
    id: 'forecast', 
    name: 'Forecast', 
    emoji: '📈', 
    description: 'Nutzen Sie KI für präzise Vorhersagen und fundierte Geschäftsentscheidungen.' 
  },
  { 
    id: 'vision', 
    name: 'Vision', 
    emoji: '🖼️', 
    description: 'Extrahieren Sie Informationen aus Dokumenten und Bildern automatisch mit KI.' 
  },
  { 
    id: 'guard', 
    name: 'Guard', 
    emoji: '🛡️', 
    description: 'Schützen Sie Ihre Daten mit KI-gestützter Anomalieerkennung und Sicherheitsanalyse.' 
  },
  { 
    id: 'reco', 
    name: 'Reco', 
    emoji: '⭐', 
    description: 'Steigern Sie Umsätze durch personalisierte KI-Empfehlungen für Ihre Kunden.' 
  }
];

const coremlisModules = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    emoji: '🖥️',
    description: 'Zentrale KI-Schaltzentrale - bündelt alle Schritte von der Dateneinspielung bis zum Live-Agent in einer Web-Konsole.'
  },
  {
    id: 'data',
    name: 'Data',
    emoji: '📊',
    description: 'Verbinden Sie ERP, E-Mail-Postfach, PDF-Archive oder Cloud-Speicher per Drag-&-Drop. Erhalten Sie ein sauberes, versionskontrolliertes Dataset.'
  },
  {
    id: 'model',
    name: 'Model',
    emoji: '🧠',
    description: 'Per visueller Oberfläche wählen Sie Ziel, laden Ihr Dataset und klicken auf Start. Der Auto-ML-Wizard liefert sofort ein lauffähiges erstes Modell.'
  },
  {
    id: 'training',
    name: 'Training',
    emoji: '📈',
    description: 'Während Coremlis trainiert, sehen Sie Metriken live: Genauigkeit, Kosten, CO₂-Schätzung mit Warnungen bei Daten-Drift oder Performance-Abfall.'
  },
  {
    id: 'agent',
    name: 'Agent',
    emoji: '🤖',
    description: 'Mit einem Klick wird Ihr Modell zum Agenten: REST-API, Chat-Widget oder Workflow-Bot. Skalierung, Authentifizierung, Versionskontrolle inklusive.'
  }
];

// Tab transition variants
const tabContentVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] } },
  exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
};

export default function ProductsSection() {
  const [activeSwiftModule, setActiveSwiftModule] = useState(swiftModules[0].id);
  const [activeCoremlisModule, setActiveCoremlisModule] = useState(coremlisModules[0].id);

  return (
    <section 
      id="produkte"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-secondary"
    >
      <div className="max-w-7xl mx-auto">
        {/* 1. Intro Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-swiss-navy mb-4">Unsere Produkte</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Eine Plattform – und eine Suite fertiger KI-Apps, bereit für Ihr Geschäft.
            </p>
          </div>
        </ScrollReveal>

        {/* 2. Panel A: Coremlis Platform */}
        <ScrollReveal delay={0.1}>
          <div className="mb-20">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
                Plattform
              </div>
              <h2 className="text-4xl font-bold text-swiss-navy mb-4">Coremlis Platform</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Self-Service-KI-Plattform zum Trainieren, Feintunen & Deployen von LLMs – On-Prem oder in der Schweizer Cloud.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 px-2">
              {coremlisModules.map((module) => (
                <motion.button
                  key={module.id}
                  onClick={() => {
                    setActiveCoremlisModule(module.id);
                    (window as any).plausible?.('product_click', { props: { product: `Coremlis${module.name}` } });
                  }}
                  whileHover={{ scale: activeCoremlisModule === module.id ? 1.05 : 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-5 py-3 rounded-full flex items-center transition-all ${
                    activeCoremlisModule === module.id 
                      ? 'bg-swiss-navy text-white shadow-md scale-105' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-label={`Coremlis ${module.name} anzeigen`}
                >
                  <span className="text-xl mr-3" aria-hidden="true">{module.emoji}</span>
                  <span className={`font-medium ${activeCoremlisModule === module.id ? 'text-white' : 'text-swiss-navy'}`}>{module.name}</span>
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <AnimatePresence mode="wait">
                {coremlisModules.map((module) => (
                  module.id === activeCoremlisModule && (
                    <motion.div
                      key={module.id}
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col"
                    >
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-md text-white">
                            <span className="text-2xl" aria-hidden="true">{module.emoji}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-swiss-navy ml-4">Coremlis {module.name}</h3>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {module.description}
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Eigene Modelle in Tagen, nicht Monaten</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Volle Daten-Souveränität</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCoremlisModule}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-video bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative"
                  >
                    <img 
                      src={`/images/coremlis-${activeCoremlisModule}.png`} 
                      alt={`Coremlis ${coremlisModules.find(m => m.id === activeCoremlisModule)?.name} Demo`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        const module = coremlisModules.find(m => m.id === activeCoremlisModule);
                        target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 450"><rect width="100%" height="100%" fill="%23f8fafc"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="%23475569" text-anchor="middle">Coremlis ${module?.name} ${module?.emoji}</text></svg>`;
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-swiss-navy/90 to-swiss-navy/0 text-white p-4">
                      <div className="text-sm font-medium">Coremlis {coremlisModules.find(m => m.id === activeCoremlisModule)?.name}</div>
                      <div className="text-xs opacity-80">Live-Demo • Klicken Sie für Details</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/produkte#coremlis"
                  onClick={() => (window as any).plausible?.('product_click', { props: { product: 'Coremlis' } })}
                  className="inline-flex items-center px-6 py-3 bg-swiss-red text-white rounded-lg font-medium hover:opacity-80 transition-opacity shadow-sm"
                  aria-label="Zur Coremlis Platform navigieren"
                >
                  <span>Zur Plattform</span>
                  <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Panel B: SwiftSuite */}
        <ScrollReveal delay={0.2} direction="up">
          <div>
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
                App Suite
              </div>
              <h2 className="text-4xl font-bold text-swiss-navy mb-4">SwiftSuite</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Vorgefertigte KI-Applikationen für Enterprise-Chatbots, Prognosen, Dokumentenanalyse und mehr.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 px-2">
              {swiftModules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => {
                    setActiveSwiftModule(module.id);
                    (window as any).plausible?.('product_click', { props: { product: `Swift${module.name}` } });
                  }}
                  className={`px-5 py-3 rounded-full flex items-center transition-all ${
                    activeSwiftModule === module.id 
                      ? 'bg-swiss-navy text-white shadow-md scale-105' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105'
                  }`}
                  aria-label={`Swift ${module.name} anzeigen`}
                >
                  <span className="text-xl mr-3" aria-hidden="true">{module.emoji}</span>
                  <span className={`font-medium ${activeSwiftModule === module.id ? 'text-white' : 'text-swiss-navy'}`}>{module.name}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              {swiftModules.map((module) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeSwiftModule === module.id ? 1 : 0, display: activeSwiftModule === module.id ? 'block' : 'none' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex flex-col"
                >
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-md text-white">
                        <span className="text-2xl" aria-hidden="true">{module.emoji}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-swiss-navy ml-4">Swift{module.name}</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {module.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Sofort einsatzbereit</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Enterprise-grade Sicherheit und Integration</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              ))}

              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative">
                  <img 
                    src={`/images/swift-${activeSwiftModule}.png`} 
                    alt={`Swift ${swiftModules.find(m => m.id === activeSwiftModule)?.name} Demo`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      const module = swiftModules.find(m => m.id === activeSwiftModule);
                      target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 450"><rect width="100%" height="100%" fill="%23f8fafc"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="%23475569" text-anchor="middle">Swift${module?.name} ${module?.emoji}</text></svg>`;
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-swiss-navy/90 to-swiss-navy/0 text-white p-4">
                    <div className="text-sm font-medium">Swift{swiftModules.find(m => m.id === activeSwiftModule)?.name}</div>
                    <div className="text-xs opacity-80">Live-Demo • Klicken Sie für Details</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/produkte#swiftsuite"
                  onClick={() => (window as any).plausible?.('product_click', { props: { product: 'SwiftSuite' } })}
                  className="inline-flex items-center px-6 py-3 bg-swiss-red text-white rounded-lg font-medium hover:opacity-80 transition-opacity shadow-sm"
                  aria-label="Zur SwiftSuite navigieren"
                >
                  <span>Zur App Suite</span>
                  <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
} 