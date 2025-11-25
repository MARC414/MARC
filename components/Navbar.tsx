import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For external links, allow default behavior
    if (!href.startsWith('#')) {
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          
          {/* Brand Logo - Left Aligned */}
          <div className="flex-shrink-0 flex items-center z-20">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, '#')}
              className="group"
            >
              <span className="text-3xl font-black tracking-tighter text-marc-dark font-serif hover:text-marc-primary transition-colors">
                MARC
              </span>
            </a>
          </div>

          {/* Desktop Menu - Centered Absolute */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm uppercase tracking-wide font-bold transition-colors font-sans text-slate-600 hover:text-marc-primary"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 z-20">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:inline-flex px-6 py-2.5 text-sm font-bold text-white bg-marc-primary rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 uppercase tracking-wide"
            >
              Book a Consultation
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-marc-primary focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-marc-primary hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <a
               href="#contact"
               onClick={(e) => handleNavClick(e, '#contact')}
               className="block px-3 py-2 mt-2 text-center rounded-md text-base font-bold text-white bg-marc-primary hover:bg-blue-700 mx-2"
            >
                Book a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;