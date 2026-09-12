import React from 'react';
import { motion } from 'motion/react';
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
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#5CE1E6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#5EF2B0]/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/80 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Verifiable credentials.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            Security first. And second.<br />
            <span className="text-white/75 italic font-denton-extrabold-italic">Trust architecture for cinema.</span>
          </h2>

          <p className="mt-2 text-lg sm:text-xl font-semibold text-[#5CE1E6]">
            A connected ecosystem needs trust.
          </p>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Cinema has traditionally operated on word-of-mouth rolodexes and opaque reputations. SynqTrust establishes objective, verifiable credibility for every person, asset, and counterparty.
          </p>
        </div>

        {/* 10 Trust Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-5 sm:p-6 rounded-2xl bg-[#0D1220]/70 border border-white/[0.08] hover:border-[#5CE1E6]/40 flex flex-col justify-between backdrop-blur-xl shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#5CE1E6]/10 border border-[#5CE1E6]/25 flex items-center justify-center text-[#5CE1E6]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center gap-1.5 text-[10px] font-mono text-[#5EF2B0] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5EF2B0] shadow-[0_0_6px_#5EF2B0]" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-white/40 max-w-xl mx-auto leading-relaxed">
            * SynqTrust provides structured identity attestation and guild record cross-verification. Digital badges are issued based on verified credentials, guild registrations, and completed escrow settlements.
          </p>
        </div>
      </div>
    </section>
  );
};
