import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Factory, 
  ShieldCheck, 
  Calendar, 
  ExternalLink, 
  ArrowUpRight,
  Globe,
  Compass
} from 'lucide-react';
import { companyInfo } from '../data/denimData';

export default function InteractiveLocationsMap({ onOpenTourModal }) {
  const [selectedFacility, setSelectedFacility] = useState(companyInfo.facilities[0]);
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <section id="facilities" className="py-24 relative bg-[#070b14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-tech uppercase font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Global Mill Network & Physical Addresses</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Manufacturing Ateliers & <span className="gold-shimmer-text">Global Addresses</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our vertically integrated facilities span traditional Japanese selvedge weaving districts to European eco-wash centers and North American corporate headquarters.
            </p>
          </div>

          <button
            onClick={onOpenTourModal}
            className="self-start lg:self-auto px-5 py-3 rounded-xl bg-slate-900 border border-amber-500/40 hover:border-amber-400 text-amber-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book In-Person Facility Audit</span>
          </button>
        </div>

        {/* Global HQ Prominent Banner */}
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-amber-950/40 via-[#0e1628] to-blue-950/40 border border-amber-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 space-y-2">
              <span className="px-3 py-1 rounded bg-amber-500 text-black text-[11px] font-mono-tech font-bold uppercase tracking-wider inline-block">
                Principal Headquarters
              </span>
              <h3 className="text-2xl font-extrabold text-white">{companyInfo.headquarters.title}</h3>
              <p className="text-xs text-slate-300">SoHo Fashion & Garment District</p>
            </div>

            <div className="lg:col-span-5 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-200">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="font-medium leading-relaxed">{companyInfo.headquarters.address}</span>
              </div>
              <div className="flex items-center gap-6 pt-1 text-slate-300 font-mono-tech">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" /> {companyInfo.headquarters.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" /> {companyInfo.headquarters.email}
                </span>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-[11px] font-mono-tech text-slate-300">
                <span className="text-slate-400 block mb-0.5">Office Hours:</span>
                <span className="text-white font-semibold">{companyInfo.headquarters.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Global Locations Grid & Detailed Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Facility List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider font-semibold mb-2">
              Select Manufacturing Plant to Inspect:
            </div>

            {companyInfo.facilities.map((fac) => {
              const isSelected = selectedFacility.id === fac.id;
              return (
                <div
                  key={fac.id}
                  onClick={() => setSelectedFacility(fac)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-[#10182c] border-amber-500 ring-2 ring-amber-500/20 shadow-xl shadow-black/60'
                      : 'bg-[#0b101c] border-white/5 hover:border-white/20 hover:bg-[#0e1424]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono-tech uppercase text-amber-400 font-bold block mb-1">
                        {fac.role}
                      </span>
                      <h4 className="text-base font-bold text-white">{fac.city}</h4>
                    </div>
                    <span className={`p-2 rounded-lg border ${
                      isSelected ? 'bg-amber-500 text-black border-amber-400' : 'bg-slate-900 text-slate-400 border-white/10'
                    }`}>
                      <Factory className="w-4 h-4" />
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2">
                    {fac.focus}
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-mono-tech pt-2 border-t border-white/5">
                    <span className="text-slate-400">Capacity: <strong className="text-white">{fac.capacity}</strong></span>
                    <span className="text-amber-400 font-semibold">{isSelected ? 'Active Selection' : 'Click to View →'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Selected Facility Blueprint & Direct Contact Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0c1220] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
            
            {/* Facility Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="px-3 py-1 rounded bg-blue-950 border border-blue-500/40 text-blue-300 text-[11px] font-mono-tech uppercase font-bold inline-block mb-1.5">
                  {selectedFacility.role}
                </span>
                <h3 className="text-2xl font-extrabold text-white">{selectedFacility.city}</h3>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-right">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Monthly Output</span>
                <span className="text-sm font-bold text-amber-400 font-mono-tech">{selectedFacility.capacity}</span>
              </div>
            </div>

            {/* Exact Physical Address & Contact Data */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[10px] font-mono-tech uppercase text-slate-400 block">Registered Physical Address</span>
                <div className="flex items-start gap-2 text-sm text-slate-100 font-medium">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{selectedFacility.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono-tech uppercase text-slate-400 block">Direct Plant Phone</span>
                  <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-white">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{selectedFacility.phone}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono-tech uppercase text-slate-400 block">Plant Dispatch & Sourcing Email</span>
                  <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-amber-300">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>{selectedFacility.email}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[10px] font-mono-tech uppercase text-slate-400 block">Core Technical Focus & Machinery Fleet</span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{selectedFacility.focus}</p>
              </div>
            </div>

            {/* Certifications Badge row */}
            <div className="pt-2">
              <span className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-2">Audited Accreditations:</span>
              <div className="flex flex-wrap gap-2">
                {selectedFacility.certifications.map((c, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono-tech flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{c}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenTourModal}
                className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Schedule Audit at {selectedFacility.city.split(',')[0]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
