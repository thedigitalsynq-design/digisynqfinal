import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, Shield, RefreshCw, KeyRound, Building, Camera, Film, Users, Wrench } from 'lucide-react';

export const MarketplaceSection: React.FC = () => {
  const [activeMarketType, setActiveMarketType] = useState<number>(0);

  const capacityCategories = [
    {
      title: 'Equipment',
      icon: Camera,
      idleExample: 'Anamorphic lenses, ARRI 35 packages & lighting trucks sitting in vault during 2-week downtime.',
      ownerAdvantage: 'Retain 100% equipment title; earn $8,000–$25,000/mo in insured sub-rental income.',
      demandAdvantage: 'Indie productions access tier-1 optics locally without paying exorbitant cross-border shipping fees.',
      turnaround: 'Instant insured booking with digital COI endorsement.'
    },
    {
      title: 'Studios & Stages',
      icon: Building,
      idleExample: 'LED virtual production volumes & soundstages booked only 18 days out of the month.',
      ownerAdvantage: 'Turn vacant stage dark days into high-margin commercial and test-shoot revenue blocks.',
      demandAdvantage: 'Producers book certified soundstages for 3-day pickup shoots without signing 6-month master leases.',
      turnaround: 'Turnkey facility agreements with power and acoustic specifications.'
    },
    {
      title: 'Screens',
      icon: Film,
      idleExample: '180-seat auditoriums running at 12% occupancy on Monday–Wednesday afternoons and evenings.',
      ownerAdvantage: 'Theatres monetize empty screens with zero risk; ticket thresholds must be met before show locks.',
      demandAdvantage: 'Film clubs, anime fandoms, and documentary makers host theatrical premieres in real cinemas.',
      turnaround: 'Dynamic holdover scheduling & automated KDM digital key delivery.'
    },
    {
      title: 'Locations',
      icon: KeyRound,
      idleExample: 'Architectural estates, vintage diners, and industrial warehouses with sporadic filming permits.',
      ownerAdvantage: 'Property owners earn premium filming location fees protected by $5M escrow damage coverage.',
      demandAdvantage: 'Location managers scout 360° virtual interiors and download municipal permit checklists.',
      turnaround: 'Standardized location agreement with automated damage deposit release.'
    },
    {
      title: 'Services & Post',
      icon: RefreshCw,
      idleExample: 'Boutique color grading suites and Dolby Atmos mix rooms between major studio turnovers.',
      ownerAdvantage: 'Post facilities fill vacant suite hours with indie feature sound mixes and festival finishings.',
      demandAdvantage: 'Filmmakers get world-class audio mixing and color timing at off-peak rates.',
      turnaround: 'Transparent fixed-rate milestones with remote streaming sign-offs.'
    },
    {
      title: 'Specialized Vendors',
      icon: Wrench,
      idleExample: 'Local catering fleets, honeywagons, mobile generator trucks, and craft security teams.',
      ownerAdvantage: 'Consistent pipeline of incoming film shoots without expensive sales reps.',
      demandAdvantage: 'Line producers contract vetted, certified local suppliers across any filming territory.',
      turnaround: 'Consolidated purchase orders with automated net-15 disbursements.'
    }
  ];

  const currentCategory = capacityCategories[activeMarketType];
  const Icon = currentCategory.icon;

  return (
    <section
      id="marketplace"
      className="py-24 sm:py-32 bg-[var(--bg-canvas-subtle)] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Underutilized Capacity Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            Unlock what already exists.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            DigiSynq creates liquid markets around underutilized cinema capacity without ever purchasing a single camera or building a single soundstage.
          </p>

          <p className="mt-2 text-xs sm:text-sm font-mono uppercase text-[#E5A919] font-medium">
            The asset owner keeps ownership. DigiSynq creates the connection and transaction layer.
          </p>
        </div>

        {/* The 3-Tier Core Visual: OWNER -> DIGISYNQ -> DEMAND (Apple System Flow) */}
        <div className="mb-14 rounded-3xl apple-card p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1: Asset Owner */}
            <div className="p-6 rounded-2xl apple-glass relative">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] block mb-2 font-semibold">
                Supply Side
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">
                Asset Owner
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Retains 100% legal ownership, physical custody, and operational maintenance of equipment, stages, and screens.
              </p>
              <div className="mt-4 pt-3 border-t border-black/[0.04] dark:border-white/[0.06] text-[11px] font-mono text-[#E5A919] font-medium">
                Zero Loss of Custody
              </div>
            </div>

            {/* Step 2: DigiSynq Protocol */}
            <div className="p-6 rounded-2xl apple-glass border-[#E5A919]/40 relative shadow-md">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E5A919] block mb-2 font-semibold">
                The Network Layer
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">
                DigiSynq
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                Provides discovery, trust verification, dynamic matching, insurance endorsements, contracts, and milestone escrow.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E5A919]/25 text-[11px] font-mono text-[#E5A919] font-bold">
                Pure Software & Protocol Margin
              </div>
            </div>

            {/* Step 3: Demand */}
            <div className="p-6 rounded-2xl apple-glass relative">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] block mb-2 font-semibold">
                Demand Side
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">
                Productions & Events
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Accesses world-class physical resources at competitive rates with instant booking, insured custody, and verified specs.
              </p>
              <div className="mt-4 pt-3 border-t border-black/[0.04] dark:border-white/[0.06] text-[11px] font-mono text-emerald-500 dark:text-emerald-400 font-medium">
                Frictionless Utilization
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Capacity Categories - Apple Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {capacityCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveMarketType(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                activeMarketType === idx
                  ? 'bg-[#E5A919] text-black border-[#E5A919] font-bold shadow-sm'
                  : 'apple-glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span className="text-xs font-semibold block">
                {cat.title}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Capacity Detail Inspection */}
        <div className="rounded-3xl apple-card p-6 sm:p-9 shadow-sm">
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/10 flex items-center justify-center text-[#E5A919]">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">
                Marketplace Domain
              </span>
              <h4 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                Underutilized {currentCategory.title}
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 border-t border-black/[0.06] dark:border-white/[0.08]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] block mb-1.5 font-semibold">
                Typical Idle Capacity:
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {currentCategory.idleExample}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#E5A919] block mb-1.5 font-semibold">
                Value to Asset Owner:
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                {currentCategory.ownerAdvantage}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 dark:text-emerald-400 block mb-1.5 font-semibold">
                Value to Production:
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {currentCategory.demandAdvantage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
