import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { clientReviews } from '../data/denimData';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextReview = () => {
    setCurrentIdx((prev) => (prev + 1) % clientReviews.length);
  };

  const prevReview = () => {
    setCurrentIdx((prev) => (prev - 1 + clientReviews.length) % clientReviews.length);
  };

  const activeReview = clientReviews[currentIdx];

  return (
    <section className="py-24 relative bg-[#070a13] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-tech uppercase font-semibold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Client Endorsements & Brand Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by World-Class <span className="gold-shimmer-text">Denim & Luxury Houses</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From heritage Japanese purists to fast-scaling European fashion conglomerates, see why top apparel leaders trust DriftX.
          </p>
        </div>

        {/* Featured Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0c1220] border border-white/10 p-8 sm:p-12 shadow-2xl relative">
          <div className="absolute top-8 right-8 text-amber-500/20">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24" />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic">
              "{activeReview.quote}"
            </p>

            {/* Author */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-white">{activeReview.author}</h4>
                <p className="text-xs text-amber-400 font-mono-tech uppercase">{activeReview.role} • {activeReview.company}</p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 hover:text-amber-400 transition-all"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono-tech text-slate-400 px-2">
                  {currentIdx + 1} / {clientReviews.length}
                </span>
                <button
                  onClick={nextReview}
                  className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 hover:text-amber-400 transition-all"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
