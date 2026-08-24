import React from 'react';
import { Droplet, Sun, Recycle, ShieldCheck, Leaf, Wind, CheckCircle2 } from 'lucide-react';

export default function SustainabilityMetrics() {
  const metrics = [
    {
      icon: Droplet,
      val: "98.4%",
      label: "Water Recycled & Purified",
      desc: "Closed-loop biological filtration returning drinking-grade effluent to the local ecosystem.",
      color: "text-blue-400",
      bg: "bg-blue-950/60 border-blue-500/30"
    },
    {
      icon: Sun,
      val: "100%",
      label: "Solar-Powered Finishing",
      desc: "Rooftop 4.2MW photovoltaic installations powering our Izmir and Dhaka laundry machinery.",
      color: "text-amber-400",
      bg: "bg-amber-950/60 border-amber-500/30"
    },
    {
      icon: Recycle,
      val: "45%",
      label: "Pre-Consumer Post-Waste Fiber",
      desc: "Recovering our own cutting-room selvedge waste into new regenerated ring-spun denim yarn.",
      color: "text-emerald-400",
      bg: "bg-emerald-950/60 border-emerald-500/30"
    },
    {
      icon: Leaf,
      val: "0%",
      label: "Toxic Chemical Sludge",
      desc: "Pumice stones and potassium permanganate completely eliminated via atmospheric ozone & laser.",
      color: "text-teal-400",
      bg: "bg-teal-950/60 border-teal-500/30"
    }
  ];

  const certs = [
    "GOTS (Global Organic Textile Standard)",
    "OEKO-TEX® Standard 100 Class 1",
    "Better Cotton Initiative (BCI) Partner",
    "ZDHC Level 3 (Zero Discharge of Hazardous Chemicals)",
    "LEED Platinum Certified Campus",
    "WRAP Gold Standard Compliance"
  ];

  return (
    <section id="sustainability" className="py-24 relative bg-[#090e1a] overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-tech uppercase font-semibold">
            <Leaf className="w-3.5 h-3.5" />
            <span>Ecological Stewardship & Zero-Discharge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Denim Without <span className="text-emerald-400 font-heading">Environmental Compromise</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Denim has historically been one of the most resource-intensive garments. We have re-engineered the process with zero hazardous effluent, closed-loop water treatment, and clean atmospheric laser tech.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${item.bg} backdrop-blur-md flex flex-col justify-between space-y-4 hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-black/40 border border-white/10 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-3xl font-heading font-extrabold ${item.color}`}>
                    {item.val}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5">{item.label}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Compliance & Certification Ribbon */}
        <div className="rounded-2xl bg-[#0c1222] border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono-tech uppercase text-amber-400 font-bold block mb-1">
                Audited & Certified
              </span>
              <h3 className="text-xl font-bold text-white">Global Compliance & Quality Accreditation</h3>
            </div>
            <div className="flex flex-wrap gap-2.5 max-w-2xl">
              {certs.map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-200 font-mono-tech"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{c}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
