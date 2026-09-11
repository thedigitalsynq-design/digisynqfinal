import React, { useState } from 'react';
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
      className="py-24 bg-[#08090C] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Choreographed Workflows</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            How DigiSynq works in practice.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Real cinema scenarios showing how fragmented needs are resolved through digital matching and coordination rather than manual friction.
          </p>
        </div>

        {/* 5 Scenario Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-white/10">
          {USE_CASES.map((uc) => {
            const isSelected = selectedCaseId === uc.id;
            return (
              <button
                key={uc.id}
                onClick={() => {
                  setSelectedCaseId(uc.id);
                  setCustomResult({ status: 'idle', flow: [], summary: '' });
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-[#E5A919] text-black border-[#E5A919] shadow-lg shadow-[#E5A919]/20'
                    : 'bg-[#0E1119] text-neutral-400 hover:text-white border-white/10 hover:border-white/20'
                }`}
                id={`btn-use-case-${uc.id}`}
              >
                "{uc.title}"
              </button>
            );
          })}
        </div>

        {/* Active Scenario Detailed Execution Panel */}
        <div className="rounded-2xl bg-gradient-to-br from-[#121520] to-[#0A0C11] border border-white/10 p-6 sm:p-10 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#E5A919] block mb-1">
                Trigger Requirement • Initiated by {activeCase.persona}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                "{activeCase.title}"
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-400">Interlinked Nodes:</span>
              <div className="flex flex-wrap gap-1">
                {activeCase.connectedNodes.map((node) => (
                  <span
                    key={node}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white"
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="my-6 p-4 rounded-xl bg-black/50 border border-white/10">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
              Natural Language Prompt Ingested
            </span>
            <p className="text-sm sm:text-base text-neutral-200 font-mono italic">
              "{activeCase.query}"
            </p>
          </div>

          {/* 4-Step Resolution Sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            {activeCase.stages.map((stage, idx) => (
              <div
                key={stage.stage}
                className="p-4 rounded-xl bg-[#0E1119] border border-white/5 hover:border-[#E5A919]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#E5A919]">
                    0{idx + 1}. {stage.stage}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                </div>
                <div className="text-xs font-bold text-white mb-1.5">
                  {stage.action}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome Card */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-start sm:items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-xs sm:text-sm text-emerald-200">
              <span className="font-semibold text-white">Outcome Achieved: </span>
              {activeCase.outcome}
            </div>
          </div>
        </div>

        {/* Live Simulation Sandbox for Custom Query */}
        <div className="rounded-2xl bg-[#0E1119] border border-white/10 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5A919] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Choreography Sandbox</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-2">
            Test how DigiSynq coordinates your cinema requirement.
          </h4>
          <p className="text-xs sm:text-sm text-neutral-400 mb-5">
            Type any real-world production, equipment, screening, or distribution requirement to see the network choreography simulation.
          </p>

          <form onSubmit={handleSimulateCustom} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g. 'I need a 40-foot techno-crane with operator in Atlanta next Tuesday'"
              className="flex-1 bg-[#08090C] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5A919]/60 font-sans"
              id="sandbox-custom-query-input"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#E5A919] hover:bg-[#f5b82e] text-black font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md shadow-[#E5A919]/20"
              id="btn-sandbox-simulate"
            >
              <span>Simulate Choreography</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Sandbox Response Output */}
          {customResult.status === 'simulating' && (
            <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-[#E5A919] animate-pulse">
              Simulating multi-node graph traversal across talent, equipment, and trust layers...
            </div>
          )}

          {customResult.status === 'resolved' && (
            <div className="mt-4 p-5 rounded-xl bg-black/50 border border-[#E5A919]/30 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#E5A919] font-bold">
                Automated Network Coordination Pipeline:
              </div>
              <ul className="space-y-2 text-xs text-neutral-300 font-mono">
                {customResult.flow.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#E5A919]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-white/10 text-xs text-emerald-300 font-medium">
                {customResult.summary}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
