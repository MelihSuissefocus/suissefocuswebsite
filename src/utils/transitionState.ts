type TransitionDirection = 'left' | 'right' | 'up' | 'down';

export function setTransitionDirection(direction: TransitionDirection): void {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('transitionDirection', direction);
    sessionStorage.setItem('isNavigating', 'true');
  }
}

export function getTransitionDirection(): TransitionDirection {
  if (typeof window !== 'undefined') {
    return (sessionStorage.getItem('transitionDirection') as TransitionDirection) || 'right';
  }
  return 'right';
}

export function isNavigating(): boolean {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('isNavigating') === 'true';
  }
  return false;
}

export function clearNavigationState(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('isNavigating');
  }
} 