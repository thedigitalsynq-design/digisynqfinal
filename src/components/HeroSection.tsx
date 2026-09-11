import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
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
      className="relative pt-32 sm:pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[var(--bg-canvas)] via-[var(--bg-canvas-subtle)] to-[var(--bg-canvas)]"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-[#E5A919]/5 dark:bg-[#E5A919]/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-16 left-1/4 w-80 h-80 bg-blue-500/[0.02] dark:bg-blue-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Definition Eyebrow Badge - Apple Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full apple-glass shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E5A919] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--text-secondary)]">
              The Asset-Light Operating Network for Cinema
            </span>
          </div>
        </motion.div>

        {/* Master Headline & Subheadline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.08] font-sans"
          >
            The Network Between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-secondary)] to-[#E5A919]">
              the Dots.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-3xl mx-auto"
          >
            DigiSynq connects the fragmented people, projects, assets, content, audiences and opportunities that power the cinema ecosystem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm sm:text-base text-[var(--text-tertiary)] max-w-2xl mx-auto leading-normal"
          >
            An asset-light operating network built to make cinema more connected, intelligent and efficient.
          </motion.p>

          {/* CTAs - Apple Style Pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <a
              href="#network-flow"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 apple-btn-primary px-7 py-3.5 text-sm"
              id="hero-cta-explore-network"
            >
              <span>Explore the Network</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#product-ecosystem"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 apple-btn-secondary px-7 py-3.5 text-sm"
              id="hero-cta-explore-products"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4 text-[var(--text-tertiary)]" />
            </a>
          </motion.div>
        </div>

        {/* Dynamic Interactive Network Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 mb-20"
        >
          <NetworkVisualizer />
        </motion.div>

        {/* SECTION 10: HERO VALUE STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="hero-value-statement"
          className="relative rounded-3xl apple-card p-8 sm:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5A919] mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Thesis</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Cinema already has the assets. <br />
              <span className="text-[#E5A919]">DigiSynq connects them.</span>
            </h2>

            {/* Progressive Flow Chain */}
            <div className="my-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {flowSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center px-4 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#E5A919]/50 transition-all duration-200">
                    <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      {step.label}
                    </span>
                    <span className="text-[10px] text-[var(--text-tertiary)] font-mono mt-0.5">
                      {step.role}
                    </span>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <span className="text-[var(--text-tertiary)] font-bold text-xs select-none">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
              DigiSynq doesn't need to own the underlying assets. It creates the digital infrastructure that makes them discoverable, usable, measurable and monetizable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
