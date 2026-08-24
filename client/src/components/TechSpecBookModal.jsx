import React, { useState } from 'react';
import { X, FileText, Download, Check, ShieldCheck, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function TechSpecBookModal({ isOpen, onClose, onOpenQuoteModal }) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0c1220] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-tech uppercase font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Official B2B Publications</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              2026/27 Denim Engineering & Fabric Lookbook
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Comprehensive 64-page engineering guide covering Kuroki selvedge weights, eco-wash formulas, Union Special stitch specs, and MOQ pricing tier structures.
            </p>
          </div>

          {/* Catalog Preview Graphic */}
          <div className="p-6 rounded-2xl bg-[#070b13] border border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech">
              <span className="text-amber-400 font-bold">DRIFTX_TECH_SPEC_CATALOG_2026.PDF</span>
              <span className="text-slate-400">18.4 MB • High-Res PDF</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-mono-tech">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-slate-400 block">SECTION 01</span>
                <span className="text-white font-semibold">Raw Selvedge Looms</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-slate-400 block">SECTION 02</span>
                <span className="text-white font-semibold">Ozone & Laser Aging</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-slate-400 block">SECTION 03</span>
                <span className="text-white font-semibold">Hardware & Stitching</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-slate-400 block">SECTION 04</span>
                <span className="text-white font-semibold">Bespoke Fit CADs</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-slate-400 block">SECTION 05</span>
                <span className="text-white font-semibold">Sustainability Audit</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-[10px] text-slate-400 block">SECTION 06</span>
                <span className="text-white font-semibold">MOQ & Export Logistics</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-[11px] font-mono-tech text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Complimentary Digital Edition for Apparel Founders</span>
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                {downloading ? (
                  <span>Generating Secure Link...</span>
                ) : downloaded ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>Catalog Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Tech Spec PDF</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
