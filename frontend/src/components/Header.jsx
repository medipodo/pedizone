import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteInfo } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Blog', path: '/blog' },
    { name: 'S.S.S.', path: '/sikca-sorulan-sorular', mobileName: 'Sık Sorulan Sorular' },
    { name: 'Ayak Analizi', path: '/ayak-analizi' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Kadromuz', path: '/kadromuz' },
    { name: 'İletişim', path: '/iletisim' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0 ${
        isScrolled ? 'bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg py-3' : 'bg-gradient-to-r from-blue-900 to-blue-700 py-4'
      }`}
      style={{ marginTop: 0, borderTop: 'none', outline: 'none' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">{siteInfo.name}</span>
              <span className="text-xs text-blue-100">Ayak Sağlığı</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <a
            href={`tel:${siteInfo.phoneLink}`}
            className="hidden lg:flex items-center space-x-2 bg-white text-blue-900 px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
          >
            <Phone size={18} />
            <span>{siteInfo.phone}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-blue-700 pt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-4 rounded transition-colors ${
                    location.pathname === link.path
                      ? 'bg-white/10 text-white'
                      : 'text-blue-100 hover:bg-white/5'
                  }`}
                >
                  {link.mobileName || link.name}
                </Link>
              ))}
              <a
                href={`tel:${siteInfo.phoneLink}`}
                className="flex items-center justify-center space-x-2 bg-white text-blue-900 px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors font-semibold mt-4"
              >
                <Phone size={18} />
                <span>{siteInfo.phone}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 
 
