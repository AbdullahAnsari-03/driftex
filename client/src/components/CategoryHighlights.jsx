import React from 'react';
import { ArrowRight, Sparkles, Layers, Package } from 'lucide-react';

export default function CategoryHighlights({ onOpenInquiryModal }) {
  const cards = [
    {
      title: "New Arrival",
      desc: "Fresh 2026 baggy jeans, mom fits, and distressed wash collections ready for direct dispatch.",
      linkText: "View New Arrivals",
      href: "#products",
      badge: "In Stock"
    },
    {
      title: "Explore Outfits",
      desc: "Full spectrum of denim styles: wide-leg skate jeans, sulfur blacks, carbon washes, and vintage blue.",
      linkText: "Explore Collection",
      href: "#products",
      badge: "50+ Fits"
    },
    {
      title: "Wholesale & Custom Manufacturing",
      desc: "Direct bulk manufacturing, custom brand leather patches, custom woven labels, and retail packaging.",
      linkText: "Start Custom Order",
      action: onOpenInquiryModal,
      badge: "OEM / ODM"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="pitch-card p-7 flex flex-col justify-between group hover:border-blue-400 transition-all bg-slate-50/60"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
                    {card.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-200/80">
                {card.action ? (
                  <button
                    onClick={card.action}
                    className="text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <a
                    href={card.href}
                    className="text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
