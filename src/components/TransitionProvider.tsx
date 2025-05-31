import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

type TransitionProviderProps = {
  children: ReactNode;
  route: string;
}

export default function TransitionProvider({ 
  children, 
  route 
}: TransitionProviderProps) {
  const [currentPath, setCurrentPath] = useState<string>(route);
  
  // Update the path state when the route changes
  useEffect(() => {
    setCurrentPath(route);
  }, [route]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={currentPath}>
        {children}
      </div>
    </AnimatePresence>
  );
} 