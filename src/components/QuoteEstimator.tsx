import React, { useState } from 'react';
import { Calculator, Check, Clock, Sparkles, Send, PhoneCall } from 'lucide-react';
import { ESTIMATE_PACKAGES, COMPANY_INFO } from '../data/mockData';

export const QuoteEstimator: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(ESTIMATE_PACKAGES[0].id);
  const [include3D, setInclude3D] = useState<boolean>(true);
  const [includeExpress, setIncludeExpress] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [clientPhone, setClientPhone] = useState<string>('');

  const currentPkg = ESTIMATE_PACKAGES.find(p => p.id === selectedPackageId) || ESTIMATE_PACKAGES[0];

  const totalCalculated = currentPkg.basePrice + (include3D ? 2500 : 0) + (includeExpress ? 4000 : 0);
  const estimatedDays = includeExpress ? Math.max(3, currentPkg.deliveryDays - 2) : currentPkg.deliveryDays;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone) return;
    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight font-['Outfit']">
            Instant Project Estimator & Timeline
          </h2>
          <p className="text-slate-600 text-base">
            Select your design requirements to get an estimated studio timeline and ballpark budget for your packaging or branding project.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Package Options */}
            <div className="lg:col-span-7 space-y-4">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Select Design Scope:
              </label>

              <div className="space-y-3">
                {ESTIMATE_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      selectedPackageId === pkg.id
                        ? 'border-red-600 bg-red-50/50 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-900 font-['Outfit']">
                        {pkg.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Base Turnaround: ~{pkg.deliveryDays} business days
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-black text-slate-900">
                        ₹{pkg.basePrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add-ons */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Optional Add-ons:
                </label>

                <label className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={include3D}
                    onChange={(e) => setInclude3D(e.target.checked)}
                    className="w-4 h-4 text-red-600 rounded border-slate-300 focus:ring-red-500"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-bold text-slate-900 block">Photorealistic 3D Retail Mockup Pack (+₹2,500)</span>
                    <span className="text-slate-500">Includes 4K renders for e-commerce, Amazon, Blinkit & social media</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={includeExpress}
                    onChange={(e) => setIncludeExpress(e.target.checked)}
                    className="w-4 h-4 text-red-600 rounded border-slate-300 focus:ring-red-500"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-bold text-slate-900 block">Express Fast-Track Delivery (+₹4,000)</span>
                    <span className="text-slate-500">Priority design queue with 48-hour initial concept turnaround</span>
                  </div>
                </label>
              </div>

              {/* What's included in selected pkg */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Deliverables Included in this Tier:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {currentPkg.includedItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Calculation Summary Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
                  <span>Estimated Studio Budget</span>
                  <span className="text-red-400 font-bold">Indicative</span>
                </div>
                
                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
                    ₹{totalCalculated.toLocaleString()}*
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    <span>Estimated Completion: <strong>~{estimatedDays} Business Days</strong></span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex justify-between">
                  <span>Package Base:</span>
                  <span className="font-mono">₹{currentPkg.basePrice.toLocaleString()}</span>
                </div>
                {include3D && (
                  <div className="flex justify-between text-slate-400">
                    <span>3D Renders:</span>
                    <span className="font-mono">+₹2,500</span>
                  </div>
                )}
                {includeExpress && (
                  <div className="flex justify-between text-slate-400">
                    <span>Express Priority:</span>
                    <span className="font-mono">+₹4,000</span>
                  </div>
                )}
              </div>

              {/* Inquiry Action */}
              <div className="border-t border-slate-800 pt-4">
                {submitted ? (
                  <div className="p-4 bg-emerald-950/80 border border-emerald-800 rounded-xl text-center space-y-1">
                    <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                    <div className="text-xs font-bold text-emerald-300">Inquiry Received!</div>
                    <div className="text-[11px] text-emerald-400/80">
                      Our lead packaging designer will call you shortly at {clientPhone}.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <label className="block text-[11px] font-semibold text-slate-300">
                      Get this estimate sent to your phone:
                    </label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="Enter mobile number"
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-md shadow-red-600/30 transition flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Lock In Estimate & Request Callback</span>
                    </button>
                  </form>
                )}

                <div className="mt-4 pt-3 border-t border-slate-800 text-center">
                  <span className="text-[11px] text-slate-500 block mb-1">Prefer an immediate conversation?</span>
                  <a
                    href={`tel:${COMPANY_INFO.mobile}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Direct line: {COMPANY_INFO.mobile}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
