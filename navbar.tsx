import { useState } from 'react';
import { Link } from 'react-router';
import { Logo } from './logo';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ARTICLES', path: '/articles' },
    { name: 'MARKETS', path: '/markets' },
    { name: 'INVESTING', path: '/investing' },
    { name: 'ABOUT', path: '/about' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium transition-colors"
                style={{ color: '#0A2540' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00B386')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0A2540')}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} style={{ color: '#0A2540' }} />
            ) : (
              <Menu size={24} style={{ color: '#0A2540' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-sm font-medium"
                style={{ color: '#0A2540' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
