import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '../data/denimData';

export default function WhatsAppButton() {
  return (
    <a
      href={siteData.contact.whatsappLink1}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#c9a24a] hover:bg-[#dfb75c] text-[#0b0d12] p-4 rounded-full shadow-2xl hover:shadow-[#c9a24a]/30 transition-all duration-300 flex items-center justify-center group transform hover:scale-110 cursor-pointer border border-[#f4f1ea]/20"
      aria-label="Enquire on WhatsApp"
      title="Enquire on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-[#0b0d12]" />
    </a>
  );
}
