import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import NavLink from './NavLink';

interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
  highlight?: boolean;
  description?: string;
}

interface MobileMenuProps {
  navigation: NavigationItem[];
  currentPath: string;
}

export default function MobileMenu({ navigation, currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'de' | 'en'>('de');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  const renderNavItem = (item: NavigationItem, depth = 0) => (
    <div key={item.name} className={depth > 0 ? 'ml-4' : ''}>
      <div className="flex items-center">
        <NavLink
          href={item.href}
          isMobile
          highlight={item.highlight}
          isActive={currentPath === item.href}
          onClick={() => !item.children && setIsOpen(false)}
          className={`flex-1 ${item.children ? 'pr-8' : ''}`}
        >
          <div className="font-medium text-swiss-navy">{item.name}</div>
        </NavLink>
        {item.children && (
          <button
            onClick={() => toggleExpanded(item.name)}
            className="p-2 text-gray-400 hover:text-swiss-navy"
            aria-label={`${item.name} Untermenü ${expandedItems.includes(item.name) ? 'schließen' : 'öffnen'}`}
          >
            <ChevronRight 
              className={`h-4 w-4 transition-transform ${
                expandedItems.includes(item.name) ? 'rotate-90' : ''
              }`}
            />
          </button>
        )}
      </div>
      {item.children && expandedItems.includes(item.name) && (
        <div className="mt-1 space-y-1 border-l border-gray-200 ml-4">
          {item.children.map(child => renderNavItem(child, depth + 1))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-swiss-navy hover:text-swiss-navy/70"
        aria-label="Menü öffnen"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Off-canvas menu */}
      <div className={`
        fixed top-0 right-0 bottom-0 w-[300px] bg-gray-200/95 backdrop-blur-md shadow-lg z-50
        transform transition-transform duration-300 ease-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        will-change-transform
      `}>
        <div className="flex items-center justify-between p-5 border-b border-gray-300 bg-gray-300/95 backdrop-blur-md text-swiss-navy">
          <button
            onClick={() => setCurrentLang(currentLang === 'de' ? 'en' : 'de')}
            className="flex items-center space-x-1 text-base font-medium text-swiss-navy hover:text-swiss-navy/70"
          >
            <Globe className="h-4 w-4" />
            <span>{currentLang.toUpperCase()}</span>
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              setExpandedItems([]);
            }}
            className="p-2 text-swiss-navy hover:text-swiss-navy/70"
            aria-label="Menü schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-5 space-y-3 overflow-y-auto max-h-[calc(100vh-8rem)]">
          {navigation.map(item => renderNavItem(item))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-300 bg-gray-300/95 backdrop-blur-md">
          <NavLink
            href="/contact"
            highlight
            isMobile
            onClick={() => setIsOpen(false)}
            className="block w-full py-3 text-center bg-swiss-red text-white hover:bg-swiss-red/90 rounded-md font-medium transition-colors"
          >
            Kontakt
          </NavLink>
        </div>
      </div>
    </>
  );
} 