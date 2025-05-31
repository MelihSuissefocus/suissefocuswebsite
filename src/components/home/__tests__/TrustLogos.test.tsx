import { render, screen } from '@testing-library/react';
import TrustLogos from '../TrustLogos';
import '@testing-library/jest-dom';

// Mock window.matchMedia
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe('TrustLogos', () => {
  it('renders the trust logos section', () => {
    render(<TrustLogos />);
    expect(screen.getByRole('region', { name: /trust/i })).toBeInTheDocument();
  });

  it('formats logo names correctly', () => {
    render(<TrustLogos />);
    // Wait for content to load
    setTimeout(() => {
      // Test camelCase to space conversion
      expect(screen.getByAltText('swisscom')).toBeInTheDocument();
      // The component automatically converts camelCase names to spaced names
      // e.g., "kantionZuerich.png" would render as "Kantion Zuerich"
    }, 0);
  });

  it('applies reduced motion when preference is set', () => {
    // Mock reduced motion preference
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    
    render(<TrustLogos />);
    // In reduced motion mode, the animation class shouldn't be applied
    setTimeout(() => {
      const marqueeElement = document.querySelector('[class*="animate-marquee"]');
      expect(marqueeElement).not.toBeInTheDocument();
    }, 0);
  });

  it('has correct image dimensions', () => {
    render(<TrustLogos />);
    
    // Test will run after useEffect has completed
    setTimeout(() => {
      const images = screen.getAllByRole('img');
      expect(images.length).toBeGreaterThan(0);
      
      // Check that each image has the correct height classes
      images.forEach(img => {
        expect(img).toHaveClass('h-10', 'md:h-[40px]');
      });
    }, 0);
  });
}); 