import React from 'react';
import { siteData } from '../data/denimData';

export default function Footer({ onNavigateHome }) {
  return (
    <footer className="bg-[#0b0d12] text-[#9da5b4] text-xs border-t border-[#232733] py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Wordmark & Tagline */}
        <div className="space-y-1">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (onNavigateHome) onNavigateHome();
            }}
            className="text-lg font-normal font-display tracking-wider text-[#f4f1ea] hover:text-[#c9a24a] transition-colors"
          >
            {siteData.brandTrademark}
          </a>
          <span className="text-[11px] font-medium tracking-[0.25em] text-[#c9a24a] uppercase block">
            {siteData.tagline}
          </span>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex items-center gap-8 uppercase tracking-[0.2em] font-medium text-[11px]">
          <a href="#products" onClick={onNavigateHome} className="hover:text-[#f4f1ea] transition-colors">
            Products
          </a>
          <a href="#about" onClick={onNavigateHome} className="hover:text-[#f4f1ea] transition-colors">
            About
          </a>
          <a href="#contact" onClick={onNavigateHome} className="hover:text-[#f4f1ea] transition-colors">
            Contact
          </a>
          <a
            href={siteData.contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#c9a24a] transition-colors"
          >
            Instagram (@{siteData.contact.instagram})
          </a>
        </div>

        {/* Copyright Line */}
        <div className="text-[11px] text-[#9da5b4]/80 font-light">
          © {new Date().getFullYear()} {siteData.brandTrademark}. All Rights Reserved. Mumbai, India.
        </div>

      </div>
    </footer>
  );
}
