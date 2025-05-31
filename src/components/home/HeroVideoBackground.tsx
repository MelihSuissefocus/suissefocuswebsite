import { useEffect, useRef } from 'react';

interface NavigatorWithConnection extends Navigator {
  connection?: {
    saveData?: boolean;
  };
}

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for save-data mode if available
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData;
    
    if (prefersReducedMotion || saveData) {
      // If either condition is true, don't load video
      if (videoRef.current) {
        videoRef.current.style.display = 'none';
      }
      return;
    }

    // Set up intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.load();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 } // Trigger when even 1% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Navy overlay for better text contrast */}
      <div className="absolute inset-0 bg-[#003366] bg-opacity-40 z-10"></div>
      
      {/* Video element */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="none"
        poster="/videos/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero-1080p.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/videos/hero-720p.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback for reduced motion or save-data mode */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/videos/hero-poster.jpg')",
          display: "none"
        }}
        data-fallback-bg
      />
    </div>
  );
} 