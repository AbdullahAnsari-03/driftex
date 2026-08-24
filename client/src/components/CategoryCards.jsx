import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategoryCards() {
  return (
    <section className="py-8 bg-white border-t border-[#ebdbe4]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <a
            href="#products"
            className="p-8 rounded-2xl bg-maven-subtle hover:bg-[#f3e8ee] border border-[#ebdbe4] transition-all flex items-center justify-between group shadow-2xs"
          >
            <div className="text-left">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                New Arrival
              </h3>
              <span className="text-xs text-slate-500 mt-1 block">Explore trending cuts and washes</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-[#ebdbe4] flex items-center justify-center text-slate-900 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          <a
            href="#products"
            className="p-8 rounded-2xl bg-maven-subtle hover:bg-[#f3e8ee] border border-[#ebdbe4] transition-all flex items-center justify-between group shadow-2xs"
          >
            <div className="text-left">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Explore Outfit
              </h3>
              <span className="text-xs text-slate-500 mt-1 block">Full denim jeans collection</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-[#ebdbe4] flex items-center justify-center text-slate-900 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
