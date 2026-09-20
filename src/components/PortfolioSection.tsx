import React, { useState } from 'react';
import { ExternalLink, X, MapPin, Tag, Printer, Sparkles, Star, ChevronRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'packaging', label: 'Standup Pouches & Boxes' },
    { id: 'food', label: 'Food & Snacks' },
    { id: 'branding', label: 'Brand Identity & Logos' },
    { id: 'labels', label: 'Bottle & Jar Labels' },
    { id: 'web', label: 'Web Design' }
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100/70 px-3 py-1 rounded-full border border-red-200">
            Commercial Packaging Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight font-['Outfit']">
            Featured Packaging & Brand Creations
          </h2>
          <p className="text-slate-600 text-base">
            Click on any project to inspect the packaging dieline specs, printing methods, and client background.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {item.categoryLabel}
                </div>

                {/* Quick inspect button */}
                <div className="absolute bottom-3.5 right-3.5 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-md">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-red-600">{item.client}</span>
                    <span>{item.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors font-['Outfit'] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Print Specs Tag */}
                {item.printSpecs && (
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-50 p-2.5 rounded-lg">
                    <Printer className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{item.printSpecs}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox for detailed project inspection */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in">
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full bg-slate-900 shrink-0">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {selectedItem.categoryLabel}
                </div>
              </div>

              {/* Modal Details Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                    Client: {selectedItem.client} • {selectedItem.location}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-['Outfit']">
                    {selectedItem.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Print Dieline Specs Box */}
                {selectedItem.printSpecs && (
                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 space-y-1">
                    <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <Printer className="w-4 h-4 text-amber-700" />
                      <span>Converter & Print Production Specifications</span>
                    </div>
                    <p className="text-xs text-amber-800 font-mono">
                      {selectedItem.printSpecs}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3 text-slate-400" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">
                    Want a similar packaging structure for your brand?
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-600/30 transition"
                  >
                    Request Free Concept Estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
