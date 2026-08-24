import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '../data/denimData';

export default function Navbar({ onNavigateHome }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0d12]/95 backdrop-blur-md border-b border-[#232733] py-4 shadow-xl'
          : 'bg-gradient-to-b from-[#0b0d12]/90 via-[#0b0d12]/50 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Wordmark Logo with Subtitle */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (onNavigateHome) onNavigateHome();
          }}
          className="flex flex-col text-left group cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-normal font-display tracking-wider text-[#f4f1ea] group-hover:text-[#ccaa60] transition-colors leading-none">
            DRIFTEX<span className="text-xs align-super ml-0.5">™</span>
          </span>
          <span className="text-[9px] font-semibold tracking-[0.25em] text-[#9da5b4] group-hover:text-[#ccaa60] uppercase mt-1">
            STAY DRIFTING
          </span>
        </a>

        {/* Desktop Anchor Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#9da5b4]">
          <a
            href="#products"
            onClick={handleLinkClick}
            className="hover:text-[#f4f1ea] transition-colors duration-200"
          >
            Collection
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="hover:text-[#f4f1ea] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="hover:text-[#f4f1ea] transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="px-6 py-2.5 rounded-sm bg-[#e8decb] hover:bg-[#dfcaa8] text-[#0b0d12] font-bold text-xs tracking-[0.2em] uppercase transition-all duration-200 shadow-md hover:scale-[1.02]"
          >
            Enquire
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9da5b4] hover:text-[#f4f1ea] focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0d12]/98 border-b border-[#232733] px-6 py-6 space-y-4 text-center">
          <a
            href="#products"
            onClick={handleLinkClick}
            className="block text-xs uppercase tracking-[0.2em] font-medium text-[#9da5b4] hover:text-[#f4f1ea] py-2"
          >
            Collection
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="block text-xs uppercase tracking-[0.2em] font-medium text-[#9da5b4] hover:text-[#f4f1ea] py-2"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block text-xs uppercase tracking-[0.2em] font-medium text-[#9da5b4] hover:text-[#f4f1ea] py-2"
          >
            Contact
          </a>
          <div className="pt-3">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="inline-block px-8 py-3 rounded-sm bg-[#e8decb] text-[#0b0d12] font-bold text-xs tracking-widest uppercase"
            >
              Enquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
