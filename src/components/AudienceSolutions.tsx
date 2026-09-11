import React, { useState } from 'react';
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
      className="py-24 bg-[#0A0C11] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Ecosystem Participants</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Built around everyone who <br />
            <span className="text-[#E5A919]">moves cinema forward.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            DigiSynq coordinates the fragmented commercial, technical, and artistic nodes of cinema into a unified high-velocity operating network.
          </p>
        </div>

        {/* Stakeholder Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-white/10">
          {AUDIENCE_SEGMENTS.map((segment) => {
            const isSelected = activeSegmentId === segment.id;
            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegmentId(segment.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-[#E5A919] text-black border-[#E5A919] shadow-lg shadow-[#E5A919]/20'
                    : 'bg-[#0E1119] text-neutral-400 hover:text-white border-white/10 hover:border-white/20'
                }`}
                id={`btn-audience-${segment.id}`}
              >
                {segment.title}
              </button>
            );
          })}
        </div>

        {/* Active Segment Feature Panel */}
        <div className="rounded-2xl bg-gradient-to-br from-[#121520] to-[#0A0C11] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5A919]">
                <span>Stakeholder Profile: {activeSegment.title}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeSegment.subtitle}
              </h3>

              <p className="text-base text-neutral-300 leading-relaxed">
                {activeSegment.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-xs sm:text-sm text-neutral-300">
                  <span className="font-mono uppercase tracking-wider text-red-400 block mb-1">
                    The Friction Today:
                  </span>
                  {activeSegment.painPoint}
                </div>

                <div className="p-4 rounded-xl bg-[#E5A919]/5 border border-[#E5A919]/20 text-xs sm:text-sm text-neutral-200">
                  <span className="font-mono uppercase tracking-wider text-[#E5A919] block mb-1">
                    The DigiSynq Network Solution:
                  </span>
                  {activeSegment.digiSynqSolution}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenJoinModal(activeSegment.title)}
                  className="inline-flex items-center gap-2 bg-[#E5A919] hover:bg-[#f5b82e] text-black font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-[#E5A919]/20"
                >
                  <span>Connect as {activeSegment.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-neutral-400">
                  {activeSegment.businessModelNote}
                </span>
              </div>
            </div>

            {/* Right Product Pairing Matrix */}
            <div className="lg:col-span-5 bg-[#08090C] rounded-xl border border-white/10 p-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Primary Network Hubs for {activeSegment.title}
              </span>

              <div className="space-y-2.5">
                {activeSegment.keyProducts.map((prod) => (
                  <div
                    key={prod}
                    className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-white font-mono">
                        {prod}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        Synchronized Module
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#E5A919]" />
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] text-neutral-400 font-mono leading-relaxed">
                All participant actions are secured by SynqTrust cryptographic badges and automated escrow milestones.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
