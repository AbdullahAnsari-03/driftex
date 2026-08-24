import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { siteData } from '../data/denimData';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end justify-start pb-16 sm:pb-24 pt-36 overflow-hidden">
      {/* Full-bleed authentic DRIFTEX denim background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/WhatsApp Image 2026-08-23 at 2.33.21 PM (1).jpeg"
          alt="DRIFTEX Jeans Manufacturing"
          className="w-full h-full object-cover object-top sm:object-center filter brightness-[0.82] contrast-110"
        />
        {/* Cinematic dark gradients for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-[#0b0d12]/45 to-[#0b0d12]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d12]/90 via-[#0b0d12]/60 to-transparent" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Top Label */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a24a]">
              MUMBAI &bull; EST. PREMIUM DENIM MANUFACTURING
            </span>
          </div>

          {/* Headline matching Figma visual: "Stay" in white + "Drifting." in warm gold */}
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-normal font-display tracking-tight text-[#f4f1ea] leading-[0.95]">
            Stay<br />
            <span className="text-[#ccaa60] italic font-display">Drifting.</span>
          </h1>

          {/* Action Row */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="#products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#e8decb] hover:bg-[#dfcaa8] text-[#0b0d12] text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-xl shadow-black/40 hover:scale-[1.02] cursor-pointer"
            >
              <span>View Collection</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent("Hi DRIFTEX, I'm inquiring about wholesale manufacturing and pricing.")}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4f1ea] hover:text-[#ccaa60] transition-colors py-2 border-b border-transparent hover:border-[#ccaa60]"
            >
              Wholesale Enquiry
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Right Scroll Indicator */}
      <div className="absolute bottom-8 right-8 sm:right-12 z-10 hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#9da5b4]">
        <span>Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#c9a24a]" />
      </div>
    </section>
  );
}
