import React from 'react';
import { DollarSign, Layers, Cpu, Database, Network, TrendingUp, Check, X, ShieldAlert } from 'lucide-react';

export const BusinessModelSection: React.FC = () => {
  const revenueEngines = [
    {
      name: 'SaaS Subscriptions',
      summary: 'Recurring software licenses',
      description: 'Tiered monthly and annual subscriptions for production offices, line producers, distributors, and creators utilizing workflow suites.',
      examples: 'SynqProduce, SynqCrewOps, SynqAnalytics, SynqFlow, SynqTask',
      pricing: 'Seat-based and production-tier subscriptions'
    },
    {
      name: 'Marketplace Commissions',
      summary: 'Transaction take-rates on liquidity',
      description: 'Low-friction transaction fee on completed peer-to-peer equipment sub-rentals, screen capacity bookings, and short-term crew gigs.',
      examples: 'SynqMarket, SynqSpace, SynqScreen, SynqGigs',
      pricing: '3% – 8% commission on successfully settled escrow'
    },
    {
      name: 'Enterprise Contracts',
      summary: 'Multi-territory studio infrastructure',
      description: 'Custom organizational deployments, enterprise SLA agreements, SSO, and dedicated data pipelines for theatrical circuits and studios.',
      examples: 'SynqOps, SynqDistribute, SynqRights, SynqExhibit',
      pricing: 'Annual enterprise licenses with dedicated integration support'
    },
    {
      name: 'Intelligence & Data Products',
      summary: 'Predictive modeling & strategic memos',
      description: 'Access to proprietary theatrical attendance forecasting, audience sentiment tracking, and competitive release calendar simulations.',
      examples: 'SynqPredict, SynqIntel, SynqSignals, SynqScore',
      pricing: 'Intelligence tier access and custom commissioned briefs'
    },
    {
      name: 'Developer & Platform APIs',
      summary: 'Infrastructure access fees',
      description: 'Query-based and throughput pricing for third-party cinema software, POS ticketing systems, and ERPs connecting to the graph.',
      examples: 'SynqFind, SynqMatch, SynqLink, SynqNetwork',
      pricing: 'Consumption-based API billing with volume tiers'
    }
  ];

  const comparisonPoints = [
    { label: 'Infrastructure Scope', legacy: 'Fragmented single-purpose tools', digisynq: 'One connected operating network' },
    { label: 'Discovery Model', legacy: 'Manual calls & gatekept agency rolodexes', digisynq: 'Intelligent multi-modal semantic search' },
    { label: 'Stakeholder Ties', legacy: 'Disconnected, isolated relationships', digisynq: 'Unified global relationship graph' },
    { label: 'Ecosystem Visibility', legacy: 'Opaque trade rumors & lagging phone calls', digisynq: 'Shared real-time intelligence telemetry' },
    { label: 'Physical Capacity', legacy: 'High underutilization & dormant inventory', digisynq: 'Maximized liquidity without asset ownership' },
    { label: 'Operational Speed', legacy: 'Reactive, slow, and paper-intensive', digisynq: 'Automated, data-driven, and instantaneous' },
  ];

  return (
    <section
      id="business-model"
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
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
            <span className="text-white/75">Five diversified revenue engines.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Five diversified revenue engines monetize transactions, software velocity, and intelligence across the entire cinema value chain.
          </p>
        </div>

        {/* 5 Revenue Engines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {revenueEngines.map((engine, idx) => (
            <div
              key={engine.name}
              className="rounded-3xl bg-[#0D1220]/70 border border-white/[0.08] hover:border-[#5CE1E6]/40 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-mono text-[#5CE1E6] tracking-wider font-semibold">
                    Engine 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#5CE1E6] shadow-[0_0_6px_#5CE1E6]" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                  {engine.name}
                </h3>
                <div className="text-xs text-[#5CE1E6] font-mono mb-3 font-medium">
                  {engine.summary}
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  {engine.description}
                </p>

                <div className="p-3 rounded-xl bg-[#070A12]/80 border border-white/[0.08] mb-4 text-xs font-mono text-white/50">
                  <span className="text-white/40 block text-[10px] font-semibold">Associated Platforms:</span>
                  <span className="text-white/80">{engine.examples}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] text-[11px] font-mono text-[#5CE1E6] font-medium">
                Model: {engine.pricing}
              </div>
            </div>
          ))}

          {/* 6th Card: Additional Expansion Streams */}
          <div className="rounded-3xl bg-[#0D1220]/70 border border-[#8B7CFF]/30 hover:border-[#8B7CFF]/60 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-lg transition-all">
            <div>
              <span className="text-xs font-mono text-[#8B7CFF] tracking-wider block mb-3 font-semibold">
                Synergistic Expansion Streams
              </span>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                Ecosystem Monetization
              </h3>
              <ul className="space-y-2.5 text-xs text-white/70">
                {['High-intent qualified lead generation for vendors', 'Secured escrow transaction fees & currency clearing', 'Premium visibility algorithms for qualified releases', 'Standardized legal deal memo & contract automation', 'Certified partner financial advisory workflows'].map((s) => (
                  <li key={s} className="flex items-center gap-2.5">
                    <span className="text-[#8B7CFF] font-bold">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-[11px] font-mono text-white/40 font-medium">
              Compounding Network Economics
            </div>
          </div>
        </div>

        {/* Category Redefinition comparison table */}
        <div className="rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono tracking-widest text-[#5CE1E6] block mb-1 font-semibold">
              Category Redefinition
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-denton-extrabold">
              Why DigiSynq?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
              DigiSynq is not a marketplace, not a social network, and not another standalone film database. It is the operating network that unites them.
            </p>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {comparisonPoints.map((item) => (
              <div
                key={item.label}
                className="py-4.5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
              >
                <div className="md:col-span-4 text-xs sm:text-sm font-bold text-white">
                  {item.label}
                </div>
                <div className="md:col-span-4 flex items-center gap-2 text-xs text-white/60">
                  <X className="w-3.5 h-3.5 text-[#FFC857] shrink-0" />
                  <span>{item.legacy}</span>
                </div>
                <div className="md:col-span-4 flex items-center gap-2 text-xs text-[#5EF2B0] font-semibold">
                  <Check className="w-3.5 h-3.5 text-[#5EF2B0] shrink-0 font-bold" />
                  <span>{item.digisynq}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
