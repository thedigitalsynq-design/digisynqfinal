import React from 'react';
import { TRADITIONAL_VS_DIGISYNQ } from '../data/platformsData';
import { Scale, Check, X, ShieldAlert, Zap, TrendingUp } from 'lucide-react';

export const AssetLightSection: React.FC = () => {
  return (
    <section
      id="asset-light"
      className="py-24 bg-[#08090C] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Architectural Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            We don't own the ecosystem. <br />
            <span className="text-[#E5A919]">We enable it.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            DigiSynq is intentionally asset-light. The value is created by connecting existing resources rather than accumulating physical assets.
          </p>

          <p className="mt-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-400">
            Scale the network, not the balance sheet.
          </p>
        </div>

        {/* Two-Sided Visual Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Traditional Heavy Model */}
          <div className="rounded-2xl bg-[#0D0F16] border border-white/10 p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Legacy Paradigm
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Traditional Asset-Heavy Model
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                <X className="w-4 h-4 text-neutral-400" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Core mandate: <span className="text-white font-bold">OWN</span>
              </div>
              <ul className="space-y-2.5 text-sm text-neutral-300">
                {['Theatres & brick-and-mortar real estate', 'Studios & heavy soundstages', 'Cameras, anamorphic lenses & grip trucks', 'Large physical production equipment & warehouses', 'Exclusive film & library balance-sheet inventory'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-neutral-400 leading-relaxed font-mono">
              Result: Crushing depreciation, massive fixed overhead, low agility during market downturns.
            </div>
          </div>

          {/* DigiSynq Asset-Light Model */}
          <div className="rounded-2xl bg-gradient-to-b from-[#141824] to-[#0D1017] border border-[#E5A919]/40 p-6 sm:p-8 relative shadow-xl shadow-[#E5A919]/5">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5A919]/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E5A919]">
                  DigiSynq Network Model
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Asset-Light Cinema Infrastructure
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#E5A919] flex items-center justify-center">
                <Check className="w-4 h-4 text-black font-bold" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#E5A919]">
                Core mandate: <span className="text-white font-bold">CONNECT</span>
              </div>
              <ul className="space-y-2.5 text-sm text-neutral-200">
                {['People (Verified cast, DPs, crew & department heads)', 'Assets (Idle cameras, stages & facilities peer-to-peer)', 'Projects (Packaging, script breakdowns & live stripboards)', 'Content (Territorial licensing, clean IP & screeners)', 'Audiences (Direct fan communities & crowdfunded screenings)', 'Opportunities (Partner-led financing & screen matching)'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                    <span className="font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5A919]/20 text-xs text-[#E5A919] leading-relaxed font-mono">
              Result: Infinite software leverage, compounding data network effects, zero balance-sheet liability.
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="rounded-2xl bg-[#0D0F16] border border-white/10 overflow-hidden">
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Strategic Vector Comparison
            </span>
            <span className="text-xs font-mono text-[#E5A919]">
              Network Density vs Fixed CapEx
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {TRADITIONAL_VS_DIGISYNQ.map((row) => (
              <div
                key={row.attribute}
                className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-white/[0.01] transition-colors"
              >
                <div className="md:col-span-3 text-sm font-bold text-white">
                  {row.attribute}
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-neutral-400">
                  {row.traditional}
                </div>
                <div className="md:col-span-5 text-xs sm:text-sm text-[#EDEDED] font-medium pl-0 md:pl-4 border-l-0 md:border-l border-[#E5A919]/30">
                  {row.digisynq}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
