import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { companyData } from '../data/denimData';

export default function ProductsSection({ onSelectProductForInquiry }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filters = ['ALL', 'NEW ARRIVAL', 'CORE COLLECTION', 'EARTH TONES'];

  const filteredProducts = companyData.products.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'NEW ARRIVAL') return p.category === 'New Arrival';
    if (activeFilter === 'CORE COLLECTION') return p.category === 'Core Collection';
    if (activeFilter === 'EARTH TONES') return p.category === 'Earth Tones' || p.category === 'Avant-Garde';
    return true;
  });

  return (
    <section id="products" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-1">
              WHOLESALE & MANUFACTURING CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Our Products
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Explore our trending jeans collection. Available for immediate wholesale dispatch and custom OEM private-label manufacturing.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeFilter === filter
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              {/* Product Thumbnail */}
              <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-bold uppercase text-slate-800 shadow-sm">
                    {product.tag}
                  </span>
                </div>

                {/* Quick Inquire Overlay Button on Hover */}
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onSelectProductForInquiry(product)}
                    className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Inquire Product</span>
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-1">
                    <span>{product.fit}</span>
                    <span className="text-blue-600">{product.wash}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {product.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Wholesale Available
                  </span>
                  
                  <button
                    onClick={() => onSelectProductForInquiry(product)}
                    className="text-xs font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
