import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { companyData } from '../data/denimData';

export default function ContactAddressSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', productName: '', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Connect With Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Have questions about minimum order quantities, stock availability, or custom designs? Reach out directly.
          </p>
        </div>

        {/* Pitch Deck Slide: Form on Left, Contact & Addresses on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your details below and our team will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you! Our sales desk will call or email you with the product catalog and pricing shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors"
                    placeholder="Your Name / Business Name"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors"
                    placeholder="Your Email Address"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors"
                    placeholder="e.g. Baggy Jeans, Mom Torn Jeans, Wholesale Lot"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors resize-none"
                    placeholder="Specify quantity or particular requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SUBMIT INQUIRY</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Physical Address, Phone & Contact Cards */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Address Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Address
                </h4>
                <p className="text-base font-bold text-slate-900 leading-snug">
                  {companyData.contact.address}
                </p>
                <span className="text-xs text-slate-500 block pt-1">
                  Near Gate No. 18, Bandra (E), Mumbai
                </span>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Call Us Directly
                </h4>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                >
                  {companyData.contact.phoneDisplay}
                </a>
                <span className="text-xs text-slate-500 block">
                  {companyData.contact.hours}
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Email
                </h4>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                >
                  {companyData.contact.email}
                </a>
                <span className="text-xs text-slate-500 block">
                  Guaranteed response within 4 hours
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-6 rounded-2xl bg-emerald-600 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
              <div>
                <h4 className="text-base font-bold font-heading">Need Fast Wholesale Pricing?</h4>
                <p className="text-xs text-emerald-100 mt-0.5">Chat directly with our inventory manager on WhatsApp.</p>
              </div>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Hi,%20I%20am%20interested%20in%20ordering%20wholesale%20jeans.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white text-emerald-700 hover:bg-emerald-50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
