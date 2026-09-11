import React, { useState } from 'react';
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
      className="py-24 bg-[#0A0C11] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4">
            <span>Portfolio Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            One network. Twelve product platforms.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            DigiSynq brings specialized products together through a shared network, intelligence, trust and transaction infrastructure.
          </p>

          <p className="mt-2 text-xs font-mono uppercase text-neutral-400">
            Total Product Universe: 12 Platforms • 82 Interconnected Capabilities
          </p>
        </div>

        {/* Central Interconnected Hub Visual (#53 Interactive Product Ecosystem) */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121520] to-[#0A0C11] border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5A919]/10 border border-[#E5A919]/30 flex items-center justify-center">
                <ActiveIcon className="w-5 h-5 text-[#E5A919]" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E5A919]">
                  Platform Focus
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activePlatform.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                {activePlatform.highlightMetric} {activePlatform.metricsLabel}
              </span>
              <button
                onClick={() => onFilterCategoryInDirectory(activePlatform.category)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-[#E5A919] hover:bg-[#f5b82e] text-black px-4 py-2 rounded-lg transition-colors"
                id="btn-explore-category-directory"
              >
                <span>{activePlatform.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-2">
              <div className="text-sm font-semibold text-neutral-200">
                {activePlatform.tagline}
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {activePlatform.description}
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Included Products & Capabilities ({activePlatform.products.length})
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {activePlatform.products.map((prodName) => (
                  <div
                    key={prodName}
                    className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#E5A919]/40 hover:bg-white/[0.06] transition-colors"
                  >
                    <span className="text-xs font-bold text-white font-mono block">
                      {prodName}
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      Synchronized Module
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 12 Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PLATFORMS.map((platform, idx) => {
            const Icon = ICON_MAP[platform.iconName] || Network;
            const isSelected = activePlatformId === platform.id;

            return (
              <div
                key={platform.id}
                onClick={() => setActivePlatformId(platform.id)}
                className={`group cursor-pointer rounded-xl p-5 sm:p-6 transition-all border text-left ${
                  isSelected
                    ? 'bg-[#151926] border-[#E5A919] shadow-xl shadow-[#E5A919]/10'
                    : 'bg-[#0E1017] border-white/10 hover:border-white/25 hover:bg-[#12141F]'
                }`}
                id={`platform-card-${platform.id}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#E5A919] text-black'
                        : 'bg-white/5 text-[#E5A919] group-hover:bg-[#E5A919]/20'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-neutral-500">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5A919] transition-colors mb-1">
                  {platform.name}
                </h4>

                <p className="text-xs text-[#E5A919] font-medium mb-2">
                  {platform.tagline}
                </p>

                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                  {platform.description}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-neutral-400">
                    {platform.products.length} Products
                  </span>
                  <span className="text-[#E5A919] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
