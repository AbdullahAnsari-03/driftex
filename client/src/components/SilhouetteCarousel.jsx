import React, { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Check, 
  ArrowRight,
  Droplets,
  Sliders
} from 'lucide-react';
import { denimSilhouettes } from '../data/denimData';

export default function SilhouetteCarousel({ onOpenQuoteModal }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedSilhouetteIndex, setSelectedSilhouetteIndex] = useState(0);

  const filters = ['ALL', 'RAW SELVEDGE', 'VINTAGE STONE', 'SULFUR BLACK', 'SPECIALTY'];

  const filteredItems = denimSilhouettes.filter((item) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'RAW SELVEDGE') return item.name.includes('Selvedge');
    if (activeFilter === 'VINTAGE STONE') return item.name.includes('Vintage') || item.name.includes('Acid');
    if (activeFilter === 'SULFUR BLACK') return item.name.includes('Black');
    if (activeFilter === 'SPECIALTY') return item.name.includes('Armor') || item.name.includes('Tencel');
    return true;
  });

  const nextItem = () => {
    setSelectedSilhouetteIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevItem = () => {
    setSelectedSilhouetteIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keep index within bounds if filter changes
  const activeItem = filteredItems[selectedSilhouetteIndex % filteredItems.length] || filteredItems[0];

  return (
    <section id="silhouettes" className="py-24 relative bg-[#090e1a] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase font-semibold">
              <Scissors className="w-3.5 h-3.5" />
              <span>Picture Carousel 02 & Master Silhouettes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Curated Cuts, Washes & <span className="gold-shimmer-text">Textile Finishes</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every silhouette is engineered on 3D CAD platforms and tested for drape, tensile strength, shrinkage stability, and high-contrast wear evolution.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedSilhouetteIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-all border ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Large Interactive Showcase Card */}
        <div className="rounded-3xl bg-[#0e1424] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Preview with Gallery Carousel Controls */}
            <div className="lg:col-span-6 relative group rounded-2xl overflow-hidden bg-black aspect-[4/5] sm:aspect-square flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-black/30"></div>

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-amber-500/50 text-amber-300 text-[11px] font-mono-tech uppercase font-bold">
                  {activeItem.weight}
                </span>
                <span className="px-3 py-1 rounded-md bg-blue-950/80 backdrop-blur-md border border-blue-500/50 text-blue-300 text-[10px] font-mono-tech uppercase">
                  {activeItem.cut}
                </span>
              </div>

              {/* Prev / Next controls */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prevItem}
                  className="p-3 rounded-full bg-black/70 hover:bg-black text-white hover:text-amber-400 border border-white/20 transition-all backdrop-blur-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextItem}
                  className="p-3 rounded-full bg-black/70 hover:bg-black text-white hover:text-amber-400 border border-white/20 transition-all backdrop-blur-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-[11px] text-slate-400 font-mono-tech">
                  Slide {selectedSilhouetteIndex + 1} of {filteredItems.length} in this category
                </span>
              </div>
            </div>

            {/* Spec breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-tech uppercase font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Silhouette Specification</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                  {activeItem.name}
                </h3>
                <p className="text-slate-300 text-sm mt-2">
                  {activeItem.details}
                </p>
              </div>

              {/* Data Table */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-slate-400 font-mono-tech uppercase">Cut & Pattern Architecture</span>
                  <span className="font-semibold text-white">{activeItem.cut}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-slate-400 font-mono-tech uppercase">Dye Recipe & Treatment</span>
                  <span className="font-semibold text-amber-400">{activeItem.dye}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-slate-400 font-mono-tech uppercase">Wash Level & Aging</span>
                  <span className="font-semibold text-blue-300">{activeItem.washLevel}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-slate-400 font-mono-tech uppercase">Wear Evolution / Fade</span>
                  <span className="font-semibold text-slate-200">{activeItem.fadePotential}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-slate-400 font-mono-tech uppercase">Production MOQ</span>
                  <span className="font-bold text-emerald-400 font-mono-tech">{activeItem.moq}</span>
                </div>
              </div>

              {/* Best fit for & Action */}
              <div className="pt-2">
                <div className="text-[11px] font-mono-tech text-slate-400 uppercase mb-2">Recommended Application:</div>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                  {activeItem.idealFor}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenQuoteModal}
                  className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>Inquire This Silhouette ({activeItem.name})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Carousel Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isCurrent = activeItem.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedSilhouetteIndex(idx)}
                className={`group rounded-2xl bg-[#0c1220] border p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent 
                    ? 'border-amber-500 ring-2 ring-amber-500/30 bg-[#0e1628]' 
                    : 'border-white/5 hover:border-white/20 hover:bg-[#0e1526]'
                }`}
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded bg-black/80 border border-white/20 text-[10px] font-mono-tech text-amber-300 font-bold uppercase">
                      {item.weight}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded bg-blue-950/90 border border-blue-500/40 text-[9px] font-mono-tech text-blue-200 uppercase font-semibold">
                      MOQ: {item.moq}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono-tech text-amber-400 uppercase font-semibold">{item.cut}</span>
                    <span className="text-[10px] font-mono-tech text-slate-400">{item.washLevel}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {item.details}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono-tech">Inspect Fit & Specs</span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
