import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PLATFORMS } from '../data/platformsData';
import { PlatformItem } from '../types';
import {
  LineChart,
  Users,
  ShieldAlert,
  Sparkles,
  Clapperboard,
  Film,
  Megaphone,
  FileCheck,
  Coins,
  Layers,
  Sliders,
  Network,
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ProductEcosystemProps {
  onSelectPlatform: (platform: PlatformItem) => void;
  onFilterCategoryInDirectory: (categoryName: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  LineChart,
  Users,
  ShieldAlert,
  Sparkles,
  Clapperboard,
  Film,
  Megaphone,
  FileCheck,
  Coins,
  Layers,
  Sliders,
  Network,
};

export const ProductEcosystem: React.FC<ProductEcosystemProps> = ({
  onSelectPlatform,
  onFilterCategoryInDirectory,
}) => {
  const [activePlatformId, setActivePlatformId] = useState<string>(PLATFORMS[0].id);

  const activePlatform = PLATFORMS.find((p) => p.id === activePlatformId) || PLATFORMS[0];
  const ActiveIcon = ICON_MAP[activePlatform.iconName] || Network;

  return (
    <section
      id="product-ecosystem"
      className="py-24 sm:py-32 bg-[var(--bg-canvas-subtle)] border-t border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="ds-section-label mb-5">
            Portfolio Architecture
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            One network. Twelve product platforms.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            DigiSynq brings specialized products together through a shared network, intelligence, trust and transaction infrastructure.
          </p>

          <p className="mt-2 text-xs font-mono uppercase text-[var(--text-tertiary)] font-medium">
            Total Product Universe: 12 Platforms • 82 Interconnected Capabilities
          </p>
        </div>

        {/* Central Interconnected Hub Visual - Apple Feature Banner */}
        <div className="mb-14 p-6 sm:p-9 rounded-3xl ds-card overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-black/[0.06]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#E5A919]/10 border border-[#E5A919]/30 flex items-center justify-center">
                    <ActiveIcon className="w-5 h-5 text-[#E5A919]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#E5A919] font-semibold">
                      Platform Focus
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                      {activePlatform.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <span className="text-xs font-mono text-[var(--text-tertiary)] hidden sm:inline font-medium">
                    {activePlatform.highlightMetric} {activePlatform.metricsLabel}
                  </span>
                  <button
                    onClick={() => onFilterCategoryInDirectory(activePlatform.category)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#E5A919] hover:bg-[#f5b82e] text-black px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
                    id="btn-explore-category-directory"
                  >
                    <span>{activePlatform.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 space-y-2">
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    {activePlatform.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {activePlatform.description}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] mb-3 font-semibold">
                    Included Products & Capabilities ({activePlatform.products.length})
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {activePlatform.products.map((prodName) => (
                      <div
                        key={prodName}
                        className="p-3 rounded-xl bg-black/[0.02] border border-black/[0.05] hover:border-[#E5A919]/40 transition-colors"
                      >
                        <span className="text-xs font-bold text-[var(--text-primary)] font-mono block">
                          {prodName}
                        </span>
                        <span className="text-[10px] text-[var(--text-tertiary)]">
                          Synchronized Module
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 12 Platforms Grid - Apple Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PLATFORMS.map((platform, idx) => {
            const Icon = ICON_MAP[platform.iconName] || Network;
            const isSelected = activePlatformId === platform.id;

            return (
              <motion.div
                key={platform.id}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                onClick={() => setActivePlatformId(platform.id)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-200 border text-left ${
                  isSelected
                    ? 'bg-white border-2 border-[#E5A919] shadow-xl ring-2 ring-[#E5A919]/15'
                    : 'ds-card hover:border-[var(--border-subtle)]'
                }`}
                id={`platform-card-${platform.id}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[var(--accent-gold)]/20 text-[var(--accent-gold)]'
                        : 'bg-[var(--bg-secondary)] text-[var(--accent-gold)] group-hover:bg-[var(--accent-gold)]/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-[var(--text-tertiary)] font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className={`text-base sm:text-lg font-bold tracking-tight mb-1 ${isSelected ? 'text-[var(--text-primary)]' : 'text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]'} transition-colors`}>
                  {platform.name}
                </h4>

                <p className="text-xs text-[#E5A919] font-medium mb-2">
                  {platform.tagline}
                </p>

                <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-4">
                  {platform.description}
                </p>

                <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
                    {platform.products.length} Products
                  </span>
                  <span className="text-[#E5A919] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
