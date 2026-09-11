import React from 'react';
import { TRADITIONAL_VS_DIGISYNQ } from '../data/platformsData';
import { Scale, Check, X, ShieldAlert, Zap, TrendingUp } from 'lucide-react';

export const AssetLightSection: React.FC = () => {
  return (
    <section
      id="asset-light"
      className="py-24 sm:py-32 bg-[var(--bg-canvas)] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Architectural Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            We don't own the ecosystem. <br />
            <span className="text-[#E5A919]">We enable it.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            DigiSynq is intentionally asset-light. The value is created by connecting existing resources rather than accumulating physical assets.
          </p>

          <p className="mt-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
            Scale the network, not the balance sheet.
          </p>
        </div>

        {/* Two-Sided Visual Comparison Cards - Apple Compare Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Traditional Heavy Model */}
          <div className="rounded-3xl apple-card p-6 sm:p-9 relative">
            <div className="flex items-center justify-between pb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">
                  Legacy Paradigm
                </span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mt-1 tracking-tight">
                  Traditional Asset-Heavy Model
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-black/[0.05] dark:bg-white/[0.08] flex items-center justify-center">
                <X className="w-4 h-4 text-[var(--text-tertiary)]" />
              </div>
            </div>

            <div className="mt-6 space-y-3.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                Core mandate: <span className="text-[var(--text-primary)] font-bold">OWN</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                {['Theatres & brick-and-mortar real estate', 'Studios & heavy soundstages', 'Cameras, anamorphic lenses & grip trucks', 'Large physical production equipment & warehouses', 'Exclusive film & library balance-sheet inventory'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-tertiary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-black/[0.04] dark:border-white/[0.06] text-xs text-[var(--text-tertiary)] leading-relaxed font-mono">
              Result: Crushing depreciation, massive fixed overhead, low agility during market downturns.
            </div>
          </div>

          {/* DigiSynq Asset-Light Model */}
          <div className="rounded-3xl apple-card border-[#E5A919]/40 p-6 sm:p-9 relative shadow-lg">
            <div className="flex items-center justify-between pb-5 border-b border-[#E5A919]/25">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E5A919] font-semibold">
                  DigiSynq Network Model
                </span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mt-1 tracking-tight">
                  Asset-Light Cinema Infrastructure
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#E5A919] flex items-center justify-center shadow-sm">
                <Check className="w-4 h-4 text-black font-bold" />
              </div>
            </div>

            <div className="mt-6 space-y-3.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#E5A919]">
                Core mandate: <span className="text-[var(--text-primary)] font-bold">CONNECT</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                {['People (Verified cast, DPs, crew & department heads)', 'Assets (Idle cameras, stages & facilities peer-to-peer)', 'Projects (Packaging, script breakdowns & live stripboards)', 'Content (Territorial licensing, clean IP & screeners)', 'Audiences (Direct fan communities & crowdfunded screenings)', 'Opportunities (Partner-led financing & screen matching)'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                    <span className="font-medium text-[var(--text-primary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5A919]/25 text-xs text-[#E5A919] leading-relaxed font-mono font-medium">
              Result: Infinite software leverage, compounding data network effects, zero balance-sheet liability.
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table - Apple Tech Specs Aesthetic */}
        <div className="rounded-3xl apple-glass overflow-hidden shadow-sm">
          <div className="px-6 py-4 bg-black/[0.02] dark:bg-white/[0.03] border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">
              Strategic Vector Comparison
            </span>
            <span className="text-xs font-mono text-[#E5A919] font-medium">
              Network Density vs Fixed CapEx
            </span>
          </div>

          <div className="divide-y divide-black/[0.04] dark:divide-white/[0.05]">
            {TRADITIONAL_VS_DIGISYNQ.map((row) => (
              <div
                key={row.attribute}
                className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-black/[0.01] dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="md:col-span-3 text-sm font-bold text-[var(--text-primary)]">
                  {row.attribute}
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {row.traditional}
                </div>
                <div className="md:col-span-5 text-xs sm:text-sm text-[var(--text-primary)] font-medium pl-0 md:pl-4 border-l-0 md:border-l border-[#E5A919]/40">
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
