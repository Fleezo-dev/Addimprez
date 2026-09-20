import React from 'react';
import { COMPANY_INFO } from '../data/portfolioItems';
import { Facebook, MessageCircle, Youtube, MapPin, Phone } from 'lucide-react';

export const ReginFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-neutral-200 mt-12 py-10 px-4 text-center font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Social Icons row matching regin.in footer */}
        <ul className="flex items-center justify-center gap-4 mb-6">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#fe4101] hover:text-white text-neutral-600 flex items-center justify-center transition-all shadow-xs"
              title="Facebook"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#fe4101] hover:text-white text-neutral-600 flex items-center justify-center font-bold text-sm transition-all shadow-xs"
              title="Behance"
            >
              Bē
            </a>
          </li>
          <li>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-emerald-600 hover:text-white text-neutral-600 flex items-center justify-center transition-all shadow-xs"
              title="WhatsApp (+91 9566664663)"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-rose-600 hover:text-white text-neutral-600 flex items-center justify-center transition-all shadow-xs"
              title="YouTube"
            >
              <Youtube className="w-4 h-4 fill-current" />
            </a>
          </li>
        </ul>

        {/* Copyright notice matching regin.in */}
        <p className="text-xs text-neutral-500 font-medium">
          Copyright &copy; {COMPANY_INFO.establishedYear} {COMPANY_INFO.brandName} Company. All rights reserved.
        </p>

        {/* Address & Contact info specified by user */}
        <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-neutral-600">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#fe4101]" />
            {COMPANY_INFO.address}
          </span>
          <span className="hidden sm:inline text-neutral-300">&bull;</span>
          <a href={`tel:${COMPANY_INFO.mobile}`} className="flex items-center gap-1 font-bold text-[#fe4101] hover:underline">
            <Phone className="w-3.5 h-3.5" />
            Mobile: {COMPANY_INFO.mobile}
          </a>
        </div>
      </div>
    </footer>
  );
};
