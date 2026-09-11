import React from 'react';
import { ShieldCheck, UserCheck, Award, FileText, Star, ThumbsUp, Clock, History, CalendarCheck, Sparkles } from 'lucide-react';

export const TrustLayer: React.FC = () => {
  const trustPillars = [
    {
      title: 'Identity Verification',
      icon: UserCheck,
      description: 'Multi-factor and biometric identity attestation eliminating industry impersonation scams and fake casting solicitations.'
    },
    {
      title: 'Credit Verification',
      icon: Award,
      description: 'Cross-checks listed screen credits against guild registries (SAG-AFTRA, DGA, IATSE, BSC, ASC) and verified trade databases.'
    },
    {
      title: 'Professional Profiles',
      icon: FileText,
      description: 'Standardized portfolio dossiers hosting validated showreels, equipment serial inventories, and certified trade licenses.'
    },
    {
      title: 'Project History Audit',
      icon: History,
      description: 'Verifiable production track records documenting completed slates, delivered deliverables, and box office performances.'
    },
    {
      title: 'Bilateral Ratings',
      icon: Star,
      description: 'Mutual post-wrap feedback between department heads, producers, and crew with safeguards against retaliatory reviews.'
    },
    {
      title: 'Contextual Reviews',
      icon: ThumbsUp,
      description: 'Structured review summaries capturing prompt payment reliability, on-set safety compliance, and respectful set culture.'
    },
    {
      title: 'Reliability Index',
      icon: ShieldCheck,
      description: 'Objective statistical metric tracking call-sheet punctuality, milestone adherence, and equipment condition at return.'
    },
    {
      title: 'Live Availability Sync',
      icon: CalendarCheck,
      description: 'Calendar state engine reflecting locked shoot dates and pending option holds to eliminate double-booking disputes.'
    },
    {
      title: 'Insurance Validation',
      icon: Clock,
      description: 'Automated Certificate of Insurance (COI) verification with named additional insured status for gear sub-rentals.'
    },
    {
      title: 'Reputation Scoring',
      icon: Sparkles,
      description: 'Holistic 0–100 trust score evaluating counterparty solvency, escrow fulfillment, and community reputation across the network.'
    }
  ];

  return (
    <section
      id="trust-layer"
      className="py-24 bg-[#08090C] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Trust Protocol</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            SynqTrust
          </h2>

          <p className="mt-2 text-xl font-semibold text-[#E5A919]">
            A connected ecosystem needs trust.
          </p>

          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Cinema has traditionally operated on word-of-mouth rolodexes and opaque reputations. SynqTrust establishes objective, verifiable credibility for every person, asset, and counterparty.
          </p>
        </div>

        {/* 10 Trust Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-[#0E1119] border border-white/10 hover:border-[#E5A919]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E5A919]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#E5A919]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-neutral-500 max-w-xl mx-auto">
            * SynqTrust provides structured identity attestation and guild record cross-verification. Digital badges are issued based on verified credentials, guild registrations, and completed escrow settlements.
          </p>
        </div>
      </div>
    </section>
  );
};
