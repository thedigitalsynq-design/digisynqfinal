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

  const trustItems = [
    'Producers', 'Distributors', 'Exhibitors', 'Talent & Crew',
    'Studios', 'Brands & Sponsors', 'Creators', 'Investors',
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-0 overflow-hidden bg-[var(--bg-canvas)]"
    >
      {/* Soft Pastel Blurred Mesh Background Blobs (Reference Style from user mock) */}
      <div className="pointer-events-none absolute top-24 -right-16 sm:right-4 w-[480px] sm:w-[650px] h-[480px] sm:h-[650px] rounded-full bg-gradient-to-br from-pink-300/40 via-purple-300/30 to-sky-300/40 blur-[100px] opacity-75" />
      <div className="pointer-events-none absolute top-44 -left-16 sm:left-8 w-[420px] sm:w-[550px] h-[420px] sm:h-[550px] rounded-full bg-gradient-to-tr from-amber-200/50 via-orange-200/40 to-pink-200/30 blur-[95px] opacity-65" />
      <div className="pointer-events-none absolute top-[520px] left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[450px] rounded-full bg-gradient-to-r from-sky-200/40 via-pink-200/30 to-amber-200/40 blur-[115px] opacity-55" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Eyebrow Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-7"
        >
          <div className="ds-section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
            The Asset-Light Operating Network for Cinema
          </div>
        </motion.div>

        {/* ── Hero Headline ── */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.04]"
            style={{ fontFamily: "'Momo Trust Display', sans-serif" }}
          >
            The Network{' '}
            <span className="block sm:inline">Between{' '}
              <span className="relative inline-block px-3.5 py-1 rounded-2xl bg-[#E5A919]/15 border border-[#E5A919]/30 text-[var(--text-primary)] font-bold">
                the Dots.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.20, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl mx-auto"
          >
            DigiSynq connects the fragmented people, projects, assets, content, audiences
            and opportunities that power the cinema ecosystem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm sm:text-base text-[var(--text-tertiary)] max-w-xl mx-auto leading-normal"
          >
            An asset-light operating network built to make cinema more connected,
            intelligent and efficient.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={onOpenJoinModal}
              className="ds-btn-primary w-full sm:w-auto text-sm px-8 py-3.5"
              id="hero-cta-join-network"
            >
              <span>Join the Network</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#product-ecosystem"
              className="ds-btn-secondary w-full sm:w-auto text-sm px-7 py-3.5"
              id="hero-cta-explore-products"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
          </motion.div>
        </div>

        {/* Big Clean Stats Counter Row (Inspired by Reference Image 4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mx-auto mb-12 text-center"
        >
          <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-[#E5A919]/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              <span className="text-[var(--accent-gold)] font-bold text-2xl mr-0.5">+</span>12
            </div>
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">Ecosystem Platforms</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-[#E5A919]/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              <span className="text-[var(--accent-gold)] font-bold text-2xl mr-0.5">+</span>28
            </div>
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">Full-Mesh Links</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-[#E5A919]/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              <span className="text-[var(--accent-gold)] font-bold text-2xl mr-0.5">+</span>10
            </div>
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">OS Stack Layers</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:border-[#E5A919]/40 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              100%
            </div>
            <div className="text-xs text-[var(--text-secondary)] font-medium mt-1">Asset-Light Model</div>
          </div>
        </motion.div>

        {/* ── Trust Ticker Strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.44 }}
          className="flex items-center justify-center gap-3 flex-wrap text-xs text-[var(--text-tertiary)] mb-10 font-medium"
        >
          <span className="text-[var(--text-tertiary)]">Trusted by:</span>
          {trustItems.map((item, i) => (
            <React.Fragment key={item}>
              <span className="text-[var(--text-secondary)] font-medium">{item}</span>
              {i < trustItems.length - 1 && <span className="text-[var(--border-medium)]">·</span>}
            </React.Fragment>
          ))}
        </motion.div>

        {/* ── Dynamic Interactive Network Visualizer ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[32px] overflow-hidden border border-black/[0.08] shadow-xl mb-20 bg-white"
        >
          <NetworkVisualizer />
        </motion.div>

        {/* ── Hero Value Statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="hero-value-statement"
          className="relative rounded-[28px] ds-card p-8 sm:p-14 text-center overflow-hidden mb-0"
        >
          {/* Skyline silhouette */}
          <div className="frost-skyline-silhouette">
            <svg viewBox="0 0 1000 240" preserveAspectRatio="none" className="w-full h-full fill-current text-gray-400">
              <rect x="25" y="140" width="60" height="100" rx="4" />
              <rect x="95" y="90" width="75" height="150" rx="4" />
              <rect x="180" y="150" width="55" height="90" rx="4" />
              <rect x="245" y="60" width="95" height="180" rx="4" />
              <rect x="350" y="110" width="70" height="130" rx="4" />
              <rect x="430" y="40" width="120" height="200" rx="4" />
              <rect x="560" y="125" width="80" height="115" rx="4" />
              <rect x="650" y="70" width="105" height="170" rx="4" />
              <rect x="765" y="140" width="65" height="100" rx="4" />
              <rect x="840" y="50" width="115" height="190" rx="4" />
              <rect x="965" y="105" width="40" height="135" rx="4" />
            </svg>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent-gold)] mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Thesis</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-snug">
              Cinema already has the assets.{' '}
              <span className="text-[var(--accent-gold)]">DigiSynq connects them.</span>
            </h2>

            {/* Progressive Flow Chain */}
            <div className="my-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {flowSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center px-4 py-2.5 rounded-xl ds-card-muted border border-[var(--border-hairline)] hover:border-[var(--accent-gold)]/50 transition-all duration-200">
                    <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      {step.label}
                    </span>
                    <span className="text-[10px] text-[var(--text-tertiary)] font-mono mt-0.5">
                      {step.role}
                    </span>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <span className="text-[var(--text-tertiary)] font-bold text-xs select-none">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
              DigiSynq doesn't need to own the underlying assets. It creates the digital
              infrastructure that makes them discoverable, usable, measurable and monetizable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
