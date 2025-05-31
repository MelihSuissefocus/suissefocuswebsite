import { render, screen } from '@testing-library/react';
import PageTransition, { createPageTransitionVariants } from '../PageTransition';

describe('PageTransition', () => {
  it('renders children correctly', () => {
    render(
      <PageTransition>
        <div data-testid="test-content">Test Content</div>
      </PageTransition>
    );
    
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
  
  it('applies className when provided', () => {
    render(
      <PageTransition className="test-class">
        <div>Content</div>
      </PageTransition>
    );
    
    // Since framer-motion will render a div with the className
    expect(document.querySelector('.test-class')).toBeInTheDocument();
  });
  
  it('creates correct transition variants', () => {
    // Test default direction (right)
    const defaultVariants = createPageTransitionVariants();
    expect(defaultVariants.initial.x).toBe(20);
    expect(defaultVariants.initial.y).toBe(0);
    expect(defaultVariants.exit.x).toBe(-20);
    
    // Test left direction
    const leftVariants = createPageTransitionVariants('left');
    expect(leftVariants.initial.x).toBe(-20);
    expect(leftVariants.exit.x).toBe(20);
    
    // Test up direction
    const upVariants = createPageTransitionVariants('up');
    expect(upVariants.initial.y).toBe(-20);
    expect(upVariants.exit.y).toBe(20);
    
    // Test down direction
    const downVariants = createPageTransitionVariants('down');
    expect(downVariants.initial.y).toBe(20);
    expect(downVariants.exit.y).toBe(-20);
  });
}); 