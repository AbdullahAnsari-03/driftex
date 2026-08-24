import React from 'react';
import { Star } from 'lucide-react';
import { siteData } from '../data/denimData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug font-heading">
            This is what makes us different <br />
            Hear from our customers.
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Name */}
              <div className="pt-3 border-t border-slate-200/60">
                <span className="text-xs font-bold text-slate-900 block font-heading">
                  {rev.name}
                </span>
                <span className="text-[11px] text-slate-400">Google Review</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
