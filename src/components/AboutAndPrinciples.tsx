import React from 'react';
import { motion } from 'motion/react';
import { PRINCIPLES } from '../data/platformsData';
import { Sparkles, Compass, Shield, CheckCircle } from 'lucide-react';

export const AboutAndPrinciples: React.FC = () => {
  return (
    <section
      id="about-vision"
      className="py-24 sm:py-32 bg-[var(--bg-canvas-subtle)] border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About DigiSynq Narrative */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="ds-section-label mb-5">
            <Compass className="w-3.5 h-3.5" />
            Foundational Mission
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            Building the connective layer for cinema.
          </h2>

          <div className="mt-8 space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed text-left sm:text-center">
            <p>
              DigiSynq was created around a simple observation: cinema already contains enormous amounts of talent, infrastructure, content, knowledge and opportunity. Much of its value is lost because those resources remain fragmented.
            </p>
            <p className="text-[#E5A919] font-semibold text-lg sm:text-xl">
              DigiSynq is building the network between those points.
            </p>
            <p>
              We believe the next generation of cinema infrastructure will not necessarily be defined by who owns the most physical assets, but by who can connect the ecosystem most intelligently.
            </p>
          </div>
        </div>

        {/* SECTION 40: 8 COMPANY PRINCIPLES - Inspired by Reference Style */}
        <div className="rounded-3xl ds-card p-6 sm:p-10 lg:p-12 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A919] block mb-1 font-semibold">
              Guiding Directives
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Where innovation meets aesthetics.
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
              The foundational convictions that guide our architecture, partnerships, and product design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINCIPLES.map((principle, idx) => {
              const tints = [
                { bg: 'bg-purple-50/70', border: 'border-purple-200/70', tag: 'text-purple-700', dot: 'bg-purple-500' },
                { bg: 'bg-rose-50/70', border: 'border-rose-200/70', tag: 'text-rose-700', dot: 'bg-rose-500' },
                { bg: 'bg-sky-50/70', border: 'border-sky-200/70', tag: 'text-sky-700', dot: 'bg-sky-500' },
                { bg: 'bg-amber-50/70', border: 'border-amber-200/70', tag: 'text-amber-700', dot: 'bg-amber-500' },
                { bg: 'bg-emerald-50/70', border: 'border-emerald-200/70', tag: 'text-emerald-700', dot: 'bg-emerald-500' },
                { bg: 'bg-indigo-50/70', border: 'border-indigo-200/70', tag: 'text-indigo-700', dot: 'bg-indigo-500' },
                { bg: 'bg-orange-50/70', border: 'border-orange-200/70', tag: 'text-orange-700', dot: 'bg-orange-500' },
                { bg: 'bg-teal-50/70', border: 'border-teal-200/70', tag: 'text-teal-700', dot: 'bg-teal-500' },
              ];
              const tint = tints[idx % tints.length];

              return (
                <motion.div
                  key={principle.name}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`p-5 sm:p-6 rounded-2xl ${tint.bg} border ${tint.border} transition-all duration-200 flex flex-col justify-between shadow-xs`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className={`text-xs font-mono font-bold ${tint.tag}`}>
                        0{idx + 1}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${tint.dot}`} />
                    </div>

                    <h4 className="text-base font-bold text-[var(--text-primary)] mb-1 tracking-tight">
                      {principle.name}
                    </h4>

                    <p className={`text-xs font-semibold mb-2.5 font-mono ${tint.tag}`}>
                      {principle.summary}
                    </p>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {principle.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
