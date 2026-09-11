import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { NetworkVisualizer } from './NetworkVisualizer';

interface HeroSectionProps {
  onOpenJoinModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenJoinModal }) => {
  const flowSteps = [
    { label: 'People', role: 'Talent & Crew' },
    { label: 'Projects', role: 'Slates & Packages' },
    { label: 'Assets', role: 'Gear & Stages' },
    { label: 'Content', role: 'Rights & Films' },
    { label: 'Audiences', role: 'Theatres & Fans' },
    { label: 'Opportunities', role: 'Global Value' },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-20 overflow-hidden bg-gradient-to-b from-[#08090C] via-[#0D0F14] to-[#08090C]"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-[#E5A919]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-blue-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Definition Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E5A919] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-200">
              The Asset-Light Operating Network for Cinema
            </span>
          </div>
        </div>

        {/* Master Headline & Subheadline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
            The Network Between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#E5A919]">
              the Dots.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl mx-auto">
            DigiSynq connects the fragmented people, projects, assets, content, audiences and opportunities that power the cinema ecosystem.
          </p>

          <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            An asset-light operating network built to make cinema more connected, intelligent and efficient.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#network-flow"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E5A919] hover:bg-[#f5b82e] text-black font-semibold text-sm px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-[#E5A919]/20 hover:shadow-[#E5A919]/35 active:scale-[0.98]"
              id="hero-cta-explore-network"
            >
              <span>Explore the Network</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#product-ecosystem"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium text-sm px-6 py-3.5 rounded-lg transition-all active:scale-[0.98]"
              id="hero-cta-explore-products"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Dynamic Interactive Network Visualizer */}
        <div className="mt-8 mb-20">
          <NetworkVisualizer />
        </div>

        {/* SECTION 10: HERO VALUE STATEMENT */}
        <div
          id="hero-value-statement"
          className="relative rounded-2xl bg-gradient-to-b from-[#11141C] to-[#0A0C11] border border-white/10 p-6 sm:p-10 text-center shadow-xl"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5A919] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Thesis</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Cinema already has the assets. <br />
              <span className="text-[#E5A919]">DigiSynq connects them.</span>
            </h2>

            {/* Progressive Flow Chain */}
            <div className="my-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {flowSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#E5A919]/50 transition-colors">
                    <span className="text-sm font-semibold text-white">
                      {step.label}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      {step.role}
                    </span>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <span className="text-neutral-500 font-bold text-sm select-none">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              DigiSynq doesn't need to own the underlying assets. It creates the digital infrastructure that makes them discoverable, usable, measurable and monetizable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
