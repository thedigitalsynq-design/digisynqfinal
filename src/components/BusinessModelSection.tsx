import React from 'react';
import { DollarSign, Layers, Cpu, Coins, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BusinessModelSectionProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const BusinessModelSection: React.FC<BusinessModelSectionProps> = ({ onOpenRunbook }) => {
  const primaryVectors = [
    {
      name: 'Marketplace Commissions',
      rate: '2.5% – 7.5%',
      badge: 'Liquidity Take-Rate',
      icon: Coins,
      accent: '#5CE1E6',
      description: 'Low-friction transaction fees on completed gear rentals, soundstage calendar bookings, verified crew hires, and territorial license trades.'
    },
    {
      name: 'SaaS Platform Tiering',
      rate: '$49 – $1,200 / mo',
      badge: 'Recurring Software',
      icon: Layers,
      accent: '#8B7CFF',
      description: 'Predictable monthly and annual recurring subscriptions for creators, line producers, distributors, and studios utilizing workflow and breakdown engines.'
    },
    {
      name: 'Fintech & Escrow Clearing',
      rate: '0.75% + Float Yield',
      badge: 'Treasury Rails',
      icon: DollarSign,
      accent: '#4D8DFF',
      description: 'Transaction fees plus short-term yield generated on multi-million dollar production escrow reserves held in partner FDIC-insured banking vaults.'
    },
    {
      name: 'Enterprise & API Licensing',
      rate: '$25k – $150k / yr',
      badge: 'Infrastructure SLAs',
      icon: Cpu,
      accent: '#5EF2B0',
      description: 'Custom white-label software licenses and high-throughput API endpoints for major studios, national film funds, and global streaming platforms.'
    }
  ];

  return (
    <section
      id="business-model"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden text-left"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#5CE1E6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#8B7CFF]/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/80 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Economic architecture.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            Value without ownership.<br />
            <span className="text-white/75">Four high-margin revenue vectors.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-sans">
            DigiSynq monetizes transaction velocity, workflow software, and financial clearing with zero physical balance-sheet depreciation.
          </p>
        </div>

        {/* 4 Crisp Monetization Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {primaryVectors.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.name}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#0D1220]/90 border border-white/[0.14] hover:border-[#5CE1E6]/50 flex flex-col justify-between backdrop-blur-2xl shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Subtle corner aura */}
                <div
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-15 pointer-events-none group-hover:opacity-40 transition-opacity"
                  style={{ background: v.accent }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/20 bg-white/[0.05]"
                      style={{ color: v.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="text-xs font-mono font-extrabold tracking-wider px-2 py-0.5 rounded bg-white/10 border border-white/15"
                      style={{ color: v.accent }}
                    >
                      {v.rate}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-extrabold tracking-[1.5px] text-white/50 uppercase block mb-1">
                    {v.badge}
                  </span>

                  <h3 className="text-lg font-denton-extrabold font-extrabold text-white mb-2 tracking-tight">
                    {v.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-medium [word-spacing:0.04em]">
                    {v.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.10] flex items-center gap-2 text-[10px] font-mono font-bold text-[#5EF2B0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5EF2B0] shadow-[0_0_6px_#5EF2B0]" />
                  <span>Zero Balance-Sheet Liability</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Runbook Callout */}
        {onOpenRunbook && (
          <div className="text-center">
            <button
              onClick={() => onOpenRunbook(4)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5CE1E6]/10 hover:bg-[#5CE1E6]/20 border border-[#5CE1E6]/35 text-[#5CE1E6] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm"
            >
              <span>Read Commercial Economics & Unit Model (Chapter 05)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
