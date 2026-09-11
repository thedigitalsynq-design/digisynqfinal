/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ModelPipeline } from './components/ModelPipeline';
import { AssetLightSection } from './components/AssetLightSection';
import { ProductEcosystem } from './components/ProductEcosystem';
import { ProductDirectory } from './components/ProductDirectory';
import { AudienceSolutions } from './components/AudienceSolutions';
import { InteractiveUseCases } from './components/InteractiveUseCases';
import { MarketplaceSection } from './components/MarketplaceSection';
import { IntelligenceSection } from './components/IntelligenceSection';
import { NetworkEffectFlywheel } from './components/NetworkEffectFlywheel';
import { TrustLayer } from './components/TrustLayer';
import { BusinessModelSection } from './components/BusinessModelSection';
import { DigiSynqOS } from './components/DigiSynqOS';
import { AboutAndPrinciples } from './components/AboutAndPrinciples';
import { CtaFooter } from './components/CtaFooter';
import { JoinModal } from './components/JoinModal';
import { GooeyActionMenu } from './components/GooeyActionMenu';
import { PlatformItem } from './types';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('digisynq-theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState('Producer');
  const [selectedDirectoryCategory, setSelectedDirectoryCategory] = useState<string>('All');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('digisynq-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenJoinModal = (role?: string) => {
    if (role) {
      setModalRole(role);
    }
    setJoinModalOpen(true);
  };

  const handleFilterCategoryInDirectory = (categoryName: string) => {
    setSelectedDirectoryCategory(categoryName);
    const directoryEl = document.getElementById('product-directory');
    if (directoryEl) {
      directoryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] font-sans selection:bg-[#E5A919] selection:text-black antialiased transition-colors duration-300">
      {/* 1. Global Navigation */}
      <Navbar
        onOpenJoinModal={handleOpenJoinModal}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        {/* 2 & 3. Hero & Hero Value Statement */}
        <HeroSection onOpenJoinModal={() => handleOpenJoinModal('Producer')} />

        {/* 4. The Problem */}
        <ProblemSection />

        {/* 5. The DigiSynq Model Pipeline */}
        <ModelPipeline />

        {/* 6. Asset-Light Model Comparison */}
        <AssetLightSection />

        {/* 7. Product Ecosystem (12 Platforms, 82 Capabilities) */}
        <ProductEcosystem
          onSelectPlatform={() => {}}
          onFilterCategoryInDirectory={handleFilterCategoryInDirectory}
        />

        {/* 8. Searchable Product Directory */}
        <ProductDirectory
          initialCategory={selectedDirectoryCategory}
          onOpenJoinModal={handleOpenJoinModal}
        />

        {/* 9. Audience / Customer Segments */}
        <AudienceSolutions onOpenJoinModal={handleOpenJoinModal} />

        {/* 10. Interactive Use Cases & Simulation Sandbox */}
        <InteractiveUseCases />

        {/* 11. Capacity Marketplace */}
        <MarketplaceSection />

        {/* 12 & 13. Intelligence Layer & DigiSynq AI */}
        <IntelligenceSection />

        {/* 14. Network Effect & 10-Stage Business Flywheel */}
        <NetworkEffectFlywheel />

        {/* 15. Trust Layer: SynqTrust */}
        <TrustLayer />

        {/* 16. Business Model & Why DigiSynq Comparison */}
        <BusinessModelSection />

        {/* 17. Future Vision: DigiSynq OS */}
        <DigiSynqOS />

        {/* 18. About DigiSynq & 8 Company Principles */}
        <AboutAndPrinciples />
      </main>

      {/* 19 & 20. CTA, Final Brand Statement & Footer */}
      <CtaFooter onOpenJoinModal={handleOpenJoinModal} />

      {/* Interactive Modal for Joining Network or Partner Inquiries */}
      <AnimatePresence>
        {joinModalOpen && (
          <JoinModal
            isOpen={joinModalOpen}
            onClose={() => setJoinModalOpen(false)}
            defaultRole={modalRole}
          />
        )}
      </AnimatePresence>

      {/* Floating Liquid Gooey Quick Actions Menu */}
      <GooeyActionMenu
        onOpenJoinModal={handleOpenJoinModal}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
}
