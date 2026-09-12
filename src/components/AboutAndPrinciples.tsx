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

        {/* ── Co-Founders ─────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-white/20 text-white font-mono text-[10px] font-bold tracking-[2.5px] mb-4 backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
              Founding leadership.
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-denton-extrabold">
              Architects of the network.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed font-mono tracking-wide">
              The founding partners building the asset-light operating system for cinema.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Yathish',
                role: 'Co-Founder',
                focus: 'Network Architecture & Strategy',
                tag: '01',
                accent: '#5CE1E6',
                border: 'border-[#5CE1E6]/30 hover:border-[#5CE1E6]/60',
              },
              {
                name: 'Varun',
                role: 'Co-Founder',
                focus: 'Platform Engineering & Infrastructure',
                tag: '02',
                accent: '#8B7CFF',
                border: 'border-[#8B7CFF]/30 hover:border-[#8B7CFF]/60',
              },
              {
                name: 'Rakshith',
                role: 'Co-Founder',
                focus: 'Cinema Ecosystem & Industry Partnerships',
                tag: '03',
                accent: '#4D8DFF',
                border: 'border-[#4D8DFF]/30 hover:border-[#4D8DFF]/60',
              },
              {
                name: 'Rubesh',
                role: 'Co-Founder',
                focus: 'Operations & Market Expansion',
                tag: '04',
                accent: '#5EF2B0',
                border: 'border-[#5EF2B0]/30 hover:border-[#5EF2B0]/60',
              },
            ].map((founder) => (
              <motion.div
                key={founder.name}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 rounded-[22px] cred-card border ${founder.border} transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Ambient specular corner glow */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                  style={{ background: founder.accent }}
                />

                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-denton-extrabold text-lg text-white border border-white/20 bg-gradient-to-b from-white/15 to-white/5 shadow-inner"
                    style={{ borderTopColor: founder.accent }}
                  >
                    {founder.name.charAt(0)}
                  </div>
                  <span className="text-[10px] font-mono tracking-[2px] font-bold text-white/40">
                    {founder.tag}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight font-denton-bold mb-1">
                    {founder.name}
                  </h4>
                  <div
                    className="text-[11px] font-mono font-bold tracking-[2px] mb-2 uppercase"
                    style={{ color: founder.accent }}
                  >
                    {founder.role}
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    {founder.focus}
                  </p>
                </div>
              </motion.div>
            ))}
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
