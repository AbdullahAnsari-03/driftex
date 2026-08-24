import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, FileCheck, Layers, ArrowRight } from 'lucide-react';

export default function QuoteInquiryModal({ isOpen, onClose, initialSpec }) {
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    phone: '',
    garmentType: 'Men\'s / Unisex 5-Pocket Jeans',
    estimatedQuantity: '250 - 500 pcs',
    targetWash: 'Raw Selvedge Rigid',
    fabricOrigin: 'Okayama Japanese Selvedge',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialSpec) {
      setFormData(prev => ({
        ...prev,
        brandName: initialSpec.brandDeboss || prev.brandName,
        targetWash: `${initialSpec.fabric} (${initialSpec.stitch} stitch)`,
        notes: `Custom Spec Configured in Denim Lab:\n- Cut: ${initialSpec.fit}\n- Hardware: ${initialSpec.hardware}\n- Patch: ${initialSpec.patch}`
      }));
    }
  }, [initialSpec]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0c1220] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono-tech uppercase text-amber-400 font-bold">
                RFQ Dispatched to Global Sourcing Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Inquiry Successfully Logged
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.contactName || formData.brandName || 'Partner'}</strong>. Your custom tech-pack specifications and production inquiry have been assigned ticket <strong className="text-amber-400 font-mono-tech">#DX-{Math.floor(100000 + Math.random() * 900000)}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 max-w-md mx-auto text-xs text-slate-300 space-y-1 text-left font-mono-tech">
              <div>• Lead Engineer: Senior Denim Technologist</div>
              <div>• Response SLA: Guaranteed within 4 business hours</div>
              <div>• Prototype Dispatch: Estimated within 7 business days</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-tech uppercase font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>B2B OEM / ODM Production Request</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request Custom Denim Quotation & Samples
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Direct mill inquiry for bespoke cut-and-sew, private label jeans, or wholesale selvedge fabric rolls.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
                    Brand or Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    placeholder="e.g. Aether Denim Studio"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    placeholder="e.g. Marcus Vance"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    placeholder="marcus@yourbrand.com"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
                    Direct Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    placeholder="+1 (555) 019-2834"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
                    Target Garment Category
                  </label>
                  <select
                    value={formData.garmentType}
                    onChange={(e) => setFormData({ ...formData, garmentType: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>Men's / Unisex 5-Pocket Jeans</option>
                    <option>Women's High-Rise & Wide-Leg Denim</option>
                    <option>Heavyweight Denim Trucker Jackets</option>
                    <option>Raw Selvedge Workwear Overalls</option>
                    <option>Bulk Fabric Yardage Rolls Only</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
                    Estimated Production Quantity
                  </label>
                  <select
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>50 - 100 pcs (Boutique Sample Run)</option>
                    <option>250 - 500 pcs (Launch Collection)</option>
                    <option>1,000 - 5,000 pcs (Retail Production)</option>
                    <option>10,000+ pcs (High-Volume Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono-tech uppercase text-slate-400 block mb-1">
                  Specific Requirements, Tech Pack Notes or Washes:
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 resize-none font-mono-tech"
                  placeholder="Specify fabric weight (e.g. 14.5oz selvedge), required wash distressing, hardware finishes, or target delivery date..."
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono-tech flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Non-Disclosure Agreement (NDA) Standard
                </span>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing RFQ...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Order RFQ</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
