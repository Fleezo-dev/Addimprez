import React, { useState, useRef, useEffect } from 'react';
import { CATEGORIES, COMPANY_INFO } from '../data/portfolioItems';
import { Search, ChevronDown, Check, Share2, Facebook, Mail, MessageCircle, Copy, Grid, Phone, MapPin, X } from 'lucide-react';

interface ReginHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  totalCount: number;
}

export const ReginHeader: React.FC<ReginHeaderProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  totalCount
}) => {
  const [isFollowOpen, setIsFollowOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  // Form states
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [contactName, setContactName] = useState('');
  const [contactMobile, setContactMobile] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isContactSent, setIsContactSent] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Close dropdowns on outside click
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsFollowOpen(false);
        setIsContactOpen(false);
        setIsCategoryOpen(false);
        setIsShareOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setSubscribeEmail('');
      setIsFollowOpen(false);
    }, 3500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactMobile) return;
    setIsContactSent(true);
    setTimeout(() => {
      setIsContactSent(false);
      setContactName('');
      setContactMobile('');
      setContactEmail('');
      setContactMessage('');
      setIsContactOpen(false);
    }, 3500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const currentCategoryLabel = CATEGORIES.find(c => c.slug === selectedCategory)?.label || 'Choose Category';

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md font-sans select-none" ref={headerRef}>
      {/* Top Header Bar (#hd-top) */}
      <div className="bg-[#1d1c22] text-white px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 border-b border-neutral-800">
        {/* Left: Brand Logo matching Regin.in layout */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedCategory('all');
              setSearchTerm('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            {/* Geometric brand mark logo */}
            <div className="w-8 h-8 bg-[#fe4101] rounded flex items-center justify-center font-black text-white text-lg tracking-tighter shadow-sm">
              Q
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase flex items-center">
                QUINS CRAFTO
                <span className="text-[#fe4101] ml-0.5 text-xs font-bold tracking-normal bg-[#fe4101]/10 px-1 py-0.5 rounded border border-[#fe4101]/30">
                  .IN
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Search Input with pill border */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product..."
              className="bg-white text-[#1d1c22] text-sm pl-4 pr-10 py-1.5 rounded-full w-56 lg:w-72 focus:outline-none focus:ring-2 focus:ring-[#fe4101] placeholder-neutral-400 font-normal transition-all"
            />
            <button
              type="button"
              className="absolute right-3 text-neutral-500 hover:text-[#fe4101] transition-colors"
              onClick={() => {}}
            >
              <Search className="w-4 h-4" />
            </button>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-8 text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct WhatsApp Chat Icon */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-emerald-400 p-1.5 rounded-full hover:bg-neutral-800 transition-colors"
            title="Chat on WhatsApp (+91 9566664663)"
          >
            <MessageCircle className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
          </a>

          {/* "Follow us" Pill with Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsFollowOpen(!isFollowOpen);
                setIsContactOpen(false);
                setIsCategoryOpen(false);
                setIsShareOpen(false);
              }}
              className={`text-xs sm:text-sm font-semibold px-4 sm:px-6 py-1.5 rounded-full transition-all ${
                isFollowOpen
                  ? 'bg-white text-[#fe4101] shadow-md'
                  : 'bg-[#fe4101] hover:bg-[#e03800] text-white'
              }`}
            >
              Follow us
            </button>

            {/* Newsletter Subscription Dropdown */}
            {isFollowOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white text-[#1d1c22] rounded-lg shadow-2xl p-5 border border-neutral-200 animate-in fade-in zoom-in-95 duration-150 z-50">
                {!isSubscribed ? (
                  <div>
                    <h4 className="text-base font-bold text-[#1d1c22]">Get our latest updates</h4>
                    <p className="text-xs text-neutral-600 mt-1">Want to be informed about our new packaging & brand updates?</p>
                    <p className="text-xs text-neutral-500">Just subscribe to our newsletter!</p>

                    <form onSubmit={handleSubscribe} className="mt-4">
                      <div className="flex rounded-md overflow-hidden border border-neutral-300 focus-within:border-[#fe4101] focus-within:ring-1 focus-within:ring-[#fe4101]">
                        <span className="bg-neutral-100 px-3 flex items-center text-neutral-500 border-r border-neutral-300">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          required
                          value={subscribeEmail}
                          onChange={(e) => setSubscribeEmail(e.target.value)}
                          placeholder="Your email address"
                          className="flex-1 px-3 py-2 text-xs text-neutral-800 focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="bg-[#fe4101] hover:bg-[#e03800] text-white px-4 py-2 text-xs font-semibold transition-colors"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Check className="w-6 h-6" />
                    </div>
                    <p className="text-base font-bold text-[#1d1c22]">Thank you..</p>
                    <p className="text-xs text-neutral-600 mt-1">Let's join hands together soon!</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* "Contact us" Pill with Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsContactOpen(!isContactOpen);
                setIsFollowOpen(false);
                setIsCategoryOpen(false);
                setIsShareOpen(false);
              }}
              className={`text-xs sm:text-sm font-semibold px-4 sm:px-6 py-1.5 rounded-full transition-all ${
                isContactOpen
                  ? 'bg-white text-[#fe4101] shadow-md'
                  : 'bg-[#fe4101] hover:bg-[#e03800] text-white'
              }`}
            >
              Contact us
            </button>

            {/* Contact Dropdown Popup with Addimprez Details */}
            {isContactOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 sm:w-[390px] max-h-[85vh] overflow-y-auto bg-white text-[#1d1c22] rounded-lg shadow-2xl p-5 border border-neutral-200 z-50 animate-in fade-in zoom-in-95 duration-150">
                {!isContactSent ? (
                  <div>
                    <h4 className="text-base font-bold text-[#1d1c22]">How can we help you?</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Please provide details regarding your design requirement.</p>

                    <form onSubmit={handleContactSubmit} className="mt-3 space-y-2.5">
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Name *"
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded focus:border-[#fe4101] focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        value={contactMobile}
                        onChange={(e) => setContactMobile(e.target.value)}
                        placeholder="Contact no *"
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded focus:border-[#fe4101] focus:outline-none"
                      />
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="Email (Optional)"
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded focus:border-[#fe4101] focus:outline-none"
                      />
                      <textarea
                        rows={3}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Message *"
                        required
                        className="w-full text-xs px-3 py-2 border border-neutral-300 rounded focus:border-[#fe4101] focus:outline-none resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#fe4101] hover:bg-[#e03800] text-white py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Send Message
                      </button>
                    </form>

                    {/* Direct Contact info matching User requirement */}
                    <div className="mt-4 pt-3 border-t border-neutral-200">
                      <h5 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Call / Whatsapp</h5>
                      <p className="text-sm font-semibold text-[#1d1c22] mt-1">{COMPANY_INFO.brandName}</p>
                      <a
                        href={`tel:${COMPANY_INFO.mobile}`}
                        className="text-xs font-bold text-[#fe4101] hover:underline flex items-center gap-1.5 mt-0.5"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        +91 {COMPANY_INFO.mobile}
                      </a>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-xs text-neutral-600 hover:text-[#fe4101] flex items-center gap-1.5 mt-1"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        {COMPANY_INFO.email}
                      </a>

                      <div className="mt-2.5 p-2 bg-neutral-50 rounded border border-neutral-200 flex items-start gap-1.5 text-[11px] text-neutral-600 leading-tight">
                        <MapPin className="w-3.5 h-3.5 text-[#fe4101] shrink-0 mt-0.5" />
                        <span>{COMPANY_INFO.address}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Check className="w-7 h-7" />
                    </div>
                    <p className="text-lg font-bold text-[#1d1c22]">Thank you..</p>
                    <p className="text-xs text-neutral-600 mt-1">Will contact you soon at +91 {COMPANY_INFO.mobile}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Category Grid Icon */}
          <div className="relative">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsFollowOpen(false);
                setIsContactOpen(false);
                setIsShareOpen(false);
              }}
              className="p-1.5 rounded text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              title="All Design Categories"
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Sub Header Bar (#hd-bot) */}
      <div className="bg-[#f2f2f2] border-b border-[#ebebeb] px-3 sm:px-6 py-1.5 flex items-center justify-between gap-3 text-xs text-[#1d1c22]">
        {/* Left: "Choose Category" dropdown + Category quick chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {/* Main Category Dropdown Pill */}
          <div className="relative shrink-0">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsFollowOpen(false);
                setIsContactOpen(false);
                setIsShareOpen(false);
              }}
              className="bg-[#1d1c22] hover:bg-neutral-800 text-white font-medium px-3.5 py-1.5 rounded-full flex items-center gap-2 transition-colors cursor-pointer shadow-sm text-xs"
            >
              <span>{currentCategoryLabel}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Category Dropdown List */}
            {isCategoryOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 max-h-80 overflow-y-auto bg-white rounded-lg shadow-xl border border-neutral-200 py-1.5 z-50 text-xs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setIsCategoryOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 flex items-center justify-between hover:bg-neutral-100 transition-colors ${
                      selectedCategory === cat.slug ? 'font-bold text-[#fe4101] bg-[#fe4101]/5' : 'text-neutral-700'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {selectedCategory === cat.slug && <Check className="w-3.5 h-3.5 text-[#fe4101]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Category Pills */}
          <div className="hidden lg:flex items-center gap-1.5 shrink-0">
            {CATEGORIES.slice(1, 7).map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-[#fe4101] text-white shadow-xs'
                    : 'bg-white hover:bg-neutral-200 text-neutral-700 border border-neutral-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Item Count + Share options */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-neutral-600 font-medium whitespace-nowrap text-[11px] sm:text-xs">
            Showing <strong className="text-[#1d1c22] font-bold">{totalCount}</strong> items
          </span>

          <div className="hidden sm:block h-4 w-px bg-neutral-300" />

          {/* Share Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsShareOpen(!isShareOpen);
                setIsFollowOpen(false);
                setIsContactOpen(false);
                setIsCategoryOpen(false);
              }}
              className="flex items-center gap-1.5 text-neutral-700 hover:text-[#fe4101] font-medium transition-colors text-[11px] sm:text-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share this page</span>
            </button>

            {isShareOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-neutral-200 p-2 z-50 text-xs">
                <a
                  href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-blue-50 text-blue-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Check out Quins Crafto packaging & branding designs: ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-emerald-50 text-emerald-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`mailto:?subject=Quins Crafto Packaging Portfolio&body=${encodeURIComponent(window.location.href)}`}
                  className="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-neutral-100 text-neutral-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded hover:bg-neutral-100 text-neutral-700 transition-colors text-left"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
