import React from 'react';
import { motion } from 'motion/react';
import { PRINCIPLES } from '../data/platformsData';
import { Sparkles, Compass, Shield, CheckCircle } from 'lucide-react';

export const AboutAndPrinciples: React.FC = () => {
  return (
    <section
      id="about-vision"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#5CE1E6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#8B7CFF]/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About DigiSynq Narrative */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/80 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Foundational mission.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            Building the connective layer.<br />
            <span className="text-white/75">For cinema.</span>
          </h2>

          <div className="mt-8 space-y-6 text-base sm:text-lg text-white/70 leading-relaxed text-left sm:text-center">
            <p>
              DigiSynq was created around a simple observation: cinema already contains enormous amounts of talent, infrastructure, content, knowledge and opportunity. Much of its value is lost because those resources remain fragmented.
            </p>
            <p className="text-[#5CE1E6] font-semibold text-lg sm:text-xl">
              DigiSynq is building the network between those points.
            </p>
            <p>
              We believe the next generation of cinema infrastructure will not necessarily be defined by who owns the most physical assets, but by who can connect the ecosystem most intelligently.
            </p>
          </div>
        </div>

        {/* 8 Company principles */}
        <div className="rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-10 lg:p-12 shadow-2xl relative backdrop-blur-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono tracking-widest text-[#5CE1E6] block mb-1 font-semibold">
              Guiding Directives
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-denton-extrabold">
              Where innovation meets aesthetics.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
              The foundational convictions that guide our architecture, partnerships, and product design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINCIPLES.map((principle, idx) => {
              // Restrained 4-accent palette: Cyan, Violet, Aurora, Mint
              const tints = [
                { border: 'border-[#5CE1E6]/30 hover:border-[#5CE1E6]/60', tag: 'text-[#5CE1E6]', dot: 'bg-[#5CE1E6]' },
                { border: 'border-[#8B7CFF]/30 hover:border-[#8B7CFF]/60', tag: 'text-[#8B7CFF]', dot: 'bg-[#8B7CFF]' },
                { border: 'border-[#4D8DFF]/30 hover:border-[#4D8DFF]/60', tag: 'text-[#4D8DFF]', dot: 'bg-[#4D8DFF]' },
                { border: 'border-[#5EF2B0]/30 hover:border-[#5EF2B0]/60', tag: 'text-[#5EF2B0]', dot: 'bg-[#5EF2B0]' },
              ];
              const tint = tints[idx % tints.length];

              return (
                <motion.div
                  key={principle.name}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`p-5 sm:p-6 rounded-2xl backdrop-blur-xl bg-[#070A12]/80 border ${tint.border} transition-all duration-200 flex flex-col justify-between shadow-lg`}
                  style={{ boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.6)' }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className={`text-xs font-mono font-bold ${tint.tag}`}>
                        0{idx + 1}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${tint.dot} shadow-[0_0_8px_currentColor]`} />
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 tracking-tight">
                      {principle.name}
                    </h4>

                    <p className={`text-xs font-semibold mb-2.5 font-mono ${tint.tag}`}>
                      {principle.summary}
                    </p>

                    <p className="text-xs text-white/70 leading-relaxed">
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
