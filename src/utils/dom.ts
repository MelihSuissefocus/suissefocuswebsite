/**
 * Isomorphic DOM utility functions
 */

/**
 * Create an HTML element in a way that works in both browser and server environments
 */
export function createTag(type: string) {
  const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  
  if (isBrowser) {
    // In browser, create a real DOM element
    return document.createElement(type);
  } else {
    // In server context, return a mock element with required methods
    return {
      appendChild: () => {},
      setAttribute: () => {},
      style: {},
      classList: {
        add: () => {},
        remove: () => {},
        toggle: () => {},
        contains: () => false
      },
      addEventListener: () => {},
      removeEventListener: () => {},
      hasAttribute: () => false,
      getAttribute: () => null,
      removeAttribute: () => {}
    };
  }
}

/**
 * Check if code is running in a browser environment
 */
export function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
} 