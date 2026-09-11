import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Terminal, Layers, ArrowRight, ShieldCheck, Sparkles, Network, CheckCircle2, Clapperboard, Brain, Sliders, CreditCard } from 'lucide-react';
import { Glass3DIcon, GlassIconColor } from './Glass3DIcon';

export const DigiSynqOS: React.FC = () => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);

  const osLayers = [
    {
      label: 'Identity',
      icon: ShieldCheck,
      color: 'cyan' as GlassIconColor,
      desc: 'Sovereign verified credentials for creatives, technicians, and entities.',
      detail: 'Cryptographic proof-of-identity linked with verified guild registries, elimination of fraudulent casting calls, and decentralized reputation persistence.'
    },
    {
      label: 'Network',
      icon: Network,
      color: 'blue' as GlassIconColor,
      desc: 'Unified cinema graph mapping relationships, credits, and availabilities.',
      detail: 'High-density relational graph connecting 8 ecosystem nodes: cast, crew, production slates, cameras, soundstages, screens, brands, and co-financiers.'
    },
    {
      label: 'Assets',
      icon: Layers,
      color: 'amber' as GlassIconColor,
      desc: 'Digital twins of cameras, lenses, stages, and mobile facilities.',
      detail: 'Live telemetric registers for physical gear, optical bench testing certificates, insurance endorsements, and real-time vault availability.'
    },
    {
      label: 'Projects',
      icon: Clapperboard,
      color: 'gold' as GlassIconColor,
      desc: 'Collaborative development slates, script breakdowns, and live stripboards.',
      detail: 'Multi-party production scheduling, automated scene breakdowns, call sheet distribution, and live milestone deliverables tracking.'
    },
    {
      label: 'Intelligence',
      icon: Brain,
      color: 'purple' as GlassIconColor,
      desc: 'Predictive audience forecasting and cross-territory box office modeling.',
      detail: 'Machine learning synthesis analyzing trailer velocity, sentiment shifts, competitive release corridors, and audience demand vectors.'
    },
    {
      label: 'Matching',
      icon: Sparkles,
      color: 'cyan' as GlassIconColor,
      desc: 'Algorithmic bipartite pairing connecting supply with dynamic demand.',
      detail: 'Optimal resource choreography solving multi-constraint cinema needs in seconds without balance-sheet asset ownership.'
    },
    {
      label: 'Workflows',
      icon: Sliders,
      color: 'emerald' as GlassIconColor,
      desc: 'Automated milestone execution, call sheet dispatch, and deliverable sign-offs.',
      detail: 'Standardized digital operational pipelines synchronizing department heads, rental vaults, post suites, and laboratory turnarounds.'
    },
    {
      label: 'Transactions',
      icon: CreditCard,
      color: 'gold' as GlassIconColor,
      desc: 'Protected escrow, smart deal memos, and automated CAM waterfall splits.',
      detail: 'Bilateral digital contracts with milestone-triggered payment disbursements, insurance deposit releases, and transparent accounting.'
    },
    {
      label: 'Trust',
      icon: CheckCircle2,
      color: 'emerald' as GlassIconColor,
      desc: 'Objective rating protocols, guild validation, and dispute mediation.',
      detail: 'Cross-verified reliability indexes, prompt payment scoring, on-set safety compliance, and dispute resolution mechanisms.'
    },
    {
      label: 'AI Core',
      icon: Cpu,
      color: 'rose' as GlassIconColor,
      desc: 'Domain-trained cinematic agents orchestrating resources autonomously.',
      detail: 'Autonomous multimodal agents assisting producers, location managers, and sales agents across natural language inquiries.'
    }
  ];

  const activeLayer = osLayers[selectedLayerIndex];

  return (
    <section
      id="digisynq-os"
      className="py-24 sm:py-32 bg-[var(--bg-canvas)] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden"
    >
      {/* Volumetric ambient backlighting */}
      <div className="glow-orb glow-orb-purple w-[520px] h-[520px] -top-28 -right-28 pointer-events-none" />
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] bottom-10 -left-16 pointer-events-none" />

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
            <div className="flex items-center gap-4">
              <Glass3DIcon icon={Layers} color="gold" size="lg" />
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

          {/* Active Layer Dynamic Inspection with Smooth Crossfade */}
          <div className="mb-6 rounded-2xl p-5 sm:p-6 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <Glass3DIcon icon={activeLayer.icon} color={activeLayer.color} size="md" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-[#E5A919] font-bold">
                        LAYER 0{selectedLayerIndex + 1}
                      </span>
                      <span className="text-xs text-[var(--text-tertiary)]">•</span>
                      <h4 className="text-base font-bold text-[var(--text-primary)]">
                        {activeLayer.label} Layer Protocol
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                      {activeLayer.detail}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-xl apple-glass text-[#E5A919]">
                  Active Stack Node
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 10 Layer Tiles with Hover & Selection Transitions and 3D Glass Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {osLayers.map((layer, idx) => {
              const isSelected = selectedLayerIndex === idx;
              return (
                <button
                  key={layer.label}
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-200 border ${
                    isSelected
                      ? 'border-[#E5A919] bg-[#E5A919]/10 shadow-sm ring-1 ring-[#E5A919]/40'
                      : 'apple-glass hover:border-[#E5A919]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Glass3DIcon icon={layer.icon} color={layer.color} size="sm" />
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? 'text-[#E5A919]' : 'text-[var(--text-tertiary)]'
                      }`}
                    >
                      L{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1 tracking-tight">
                    {layer.label}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-snug">
                    {layer.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] text-center text-xs font-mono text-[var(--text-tertiary)] max-w-2xl mx-auto leading-relaxed">
            DigiSynq OS bridges legacy film infrastructure with next-generation autonomous workflows, creating a unified digital layer across the global motion picture supply chain.
          </div>
        </div>
      </div>
    </section>
  );
};
