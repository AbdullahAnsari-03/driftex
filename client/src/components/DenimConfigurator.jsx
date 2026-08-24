import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Layers, 
  Check, 
  Download, 
  Copy, 
  RotateCcw, 
  FileCheck, 
  Info,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { customizerOptions } from '../data/denimData';

export default function DenimConfigurator({ onOpenQuoteModalWithSpec }) {
  const [selectedFit, setSelectedFit] = useState(customizerOptions.fits[0]);
  const [selectedFabric, setSelectedFabric] = useState(customizerOptions.fabrics[0]);
  const [selectedStitch, setSelectedStitch] = useState(customizerOptions.stitchColors[0]);
  const [selectedHardware, setSelectedHardware] = useState(customizerOptions.hardware[0]);
  const [selectedPatch, setSelectedPatch] = useState(customizerOptions.leatherPatches[0]);
  const [brandDeboss, setBrandDeboss] = useState("DRIFTX ATELIER");
  const [activeView, setActiveView] = useState("FRONT"); // FRONT, BACK_POCKET, SELVEDGE_CUFF
  const [copiedNotification, setCopiedNotification] = useState(false);

  const copySpecSheet = () => {
    const specText = `DRIFTX DENIM LAB SPECIFICATION SHEET
=============================================
Brand Deboss: ${brandDeboss}
Fit / Cut: ${selectedFit.name} (${selectedFit.leg}, ${selectedFit.rise})
Fabric: ${selectedFabric.name} (${selectedFabric.badge})
Stitch Thread: ${selectedStitch.name} (${selectedStitch.desc})
Hardware & Rivets: ${selectedHardware.name} (${selectedHardware.finish})
Back Waist Patch: ${selectedPatch.name}
Sampling SLA: 7 Business Days
Standard MOQ: 50 Pieces
Manufactured by: DriftX Denim Mills & Mfg. Co.
=============================================`;
    navigator.clipboard.writeText(specText);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handleLaunchQuote = () => {
    const specObj = {
      brandDeboss,
      fit: selectedFit.name,
      fabric: selectedFabric.name,
      stitch: selectedStitch.name,
      hardware: selectedHardware.name,
      patch: selectedPatch.name
    };
    onOpenQuoteModalWithSpec(specObj);
  };

  return (
    <section id="customizer" className="py-24 relative bg-[#060911] overflow-hidden border-t border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-tech uppercase font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Denim Engineering Lab</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Build & Customize <span className="gold-shimmer-text">Your Signature Denim</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Configure your brand's bespoke jeans in real-time. Select fits, raw selvedge weights, heavy chainstitch thread hues, forged hardware rivets, and debossed full-grain leather patches.
          </p>
        </div>

        {/* The Main Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Real-Time Interactive Visual Display */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <div className="rounded-3xl bg-[#0c1220] border border-white/10 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[520px]">
              
              {/* Header Badges & View Switcher */}
              <div className="flex items-center justify-between z-10 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono-tech uppercase text-slate-300 font-bold">
                    Interactive CAD Visualizer
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900/90 rounded-lg p-1 border border-white/10">
                  {["FRONT", "BACK_POCKET", "SELVEDGE_CUFF"].map((view) => (
                    <button
                      key={view}
                      onClick={() => setActiveView(view)}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono-tech uppercase transition-all ${
                        activeView === view 
                          ? 'bg-amber-500 text-black font-bold' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {view.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Jeans Graphic Representation based on selections */}
              <div className="my-6 relative flex items-center justify-center min-h-[300px]">
                
                {activeView === "FRONT" && (
                  <div className="relative w-full max-w-[320px] aspect-[3/4] flex flex-col items-center justify-center p-4">
                    {/* Stylized Denim Silhouette Body */}
                    <div 
                      className="w-48 h-64 rounded-t-xl rounded-b-3xl relative shadow-2xl border transition-all duration-500 overflow-hidden flex flex-col"
                      style={{ 
                        backgroundColor: selectedFabric.color,
                        borderColor: selectedStitch.hex
                      }}
                    >
                      {/* Denim Twill Texture Overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:6px_6px] pointer-events-none"></div>

                      {/* Waistband */}
                      <div 
                        className="h-8 w-full border-b flex items-center justify-between px-3 relative z-10"
                        style={{ 
                          borderColor: selectedStitch.hex,
                          borderBottomStyle: 'dashed'
                        }}
                      >
                        {/* Center Button */}
                        <div 
                          className="w-4 h-4 rounded-full border shadow-md flex items-center justify-center"
                          style={{ 
                            backgroundColor: selectedHardware.id === 'copper_forged' ? '#b45309' : selectedHardware.id === 'brass_vintage' ? '#d97706' : selectedHardware.id === 'gunmetal_matte' ? '#27272a' : '#e2e8f0',
                            borderColor: '#ffffff40'
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
                        </div>

                        {/* Brand Deboss Label */}
                        <span className="text-[8px] font-mono-tech uppercase tracking-tighter text-amber-200/90 font-bold truncate max-w-[80px]">
                          {brandDeboss}
                        </span>

                        {/* Belt Loop */}
                        <div 
                          className="w-2 h-6 border-r border-l"
                          style={{ borderColor: selectedStitch.hex }}
                        ></div>
                      </div>

                      {/* Front Pockets & Rivets */}
                      <div className="flex justify-between px-2 pt-2 relative z-10">
                        {/* Left Curved Pocket */}
                        <div 
                          className="w-14 h-12 rounded-br-2xl border-b border-r relative"
                          style={{ borderColor: selectedStitch.hex, borderStyle: 'dashed' }}
                        >
                          {/* Copper Rivet */}
                          <div 
                            className="w-2.5 h-2.5 rounded-full absolute -bottom-1 -right-1 shadow-sm"
                            style={{ 
                              backgroundColor: selectedHardware.id === 'copper_forged' ? '#b45309' : selectedHardware.id === 'brass_vintage' ? '#d97706' : selectedHardware.id === 'gunmetal_matte' ? '#27272a' : '#e2e8f0'
                            }}
                          ></div>
                        </div>

                        {/* Coin Pocket (Right) */}
                        <div 
                          className="w-14 h-12 rounded-bl-2xl border-b border-l relative"
                          style={{ borderColor: selectedStitch.hex, borderStyle: 'dashed' }}
                        >
                          {/* Mini Selvedge Line on Coin pocket */}
                          <div className="w-6 h-4 border-b border-red-500 absolute top-1 right-2"></div>
                          {/* Copper Rivet */}
                          <div 
                            className="w-2.5 h-2.5 rounded-full absolute -bottom-1 -left-1 shadow-sm"
                            style={{ 
                              backgroundColor: selectedHardware.id === 'copper_forged' ? '#b45309' : selectedHardware.id === 'brass_vintage' ? '#d97706' : selectedHardware.id === 'gunmetal_matte' ? '#27272a' : '#e2e8f0'
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Inseam Center Crotch Line */}
                      <div 
                        className="flex-1 w-full flex justify-center items-end pb-2"
                      >
                        <div 
                          className="w-0.5 h-32 border-l"
                          style={{ 
                            borderColor: selectedStitch.hex,
                            borderStyle: 'dashed'
                          }}
                        ></div>
                      </div>

                      {/* Selvedge ID Cuffs at Bottom */}
                      <div className="h-6 w-full bg-black/40 border-t flex items-center justify-around px-2 text-[8px] font-mono-tech text-slate-300" style={{ borderColor: selectedStitch.hex }}>
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-3 bg-red-600 rounded-sm"></span>
                          <span>SELVEDGE ID</span>
                        </span>
                        <span className="text-[7px] text-amber-400 font-bold">UNION SPECIAL HEM</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeView === "BACK_POCKET" && (
                  <div className="relative w-full max-w-[280px] aspect-square flex flex-col items-center justify-center p-4">
                    {/* Back Pocket Shield */}
                    <div 
                      className="w-48 h-52 rounded-b-2xl border-2 relative shadow-2xl p-4 flex flex-col justify-between"
                      style={{ 
                        backgroundColor: selectedFabric.color,
                        borderColor: selectedStitch.hex
                      }}
                    >
                      {/* Leather Patch at Top Right */}
                      <div 
                        className="absolute -top-6 right-2 w-20 h-10 rounded border shadow-lg flex flex-col items-center justify-center p-1"
                        style={{ 
                          backgroundColor: selectedPatch.id === 'black_bridle' ? '#18181b' : selectedPatch.id === 'apple_vegan' ? '#2e1065' : selectedPatch.id === 'selvedge_fabric' ? '#0f172a' : '#78350f',
                          borderColor: '#ffffff30'
                        }}
                      >
                        <span className="text-[7px] font-mono-tech uppercase text-amber-200 font-bold truncate max-w-[70px]">
                          {brandDeboss}
                        </span>
                        <span className="text-[5px] text-slate-300 font-mono-tech">DRIFTX ATELIER</span>
                      </div>

                      {/* Signature Arcuate Stitching */}
                      <div className="my-auto flex flex-col items-center justify-center">
                        <svg viewBox="0 0 100 40" className="w-32 h-14">
                          <path 
                            d="M 5 15 Q 25 35, 50 20 Q 75 35, 95 15" 
                            fill="none" 
                            stroke={selectedStitch.hex} 
                            strokeWidth="2" 
                            strokeDasharray="3,2" 
                          />
                          <path 
                            d="M 5 20 Q 25 40, 50 25 Q 75 40, 95 20" 
                            fill="none" 
                            stroke={selectedStitch.hex} 
                            strokeWidth="1.5" 
                            strokeDasharray="3,2" 
                          />
                        </svg>
                      </div>

                      {/* Hidden Bartack & Copper Rivet Corner Indicators */}
                      <div className="flex justify-between items-center text-[7px] font-mono-tech text-slate-400">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedStitch.hex }}></span>
                          HIDDEN BARTACK
                        </span>
                        <span className="text-amber-400 font-bold">{selectedFit.name}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeView === "SELVEDGE_CUFF" && (
                  <div className="relative w-full max-w-[280px] aspect-square flex flex-col items-center justify-center p-4">
                    {/* Close up of cuff rolled */}
                    <div 
                      className="w-52 h-44 rounded-xl border-2 relative shadow-2xl p-4 flex flex-col justify-between overflow-hidden"
                      style={{ 
                        backgroundColor: '#e2e8f0',
                        borderColor: selectedStitch.hex
                      }}
                    >
                      {/* Inside out Ecru Weft */}
                      <div className="absolute inset-0 bg-[#f1f5f9] flex items-center justify-center">
                        {/* Red Line Selvedge Tape */}
                        <div className="w-8 h-full bg-white border-l border-r border-slate-300 flex items-center justify-center relative shadow-sm">
                          <div className="w-1 h-full bg-red-600"></div>
                        </div>
                      </div>

                      {/* Chainstitched Hem Bottom */}
                      <div 
                        className="absolute bottom-0 inset-x-0 h-8 border-t-2 flex items-center justify-between px-3 z-10"
                        style={{ 
                          backgroundColor: selectedFabric.color,
                          borderColor: selectedStitch.hex,
                          borderStyle: 'dashed'
                        }}
                      >
                        <span className="text-[8px] font-mono-tech text-white font-bold">43200G ROPE HEM</span>
                        <span className="text-[8px] font-mono-tech text-amber-400">{selectedFabric.badge}</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Live Spec Summary Pill */}
              <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono-tech uppercase block">Active Configuration</span>
                  <span className="font-bold text-white text-xs">{selectedFit.name} • {selectedFabric.badge}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-mono-tech uppercase block">Sample SLA</span>
                  <span className="font-bold text-emerald-400 text-xs font-mono-tech">7 Days Turnaround</span>
                </div>
              </div>

            </div>

            {/* Quick Actions for Active Spec */}
            <div className="flex items-center gap-3">
              <button
                onClick={copySpecSheet}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-amber-500/50 text-xs font-mono-tech text-slate-200 transition-all flex items-center justify-center gap-2"
              >
                {copiedNotification ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Spec Sheet Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copy Full Spec Sheet</span>
                  </>
                )}
              </button>

              <button
                onClick={handleLaunchQuote}
                className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold font-mono-tech uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Order Prototype</span>
              </button>
            </div>
          </div>

          {/* Right Column: Customization Controls & Selectors */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Control 01: Silhouette Fit */}
            <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-amber-400 uppercase font-bold flex items-center gap-2">
                  <span>01. Silhouette Architecture</span>
                </span>
                <span className="text-xs text-slate-400 font-mono-tech">{selectedFit.rise}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {customizerOptions.fits.map((fit) => {
                  const isSelected = selectedFit.id === fit.id;
                  return (
                    <button
                      key={fit.id}
                      onClick={() => setSelectedFit(fit)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 ring-1 ring-amber-500/40 text-white'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs">{fit.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <span className="text-[10px] text-slate-400 block font-mono-tech">{fit.leg}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 02: Denim Fabric & Dye Chemistry */}
            <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-amber-400 uppercase font-bold">
                  02. Denim Textile & Dye Chemistry
                </span>
                <span className="text-xs text-slate-400 font-mono-tech">{selectedFabric.badge}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customizerOptions.fabrics.map((fabric) => {
                  const isSelected = selectedFabric.id === fabric.id;
                  return (
                    <button
                      key={fabric.id}
                      onClick={() => setSelectedFabric(fabric)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center gap-3.5 ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 ring-1 ring-amber-500/40 text-white'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div 
                        className="w-7 h-7 rounded-lg border border-white/30 shadow-inner flex-shrink-0"
                        style={{ backgroundColor: fabric.color }}
                      ></div>
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs truncate">{fabric.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 truncate block">{fabric.textureDesc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 03: Stitch Thread Color & SPI */}
            <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-amber-400 uppercase font-bold">
                  03. Heavy-Duty Chainstitch Thread (Tex 80)
                </span>
                <span className="text-xs text-slate-400 font-mono-tech">{selectedStitch.name}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {customizerOptions.stitchColors.map((stitch) => {
                  const isSelected = selectedStitch.id === stitch.id;
                  return (
                    <button
                      key={stitch.id}
                      onClick={() => setSelectedStitch(stitch)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 ring-1 ring-amber-500/40 text-white'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div 
                        className="w-5 h-5 rounded-full border border-white/40 flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: stitch.hex }}
                      ></div>
                      <div className="overflow-hidden">
                        <span className="font-bold text-xs truncate block">{stitch.name}</span>
                        <span className="text-[9px] text-slate-400 truncate block">{stitch.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 04: Hardware & Solid Burr Rivets */}
            <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-amber-400 uppercase font-bold">
                  04. Forged Metal Rivets & Button Shanks
                </span>
                <span className="text-xs text-slate-400 font-mono-tech">{selectedHardware.finish}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customizerOptions.hardware.map((hw) => {
                  const isSelected = selectedHardware.id === hw.id;
                  return (
                    <button
                      key={hw.id}
                      onClick={() => setSelectedHardware(hw)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 ring-1 ring-amber-500/40 text-white'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs">{hw.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">{hw.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 05: Back Waistband Leather Patch & Brand Deboss */}
            <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-amber-400 uppercase font-bold">
                  05. Full-Grain Waistband Patch & Custom Brand Stamping
                </span>
                <span className="text-xs text-slate-400 font-mono-tech">{selectedPatch.name}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customizerOptions.leatherPatches.map((patch) => {
                  const isSelected = selectedPatch.id === patch.id;
                  return (
                    <button
                      key={patch.id}
                      onClick={() => setSelectedPatch(patch)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 ring-1 ring-amber-500/40 text-white'
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs">{patch.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">{patch.desc}</span>
                    </button>
                  );
                })}
              </div>

              {/* Custom Deboss Text Input */}
              <div className="pt-2">
                <label className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1.5">
                  Laser / Hot-Stamp Custom Deboss Text (e.g. Your Label Name):
                </label>
                <input
                  type="text"
                  maxLength={24}
                  value={brandDeboss}
                  onChange={(e) => setBrandDeboss(e.target.value.toUpperCase())}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs font-mono-tech uppercase text-amber-300 focus:outline-none focus:border-amber-500 tracking-wider"
                  placeholder="ENTER BRAND OR ATELIER NAME"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
