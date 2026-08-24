import React, { useState } from 'react';
import { Sparkles, Layers, ShieldCheck, Droplet, ArrowRight, Award, Compass, Zap } from 'lucide-react';
import { fabricInnovations } from '../data/denimData';

export default function FabricInnovations({ onOpenQuoteModal }) {
  const [activeFabric, setActiveFabric] = useState(fabricInnovations[0]);

  return (
    <section id="fabrics" className="py-24 relative bg-[#070c17] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono-tech uppercase font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Proprietary Textile Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Advanced Denim <span className="gold-shimmer-text">Textile Innovations</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineered in our Okayama and Izmir R&D mills. Blending traditional ring-spun craft with high-tenacity CORDURA® nylon, eco-Tencel, and organic bast hemp.
          </p>
        </div>

        {/* Interactive Fabric Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {fabricInnovations.map((fabric) => {
            const isSelected = activeFabric.id === fabric.id;
            return (
              <button
                key={fabric.id}
                onClick={() => setActiveFabric(fabric)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-500 ring-2 ring-amber-500/30 shadow-xl shadow-amber-500/10'
                    : 'bg-[#0d1424] border-white/5 text-slate-300 hover:border-white/20 hover:bg-[#10192e]'
                }`}
              >
                <span className="text-[10px] font-mono-tech text-amber-400 uppercase font-semibold block mb-1">
                  {fabric.origin}
                </span>
                <h4 className="text-sm font-bold text-white truncate block">
                  {fabric.name}
                </h4>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono-tech">
                  <span>Eco: {fabric.ecoRating}</span>
                  <span className="text-blue-300 font-semibold">{fabric.stretch}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Fabric Matrix Card */}
        <div className="rounded-3xl bg-[#0d1322] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Technical Profile */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono-tech text-xs font-bold uppercase">
                    {activeFabric.origin}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono-tech flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Eco-Index: {activeFabric.ecoRating}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                  {activeFabric.name}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[10px] font-mono-tech uppercase text-slate-400 block mb-0.5">Fiber Composition</span>
                  <span className="text-xs font-semibold text-slate-200">{activeFabric.composition}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] font-mono-tech uppercase text-slate-400 block mb-0.5">Warp Indigo Treatment</span>
                    <span className="text-xs font-semibold text-amber-300">{activeFabric.warpDye}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] font-mono-tech uppercase text-slate-400 block mb-0.5">Weft Core Technology</span>
                    <span className="text-xs font-semibold text-blue-300">{activeFabric.weftYarn}</span>
                  </div>
                </div>
              </div>

              {/* Unique Features Bullets */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono-tech uppercase text-amber-400 font-bold block">
                  Key Structural Characteristics:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeFabric.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-amber-400 font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={onOpenQuoteModal}
                  className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>Request Yardage Swatch Book</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right: Macro Weave Visual Simulation */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-[#070b14] border border-white/10 p-6 flex flex-col justify-between min-h-[360px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
                <span className="text-xs font-mono-tech text-slate-400 uppercase">Textile Weave Simulation</span>
                <span className="text-[11px] font-mono-tech text-amber-400 font-bold">{activeFabric.stretch}</span>
              </div>

              {/* Interactive Weave Pattern Visualizer */}
              <div className="my-6 relative flex items-center justify-center">
                <div className="w-full aspect-video rounded-xl bg-[#091122] border border-amber-500/30 p-4 relative overflow-hidden flex flex-col justify-center items-center shadow-inner">
                  {/* Grid Lines simulating 3/1 Twill Weave */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#d9770615,#d9770615_4px,#1e3a8a30_4px,#1e3a8a30_8px)] opacity-80"></div>
                  <div className="relative z-10 text-center space-y-1 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <span className="text-[11px] font-mono-tech text-amber-400 font-bold block uppercase">
                      3/1 Right-Hand Diagonal Twill
                    </span>
                    <span className="text-xs text-slate-300 font-sans">
                      High Slub Tensile Micro-Texture
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400 pt-2 border-t border-white/10">
                <span>Certification: GOTS & OEKO-TEX</span>
                <span className="text-emerald-400">ZDHC Level 3 Compliant</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
