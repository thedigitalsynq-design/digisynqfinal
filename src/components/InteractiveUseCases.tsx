import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { USE_CASES } from '../data/platformsData';
import { UseCaseItem } from '../types';
import { Play, Sparkles, CheckCircle2, ArrowRight, CornerDownRight, Terminal } from 'lucide-react';

export const InteractiveUseCases: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(USE_CASES[0].id);
  const [customInput, setCustomInput] = useState<string>('');
  const [customResult, setCustomResult] = useState<{
    status: 'idle' | 'simulating' | 'resolved';
    flow: string[];
    summary: string;
  }>({ status: 'idle', flow: [], summary: '' });

  const activeCase = USE_CASES.find((c) => c.id === selectedCaseId) || USE_CASES[0];

  const handleSimulateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setCustomResult({ status: 'simulating', flow: [], summary: '' });
    setTimeout(() => {
      setCustomResult({
        status: 'resolved',
        flow: [
          'Semantic Graph Search (SynqFind): Detected 12 compatible assets and 3 verified counterparties.',
          'Trust & Validation (SynqTrust): Verified insurance certificates, guild credentials, and conflict checks.',
          'Bipartite Matching (SynqMatch): Recommended optimal package structure with zero asset ownership overhead.',
          'Workflow & Settlement (SynqDeal / SynqFlow): Generated standard digital agreement and automated milestone escrow.'
        ],
        summary: `Successfully coordinated requirements for "${customInput}" across 4 ecosystem nodes without balance-sheet asset ownership.`
      });
    }, 600);
  };

  return (
    <section
      id="use-cases"
      className="py-24 sm:py-32 bg-[var(--bg-canvas)] border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="ds-section-label mb-5">
            <Terminal className="w-3.5 h-3.5" />
            Choreographed Workflows
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            How DigiSynq works in practice.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Real cinema scenarios showing how fragmented needs are resolved through digital matching and coordination rather than manual friction.
          </p>
        </div>

        {/* 5 Scenario Selector Pills - Apple Segmented Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {USE_CASES.map((uc) => {
            const isSelected = selectedCaseId === uc.id;
            return (
              <button
                key={uc.id}
                onClick={() => {
                  setSelectedCaseId(uc.id);
                  setCustomResult({ status: 'idle', flow: [], summary: '' });
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#E5A919] text-black border-[#E5A919] shadow-sm font-bold'
                    : 'apple-glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                id={`btn-use-case-${uc.id}`}
              >
                "{uc.title}"
              </button>
            );
          })}
        </div>

        {/* Active Scenario Detailed Execution Panel */}
        <div className="rounded-3xl apple-card p-6 sm:p-10 lg:p-12 shadow-lg mb-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#E5A919] block mb-1 font-semibold">
                    Trigger Requirement • Initiated by {activeCase.persona}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-sans tracking-tight">
                    "{activeCase.title}"
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[var(--text-tertiary)]">Interlinked Nodes:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCase.connectedNodes.map((node) => (
                      <span
                        key={node}
                        className="px-2.5 py-1 rounded-full bg-black/[0.03] text-xs font-mono text-[var(--text-primary)] border border-black/[0.05]"
                      >
                        {node}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="my-6 p-4 rounded-2xl bg-black/[0.02] border border-black/[0.06]">
                <span className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest block mb-1 font-semibold">
                  Natural Language Prompt Ingested
                </span>
                <p className="text-sm sm:text-base text-[var(--text-primary)] font-mono italic">
                  "{activeCase.query}"
                </p>
              </div>

              {/* 4-Step Resolution Sequence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                {activeCase.stages.map((stage, idx) => (
                  <div
                    key={stage.stage}
                    className="p-5 rounded-2xl bg-white border border-black/[0.06] hover:border-[#E5A919]/50 transition-all duration-200 shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#E5A919]">
                        0{idx + 1}. {stage.stage}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)] mb-1.5">
                      {stage.action}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {stage.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Outcome Card */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start sm:items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                <div className="text-xs sm:text-sm text-emerald-800">
                  <span className="font-semibold text-[var(--text-primary)]">Outcome Achieved: </span>
                  {activeCase.outcome}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Live Simulation Sandbox for Custom Query */}
        <div className="rounded-3xl apple-card p-6 sm:p-9 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5A919] mb-2 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Choreography Sandbox</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">
            Test how DigiSynq coordinates your cinema requirement.
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
            Type any real-world production, equipment, screening, or distribution requirement to see the network choreography simulation.
          </p>

          <form onSubmit={handleSimulateCustom} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g. 'I need a 40-foot techno-crane with operator in Atlanta next Tuesday'"
              className="flex-1 bg-black/[0.03] border border-black/[0.08] rounded-2xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[#E5A919]/80 focus:ring-2 focus:ring-[#E5A919]/20 font-sans"
              id="sandbox-custom-query-input"
            />
            <button
              type="submit"
              className="ds-btn-primary inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider px-6 py-3 font-semibold"
              id="btn-sandbox-simulate"
            >
              <span>Simulate Choreography</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Sandbox Response Output with AnimatePresence */}
          <AnimatePresence mode="wait">
            {customResult.status === 'simulating' && (
              <motion.div
                key="simulating"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mt-4 p-4 rounded-2xl bg-white border border-black/[0.06] text-xs font-mono text-[#E5A919] animate-pulse shadow-xs"
              >
                Simulating multi-node graph traversal across talent, equipment, and trust layers...
              </motion.div>
            )}

            {customResult.status === 'resolved' && (
              <motion.div
                key="resolved"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 p-5 rounded-2xl bg-white border border-[#E5A919]/40 space-y-3 shadow-xs"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-[#E5A919] font-bold">
                  Automated Network Coordination Pipeline:
                </div>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-mono">
                  {customResult.flow.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#E5A919]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-black/[0.04] text-xs text-emerald-600 font-medium">
                  {customResult.summary}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
