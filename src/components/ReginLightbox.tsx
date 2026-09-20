import React, { useEffect } from 'react';
import { PortfolioItemData, COMPANY_INFO } from '../data/portfolioItems';
import { X, ChevronLeft, ChevronRight, Eye, Heart, MessageCircle, Share2, Download } from 'lucide-react';

interface ReginLightboxProps {
  item: PortfolioItemData | null;
  items: PortfolioItemData[];
  onClose: () => void;
  onSelect: (item: PortfolioItemData) => void;
  likedIds: number[];
  onToggleLike: (id: number) => void;
}

export const ReginLightbox: React.FC<ReginLightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
  likedIds,
  onToggleLike
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : items[items.length - 1];
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : items[0];

  const handlePrev = () => {
    if (prevItem) onSelect(prevItem);
  };

  const handleNext = () => {
    if (nextItem) onSelect(nextItem);
  };

  const isLiked = likedIds.includes(item.id);
  const displayLikes = item.likes + (isLiked ? 1 : 0);

  const whatsappInquiryUrl = `https://wa.me/91${COMPANY_INFO.mobile}?text=${encodeURIComponent(
    `Hi ${COMPANY_INFO.brandName}! I am interested in your design work: "${item.title}". Please share details and pricing.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between overflow-y-auto font-sans animate-in fade-in duration-200">
      {/* Top Header Bar inside Lightbox */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 text-white px-4 sm:px-8 py-3 flex items-center justify-between gap-4 z-20">
        {/* Left: Project title & category */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xs font-bold uppercase tracking-wider bg-[#fe4101] text-white px-2.5 py-1 rounded">
            {item.categoryLabel}
          </span>
          <h2 className="text-sm sm:text-base font-bold truncate text-neutral-100">
            {item.title}
          </h2>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Views count */}
          <span className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 bg-neutral-800/80 px-3 py-1.5 rounded-full">
            <Eye className="w-3.5 h-3.5 text-neutral-300" />
            <span>{item.views} views</span>
          </span>

          {/* Like / Appreciate Button */}
          <button
            onClick={() => onToggleLike(item.id)}
            className={`flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all ${
              isLiked
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300'
            }`}
            title="Appreciate this design"
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-white' : 'text-neutral-400'}`} />
            <span>{displayLikes}</span>
          </button>

          {/* WhatsApp Direct Inquiry Button */}
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full transition-colors"
            title="Inquire about this design on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="hidden md:inline">Inquire on WhatsApp</span>
          </a>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image/Media Display Area */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-10 relative min-h-[60vh]">
        {/* Left Navigation Arrow (fixed floating button) */}
        <button
          onClick={handlePrev}
          className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-neutral-900/80 hover:bg-[#fe4101] text-white flex items-center justify-center border border-neutral-700/80 shadow-2xl transition-all hover:scale-110"
          title="Previous Design (Left Arrow)"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Right Navigation Arrow (fixed floating button) */}
        <button
          onClick={handleNext}
          className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-neutral-900/80 hover:bg-[#fe4101] text-white flex items-center justify-center border border-neutral-700/80 shadow-2xl transition-all hover:scale-110"
          title="Next Design (Right Arrow)"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Center Artwork Container */}
        <div className="max-w-4xl w-full flex flex-col items-center">
          {item.video ? (
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              poster={item.image}
              className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl border border-neutral-800"
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-neutral-800/80"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1000&auto=format&fit=crop&q=80`;
              }}
            />
          )}

          {/* Project Details Footer */}
          <div className="mt-6 w-full text-center text-neutral-400 text-xs sm:text-sm">
            <p className="font-semibold text-neutral-200">{item.title}</p>
            <p className="text-xs text-neutral-500 mt-1">
              Category: <span className="text-neutral-300 font-medium">{item.categoryLabel}</span> &bull; Agency:{' '}
              <span className="text-[#fe4101] font-semibold">{COMPANY_INFO.brandName}</span> ({COMPANY_INFO.address.split(',')[3] || 'Coimbatore'})
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Bar for quick thumb navigation */}
      <div className="bg-neutral-900/80 border-t border-neutral-800 px-4 py-2 text-center text-xs text-neutral-500">
        Use keyboard <kbd className="bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded text-[10px]">←</kbd> and{' '}
        <kbd className="bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded text-[10px]">→</kbd> arrows to navigate &bull;{' '}
        <kbd className="bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded text-[10px]">Esc</kbd> to close
      </div>
    </div>
  );
};
