import { render, screen, fireEvent, act } from '@testing-library/react';
import { axe } from 'jest-axe';
import ProductsSection from '../ProductsSection';

// Mock window.plausible
global.window.plausible = jest.fn();

// Mock timers for carousel
jest.useFakeTimers();

describe('ProductsSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('renders without errors', () => {
    render(<ProductsSection />);
    expect(screen.getByText('Unsere Produkte')).toBeInTheDocument();
    expect(screen.getByText('Eine Plattform – und eine Suite fertiger KI-Apps, bereit für Ihr Geschäft.')).toBeInTheDocument();
  });

  it('displays Coremlis Platform section with correct content', () => {
    render(<ProductsSection />);
    expect(screen.getByText('Coremlis Platform')).toBeInTheDocument();
    expect(screen.getByText('Eigene Modelle in Tagen, nicht Monaten')).toBeInTheDocument();
    expect(screen.getByText('Volle Daten-Souveränität')).toBeInTheDocument();
    expect(screen.getByText('Governance inklusive')).toBeInTheDocument();
    expect(screen.getByText('Schweizer Hosting, DSG & FINMA-ready.')).toBeInTheDocument();
    expect(screen.getByText('Zur Plattform')).toBeInTheDocument();
  });

  it('displays Coremlis carousel with initial feature', () => {
    render(<ProductsSection />);
    expect(screen.getByText('Zentrale KI-Schaltzentrale')).toBeInTheDocument();
    expect(screen.getByText(/Coremlis bündelt alle Schritte/)).toBeInTheDocument();
  });

  it('auto-rotates Coremlis features', () => {
    render(<ProductsSection />);
    
    // The first feature should be visible
    expect(screen.getByText('Zentrale KI-Schaltzentrale')).toBeVisible();
    
    // Advance timer to trigger auto-rotation
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    
    // Now the second feature should be visible
    expect(screen.getByText('Datenintegration & -Vorbereitung')).toBeVisible();
  });

  it('allows manual navigation of Coremlis features', () => {
    render(<ProductsSection />);
    
    // Get navigation buttons
    const prevButton = screen.getByLabelText('Vorherige Funktion anzeigen');
    const nextButton = screen.getByLabelText('Nächste Funktion anzeigen');
    
    // Click next button to go to second feature
    fireEvent.click(nextButton);
    expect(screen.getByText('Datenintegration & -Vorbereitung')).toBeVisible();
    
    // Click next again to go to third feature
    fireEvent.click(nextButton);
    expect(screen.getByText('Modellerstellung – ganz ohne Code')).toBeVisible();
    
    // Click prev button to go back to second feature
    fireEvent.click(prevButton);
    expect(screen.getByText('Datenintegration & -Vorbereitung')).toBeVisible();
  });

  it('allows navigation using dot indicators', () => {
    render(<ProductsSection />);
    
    // Find all dot buttons (there should be 5 for the carousel)
    const dots = screen.getAllByRole('button', { name: /Gehe zu/ });
    expect(dots.length).toBe(5);
    
    // Click the third dot
    fireEvent.click(dots[2]);
    
    // The third feature should now be visible
    expect(screen.getByText('Modellerstellung – ganz ohne Code')).toBeVisible();
  });

  it('displays Swift Suite section with correct tabs', () => {
    render(<ProductsSection />);
    expect(screen.getByText('Swift Suite')).toBeInTheDocument();
    
    // Check if all module tabs are present
    expect(screen.getByText('SwiftChat')).toBeInTheDocument();
    expect(screen.getByText('SwiftForecast')).toBeInTheDocument();
    expect(screen.getByText('SwiftVision')).toBeInTheDocument();
    expect(screen.getByText('SwiftGuard')).toBeInTheDocument();
    expect(screen.getByText('SwiftReco')).toBeInTheDocument();
  });

  it('displays micro proof bar with KPIs', () => {
    render(<ProductsSection />);
    expect(screen.getByText('< 100 ms Antwortzeit')).toBeInTheDocument();
    expect(screen.getByText('99.9 % Uptime')).toBeInTheDocument();
    expect(screen.getByText('-30 % Support-Kosten')).toBeInTheDocument();
  });

  it('changes active module tab when clicked', () => {
    render(<ProductsSection />);
    
    // SwiftChat should be visible initially
    expect(screen.getByText('Automatisieren Sie bis zu 70 % der Kundenanfragen mit einem sicheren LLM-Chatbot.')).toBeVisible();
    
    // Click on SwiftForecast
    fireEvent.click(screen.getByText('SwiftForecast'));
    
    // SwiftForecast description should now be visible
    expect(screen.getByText('Nutzen Sie KI für präzise Vorhersagen und fundierte Geschäftsentscheidungen.')).toBeVisible();
  });

  it('tracks product clicks correctly', () => {
    render(<ProductsSection />);
    
    // Click the Coremlis platform button
    fireEvent.click(screen.getByText('Zur Plattform'));
    expect(window.plausible).toHaveBeenCalledWith('product_click', { props: { product: 'Coremlis' } });
    
    // Click a Swift module tab
    fireEvent.click(screen.getByText('SwiftVision'));
    expect(window.plausible).toHaveBeenCalledWith('product_click', { props: { product: 'SwiftVision' } });
    
    // Click the Suite discover button
    fireEvent.click(screen.getByText('Suite entdecken'));
    expect(window.plausible).toHaveBeenCalledWith('product_click', { props: { product: 'SwiftSuite' } });
  });

  it('handles image loading errors gracefully', () => {
    render(<ProductsSection />);
    
    // Find any image in the Coremlis carousel and simulate an error
    const carouselImg = screen.getByAltText('Zentrale KI-Schaltzentrale');
    fireEvent.error(carouselImg);
    
    // Image should still be in the document after error handling
    expect(screen.getByAltText('Zentrale KI-Schaltzentrale')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ProductsSection />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has responsive design elements', () => {
    render(<ProductsSection />);
    
    // Check for flex layout classes that would stack on mobile
    const coremlisSection = screen.getByText('Coremlis Platform').closest('div')?.parentElement;
    expect(coremlisSection).toHaveClass('flex-col', 'md:flex-row');
  });
}); 