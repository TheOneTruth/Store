'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

export default function Header({ cartCount = 0 }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    {
      label: 'Inicio',
      path: '/home',
      icon: 'HomeIcon',
      tooltip: 'Página de inicio'
    },
    {
      label: 'Catálogo',
      path: '/product-catalog',
      icon: 'ViewGridIcon',
      tooltip: 'Explorar productos'
    },
    {
      label: 'Ofertas',
      path: '/product-catalog',
      icon: 'TagIcon',
      tooltip: 'Ver ofertas especiales'
    },
    {
      label: 'Mi cuenta',
      path: '/user-profile',
      icon: 'UserIcon',
      tooltip: 'Perfil de usuario'
    }
  ];

  const isActivePath = (path) => {
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* TecnoPlus Logo */}
          <Link 
            href="/home" 
            className="flex items-center space-x-2 transition-opacity duration-150 ease-out hover:opacity-80"
            aria-label="TecnoPlus - Inicio"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <svg 
                className="w-6 h-6 text-primary-foreground" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-text-primary hidden sm:block">
              TecnoPlus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Navegación principal">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                href={item?.path}
                className={`
                  relative flex items-center space-x-2 px-4 py-2 rounded-lg
                  transition-all duration-150 ease-out
                  ${isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-text-secondary hover:bg-muted hover:text-text-primary'
                  }
                `}
                aria-label={item?.tooltip}
                aria-current={isActivePath(item?.path) ? 'page' : undefined}
              >
                <Icon 
                  name={item?.icon} 
                  size={20} 
                  variant="outline"
                />
                <span className="font-medium">{item?.label}</span>
              </Link>
            ))}
            <Link
              href="/shopping-cart"
              className="relative flex items-center space-x-2 px-4 py-2 rounded-lg text-text-secondary hover:bg-muted hover:text-text-primary transition-all duration-150 ease-out"
              aria-label="Ver carrito de compras"
            >
              <Icon 
                name="ShoppingCartIcon" 
                size={20} 
                variant="outline"
              />
              {cartCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full"
                  aria-label={`${cartCount} artículos en el carrito`}
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:bg-muted hover:text-text-primary transition-colors duration-150 ease-out"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            <Icon 
              name={isMobileMenuOpen ? 'XIcon' : 'MenuIcon'} 
              size={24} 
              variant="outline"
            />
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface shadow-lg">
          <nav className="px-4 py-3 space-y-1" aria-label="Navegación móvil">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                href={item?.path}
                className={`
                  relative flex items-center space-x-3 px-4 py-3 rounded-lg
                  transition-all duration-150 ease-out
                  ${isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-text-secondary hover:bg-muted hover:text-text-primary'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={item?.tooltip}
                aria-current={isActivePath(item?.path) ? 'page' : undefined}
              >
                <Icon 
                  name={item?.icon} 
                  size={24} 
                  variant="outline"
                />
                <span className="font-medium flex-1">{item?.label}</span>
              </Link>
            ))}
            <Link
              href="/shopping-cart"
              className="relative flex items-center space-x-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-muted hover:text-text-primary transition-all duration-150 ease-out"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Ver carrito de compras"
            >
              <Icon 
                name="ShoppingCartIcon" 
                size={24} 
                variant="outline"
              />
              <span className="font-medium flex-1">Carrito</span>
              {cartCount > 0 && (
                <span 
                  className="flex items-center justify-center min-w-[24px] h-6 px-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full"
                  aria-label={`${cartCount} artículos en el carrito`}
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}