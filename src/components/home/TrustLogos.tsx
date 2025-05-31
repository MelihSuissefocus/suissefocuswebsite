import { useEffect, useState } from 'react';

function formatLogoName(filename: string): string {
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.(svg|png)$/, '');
  // Convert kebab/snake case to spaces
  const nameWithSpaces = nameWithoutExt.replace(/[-_]/g, ' ');
  // Convert camelCase to spaces between words
  const spacedName = nameWithSpaces.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Replace numbers with spaces before them
  const formattedName = spacedName.replace(/(\d+)/g, ' $1');
  // Remove "Logo" prefix if present and capitalized
  const nameWithoutLogo = formattedName.replace(/^Logo\s*/i, '');
  // Capitalize first letter of each word
  return nameWithoutLogo
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export default function TrustLogos() {
  const [logos, setLogos] = useState<string[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    // Listen for changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Fetch logos from directory
    const fetchLogos = async () => {
      try {
        // Aktuelle Logos aus dem trust-logos Ordner - direkt einzeln auflisten
        console.log("Logos laden...");
        
        // Statisch definierte Logos direkt mit vollständigem Pfad
        const logoFiles = [
          'duo.png', 'ict.png', 'klara.png', 'Logo_02.svg',
          'logo_firma.png', 'logo.png', 'milenyum.png'
        ];
        
        // Debug-Informationen in der Konsole
        console.log("Gefundene Logos:", logoFiles);
        
        // Logos setzen
        setLogos(logoFiles);
      } catch (error) {
        console.error("Fehler beim Laden der Logos:", error);
      }
    };

    fetchLogos();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Duplicate logos for seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id="trust" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-swiss-navy mb-16">Vertrauen von führenden Unternehmen</h2>
        
        

                  <div className="relative overflow-hidden" style={{ minHeight: '120px' }}>
            {/* Fade edges für nahtlosen Übergang */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            
          {/* Marquee-Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex items-center gap-16 md:gap-28 animate-marquee whitespace-nowrap"
              style={{ animationDuration: '30s' }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={`${logo}-${index}`} 
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300 px-2 md:px-4"
                >
                  <img
                    src={`/trust-logos/${logo}`}
                    alt={formatLogoName(logo)}
                    className="h-24 md:h-[100px] w-auto object-contain"
                    onError={(e) => {
                      console.error(`Failed to load image: /trust-logos/${logo}`);
                      e.currentTarget.style.border = "1px dashed red";
                      e.currentTarget.style.padding = "10px";
                      e.currentTarget.style.width = "200px";
                      e.currentTarget.style.height = "100px";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 