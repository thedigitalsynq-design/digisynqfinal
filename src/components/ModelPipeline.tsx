import React, { useState } from 'react';
import { Search, ShieldCheck, GitFork, SlidersHorizontal, CreditCard, BarChart3, Brain, ArrowRight } from 'lucide-react';

export const ModelPipeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // default on MATCH

  const pipelineSteps = [
    {
      name: 'DISCOVER',
      headline: 'Find relevant people, assets, content and opportunities.',
      icon: Search,
      input: 'Requirement query: "4K anamorphic camera package and certified DP in Berlin for 3-week shoot in November"',
      action: 'Semantic graph search indexes availability across verified crew databases and idle rental inventories.',
      output: 'Ranked candidate list with verified dates, rate benchmarks, and insurance standings.',
      products: ['SynqFind', 'SynqTalent', 'SynqMarket', 'SynqContent']
    },
    {
      name: 'VERIFY',
      headline: 'Establish identity, credibility and availability.',
      icon: ShieldCheck,
      input: 'Candidate identities, guild affiliations, equipment serials, and COI certificates.',
      action: 'SynqTrust verifies guild credits, reviews insurance underwriters, and checks counterparty credit reliability.',
      output: 'Cryptographically verified trust badge and confirmed schedule lock with zero conflict.',
      products: ['SynqTrust', 'SynqSkills', 'SynqReview', 'SynqRepute']
    },
    {
      name: 'MATCH',
      headline: 'Connect supply with demand intelligently.',
      icon: GitFork,
      input: 'Multi-variable constraints: budget envelope, artistic tone, insurance requirements, and calendar.',
      action: 'Bipartite graph optimization calculates bilateral affinity score and suggests optimal package pricing.',
      output: 'Direct pairing with 96% mutual fit rating and automated mutual introduction.',
      products: ['SynqMatch', 'SynqScore', 'SynqOpportunity', 'SynqBook']
    },
    {
      name: 'COORDINATE',
      headline: 'Move projects and workflows forward.',
      icon: SlidersHorizontal,
      input: 'Digital scripts, call sheets, vendor purchase orders, and multi-department timelines.',
      action: 'Automated workflow triggers dispatch GPS call sheets, track equipment custody, and sync catering.',
      output: 'Synchronized cross-entity operational dashboard with real-time milestone confirmations.',
      products: ['SynqProduce', 'SynqCrewOps', 'SynqFlow', 'SynqTask']
    },
    {
      name: 'TRANSACT',
      headline: 'Enable commercial exchange.',
      icon: CreditCard,
      input: 'Agreed day rates, sub-rental fees, minimum guarantees, and territorial delivery milestones.',
      action: 'Protected escrow holds funds, validates delivery material sign-offs, and executes automated payouts.',
      output: 'Instant, dispute-free financial settlement with digital receipts and tax credit audit trails.',
      products: ['SynqDeal', 'SynqLicense', 'SynqRevenue', 'SynqFinance']
    },
    {
      name: 'MEASURE',
      headline: 'Understand results.',
      icon: BarChart3,
      input: 'Ticket sales, auditorium occupancy, social chatter, exit poll feedback, and budget burn rate.',
      action: 'Real-time telemetry algorithms harmonize multi-market performance into unified analytics.',
      output: 'Live attribution dashboards, audience sentiment polarity index, and box office decay curves.',
      products: ['SynqAnalytics', 'SynqSignals', 'SynqVoice', 'SynqScreen']
    },
    {
      name: 'LEARN',
      headline: 'Use intelligence to improve the next decision.',
      icon: Brain,
      input: 'Historical project outcomes, vendor performance scores, and audience reception vectors.',
      action: 'Machine learning models update graph weights, refining future casting, budgeting, and release timing.',
      output: 'High-conviction predictive intelligence feeding directly into the next slate or screening.',
      products: ['SynqPredict', 'SynqIntel', 'SynqTrends', 'SynqInsights']
    }
  ];

  const currentStep = pipelineSteps[activeStepIndex];

  return (
    <section
      id="platform-model"
      className="py-24 sm:py-32 bg-[var(--bg-canvas-subtle)] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <span>Operating Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            The DigiSynq Model
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            A seven-phase operating pipeline that turns scattered cinema resources into a coordinated, measurable, and self-reinforcing engine.
          </p>
        </div>

        {/* 7-Step Navigation Bar - Apple Style Segmented Track */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStepIndex === index;
            return (
              <button
                key={step.name}
                onClick={() => setActiveStepIndex(index)}
                className={`flex-1 min-w-[130px] p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                  isActive
                    ? 'apple-glass border-[#E5A919]/60 shadow-md'
                    : 'bg-black/[0.02] dark:bg-white/[0.03] border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.12] dark:hover:border-white/[0.15] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                id={`model-step-btn-${step.name.toLowerCase()}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-semibold ${isActive ? 'text-[#E5A919]' : 'text-[var(--text-tertiary)]'}`}>
                    0{index + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#E5A919]' : 'text-[var(--text-tertiary)]'}`} />
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--text-primary)]">
                  {step.name}
                </div>
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E5A919] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Interactive Showcase Card */}
        <div className="rounded-3xl apple-card p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Stage Definition & Value Proposition */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5A919] font-semibold">
                <span>Phase 0{activeStepIndex + 1} of 07</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {currentStep.name}
              </h3>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-snug">
                {currentStep.headline}
              </p>
              
              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] block mb-2.5 font-semibold">
                  Integrated DigiSynq Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStep.products.map((prod) => (
                    <span
                      key={prod}
                      className="px-3 py-1 rounded-full text-xs font-medium apple-glass text-[var(--text-primary)] font-mono"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Operational Anatomy (Input -> Action -> Output) */}
            <div className="lg:col-span-7 apple-glass rounded-2xl p-5 sm:p-7 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Input Signal / Parameter</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] bg-black/[0.03] dark:bg-white/[0.03] p-3.5 rounded-xl border border-black/[0.04] dark:border-white/[0.05] font-mono leading-relaxed">
                  {currentStep.input}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5A919] mb-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                  <span>DigiSynq Network Action</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-primary)] bg-black/[0.02] dark:bg-white/[0.04] p-3.5 rounded-xl border border-black/[0.06] dark:border-white/[0.08] leading-relaxed">
                  {currentStep.action}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-500 dark:text-emerald-400 mb-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Output & Operational Velocity</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-200 bg-emerald-500/10 dark:bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-500/20 leading-relaxed">
                  {currentStep.output}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
