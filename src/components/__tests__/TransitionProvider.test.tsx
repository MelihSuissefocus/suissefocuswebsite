import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TransitionProvider from '../TransitionProvider';

describe('TransitionProvider', () => {
  it('renders children correctly', () => {
    render(
      <TransitionProvider route="/test">
        <div data-testid="test-content">Test Content</div>
      </TransitionProvider>
    );
    
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
  
  it('updates when route changes', () => {
    const { rerender } = render(
      <TransitionProvider route="/initial">
        <div data-testid="test-content">Initial Route</div>
      </TransitionProvider>
    );
    
    expect(screen.getByText('Initial Route')).toBeInTheDocument();
    
    // Change the route
    rerender(
      <TransitionProvider route="/new-route">
        <div data-testid="test-content">New Route</div>
      </TransitionProvider>
    );
    
    // Route update should trigger a state change and re-render
    act(() => {
      // Allow any pending effects to run
      jest.runAllTimers();
    });
    
    expect(screen.getByText('New Route')).toBeInTheDocument();
  });
}); 