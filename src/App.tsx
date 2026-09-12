/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
import { RunbookModal } from './components/RunbookModal';

export default function App() {
  const [theme] = useState<'dark' | 'light'>('dark');

  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [runbookOpen, setRunbookOpen] = useState(false);
  const [runbookChapter, setRunbookChapter] = useState(0);
  const [modalRole, setModalRole] = useState('Producer');
  const [selectedDirectoryCategory, setSelectedDirectoryCategory] = useState<string>('All');

  useEffect(() => {
    document.documentElement.classList.add('dark');
    try {
      localStorage.setItem('digisynq-theme', 'dark');
    } catch {
      // Private-mode storage may throw; theme class above is the source of truth.
    }
  }, []);

  const toggleTheme = () => {
    // DigiSynq ships a locked dark noir theme; keep the toggle as a no-op
    // that re-asserts dark so callers (Navbar) don't need branching.
    document.documentElement.classList.add('dark');
  };

  const handleOpenJoinModal = (role?: string) => {
    if (role) {
      setModalRole(role);
    }
    setJoinModalOpen(true);
  };

  const handleOpenRunbook = (chapterIndex = 0) => {
    setRunbookChapter(chapterIndex);
    setRunbookOpen(true);
  };

  const handleFilterCategoryInDirectory = (categoryName: string) => {
    setSelectedDirectoryCategory(categoryName);
    const directoryEl = document.getElementById('product-directory');
    if (directoryEl) {
      directoryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-white font-sans selection:bg-[#5CE1E6] selection:text-[#070A12] antialiased transition-colors duration-300">
      {/* 1. Global Navigation */}
      <Navbar
        onOpenJoinModal={handleOpenJoinModal}
        onOpenRunbook={() => handleOpenRunbook(0)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        {/* 2 & 3. Hero & Hero Value Statement */}
        <HeroSection
          onOpenJoinModal={() => handleOpenJoinModal('Producer')}
          onOpenRunbook={handleOpenRunbook}
        />

        {/* 4. The Problem */}
        <ProblemSection onOpenRunbook={handleOpenRunbook} />

        {/* 5. The DigiSynq Model Pipeline */}
        <ModelPipeline onOpenRunbook={handleOpenRunbook} />

        {/* 6. Asset-Light Model Comparison */}
        <AssetLightSection onOpenRunbook={handleOpenRunbook} />

        {/* 7. Product Ecosystem (12 Platforms, 82 Capabilities) */}
        <ProductEcosystem
          onSelectPlatform={() => {}}
          onFilterCategoryInDirectory={handleFilterCategoryInDirectory}
          onOpenRunbook={handleOpenRunbook}
        />

        {/* 8. Searchable Product Directory */}
        <ProductDirectory
          initialCategory={selectedDirectoryCategory}
          onOpenJoinModal={handleOpenJoinModal}
          onOpenRunbook={handleOpenRunbook}
        />

        {/* 9. Audience / Customer Segments */}
        <AudienceSolutions
          onOpenJoinModal={handleOpenJoinModal}
          onFilterCategoryInDirectory={handleFilterCategoryInDirectory}
          onOpenRunbook={handleOpenRunbook}
        />

        {/* 10. Interactive Use Cases & Simulation Sandbox */}
        <InteractiveUseCases />

        {/* 11. Capacity Marketplace */}
        <MarketplaceSection
          onOpenJoinModal={handleOpenJoinModal}
          onOpenRunbook={handleOpenRunbook}
        />

        {/* 12 & 13. Intelligence Layer & DigiSynq AI */}
        <IntelligenceSection />

        {/* 14. Network Effect & 10-Stage Business Flywheel */}
        <NetworkEffectFlywheel onOpenRunbook={handleOpenRunbook} />

        {/* 15. Trust Layer: SynqTrust */}
        <TrustLayer onOpenRunbook={handleOpenRunbook} />

        {/* 16. Business Model & Why DigiSynq Comparison */}
        <BusinessModelSection onOpenRunbook={handleOpenRunbook} />

        {/* 17. Future Vision: DigiSynq OS */}
        <DigiSynqOS
          onOpenJoinModal={handleOpenJoinModal}
          onOpenRunbook={handleOpenRunbook}
        />

        {/* 18. About DigiSynq & 8 Company Principles */}
        <AboutAndPrinciples
          onOpenJoinModal={handleOpenJoinModal}
          onOpenRunbook={handleOpenRunbook}
        />
      </main>

      {/* 19 & 20. CTA, Final Brand Statement & Footer */}
      <CtaFooter
        onOpenJoinModal={handleOpenJoinModal}
        onOpenRunbook={handleOpenRunbook}
      />

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

      {/* Executive Business Runbook Reader Modal */}
      <AnimatePresence>
        {runbookOpen && (
          <RunbookModal
            isOpen={runbookOpen}
            onClose={() => setRunbookOpen(false)}
            defaultChapter={runbookChapter}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
