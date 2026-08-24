import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyData } from '../data/denimData';

export default function WhatsAppFloating() {
  return (
    <a
      href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello%20DriftX%20Trends,%20I%20want%20to%20inquire%20about%20your%20jeans%20wholesale%20collection.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 font-bold text-sm group transform hover:scale-105"
      aria-label="WhatsApp Us"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="font-semibold tracking-wide">WhatsApp Us</span>
    </a>
  );
}
