import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AUDIENCE_SEGMENTS } from '../data/platformsData';
import { AudienceSegment } from '../types';
import { Users, CheckCircle2, ArrowRight, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface AudienceSolutionsProps {
  onOpenJoinModal: (role: string) => void;
}

export const AudienceSolutions: React.FC<AudienceSolutionsProps> = ({ onOpenJoinModal }) => {
  const [activeSegmentId, setActiveSegmentId] = useState<string>(AUDIENCE_SEGMENTS[0].id);

  const activeSegment =
    AUDIENCE_SEGMENTS.find((s) => s.id === activeSegmentId) || AUDIENCE_SEGMENTS[0];

  return (
    <section
      id="audience-solutions"
      className="py-24 sm:py-32 bg-[var(--bg-canvas-subtle)] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Ecosystem Participants</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            Built around everyone who <br />
            <span className="text-[#E5A919]">moves cinema forward.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            DigiSynq coordinates the fragmented commercial, technical, and artistic nodes of cinema into a unified high-velocity operating network.
          </p>
        </div>

        {/* Stakeholder Category Tabs - Apple Segmented Pill Track */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {AUDIENCE_SEGMENTS.map((segment) => {
            const isSelected = activeSegmentId === segment.id;
            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegmentId(segment.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#E5A919] text-black border-[#E5A919] shadow-sm font-bold'
                    : 'apple-glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                id={`btn-audience-${segment.id}`}
              >
                {segment.title}
              </button>
            );
          })}
        </div>

        {/* Active Segment Feature Panel - Apple Squircle Showcase with Smooth Crossfade */}
        <div className="rounded-3xl apple-card p-6 sm:p-10 lg:p-12 shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >
              {/* Left Description */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5A919] font-semibold">
                  <span>Stakeholder Profile: {activeSegment.title}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  {activeSegment.subtitle}
                </h3>

                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {activeSegment.description}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-red-500/10 dark:bg-red-950/20 border border-red-500/20 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <span className="font-mono uppercase tracking-wider text-red-500 dark:text-red-400 block mb-1 font-semibold">
                      The Friction Today:
                    </span>
                    {activeSegment.painPoint}
                  </div>

                  <div className="p-4 rounded-2xl bg-[#E5A919]/10 border border-[#E5A919]/25 text-xs sm:text-sm text-[var(--text-primary)]">
                    <span className="font-mono uppercase tracking-wider text-[#E5A919] block mb-1 font-semibold">
                      The DigiSynq Network Solution:
                    </span>
                    {activeSegment.digiSynqSolution}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenJoinModal(activeSegment.title)}
                    className="apple-btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold"
                  >
                    <span>Connect as {activeSegment.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-[var(--text-tertiary)] font-medium">
                    {activeSegment.businessModelNote}
                  </span>
                </div>
              </div>

              {/* Right Product Pairing Matrix */}
              <div className="lg:col-span-5 apple-glass rounded-2xl p-6 sm:p-7 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] block font-semibold">
                  Primary Network Hubs for {activeSegment.title}
                </span>

                <div className="space-y-2.5">
                  {activeSegment.keyProducts.map((prod) => (
                    <div
                      key={prod}
                      className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-bold text-[var(--text-primary)] font-mono">
                          {prod}
                        </div>
                        <div className="text-[11px] text-[var(--text-tertiary)]">
                          Synchronized Module
                        </div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#E5A919]" />
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] text-[11px] text-[var(--text-tertiary)] font-mono leading-relaxed">
                  All participant actions are secured by SynqTrust cryptographic badges and automated escrow milestones.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
