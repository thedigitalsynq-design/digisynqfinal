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
      className="py-24 bg-[#0A0C11] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4">
            <span>Operating Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            The DigiSynq Model
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            A seven-phase operating pipeline that turns scattered cinema resources into a coordinated, measurable, and self-reinforcing engine.
          </p>
        </div>

        {/* 7-Step Navigation Bar */}
        <div className="flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-white/10">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStepIndex === index;
            return (
              <button
                key={step.name}
                onClick={() => setActiveStepIndex(index)}
                className={`flex-1 min-w-[130px] p-3 sm:p-4 rounded-xl border text-left transition-all relative ${
                  isActive
                    ? 'bg-[#151924] border-[#E5A919] shadow-lg shadow-[#E5A919]/15'
                    : 'bg-[#0E1017] border-white/10 hover:border-white/20 text-neutral-400 hover:text-white'
                }`}
                id={`model-step-btn-${step.name.toLowerCase()}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono ${isActive ? 'text-[#E5A919]' : 'text-neutral-500'}`}>
                    0{index + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#E5A919]' : 'text-neutral-400'}`} />
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                  {step.name}
                </div>
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E5A919]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Interactive Showcase Card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#12151F] to-[#0A0C11] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Stage Definition & Value Proposition */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5A919]">
                <span>Phase 0{activeStepIndex + 1} of 07</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentStep.name}
              </h3>
              <p className="text-lg text-neutral-200 leading-snug">
                {currentStep.headline}
              </p>
              
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  Integrated DigiSynq Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStep.products.map((prod) => (
                    <span
                      key={prod}
                      className="px-3 py-1 rounded-md text-xs font-semibold bg-white/5 border border-white/10 text-neutral-200 font-mono"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Operational Anatomy (Input -> Action -> Output) */}
            <div className="lg:col-span-7 bg-[#08090C]/80 rounded-xl p-5 sm:p-6 border border-white/10 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Input Signal / Parameter</span>
                </div>
                <p className="text-sm text-neutral-300 bg-white/[0.02] p-3 rounded-lg border border-white/5 font-mono">
                  {currentStep.input}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5A919] mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                  <span>DigiSynq Network Action</span>
                </div>
                <p className="text-sm text-white bg-white/[0.04] p-3 rounded-lg border border-white/10">
                  {currentStep.action}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Output & Operational Velocity</span>
                </div>
                <p className="text-sm text-emerald-200 bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/20">
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
