import React, { useState } from 'react';
import { Search, ShieldCheck, GitFork, SlidersHorizontal, CreditCard, BarChart3, Brain, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
      className="py-24 sm:py-32 bg-[var(--bg-canvas-subtle)] border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="ds-section-label mb-5">
            Operating Architecture
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            The DigiSynq Model
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            A seven-phase operating pipeline that turns scattered cinema resources into a coordinated, measurable, and self-reinforcing engine.
          </p>
        </motion.div>

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
                    ? 'bg-white border-2 border-[#E5A919] shadow-md'
                    : 'bg-transparent border-[var(--border-hairline)] hover:border-[var(--border-subtle)] hover:bg-[var(--bg-secondary)]'
                }`}
                id={`model-step-btn-${step.name.toLowerCase()}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-semibold ${isActive ? 'text-[var(--accent-gold)]' : 'text-[var(--text-tertiary)]'}`}>
                    0{index + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[var(--accent-gold)]' : 'text-[var(--text-tertiary)]'}`} />
                </div>
                <div className={`text-xs sm:text-sm font-semibold tracking-wider uppercase ${isActive ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-primary)]'}`}>
                  {step.name}
                </div>
                {isActive && (
                  <motion.span
                    layoutId="activePipelineBar"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#E5A919] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Interactive Showcase Card */}
        <div className="rounded-3xl ds-card p-6 sm:p-10 lg:p-12 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left: Stage Title & Description */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5A919] font-semibold">
                  <span>STAGE 0{activeStepIndex + 1} OF 07</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                  {currentStep.name} Stage
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {currentStep.headline}
                </p>
                
                <div className="pt-4 border-t border-black/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] block mb-2.5 font-semibold">
                    Integrated DigiSynq Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.products.map((prod) => (
                      <span
                        key={prod}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-black/[0.03] border border-black/[0.06] text-[var(--text-primary)] font-mono"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Operational Anatomy (Input -> Action -> Output) */}
              <div className="lg:col-span-7 bg-black/[0.02] border border-black/[0.06] rounded-2xl p-5 sm:p-7 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Input Signal / Parameter</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] bg-white p-3.5 rounded-xl border border-black/[0.06] font-mono leading-relaxed">
                    {currentStep.input}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5A919] mb-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                    <span>DigiSynq Network Action</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] bg-white p-3.5 rounded-xl border border-black/[0.06] leading-relaxed">
                    {currentStep.action}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 mb-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Output & Operational Velocity</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/20 leading-relaxed">
                    {currentStep.output}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
