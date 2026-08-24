import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/denimData';

export default function ProductGallery({ onSelectProduct }) {
  return (
    <section id="products" className="py-24 sm:py-32 bg-[#0b0d12] border-t border-[#232733] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c9a24a] uppercase block">
              Curated Collection
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal font-display text-[#f4f1ea] tracking-tight">
              Our Products
            </h2>
          </div>
          <p className="text-sm text-[#9da5b4] max-w-md font-light">
            Precision-engineered fits and artisanal denim washes built for wholesale volume and boutique distinction.
          </p>
        </div>

        {/* Product Cards Grid: 8 Items, Tall 3:4 Aspect Ratio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteData.products.map((product) => {
            const encodedMsg = `Hi DRIFTEX, I'm interested in ${encodeURIComponent(product.name)} (Ref: ${product.id}).`;
            const waUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(encodedMsg)}`;

            return (
              <div
                key={product.id}
                className="driftex-card rounded-2xl overflow-hidden group flex flex-col justify-between text-left"
              >
                {/* Image Area - Tall 3:4 Aspect Ratio */}
                <div 
                  onClick={() => onSelectProduct && onSelectProduct(product)}
                  className="relative aspect-[3/4] overflow-hidden bg-[#14161c] cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161c] via-transparent to-transparent opacity-80" />

                  {/* Ref Tag on Image */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-[#0b0d12]/80 backdrop-blur-md text-[11px] font-mono tracking-wider text-[#c9a24a] border border-[#232733]">
                      {product.id}
                    </span>
                  </div>

                  {/* Quick View trigger */}
                  <div className="absolute bottom-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-8 h-8 rounded-full bg-[#c9a24a] text-[#0b0d12] flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div 
                      onClick={() => onSelectProduct && onSelectProduct(product)}
                      className="cursor-pointer"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#c9a24a] block">
                        {product.fitType}
                      </span>
                      <h3 className="text-lg sm:text-xl font-normal font-display text-[#f4f1ea] group-hover:text-[#c9a24a] transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#9da5b4] leading-relaxed font-light line-clamp-2 pt-1">
                      {product.descriptor}
                    </p>
                  </div>

                  {/* Enquire on WhatsApp Link */}
                  <div className="pt-2 border-t border-[#232733]">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#c9a24a] hover:text-[#dfb75c] transition-colors group/link"
                    >
                      <MessageCircle className="w-4 h-4 text-[#c9a24a] group-hover/link:scale-110 transition-transform" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
