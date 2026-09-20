import React from 'react';
import { ShieldCheck, Eye, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-red-700/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">
            The Addimprez Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4 tracking-tight font-['Outfit']">
            Why Leading FMCG Brands Trust Our Studio
          </h2>
          <p className="text-slate-400 text-base">
            We bridge the gap between creative visual artistry and hard-core industrial packaging print manufacturing.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-7 hover:border-red-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <span className="text-3xl font-black text-red-400 font-['Outfit']">
                    {item.stat}
                  </span>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {item.statLabel}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 font-['Outfit']">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Studio Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Office Highlight Banner */}
        <div className="mt-14 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-10 border border-red-400/30 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-red-100">
                Coimbatore Design Headquarters
              </div>
              <h4 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white">
                Visit Us on Diwan Bahadur Road, R.S. Puram
              </h4>
              <p className="text-red-100/90 text-xs sm:text-sm mt-1 max-w-xl">
                Inspect physical dielines, touch actual foil & matte paper stocks, review 3D rotogravure mockups, and consult directly with our creative team.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.mobile}`}
              className="px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-red-50 font-bold text-xs shadow-lg transition"
            >
              Call {COMPANY_INFO.mobile}
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-slate-950/40 hover:bg-slate-950/60 text-white font-bold text-xs border border-white/20 transition"
            >
              Get Directions & Hours
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
