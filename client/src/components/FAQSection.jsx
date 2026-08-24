import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { faqList } from '../data/denimData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 relative bg-[#090e1b] overflow-hidden border-t border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-tech uppercase font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Buyer Guidance & OEM Protocols</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="gold-shimmer-text">Questions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Essential information regarding minimums, sampling turnaround times, fabric certifications, and international shipping logistics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#0f172a] border-amber-500/50 shadow-xl'
                    : 'bg-[#0b101c] border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-100 hover:text-amber-400 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                  <div className={`p-1.5 rounded-lg bg-white/5 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-amber-400 bg-amber-500/20' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
