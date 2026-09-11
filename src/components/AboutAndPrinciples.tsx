import React from 'react';
import { PRINCIPLES } from '../data/platformsData';
import { Sparkles, Compass, Shield, CheckCircle } from 'lucide-react';

export const AboutAndPrinciples: React.FC = () => {
  return (
    <section
      id="about-vision"
      className="py-24 bg-[#0A0C11] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About DigiSynq Narrative */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Foundational Mission</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Building the connective layer for cinema.
          </h2>

          <div className="mt-8 space-y-6 text-base sm:text-lg text-neutral-300 leading-relaxed text-left sm:text-center">
            <p>
              DigiSynq was created around a simple observation: cinema already contains enormous amounts of talent, infrastructure, content, knowledge and opportunity. Much of its value is lost because those resources remain fragmented.
            </p>
            <p className="text-[#E5A919] font-medium text-lg sm:text-xl">
              DigiSynq is building the network between those points.
            </p>
            <p>
              We believe the next generation of cinema infrastructure will not necessarily be defined by who owns the most physical assets, but by who can connect the ecosystem most intelligently.
            </p>
          </div>
        </div>

        {/* SECTION 40: 8 COMPANY PRINCIPLES */}
        <div className="rounded-2xl bg-[#0E1119] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A919] block mb-1">
              Guiding Directives
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Company Principles
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              The foundational convictions that guide our architecture, partnerships, and product design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINCIPLES.map((principle, idx) => (
              <div
                key={principle.name}
                className="p-5 rounded-xl bg-[#08090C] border border-white/5 hover:border-[#E5A919]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#E5A919]">
                      0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">
                    {principle.name}
                  </h4>

                  <p className="text-xs font-medium text-[#E5A919] mb-2 font-mono">
                    {principle.summary}
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {principle.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
