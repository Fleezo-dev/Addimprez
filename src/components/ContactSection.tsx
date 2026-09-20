import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'FMCG Food & Snack Pouch Packaging',
    message: ''
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4 tracking-tight font-['Outfit']">
            Contact {COMPANY_INFO.brandName} Design Studio
          </h2>
          <p className="text-slate-400 text-base">
            Visit our physical studio in R.S. Puram, Coimbatore, call our lead designer, or submit your project brief below.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Card & Location Visual */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Details */}
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-7 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white">
                    {COMPANY_INFO.brandName}
                  </h3>
                  <p className="text-xs text-red-400 font-semibold">
                    Packaging Design & Branding Agency
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center font-black text-lg text-white">
                  A
                </div>
              </div>

              {/* Address with prominent copy button */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Studio Address:
                  </div>
                  <p className="text-sm font-semibold text-slate-100 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-400 hover:text-red-300 bg-slate-900/60 hover:bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 transition"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Address Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-slate-400 italic">
                      Landmark: Next to Kalpana Studios
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Direct Mobile & WhatsApp:
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.mobile}`}
                    className="text-lg font-black text-white hover:text-red-400 transition-colors block font-['Outfit']"
                  >
                    {COMPANY_INFO.mobileDisplay} ({COMPANY_INFO.mobile})
                  </a>
                  <div className="flex items-center gap-2 mt-2">
                    <a
                      href={`tel:${COMPANY_INFO.mobile}`}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={`https://wa.me/91${COMPANY_INFO.mobile}?text=Hi%20Addimprez,%20I%20am%20interested%20in%20packaging%20design%20services`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Studio Hours:
                  </div>
                  <p className="text-xs font-semibold text-slate-200">
                    {COMPANY_INFO.workingHours}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Walk-ins & appointment-based sample viewings welcome.
                  </p>
                </div>
              </div>

            </div>

            {/* Interactive Map Visual Card */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-slate-300">Coimbatore Location Radar</span>
                <span className="text-[11px] text-red-400 bg-red-500/20 px-2 py-0.5 rounded-full">
                  R.S. Puram Hub
                </span>
              </div>

              <div className="aspect-[16/9] w-full bg-slate-950 rounded-xl border border-slate-700/80 overflow-hidden relative flex items-center justify-center p-4 text-center">
                {/* Visual Map Representation */}
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#e31e24_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-red-600/30 border-2 border-red-500 flex items-center justify-center mx-auto text-red-400 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    Diwan Bahadur Road, R.S. Puram
                  </div>
                  <div className="text-[11px] text-slate-400 max-w-xs mx-auto">
                    Next to Kalpana Studios • Coimbatore, Tamil Nadu 641001
                  </div>
                  <a
                    href="https://maps.google.com/?q=286+Diwan+Bahadur+Rd+RS+Puram+Coimbatore+641001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-red-400 hover:text-red-300 mt-2 underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700/80 rounded-3xl p-7 sm:p-10 shadow-xl">
            <h3 className="text-2xl font-black text-white font-['Outfit'] mb-2">
              Send Your Project Brief
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out this form and our senior design director will review your requirements and reach out within 2 business hours.
            </p>

            {formSubmitted ? (
              <div className="bg-emerald-950/70 border border-emerald-700/80 rounded-2xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-emerald-300 font-['Outfit']">
                  Project Brief Received!
                </h4>
                <p className="text-xs text-emerald-200/90 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || 'valued partner'}</strong>! Our team at Addimprez will review your project details and contact you at <strong>{formData.phone || COMPANY_INFO.mobile}</strong> promptly.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', service: 'FMCG Food & Snack Pouch Packaging', message: '' });
                    }}
                    className="text-xs text-emerald-400 underline hover:text-emerald-300"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Your Name / Business Contact *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9566664663"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@yourbrand.com"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-red-500 transition"
                  >
                    <option>FMCG Food & Snack Pouch Packaging</option>
                    <option>Rigid / Mono Carton Box Design</option>
                    <option>Brand Identity & Logo Design Suite</option>
                    <option>Bottle / Jar Label & Shrink Sleeve</option>
                    <option>Brochures, Catalogs & Print Collateral</option>
                    <option>Corporate Website & UI/UX</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Project Requirements / Dimensions / SKU Count
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your product, packaging format (pouch/box/bottle), target market, timelines, or printing method..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Brief to Addimprez Studio</span>
                </button>

                <div className="pt-2 text-center text-[11px] text-slate-500">
                  Prefer instant WhatsApp chat? Message us directly at{' '}
                  <a
                    href={`https://wa.me/91${COMPANY_INFO.mobile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 font-bold hover:underline"
                  >
                    {COMPANY_INFO.mobile}
                  </a>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
