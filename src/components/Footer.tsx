import React from 'react';
import { Phone, MapPin, Mail, MessageCircle, Code, ArrowUp, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                A
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight font-['Outfit'] block">
                  {COMPANY_INFO.brandName}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase block">
                  Packaging & Branding Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Coimbatore's specialized packaging design and brand identity studio. Helping FMCG brands, food processors, and startups capture market share with printer-calibrated dielines and distinctive visual systems.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs">
              <button
                onClick={onOpenExportModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition"
              >
                <Code className="w-3.5 h-3.5 text-red-400" />
                <span>Export Single-File HTML</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Studio Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Design Services</a></li>
              <li><a href="#packaging" className="hover:text-red-400 transition-colors">FMCG Packaging</a></li>
              <li><a href="#portfolio" className="hover:text-red-400 transition-colors">Featured Works</a></li>
              <li><a href="#process" className="hover:text-red-400 transition-colors">Dieline Workflow</a></li>
              <li><a href="#estimator" className="hover:text-red-400 transition-colors">Cost Estimator</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact Studio</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Packaging Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Standup Pouches & Zipper Bags</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Mono Cartons & Rigid Boxes</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Spices & Namkeen Snack Packaging</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Bottle Labels & Shrink Sleeves</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Brand Identity & Master Logos</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Corporate Websites & UI/UX</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Coimbatore Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.mobile}`} className="text-white hover:text-red-400 font-bold transition-colors">
                  {COMPANY_INFO.mobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/91${COMPANY_INFO.mobile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {COMPANY_INFO.mobile}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2007 – 2026 <strong>{COMPANY_INFO.brandName}</strong>. All rights reserved. Design layout inspired by Regin Designs.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Diwan Bahadur Rd, R.S. Puram, Coimbatore</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
