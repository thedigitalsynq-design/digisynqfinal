import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { NetworkVisualizer } from './NetworkVisualizer';
import cinemaLensPrism from '../assets/cinema-lens-prism.jpg';

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
      className="relative pt-32 sm:pt-40 pb-0 overflow-hidden bg-[#070A12]"
    >
      {/* Deep Midnight Void & Luminous Ambient Horizon Glow */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(92,225,230,0.07)_0%,rgba(139,124,255,0.05)_40%,transparent_70%)] blur-[110px] opacity-80" />
      <div className="pointer-events-none absolute top-36 -left-20 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(77,141,255,0.04)_0%,transparent_65%)] blur-[100px] opacity-60" />
      <div className="pointer-events-none absolute top-28 -right-20 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(139,124,255,0.05)_0%,transparent_65%)] blur-[110px] opacity-70" />

      {/* Subtle curved glowing horizon line */}
      <div className="pointer-events-none absolute top-64 left-1/2 -translate-x-1/2 w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[0.5px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Cinematic Telemetry Status Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between py-2 px-5 rounded-sm border border-white/15 bg-[#070A12]/80 backdrop-blur-xl font-mono text-[10px] text-white/60 mb-8 max-w-4xl mx-auto tracking-[2.5px] shadow-[0_4px_20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#5EF2B0] animate-pulse shadow-[0_0_8px_#5EF2B0]" />
            <span className="text-white font-bold tracking-[3px]">Rec 24.00 FPS</span>
            <span className="text-white/20">|</span>
            <span className="hidden sm:inline">Anamorphic 2.39:1</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/70">Mesh: 28 links active</span>
            <span className="text-white/20">|</span>
            <span className="text-[#5EF2B0] font-bold">Latency 2ms</span>
          </div>
        </motion.div>

        {/* ── Eyebrow Badge (CRED Style) ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-black border border-white/25 text-white/80 font-mono text-[11px] font-bold tracking-[3.5px] shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#FFF]" />
            The asset-light operating network for cinema.
          </div>
        </motion.div>

        {/* ── Hero Headline (Syne + Momo Trust Display) ── */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-[0.93] cred-headline font-denton-extrabold"
          >
            The network<br />
            <span className="text-white/75 italic font-denton-extrabold-italic">between the dots.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.20, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg sm:text-2xl text-white/90 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            DigiSynq connects the fragmented people, projects, assets, content, audiences
            and opportunities that power the global cinema ecosystem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-xs sm:text-sm font-mono tracking-[3px] text-white/40 max-w-xl mx-auto"
          >
            An asset-light operating system for visionaries.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenJoinModal}
              className="cred-btn-primary w-full sm:w-auto"
              id="hero-cta-join-network"
            >
              <span>Join the network</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#product-ecosystem"
              className="cred-btn-glass w-full sm:w-auto"
              id="hero-cta-explore-products"
            >
              <span>Explore products</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
          </motion.div>
        </div>

        {/* Monolithic Metrics Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto my-16 py-10 border-y border-white/10 text-center font-syne"
        >
          <div className="flex flex-col items-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none">
              12
            </div>
            <div className="mt-3 text-xs font-mono font-bold tracking-[3px] text-white/50">
              Ecosystem Platforms
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none">
              28
            </div>
            <div className="mt-3 text-xs font-mono font-bold tracking-[3px] text-white/50">
              Full-Mesh Links
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none">
              10
            </div>
            <div className="mt-3 text-xs font-mono font-bold tracking-[3px] text-white/50">
              OS Stack Layers
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none">
              100%
            </div>
            <div className="mt-3 text-xs font-mono font-bold tracking-[3px] text-white/50">
              Asset-Light Network
            </div>
          </div>
        </motion.div>

        {/* ── Trust Ticker Strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.44 }}
          className="flex items-center justify-center gap-3 flex-wrap text-xs font-mono tracking-[2.5px] text-white/40 mb-12"
        >
          <span className="text-white/70">Crafted for:</span>
          {trustItems.map((item, i) => (
            <React.Fragment key={item}>
              <span className="text-white/70 font-semibold">{item}</span>
              {i < trustItems.length - 1 && <span className="text-white/20">·</span>}
            </React.Fragment>
          ))}
        </motion.div>

        {/* ── Dynamic Interactive Network Visualizer with Viewfinder Framing & 3D Glassmorphic Spheres ── */}
        <div className="relative my-20">
          {/* Floating 3D Ambient Depth Spheres */}
          <div className="glass-sphere sphere-navy w-44 h-44 -top-14 -left-10 animate-float-slow opacity-90" />
          <div className="glass-sphere sphere-violet w-52 h-52 -bottom-20 -right-14 animate-float-reverse opacity-85" />
          <div className="glass-sphere sphere-aurora w-32 h-32 top-1/4 -right-8 animate-float-slow opacity-80" />
          <div className="glass-sphere sphere-cyan w-32 h-32 -bottom-10 left-1/4 animate-float-reverse opacity-75" />
          <div className="glass-sphere sphere-navy w-24 h-24 top-6 right-1/4 opacity-70" />

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] overflow-hidden cred-card p-2 sm:p-4 viewfinder-box relative z-10"
        >
          <div className="viewfinder-corner-tl" />
          <div className="viewfinder-corner-tr" />
          <div className="viewfinder-corner-bl" />
          <div className="viewfinder-corner-br" />
          <NetworkVisualizer />
        </motion.div>
      </div>

        {/* ── Hero Value Statement (Obsidian Smoked Glassmorphism Mockup Composition) ── */}
        <div className="relative my-14">
          {/* 3D Realistic Obsidian Charcoal Spheres (Mockup Composition) */}
          <div className="obsidian-sphere sphere-obsidian-hero w-60 h-60 -top-16 -left-12 opacity-95 animate-float-slow" />
          <div className="obsidian-sphere sphere-obsidian w-48 h-48 -top-12 right-12 opacity-90 animate-float-reverse" />
          <div className="obsidian-sphere sphere-obsidian-hero w-72 h-72 -bottom-20 -right-16 opacity-95 animate-float-slow" />
          <div className="obsidian-sphere sphere-obsidian w-52 h-52 -bottom-16 left-1/4 opacity-85 animate-float-reverse" />

          {/* Floating Specular Glass Micro-Bubbles (Mockup Detail) */}
          <div className="glass-micro-bubble w-9 h-9 top-1/4 -left-8 animate-float-slow opacity-90" />
          <div className="glass-micro-bubble w-6 h-6 top-1/2 -right-5 animate-float-reverse opacity-85" />
          <div className="glass-micro-bubble w-7 h-7 -bottom-6 right-1/3 opacity-80" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            id="hero-value-statement"
            className="relative rounded-[20px] cred-card p-8 sm:p-14 text-center overflow-hidden mb-0 viewfinder-box z-10"
          >
          <div className="viewfinder-corner-tl" />
          <div className="viewfinder-corner-tr" />
          <div className="viewfinder-corner-bl" />
          <div className="viewfinder-corner-br" />
          {/* Cinematic Anamorphic Lens Background Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <img
              src={cinemaLensPrism}
              alt="Anamorphic Cinema Optics"
              className="w-full h-full object-cover object-center filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/90 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
              Core thesis.
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-denton-extrabold mb-6">
              Cinema already has the assets.<br />
              <span className="text-white/75 italic font-denton-extrabold-italic">DigiSynq connects them.</span>
            </h2>

            {/* Progressive Flow Chain */}
            <div className="my-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {flowSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center px-5 py-3 rounded-lg bg-black/70 border border-white/15 hover:border-white/40 transition-all duration-200 shadow-md">
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-[2px] text-white">
                      {step.label}
                    </span>
                    <span className="text-[10px] text-white/75 font-mono mt-1">
                      {step.role}
                    </span>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <span className="text-white/30 font-bold text-xs select-none">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
              DigiSynq doesn't need to own the underlying assets. It creates the digital
              infrastructure that makes them discoverable, usable, measurable and monetizable.
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
