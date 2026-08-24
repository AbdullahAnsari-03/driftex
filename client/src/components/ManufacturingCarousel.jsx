import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Layers, 
  Cpu, 
  CheckCircle, 
  Activity, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  X
} from 'lucide-react';
import { manufacturingSteps } from '../data/denimData';

export default function ManufacturingCarousel({ onOpenQuoteModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [zoomModalImage, setZoomModalImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const autoPlayRef = useRef(null);

  const totalSteps = manufacturingSteps.length;
  const currentStep = manufacturingSteps[currentIndex];

  const nextStep = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSteps);
    setProgress(0);
  };

  const prevStep = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
    setProgress(0);
  };

  const selectStep = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Autoplay ticker
  useEffect(() => {
    if (!isPlaying) return;

    const interval = 50; // Update progress smoothly
    const duration = 6000; // 6 seconds per slide
    const increment = (interval / duration) * 100;

    autoPlayRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStep();
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(autoPlayRef.current);
  }, [isPlaying, currentIndex]);

  return (
    <section id="craft-carousel" className="py-24 relative bg-[#070b13] overflow-hidden border-t border-b border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-tech uppercase font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Picture Carousel 01</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The 7-Phase Denim <span className="gold-shimmer-text">Manufacturing Lifecycle</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our end-to-end industrial apparatus. From high-staple organic cotton spinning and 12-dip rope indigo oxidation to vintage shuttle weaving and zero-water ozone distressing.
            </p>
          </div>

          {/* Controls: Play/Pause, Step Counters, Prev/Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-mono-tech uppercase"
              title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
              <span className="hidden sm:inline">{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl p-1.5">
              <button
                onClick={prevStep}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all active:scale-95"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="px-3 text-xs font-mono-tech font-bold text-amber-400">
                <span className="text-white text-sm">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="text-slate-500"> / {String(totalSteps).padStart(2, '0')}</span>
              </div>

              <button
                onClick={nextStep}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all active:scale-95"
                aria-label="Next step"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Step Selector Pill Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {manufacturingSteps.map((step, idx) => {
            const active = idx === currentIndex;
            return (
              <button
                key={step.id}
                onClick={() => selectStep(idx)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-mono-tech uppercase tracking-wider transition-all flex items-center gap-2.5 border ${
                  active 
                    ? 'bg-amber-500/15 border-amber-500 text-amber-300 font-bold shadow-lg shadow-amber-500/10' 
                    : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/20'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  active ? 'bg-amber-500 text-black font-bold' : 'bg-slate-800 text-slate-400'
                }`}>
                  {idx + 1}
                </span>
                <span>{step.category.split('/')[1] || step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Progress Bar for Active Slide */}
        <div className="w-full h-1 bg-slate-800 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Main Interactive Stage Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-[#0c111e] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          
          {/* Left Column: Rich Visual Image Presentation */}
          <div className="lg:col-span-7 relative group min-h-[380px] sm:min-h-[480px] rounded-2xl overflow-hidden bg-black flex flex-col justify-between p-6">
            {/* Background High-Res Image with Smooth Transition */}
            <img
              src={currentStep.image}
              alt={currentStep.alt}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Multi-layer Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-[#070b13]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>

            {/* Top Image Badges */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[11px] font-mono-tech uppercase font-bold tracking-wider">
                {currentStep.badge}
              </span>

              <button
                onClick={() => setZoomModalImage(currentStep)}
                className="p-2.5 rounded-lg bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white hover:text-amber-400 transition-all"
                title="Expand and zoom image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Image Overlay Info */}
            <div className="relative z-10 space-y-2">
              <span className="text-amber-400 text-xs font-mono-tech tracking-widest uppercase font-semibold">
                {currentStep.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {currentStep.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-xl">
                {currentStep.tagline}
              </p>
            </div>
          </div>

          {/* Right Column: Engineering Tech Specs & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[11px] font-mono-tech text-slate-400 uppercase">Process Architecture</span>
                  <h4 className="text-xl font-bold text-white mt-0.5">{currentStep.title}</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono-tech font-bold text-sm">
                  0{currentStep.id}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {currentStep.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Technical Calibration Matrix</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {Object.entries(currentStep.techSpecs).map(([key, val], idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">
                        {key}
                      </span>
                      <span className="text-xs font-semibold text-slate-100 block">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Inquire About This Stage</span>
              </button>

              <button
                onClick={nextStep}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Mini Thumbnail Strip for Fast Navigation */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {manufacturingSteps.map((step, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={step.id}
                onClick={() => selectStep(idx)}
                className={`relative rounded-xl overflow-hidden aspect-[4/3] group border text-left transition-all ${
                  isSelected 
                    ? 'border-amber-500 ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/20' 
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[9px] font-mono-tech text-amber-400 font-bold block">
                    0{step.id}. {step.category.split('/')[1] || 'Stage'}
                  </span>
                  <span className="text-[10px] text-white font-medium truncate block">
                    {step.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Zoom Modal */}
      {zoomModalImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <button
            onClick={() => setZoomModalImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full bg-[#0b101c] rounded-2xl overflow-hidden border border-white/10 flex flex-col max-h-[90vh]">
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px] sm:min-h-[500px]">
              <img
                src={zoomModalImage.image}
                alt={zoomModalImage.alt}
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-6 bg-[#0c111e] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-amber-400 text-xs font-mono-tech uppercase font-semibold">
                  {zoomModalImage.category}
                </span>
                <h4 className="text-xl font-bold text-white">{zoomModalImage.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{zoomModalImage.tagline}</p>
              </div>
              <button
                onClick={() => { setZoomModalImage(null); onOpenQuoteModal(); }}
                className="px-5 py-2.5 rounded-lg bg-amber-500 text-black font-bold text-xs uppercase tracking-wider"
              >
                Inquire This Process
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
