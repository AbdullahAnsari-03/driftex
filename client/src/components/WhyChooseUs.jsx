import React from 'react';
import { DollarSign, Layers, Award, Truck, Sparkles, CheckCircle } from 'lucide-react';
import { companyData } from '../data/denimData';

export default function WhyChooseUs() {
  const icons = [DollarSign, Layers, Award, Truck];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            OUR COMPETITIVE ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            This Is What Makes Us Different
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We combine high-volume industrial jeans production with agile wholesale distribution, helping retailers and fashion brands grow their business profitably.
          </p>
        </div>

        {/* 4 Pitch Deck Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.differentiators.map((item, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-xs font-bold text-blue-600">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
