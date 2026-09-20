import React from 'react';
import { Search, PenTool, Cpu, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/mockData';

export const ProcessSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      default: return <PenTool className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            How We Deliver Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight font-['Outfit']">
            Our 4-Step Packaging & Design Workflow
          </h2>
          <p className="text-slate-600 text-base">
            A battle-tested methodology honed over 16+ years, taking your product from abstract retail concept to flawless physical dielines.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-red-500/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-slate-300 font-['Outfit']">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                    {getIcon(step.icon)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-['Outfit']">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-bold text-red-600 uppercase tracking-wider">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
