import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, ShoppingBag } from 'lucide-react';
import { companyData } from '../data/denimData';

export default function ProductInquiryModal({ isOpen, onClose, selectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productName: '',
    quantity: '50 - 100 pcs (Sample Lot)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        productName: selectedProduct.name || ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        productName: 'Wholesale Jeans Lot'
      }));
    }
  }, [selectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl my-8 border border-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Inquiry Submitted!
            </h3>
            <p className="text-sm text-slate-600">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our wholesale team will contact you shortly regarding <strong className="text-blue-600">{formData.productName}</strong>.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Wholesale & Custom Order</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Request Product Pricing
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Direct factory rate quotation for bulk orders and shop inventory.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Product Inquiring
                </label>
                <input
                  type="text"
                  required
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                  placeholder="name@business.com"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Order Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                >
                  <option>50 - 100 pcs (Sample Lot)</option>
                  <option>100 - 300 pcs (Shop Stock)</option>
                  <option>500 - 1,000+ pcs (Wholesale)</option>
                  <option>Custom Manufacturing (OEM)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? <span>Submitting...</span> : <span>Send Inquiry</span>}
                </button>

                <a
                  href={`https://wa.me/${companyData.contact.whatsapp}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(formData.productName)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wider border border-emerald-200 flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
