import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { siteData } from '../data/denimData';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.carouselImages;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-20 bg-app-base relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-96 h-96 bg-amber-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/25 blur-3xl rounded-full" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pitch Deck Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Picture Carousel on Left */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_28px_55px_-28px_rgba(11,27,53,0.7)] bg-white border border-white aspect-[4/3] group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_65px_-26px_rgba(11,27,53,0.75)] ring-1 ring-slate-950/5">
              {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b172b]/75 via-[#0b172b]/5 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                      <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                        {slide.title}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Prev / Next controls */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md hover:scale-110 transition-all duration-200 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md hover:scale-110 transition-all duration-200 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentSlide ? 'w-6 bg-amber-400 shadow-sm' : 'w-2 bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Simple Pitch Deck Copy on Right */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 text-left">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-white border border-amber-200 text-[11px] font-extrabold text-amber-800 tracking-wider uppercase shadow-xs">
              <span className="text-amber-600">✦</span> {siteData.tagline} • {siteData.brandTrademark}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] font-heading">
              Crafted with Care for <span className="gold-foil-text font-black">Memorable Moments.</span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {siteData.heroDescription}
            </p>

            <div className="pt-2">
              <a
                href="#products"
                className="premium-button inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer border border-amber-300/30"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
