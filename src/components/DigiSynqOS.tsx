import React from 'react';
import { Cpu, Terminal, Layers, ArrowRight, ShieldCheck, Sparkles, Network } from 'lucide-react';

export const DigiSynqOS: React.FC = () => {
  const osLayers = [
    { label: 'Identity', desc: 'Sovereign verified credentials for creatives, technicians, and entities.' },
    { label: 'Network', desc: 'Unified cinema graph mapping relationships, credits, and availabilities.' },
    { label: 'Assets', desc: 'Digital twins of cameras, lenses, stages, and mobile facilities.' },
    { label: 'Projects', desc: 'Collaborative development slates, script breakdowns, and live stripboards.' },
    { label: 'Intelligence', desc: 'Predictive audience forecasting and cross-territory box office modeling.' },
    { label: 'Matching', desc: 'Algorithmic bipartite pairing connecting supply with dynamic demand.' },
    { label: 'Workflows', desc: 'Automated milestone execution, call sheet dispatch, and deliverable sign-offs.' },
    { label: 'Transactions', desc: 'Protected escrow, smart deal memos, and automated CAM waterfall splits.' },
    { label: 'Trust', desc: 'Objective rating protocols, guild validation, and dispute mediation.' },
    { label: 'AI Core', desc: 'Domain-trained cinematic agents orchestrating resources autonomously.' }
  ];

  return (
    <section
      id="digisynq-os"
      className="py-24 sm:py-32 bg-[var(--bg-canvas)] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/10 text-[var(--text-secondary)] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <Cpu className="w-3.5 h-3.5 text-[#E5A919]" />
            <span>Our Long-Term Vision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            The operating system for a more <br />
            <span className="text-[#E5A919]">connected cinema ecosystem.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Introducing <strong className="text-[var(--text-primary)]">DigiSynq OS</strong>: our architectural blueprint for unifying the entire lifecycle of cinema into one seamless, interoperable digital protocol.
          </p>
        </div>

        {/* Unified 10-Layer Stack Diagram - Apple System Framework */}
        <div className="rounded-3xl apple-card p-6 sm:p-10 lg:p-12 shadow-lg">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#E5A919]/10 border border-[#E5A919]/30 flex items-center justify-center text-[#E5A919]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-mono tracking-tight">
                  DIGISYNQ-OS // CORE ARCHITECTURE
                </h3>
                <span className="text-xs text-[var(--text-tertiary)] font-mono">
                  Protocol Version 1.0 (Roadmap Architecture)
                </span>
              </div>
            </div>
            <span className="px-3.5 py-1 rounded-full text-xs font-mono apple-glass text-[var(--text-secondary)] hidden sm:inline font-medium">
              10 Integrated Layers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {osLayers.map((layer, idx) => (
              <div
                key={layer.label}
                className="p-5 rounded-2xl apple-glass hover:border-[#E5A919]/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#E5A919]">
                    L{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1 tracking-tight">
                  {layer.label}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-snug">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] text-center text-xs font-mono text-[var(--text-tertiary)] max-w-2xl mx-auto leading-relaxed">
            DigiSynq OS bridges legacy film infrastructure with next-generation autonomous workflows, creating a unified digital layer across the global motion picture supply chain.
          </div>
        </div>
      </div>
    </section>
  );
};
