import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare, Quote } from 'lucide-react';
import { companyData } from '../data/denimData';

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = companyData.reviews;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>4.9 / 5.0 Rating • Verified Google Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Hear From Our Customers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Feedback from wholesalers, shop owners, and retail fashion brands across India.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(currentIndex, currentIndex + 3).concat(
            currentIndex + 3 > reviews.length ? reviews.slice(0, (currentIndex + 3) % reviews.length) : []
          ).slice(0, 3).map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all"
            >
              <div className="space-y-3">
                {/* Header: Stars & Google Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Google Review</span>
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic font-normal">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-slate-500">Verified Wholesale Client</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center">
                  {rev.name.charAt(0)}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
