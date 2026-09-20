import React, { useState } from 'react';
import { Phone, MapPin, Mail, Menu, X, Code, ExternalLink, Sparkles, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenExportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExportModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Packaging', href: '#packaging' },
    { name: 'Works', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Notification / Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center flex-wrap gap-4 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span className="truncate max-w-[280px] sm:max-w-none">
                286, Diwan Bahadur Rd, next to Kalpana Studios, R.S. Puram, Coimbatore
              </span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 bg-red-600/20 text-red-400 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-red-500/30">
              <Sparkles className="w-3 h-3" /> 16+ Years in Packaging Design
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href={`tel:${COMPANY_INFO.mobile}`} 
              className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.mobileDisplay}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href={`https://wa.me/91${COMPANY_INFO.mobile}?text=Hi%20Addimprez,%20I%20would%20like%20to%20discuss%20a%20packaging%20design%20project.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button
              onClick={onOpenExportModal}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded transition"
              title="View standalone single-file HTML & CSS code"
            >
              <Code className="w-3.5 h-3.5 text-amber-400" />
              <span>Single-File HTML</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo in Regin Red Badge Style */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-2xl shadow-md shadow-red-600/30 group-hover:bg-red-700 transition-all">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-red-600 transition-colors font-['Outfit'] leading-none">
                {COMPANY_INFO.brandName}
              </span>
              <span className="text-[10px] font-extrabold tracking-widest text-red-600 uppercase mt-1">
                PACKAGING DESIGN STUDIO • COIMBATORE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-slate-700 hover:text-red-600 uppercase tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenExportModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            >
              <Code className="w-4 h-4 text-red-600" />
              <span>Export HTML</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.mobile}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-sm shadow-red-600/30 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 9566664663</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenExportModal}
              className="p-2 text-slate-700 hover:text-red-600 bg-slate-100 rounded-lg"
              aria-label="View HTML code"
            >
              <Code className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-red-600 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-red-50 hover:text-red-600 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.mobile}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white text-sm font-bold rounded-lg shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call 9566664663</span>
            </a>
            <a
              href={`https://wa.me/91${COMPANY_INFO.mobile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white text-sm font-bold rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExportModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200"
            >
              <Code className="w-4 h-4 text-red-600" />
              <span>View / Download Standalone Single-File HTML</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
