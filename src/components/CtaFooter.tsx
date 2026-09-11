import React from 'react';
import { Network, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface CtaFooterProps {
  onOpenJoinModal: (role?: string) => void;
}

export const CtaFooter: React.FC<CtaFooterProps> = ({ onOpenJoinModal }) => {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-secondary)] transition-colors duration-300">
      {/* SECTION 42: PRIMARY CTA CONVERSION SECTION */}
      <section
        id="cta-section"
        className="py-24 sm:py-32 border-t border-[var(--border-hairline)] relative overflow-hidden bg-[var(--bg-canvas)]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[var(--accent-gold)]/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="ds-section-label mb-6">
            <Network className="w-3.5 h-3.5" />
            Join the Connected Ecosystem
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
            Find your place in <br />
            <span className="text-[#E5A919]">the network.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            Whether you create, produce, distribute, exhibit, promote, invest in or simply love cinema, DigiSynq is designed to connect you with the people, resources and opportunities around you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => onOpenJoinModal('Join Network')}
              className="ds-btn-primary inline-flex items-center gap-2 text-sm px-8 py-3.5 font-semibold"
              id="footer-btn-join-network"
            >
              <span>Join the Network</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#product-directory"
              className="apple-btn-secondary inline-flex items-center gap-2 text-sm px-7 py-3.5 font-medium"
              id="footer-btn-explore-products"
            >
              <span>Explore Products</span>
            </a>

            <button
              onClick={() => onOpenJoinModal('Partner')}
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-xs uppercase tracking-wider px-5 py-3.5 rounded-full transition-colors"
              id="footer-btn-partner"
            >
              <span>Partner with DigiSynq</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 55: FINAL BRAND MANIFESTO - Apple Minimalist Statement */}
      <section className="py-20 border-t border-b border-black/[0.06] bg-[var(--bg-canvas-subtle)] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-normal mb-6 tracking-tight">
            Cinema is full of dots.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[var(--text-primary)] mb-8">
            {['People', 'Projects', 'Assets', 'Content', 'Audiences', 'Ideas', 'Opportunities'].map((tag, i, arr) => (
              <React.Fragment key={tag}>
                <span className="px-3 py-1 rounded-full apple-glass text-xs font-mono">
                  {tag}
                </span>
                {i < arr.length - 1 && <span className="text-[var(--text-tertiary)] select-none">•</span>}
              </React.Fragment>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-6 tracking-tight">
            DigiSynq connects them.
          </h3>

          <div className="pt-6 border-t border-black/[0.06]">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-1">
              DIGI<span className="text-[#E5A919]">SYNQ</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--text-secondary)] mb-1">
              The Network Between the Dots.
            </div>
            <div className="text-xs font-mono text-[var(--text-tertiary)] mb-4">
              The Asset-Light Operating Network for Cinema.
            </div>
            <div className="inline-flex items-center gap-3 text-xs font-bold font-mono tracking-widest text-[#E5A919] uppercase">
              <span>Connect</span>
              <span>•</span>
              <span>Synq</span>
              <span>•</span>
              <span>Unlock</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 43: COMPREHENSIVE FOOTER - Apple Standard Multi-Column */}
      <footer className="py-16 bg-[var(--bg-canvas)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Platform */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] block mb-4 font-semibold">
                Platform
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                {['Platform Overview', 'Products Directory', 'Intelligence Layer', 'Capacity Marketplace', 'Network Graph'].map((item) => (
                  <li key={item}>
                    <a href="#product-ecosystem" className="hover:text-[var(--text-primary)] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] block mb-4 font-semibold">
                Solutions
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                {['Producers', 'Talent & Crew', 'Distributors', 'Exhibitors', 'Brands & Sponsors', 'Creators'].map((item) => (
                  <li key={item}>
                    <a href="#audience-solutions" className="hover:text-[var(--text-primary)] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] block mb-4 font-semibold">
                Company
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                {['About DigiSynq', 'Long-term Vision', 'Operating Principles', 'Contact Leadership', 'Ecosystem Careers'].map((item) => (
                  <li key={item}>
                    <a href="#about-vision" className="hover:text-[var(--text-primary)] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] block mb-4 font-semibold">
                Resources
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                {['Cinema Insights', 'Industry Research', 'API Documentation', 'Product Changelog', 'Trust Guidelines'].map((item) => (
                  <li key={item}>
                    <a href="#platform-model" className="hover:text-[var(--text-primary)] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Legal */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] block mb-4 font-semibold">
                Legal & Trust
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)]">
                {['Privacy Policy', 'Terms of Network', 'Cookie Preferences', 'Data Governance', 'SynqTrust Standards'].map((item) => (
                  <li key={item}>
                    <a href="#trust-layer" className="hover:text-[var(--text-primary)] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-tertiary)] font-mono gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[var(--text-primary)] font-semibold">DigiSynq</span>
              <span>© {new Date().getFullYear()} DigiSynq Technologies Inc. All rights reserved.</span>
            </div>
            <div className="text-[var(--text-secondary)]">
              The Asset-Light Operating Network for Cinema.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
