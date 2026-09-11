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
      className="py-24 bg-[#0A0C11] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Economic Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Value without asset ownership.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Five diversified revenue engines monetize transactions, software velocity, and intelligence across the entire cinema value chain.
          </p>
        </div>

        {/* 5 Revenue Engines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {revenueEngines.map((engine, idx) => (
            <div
              key={engine.name}
              className="rounded-2xl bg-[#0E1119] border border-white/10 p-6 flex flex-col justify-between hover:border-[#E5A919]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#E5A919] uppercase tracking-wider">
                    Engine 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#E5A919]" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {engine.name}
                </h3>
                <div className="text-xs text-[#E5A919] font-mono mb-3">
                  {engine.summary}
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {engine.description}
                </p>

                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 mb-4 text-xs font-mono text-neutral-400">
                  <span className="text-neutral-500 block text-[10px] uppercase">Associated Platforms:</span>
                  <span className="text-neutral-300">{engine.examples}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-[#E5A919]">
                Model: {engine.pricing}
              </div>
            </div>
          ))}

          {/* 6th Card: Additional Expansion Streams */}
          <div className="rounded-2xl bg-gradient-to-br from-[#151926] to-[#0E1119] border border-[#E5A919]/30 p-6 flex flex-col justify-between shadow-lg shadow-[#E5A919]/5">
            <div>
              <span className="text-xs font-mono text-[#E5A919] uppercase tracking-wider block mb-3">
                Synergistic Expansion Streams
              </span>
              <h3 className="text-lg font-bold text-white mb-3">
                Ecosystem Monetization
              </h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                {['High-intent qualified lead generation for vendors', 'Secured escrow transaction fees & currency clearing', 'Premium visibility algorithms for qualified releases', 'Standardized legal deal memo & contract automation', 'Certified partner financial advisory workflows'].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="text-[#E5A919] font-bold">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-neutral-400">
              Compounding Network Economics
            </div>
          </div>
        </div>

        {/* SECTION 36: WHY DIGISYNQ COMPARISON */}
        <div className="rounded-2xl bg-[#0E1119] border border-white/10 p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A919] block mb-1">
              Category Redefinition
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why DigiSynq?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              DigiSynq is not a marketplace, not a social network, and not another standalone film database. It is the operating network that unites them.
            </p>
          </div>

          <div className="divide-y divide-white/10">
            {comparisonPoints.map((item) => (
              <div
                key={item.label}
                className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
              >
                <div className="md:col-span-4 text-xs sm:text-sm font-bold text-white">
                  {item.label}
                </div>
                <div className="md:col-span-4 flex items-center gap-2 text-xs text-neutral-400">
                  <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>{item.legacy}</span>
                </div>
                <div className="md:col-span-4 flex items-center gap-2 text-xs text-[#E5A919] font-semibold">
                  <Check className="w-3.5 h-3.5 text-[#E5A919] shrink-0" />
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
