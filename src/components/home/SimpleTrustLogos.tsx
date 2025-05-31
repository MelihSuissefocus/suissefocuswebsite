import ScrollReveal from '../ScrollReveal';

export default function SimpleTrustLogos() {
  // Hard-coded logo paths that we verified with ls -la
  const logoFiles = [
    '/trust-logos/duo.png',
    '/trust-logos/ict.png',
    '/trust-logos/klara.png',
    '/trust-logos/logo.png',
    '/trust-logos/milenyum.png',
  ];

  return (
    <section id="trust" className="py-24" style={{ background: 'linear-gradient(135deg, #A9B8CC 0%, #AEC2B9 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-semibold text-swiss-navy mb-16">
            Vertrauen von führenden Unternehmen
          </h2>
        </ScrollReveal>
        
        {/* Horizontales Laufband mit Unternehmenslogos */}
        <ScrollReveal delay={0.2} direction="right">
          <div className="relative overflow-hidden" style={{ height: '120px' }}>
            <div className="absolute inset-x-0 flex animate-marquee" style={{ animationDuration: '17.5s' }}>
              {[...logoFiles, ...logoFiles].map((logoPath, index) => (
                <div key={`scroll-${index}`} className="flex-shrink-0 px-8">
                  <img
                    src={logoPath}
                    alt={`Partner ${logoPath.split('/').pop()?.split('.')[0] || `Logo ${index + 1}`}`}
                    className="h-20 w-auto object-contain"
                    style={{ 
                      border: 'none', 
                      display: 'block',
                    }}
                    onError={(e) => {
                      console.error(`Failed to load scrolling logo: ${logoPath}`);
                      e.currentTarget.src = '/logo.png'; // Verwende immer das Haupt-Logo als Fallback
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 