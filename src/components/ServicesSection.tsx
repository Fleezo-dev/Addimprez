import React from 'react';
import { Package, Box, Award, Wine, Layers, Globe, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package': return <Package className="w-6 h-6" />;
      case 'Box': return <Box className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Wine': return <Wine className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      default: return <Package className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Our Core Packaging Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight font-['Outfit']">
            Comprehensive Packaging & Design Solutions in Coimbatore
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every design we craft at Addimprez is engineered to pass print-line tolerances, comply with legal regulations, and attract buyers in split-second retail decisions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={service.id === 'fmcg-packaging' ? 'packaging' : undefined}
              className="relative group bg-white rounded-2xl p-7 border border-slate-200 hover:border-red-500/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {service.popularBadge && (
                <div className="absolute -top-3 right-6 bg-red-600 text-white text-[11px] font-extrabold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                  {service.popularBadge}
                </div>
              )}

              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-inner">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors font-['Outfit']">
                  {service.title}
                </h3>
                <div className="text-xs font-semibold text-red-600 mb-3">
                  {service.subtitle}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors"
                >
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black font-['Outfit']">
              Need a Custom Dieline or Special Finishing Proof?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              From gold foil block stamping, spot UV varnishes to custom pouch zip locks, we prepare precise dielines matching your converter's technical specs.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-600/30 transition"
            >
              Consult Our Packaging Engineer
            </a>
            <a
              href="tel:9566664663"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition"
            >
              Call 9566664663
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
