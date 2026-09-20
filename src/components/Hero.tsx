import React, { useState } from 'react';
import { ArrowRight, Phone, MessageCircle, CheckCircle2, Star, Sparkles, Eye, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

const FEATURED_SHOWCASES = [
  {
    title: 'Malabar Organics Spice Pouch',
    category: 'FMCG Standup Zipper Pouch',
    printTech: '8-Color Rotogravure + Matte Foil',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
    client: 'Malabar Organics • Coimbatore',
    tag: 'Retail Shelf Hit'
  },
  {
    title: 'RoastCraft Single Origin Cold Brew',
    category: 'Glass Bottle & Textured Label',
    printTech: 'Cast-Coated Textured Stock + Gold Foil',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    client: 'RoastCraft Co. • Nilgiris & Coimbatore',
    tag: 'Craft Beverage'
  },
  {
    title: 'CrunchBites Gourmet Namkeen',
    category: 'Nitrogen-Flushed Snack Pouch',
    printTech: 'Gloss Laminate + 3D Product Render',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=1000&q=80',
    client: 'CrunchBites Foods • Coimbatore',
    tag: 'Snack Packaging'
  },
  {
    title: 'VedaBotanica Ayurvedic Carton',
    category: 'Rigid Drawer Box & Dropper',
    printTech: 'Cyber XL Board + Botanical Deboss',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
    client: 'VedaBotanica Ayurveda • Chennai & Kovai',
    tag: 'Luxury Cosmetic'
  }
];

export const Hero: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const current = FEATURED_SHOWCASES[activeShowcase];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-red-50/50 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Prop & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-red-200 text-red-700 text-xs font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              PACKAGING DESIGN COMPANY IN COIMBATORE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-['Outfit']">
              Creative <span className="text-red-600">Packaging Graphics</span> & FMCG Brand Identity That Sells.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              We engineer retail shelf-standout standup pouches, spices packaging, snack bags, mono cartons, and memorable brand logos for over 1,000 businesses across Coimbatore, Tamil Nadu, and globally. 100% print-ready vector dielines calibrated for rotogravure cylinders and flexo printers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Packaging Works</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.mobile}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call {COMPANY_INFO.mobile}</span>
              </a>

              <a
                href={`https://wa.me/91${COMPANY_INFO.mobile}?text=Hello%20Addimprez,%20I%20want%20to%20know%20more%20about%20your%20packaging%20design%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Brief</span>
              </a>
            </div>

            {/* Trust Checklist */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Vector Dielines Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>FSSAI & Barcode Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>R.S. Puram Physical Studio</span>
              </div>
            </div>

            {/* Metrics Counter Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
                  {COMPANY_INFO.experienceYears}
                </div>
                <div className="text-xs font-medium text-slate-500">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
                  {COMPANY_INFO.projectsCompleted}
                </div>
                <div className="text-xs font-medium text-slate-500">Dielines Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
                  {COMPANY_INFO.happyClients}
                </div>
                <div className="text-xs font-medium text-slate-500">Global Brands</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-red-600 font-['Outfit']">
                  100%
                </div>
                <div className="text-xs font-medium text-slate-500">Print Precision</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Packaging Mockup Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 text-white relative">
              {/* Header of Mockup Card */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
                  <span className="text-xs font-semibold text-slate-400 ml-2">Packaging 3D Proof</span>
                </div>
                <span className="text-[11px] font-bold bg-red-600/20 text-red-400 border border-red-500/30 px-2.5 py-0.5 rounded-full">
                  {current.tag}
                </span>
              </div>

              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Overlay Details */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-700/60">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight font-['Outfit']">
                        {current.title}
                      </h4>
                      <p className="text-[11px] text-red-400 font-medium">{current.category}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-mono">Dieline Spec</span>
                      <span className="text-[11px] text-slate-200 font-semibold">{current.printTech}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnails to switch interactive view */}
              <div className="mt-4 pt-3 border-t border-slate-800">
                <div className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center justify-between">
                  <span>Switch Live Showcase Projects:</span>
                  <span className="text-red-400 text-[10px]">Click to inspect</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {FEATURED_SHOWCASES.map((item, idx) => (
                    <button
                      key={item.title}
                      onClick={() => setActiveShowcase(idx)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all p-0.5 text-left aspect-square ${
                        activeShowcase === idx
                          ? 'border-red-600 scale-105 shadow-md shadow-red-600/30'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Studio Callout Badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 max-w-xs z-10">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Coimbatore Physical Studio</div>
                <div className="text-[11px] text-slate-500">286, Diwan Bahadur Rd, R.S. Puram</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
