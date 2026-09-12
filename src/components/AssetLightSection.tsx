import React from 'react';
import { TRADITIONAL_VS_DIGISYNQ } from '../data/platformsData';
import { Check, X } from 'lucide-react';

export const AssetLightSection: React.FC = () => {
  return (
    <section
      id="asset-light"
      className="py-28 sm:py-36 bg-[#070A12] border-t border-white/10 relative overflow-hidden"
    >
      <div className="cred-hairline absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#070A12] border border-white/25 text-white/90 font-mono text-[11px] font-bold tracking-[3px] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFF]" />
            Architectural philosophy.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            We don't own the assets.<br />
            <span className="text-white/75">We synq them.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Rather than owning the assets that power entertainment, DigiSynq synchronizes them — reducing friction, leakage and risk while improving the utilization of existing ecosystem capacity.
          </p>

          <p className="mt-4 text-xs sm:text-sm font-mono tracking-[3px] text-[#5CE1E6] font-semibold">
            Own less. Connect more. Make the ecosystem work better together.
          </p>
        </div>

        {/* Two-Sided Visual Comparison Cards - CRED Ledger */}
        <div className="relative mb-16">
          {/* 3D Glassmorphic Depth Spheres */}
          <div className="glass-sphere sphere-navy w-60 h-60 -top-16 -left-14 animate-float-slow opacity-85" />
          <div className="glass-sphere sphere-violet w-52 h-52 -bottom-16 right-1/4 animate-float-reverse opacity-80" />
          <div className="glass-sphere sphere-aurora w-36 h-36 top-1/4 -right-10 opacity-75" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
          {/* Traditional Heavy Model */}
          <div className="rounded-xl cred-card p-6 sm:p-9 border-white/10">
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
              <div>
                <span className="text-[11px] font-mono tracking-[2.5px] text-[#FFC857] font-bold">
                  Legacy paradigm.
                </span>
                <h3 className="text-xl font-bold text-white mt-1 tracking-tight font-display">
                  Traditional Asset-Heavy Model
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#FFC857]/15 border border-[#FFC857]/30 flex items-center justify-center">
                <X className="w-4 h-4 text-[#FFC857]" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="text-xs font-mono tracking-[2px] text-white/60">
                Core mandate: <span className="text-white font-bold">Own</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/60">
                {['Theatres & brick-and-mortar real estate', 'Studios & heavy soundstages', 'Cameras, anamorphic lenses & grip trucks', 'Large physical production equipment & warehouses', 'Exclusive film & library balance-sheet inventory'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] text-xs text-[#FFC857]/80 leading-relaxed font-mono tracking-[1px]">
              Result: Crushing depreciation, massive fixed overhead, low agility during market downturns.
            </div>
          </div>

          <div className="relative">
            <div className="obsidian-sphere sphere-obsidian-hero w-56 h-56 -top-12 -right-8 opacity-90 animate-float-slow" />
            <div className="obsidian-sphere sphere-obsidian w-44 h-44 -bottom-10 -left-6 opacity-85 animate-float-reverse" />
            <div className="glass-micro-bubble w-7 h-7 top-1/2 -right-4 opacity-80" />

            <div className="rounded-[20px] cred-card border-white/20 p-6 sm:p-9 shadow-2xl relative z-10">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1220]/90 border border-[#5EF2B0]/30 text-[#5EF2B0] font-mono text-[10px] font-bold tracking-[2px] backdrop-blur-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5EF2B0] shadow-[0_0_8px_#5EF2B0]" />
                  Preferred architecture.
                </div>
              </div>

            <div className="flex items-center justify-between pb-5 border-b border-white/15">
              <div>
                <span className="text-[11px] font-mono tracking-[2.5px] text-[#5CE1E6] font-bold">
                  DigiSynq network model.
                </span>
                <h3 className="text-xl font-bold text-white mt-1 tracking-tight font-display">
                  Asset-Light Cinema Infrastructure
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#5EF2B0] flex items-center justify-center shadow-[0_0_15px_rgba(94,242,176,0.5)]">
                <Check className="w-4 h-4 text-[#070A12] font-bold" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="text-xs font-mono tracking-[2px] text-white/80">
                Core mandate: <span className="text-white font-bold">Connect</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/80">
                {['People (Verified cast, DPs, crew & department heads)', 'Assets (Idle cameras, stages & facilities peer-to-peer)', 'Projects (Packaging, script breakdowns & live stripboards)', 'Content (Territorial licensing, clean IP & screeners)', 'Audiences (Direct fan communities & crowdfunded screenings)', 'Opportunities (Partner-led financing & screen matching)'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_6px_#5CE1E6]" />
                    <span className="font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15 text-xs text-[#5EF2B0] leading-relaxed font-mono font-medium tracking-[1px]">
              RESULT: Infinite software leverage, compounding data network effects, zero balance-sheet liability.
            </div>
          </div>
        </div>
        </div>
        </div>

        {/* Detailed 6-Dimensional Comparison Grid */}
        <div className="rounded-xl cred-card overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-base font-bold text-white tracking-tight font-display">
              Dimensional Architectural Comparison
            </h3>
            <span className="text-[11px] font-mono tracking-[2px] text-white/50">
              6 core vectors
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/[0.04] text-white/75 font-mono text-[11px] tracking-[1.5px] border-b border-white/10">
                <tr>
                  <th className="py-4 px-6 font-semibold">Dimension</th>
                  <th className="py-4 px-6 font-semibold text-white/75">Traditional Model</th>
                  <th className="py-4 px-6 font-semibold text-white">DigiSynq Network</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-white/70">
                {TRADITIONAL_VS_DIGISYNQ.map((row) => (
                  <tr key={row.attribute} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white font-mono text-xs tracking-wide">
                      {row.attribute}
                    </td>
                    <td className="py-4 px-6 text-white/75">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-6 text-white font-medium">
                      {row.digisynq}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
