import React from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, Factory, Award, Flame, Cpu, Compass } from 'lucide-react';
import { companyInfo } from '../data/denimData';

export default function Hero({ onOpenQuoteModal, onOpenSampleModal }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden denim-gradient-bg denim-texture-bg">
      {/* Ambient Lighting & Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-blue-700/20 via-indigo-600/15 to-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Subtle grid lines background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top pill badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-md shadow-xl shadow-black/40 hover:border-amber-500/60 transition-all duration-300 group cursor-default">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span className="text-xs font-mono-tech uppercase tracking-widest text-amber-300 font-medium">
              EST. 1994 • RAW SELVEDGE MILL & INDUSTRIAL APPAREL MFG
            </span>
            <span className="hidden sm:inline text-slate-500">/</span>
            <span className="hidden sm:inline text-xs text-slate-300 font-medium">
              OEM & Private Label Partner
            </span>
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Precision Denim Engineering.{' '}
            <span className="block mt-2 gold-shimmer-text font-heading">
              From Raw Indigo Fiber to Global Runways.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            We weave, cut, stitch, and eco-wash world-class denim for luxury fashion houses, heritage purists, and high-volume retail leaders across 48+ nations with zero-compromise craftsmanship.
          </p>

          {/* CTA Group */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-black shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-3 cursor-pointer group"
            >
              <span>Launch Custom Order / RFQ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#customizer"
              className="px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider bg-slate-900/90 hover:bg-slate-800/90 text-slate-100 border border-slate-700/80 hover:border-amber-500/50 backdrop-blur-md shadow-lg transition-all flex items-center gap-3 group"
            >
              <Cpu className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span>Interactive Denim Lab 3D</span>
            </a>

            <a
              href="#craft-carousel"
              className="px-6 py-4 rounded-xl text-sm font-medium tracking-wider uppercase bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current text-blue-400" />
              <span>Tour Manufacturing Fleet</span>
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono-tech">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Min. Order: 50 Pcs / Style
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 7-Day Physical Sampling
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Closed-Loop Ozone Wash
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> AQL 1.0 Strict QA Standard
            </span>
          </div>
        </div>

        {/* Floating Spec Teaser Showcase Banner */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl p-1 bg-gradient-to-r from-amber-500/30 via-blue-500/20 to-amber-500/30 shadow-2xl shadow-black/80">
          <div className="bg-[#0b101c]/95 rounded-[15px] p-6 sm:p-8 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Highlight Card 1 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all">
                <div className="p-3 rounded-lg bg-blue-950/80 border border-blue-600/30 text-blue-400">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-tech text-amber-400 uppercase font-semibold">Kurashiki Shuttle Looms</div>
                  <h4 className="text-white font-semibold text-sm mt-0.5">Heavyweight Selvedge</h4>
                  <p className="text-xs text-slate-400 mt-1">Vintage 1960s Toyoda G3 low-tension looms weaving 14.5oz - 21oz pure raw selvedge denim.</p>
                </div>
              </div>

              {/* Highlight Card 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all">
                <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-600/30 text-emerald-400">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-tech text-emerald-400 uppercase font-semibold">Zero-Water Ozone Lab</div>
                  <h4 className="text-white font-semibold text-sm mt-0.5">Eco-Wash Innovation</h4>
                  <p className="text-xs text-slate-400 mt-1">Jeanologia robotic lasers & atmospheric G2 ozone chambers eliminating 98.4% fresh water use.</p>
                </div>
              </div>

              {/* Highlight Card 3 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all">
                <div className="p-3 rounded-lg bg-amber-950/80 border border-amber-600/30 text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-tech text-amber-400 uppercase font-semibold">Master Assembly</div>
                  <h4 className="text-white font-semibold text-sm mt-0.5">Union Special Craft</h4>
                  <p className="text-xs text-slate-400 mt-1">43200G chainstitched hems, solid copper burr rivets, and precision pocket arcuates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Counter Stats */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {companyInfo.stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="font-heading font-extrabold text-3xl sm:text-5xl text-white group-hover:text-amber-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-1 font-normal">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
