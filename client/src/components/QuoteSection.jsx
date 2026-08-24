import React from 'react';

export default function QuoteSection() {
  return (
    <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden border-y border-[#232733]/60">
      {/* Background Denim Fabric Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/WhatsApp Image 2026-08-23 at 1.55.51 PM (1).jpeg"
          alt="DRIFTEX Denim Texture"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-125"
        />
        {/* Cinematic dark vignette overlays */}
        <div className="absolute inset-0 bg-[#08090c]/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-transparent to-[#0b0d12]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08090c]/50 to-[#08090c]/90" />
      </div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-5 py-20">
        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-normal font-display italic text-[#f4f1ea] tracking-tight leading-[1.25] drop-shadow-lg">
          &ldquo;Crafted in Mumbai.<br className="hidden sm:inline" /> Worn everywhere.&rdquo;
        </blockquote>

        <div className="pt-2">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a24a] drop-shadow">
            — DRIFTEX™ STAY DRIFTING
          </p>
        </div>
      </div>
    </section>
  );
}
