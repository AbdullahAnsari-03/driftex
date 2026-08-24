import React from 'react';
import { siteData } from '../data/denimData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#14161c] border-t border-[#232733] relative overflow-hidden">
      {/* Background Accent Grid / Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c9a24a]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-8">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1e26] border border-[#232733]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a24a]"></span>
          <span className="text-xs font-semibold tracking-[0.25em] text-[#c9a24a] uppercase">
            About DRIFTEX™
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-display text-[#f4f1ea] tracking-tight leading-tight max-w-3xl mx-auto">
          Crafting High-Quality Denim for India&apos;s Discerning Retailers.
        </h2>

        {/* Exact Specification Copy */}
        <p className="text-base sm:text-xl text-[#9da5b4] font-light leading-relaxed max-w-3xl mx-auto">
          {siteData.aboutText}
        </p>

        {/* Small Wholesale Highlights */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-[#232733]/80">
          <div>
            <div className="text-2xl sm:text-3xl font-display font-normal text-[#c9a24a]">Mumbai</div>
            <div className="text-xs uppercase tracking-wider text-[#9da5b4] mt-1 font-light">Manufacturing Hub</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-display font-normal text-[#c9a24a]">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#9da5b4] mt-1 font-light">Direct Wholesale</div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-display font-normal text-[#c9a24a]">Pan-India</div>
            <div className="text-xs uppercase tracking-wider text-[#9da5b4] mt-1 font-light">Express Supply</div>
          </div>
        </div>

      </div>
    </section>
  );
}
