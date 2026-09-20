import React from 'react';
import { PortfolioItemData } from '../data/portfolioItems';
import { resolveAssetUrl } from '../utils/assets';
import { Eye, Heart, Video } from 'lucide-react';

interface ReginMasonryProps {
  items: PortfolioItemData[];
  onSelectItem: (item: PortfolioItemData) => void;
  likedIds: number[];
  onToggleLike: (id: number, e: React.MouseEvent) => void;
}

export const ReginMasonry: React.FC<ReginMasonryProps> = ({
  items,
  onSelectItem,
  likedIds,
  onToggleLike
}) => {
  if (items.length === 0) {
    return (
      <div className="py-28 text-center text-neutral-500">
        <p className="text-lg font-medium">No items found matching your filter or search.</p>
        <p className="text-xs mt-1 text-neutral-400">Try choosing a different category or clearing your search term.</p>
      </div>
    );
  }

  return (
    <div className="w-full px-2 sm:px-3 py-3">
      {/* Responsive Grid matching regin.in 8-column layout on large viewports */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2.5 sm:gap-3">
        {items.map((item) => {
          const isLiked = likedIds.includes(item.id);
          const displayLikes = item.likes + (isLiked ? 1 : 0);

          return (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative block rounded-md overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none"
            >
              {/* Media container */}
              <div className="relative w-full overflow-hidden bg-neutral-50">
                <img
                  src={resolveAssetUrl(item.image)}
                  alt={item.title}
                  title={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Prevent broken image loop
                    (e.target as HTMLImageElement).onerror = null;
                  }}
                />

                {/* Video indicator badge if item has video */}
                {item.video && (
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white p-1 rounded-full pointer-events-none">
                    <Video className="w-3 h-3 text-[#fe4101]" />
                  </div>
                )}
              </div>

              {/* Hover Overlay matching .hover in regin.in */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-2.5 pt-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end">
                <div className="flex items-end justify-between gap-1.5">
                  {/* Left: Product Title */}
                  <span className="text-[11px] font-semibold leading-tight line-clamp-2 drop-shadow-sm text-neutral-100">
                    {item.title}
                  </span>

                  {/* Right: Views & Likes metrics */}
                  <div className="flex items-center gap-2 shrink-0 text-[10px] text-neutral-300">
                    {/* View Count */}
                    <span className="flex items-center gap-0.5" title={`${item.views} views`}>
                      <Eye className="w-3 h-3 text-neutral-400" />
                      <span>{item.views}</span>
                    </span>

                    {/* Like Count / Button */}
                    <button
                      onClick={(e) => onToggleLike(item.id, e)}
                      className={`flex items-center gap-0.5 hover:text-rose-400 transition-colors ${
                        isLiked ? 'text-rose-500 font-bold' : 'text-neutral-400'
                      }`}
                      title="Appreciate this design"
                    >
                      <Heart className={`w-3 h-3 ${isLiked ? 'fill-current text-rose-500' : ''}`} />
                      <span>{displayLikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
