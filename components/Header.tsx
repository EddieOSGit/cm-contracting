
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'Why Us' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className={`font-poppins font-bold text-2xl ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              C & M Contracting
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-sky-600' : 'text-slate-200 hover:text-white'}`}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="tel:5098201667" className="bg-sky-600 text-white font-semibold px-5 py-3 rounded-md hover:bg-sky-700 transition-colors duration-300">
              (509) 820-1667
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
