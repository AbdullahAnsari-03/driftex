import React, { useEffect } from 'react';
import { ArrowLeft, MessageCircle, CheckCircle2, Phone } from 'lucide-react';
import { siteData } from '../data/denimData';

export default function ProductDetail({ product, onBack, onSelectProduct }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  if (!product) return null;

  const otherProducts = siteData.products.filter((p) => p.id !== product.id);
  const encodedMsg = `Hi DRIFTEX, I'm interested in ${encodeURIComponent(product.name)} (Ref: ${product.id}).`;
  const waUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(encodedMsg)}`;

  return (
    <div className="pt-28 pb-24 bg-[#0b0d12] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Back Button */}
        <div className="mb-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#14161c] border border-[#232733] text-[#9da5b4] hover:text-[#f4f1ea] hover:border-[#c9a24a] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#c9a24a] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Collection</span>
          </button>
        </div>

        {/* Product Showcase Card */}
        <div className="bg-[#14161c] rounded-3xl border border-[#232733] p-8 sm:p-12 lg:p-14 mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Product Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-[#0b0d12] border border-[#232733] aspect-[3/4] shadow-inner group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Item Ref Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-lg bg-[#0b0d12]/90 backdrop-blur-md text-[#c9a24a] text-xs font-mono font-semibold border border-[#232733] shadow-md">
                    Ref: {product.id}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Architecture & Inquire */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a24a]">
                  {product.fitType}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-display text-[#f4f1ea] tracking-tight leading-tight">
                  {product.name}
                </h1>
                <span className="text-xs text-[#9da5b4] font-mono block">
                  Product ID: <strong className="text-[#f4f1ea]">{product.id}</strong> • DRIFTEX™ Denim
                </span>
              </div>

              {/* Descriptor block */}
              <div className="p-5 rounded-2xl bg-[#1b1e26] border border-[#232733] space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#c9a24a] block">
                  Fit Architecture &amp; Silhouette:
                </span>
                <p className="text-sm sm:text-base text-[#f4f1ea] leading-relaxed font-light">
                  {product.descriptor}
                </p>
              </div>

              {/* Wholesale Specifications */}
              <div className="space-y-3 text-xs sm:text-sm text-[#9da5b4] font-light">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a24a] flex-shrink-0" />
                  <span>Available across all standard waist sizes (28 - 38)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a24a] flex-shrink-0" />
                  <span>Bulk wholesale &amp; ready stock dispatch from Mumbai</span>
                </div>
              </div>

              {/* Inquire on WhatsApp Button */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#c9a24a] hover:bg-[#dfb75c] text-[#0b0d12] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 shadow-xl shadow-[#c9a24a]/20 hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteData.contact.primaryPhone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#232733] hover:border-[#c9a24a] text-[#9da5b4] hover:text-[#f4f1ea] text-xs font-medium uppercase tracking-wider transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-[#c9a24a]" />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Other Products Grid */}
        <div className="space-y-8">
          <div className="border-b border-[#232733] pb-4 flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-normal font-display text-[#f4f1ea]">
              More in Collection
            </h2>
            <button
              onClick={onBack}
              className="text-xs uppercase tracking-widest text-[#c9a24a] hover:underline cursor-pointer font-semibold"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProducts.slice(0, 4).map((rec) => (
              <div
                key={rec.id}
                onClick={() => onSelectProduct(rec)}
                className="driftex-card rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#14161c]">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c9a24a]">
                    {rec.fitType}
                  </span>
                  <h3 className="text-sm font-normal font-display text-[#f4f1ea] group-hover:text-[#c9a24a] transition-colors">
                    {rec.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
