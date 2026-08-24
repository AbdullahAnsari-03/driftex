import React, { useState } from 'react';
import { siteData } from '../data/denimData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format message for WhatsApp
    let waText = `Hi DRIFTEX, I would like to make an enquiry.\n\n`;
    if (formData.name) waText += `Name: ${formData.name}\n`;
    if (formData.phone) waText += `Phone/WhatsApp: ${formData.phone}\n`;
    if (formData.email) waText += `Email: ${formData.email}\n`;
    if (formData.message) waText += `Message: ${formData.message}\n`;
    
    if (!formData.name && !formData.message) {
      waText = siteData.whatsappMessage;
    }

    const waUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#08090c] border-t border-[#232733] text-left relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Header Area */}
            <div className="space-y-4">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#c9a24a] uppercase block">
                GET IN TOUCH
              </span>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal font-display text-[#f4f1ea] tracking-tight leading-[1.05]">
                Let&apos;s talk<br />
                <span className="italic">denim.</span>
              </h2>
            </div>

            {/* Structured Contact Details */}
            <div className="space-y-8 pt-2">
              
              {/* Address */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a24a] block">
                  ADDRESS
                </span>
                <p className="text-sm sm:text-base font-light text-[#9da5b4] leading-relaxed max-w-md">
                  {siteData.contact.address}
                </p>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a24a] block">
                  PHONE
                </span>
                <div className="text-sm sm:text-base font-light text-[#9da5b4] space-x-2">
                  <a href={`tel:${siteData.contact.primaryPhone}`} className="hover:text-[#f4f1ea] transition-colors">
                    +91 75064 08708
                  </a>
                  <span>/</span>
                  <a href={`tel:${siteData.contact.secondaryPhone}`} className="hover:text-[#f4f1ea] transition-colors">
                    +91 84520 18620
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a24a] block">
                  EMAIL
                </span>
                <p>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-sm sm:text-base font-light text-[#9da5b4] hover:text-[#f4f1ea] transition-colors"
                  >
                    {siteData.contact.email}
                  </a>
                </p>
              </div>

              {/* Instagram */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a24a] block">
                  INSTAGRAM
                </span>
                <p>
                  <a
                    href={siteData.contact.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm sm:text-base font-light text-[#9da5b4] hover:text-[#f4f1ea] transition-colors"
                  >
                    {siteData.contact.instagram}
                  </a>
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Sleek Minimal Form with Underline Inputs */}
          <div className="lg:col-span-6 lg:pt-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-[#232733] py-4 text-sm sm:text-base text-[#f4f1ea] placeholder-[#5a6275] focus:outline-none focus:border-[#f4f1ea] transition-colors rounded-none"
                />
              </div>

              {/* Phone / WhatsApp Input */}
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone / WhatsApp"
                  className="w-full bg-transparent border-b border-[#232733] py-4 text-sm sm:text-base text-[#f4f1ea] placeholder-[#5a6275] focus:outline-none focus:border-[#f4f1ea] transition-colors rounded-none"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-[#232733] py-4 text-sm sm:text-base text-[#f4f1ea] placeholder-[#5a6275] focus:outline-none focus:border-[#f4f1ea] transition-colors rounded-none"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message — product, quantity, or enquiry type"
                  className="w-full bg-transparent border-b border-[#232733] py-4 text-sm sm:text-base text-[#f4f1ea] placeholder-[#5a6275] focus:outline-none focus:border-[#f4f1ea] transition-colors resize-none rounded-none"
                ></textarea>
              </div>

              {/* Send Enquiry Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-[#e8decb] hover:bg-[#dfcaa8] text-[#0b0d12] font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-xl cursor-pointer hover:scale-[1.01]"
                >
                  Send Enquiry
                </button>
              </div>

              {submitted && (
                <p className="text-xs text-[#c9a24a] text-center tracking-wide">
                  Opening WhatsApp to send your enquiry details...
                </p>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
