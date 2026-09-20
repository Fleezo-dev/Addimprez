import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItemData, COMPANY_INFO } from './data/portfolioItems';
import { ReginHeader } from './components/ReginHeader';
import { ReginMasonry } from './components/ReginMasonry';
import { ReginLightbox } from './components/ReginLightbox';
import { ReginFooter } from './components/ReginFooter';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItemData | null>(null);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  // Filter items by category and search term
  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        !searchTerm.trim() ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        item.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleToggleLike = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f8] text-[#1d1c22] font-sans antialiased">
      {/* Regin.in Replica Header (Two-tier bar: #hd-top and #hd-bot) */}
      <ReginHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalCount={filteredItems.length}
      />

      {/* Main Content Area (#main-wrp) with responsive 8-column masonry cards */}
      <main className="flex-1 mt-[92px] sm:mt-[98px]">
        <ReginMasonry
          items={filteredItems}
          onSelectItem={(item) => setSelectedItem(item)}
          likedIds={likedIds}
          onToggleLike={handleToggleLike}
        />
      </main>

      {/* Regin.in Replica Footer */}
      <ReginFooter />

      {/* Fullscreen Detail Lightbox Modal (.enlarge-wrp with prev/next arrows) */}
      <ReginLightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
        likedIds={likedIds}
        onToggleLike={(id) => handleToggleLike(id)}
      />

      {/* Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-700 hover:text-[#fe4101] shadow-lg border border-neutral-200 flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-full text-xs font-bold shadow-xl transition-all hover:scale-105"
          title={`Chat on WhatsApp (+91 ${COMPANY_INFO.mobile})`}
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.mobile}`}
          className="flex items-center gap-1.5 bg-[#fe4101] hover:bg-[#e03800] text-white px-3.5 py-2 rounded-full text-xs font-bold shadow-xl transition-all hover:scale-105"
          title={`Call +91 ${COMPANY_INFO.mobile}`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Call {COMPANY_INFO.mobile}</span>
        </a>
      </div>
    </div>
  );
}
