import React from 'react';
import { Network, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface CtaFooterProps {
  onOpenJoinModal: (role?: string) => void;
}

export const CtaFooter: React.FC<CtaFooterProps> = ({ onOpenJoinModal }) => {
  return (
    <div className="bg-[#08090C] text-neutral-300">
      {/* SECTION 42: PRIMARY CTA CONVERSION SECTION */}
      <section
        id="cta-section"
        className="py-24 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#08090C] via-[#0E1119] to-[#08090C]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#E5A919]/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-6">
            <Network className="w-3.5 h-3.5" />
            <span>Join the Connected Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Find your place in <br />
            <span className="text-[#E5A919]">the network.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Whether you create, produce, distribute, exhibit, promote, invest in or simply love cinema, DigiSynq is designed to connect you with the people, resources and opportunities around you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoinModal('Join Network')}
              className="inline-flex items-center gap-2 bg-[#E5A919] hover:bg-[#f5b82e] text-black font-semibold text-sm px-7 py-3.5 rounded-lg transition-all shadow-xl shadow-[#E5A919]/20 hover:shadow-[#E5A919]/35 active:scale-[0.98]"
              id="footer-btn-join-network"
            >
              <span>Join the Network</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#product-directory"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium text-sm px-6 py-3.5 rounded-lg transition-colors"
              id="footer-btn-explore-products"
            >
              <span>Explore Products</span>
            </a>

            <button
              onClick={() => onOpenJoinModal('Partner')}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white font-mono text-xs uppercase tracking-wider px-5 py-3.5 rounded-lg transition-colors"
              id="footer-btn-partner"
            >
              <span>Partner with DigiSynq</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 55: FINAL BRAND MANIFESTO */}
      <section className="py-20 border-t border-b border-white/10 bg-[#050608] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xl sm:text-2xl text-neutral-400 font-light mb-6">
            Cinema is full of dots.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base font-medium text-neutral-200 mb-8">
            <span className="px-3 py-1 rounded bg-white/5 border border-white/10">People</span>
            <span>•</span>
            <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Projects</span>
            <span>•</span>
            <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Assets</span>
            <span>•</span>
            <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Content</span>
            <span>•</span>
            <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Audiences</span>
            <span>•</span>
            <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Ideas</span>
            <span>•</span>
            <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Opportunities</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            DigiSynq connects them.
          </h3>

          <div className="pt-6 border-t border-white/10">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1">
              DIGI<span className="text-[#E5A919]">SYNQ</span>
            </div>
            <div className="text-sm font-semibold tracking-wider uppercase text-neutral-300 mb-1">
              The Network Between the Dots.
            </div>
            <div className="text-xs font-mono text-neutral-400 mb-4">
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

      {/* SECTION 43: COMPREHENSIVE FOOTER */}
      <footer className="py-16 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Platform */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white block mb-4">
                Platform
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {['Platform Overview', 'Products Directory', 'Intelligence Layer', 'Capacity Marketplace', 'Network Graph'].map((item) => (
                  <li key={item}>
                    <a href="#product-ecosystem" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white block mb-4">
                Solutions
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {['Producers', 'Talent & Crew', 'Distributors', 'Exhibitors', 'Brands & Sponsors', 'Creators'].map((item) => (
                  <li key={item}>
                    <a href="#audience-solutions" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white block mb-4">
                Company
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {['About DigiSynq', 'Long-term Vision', 'Operating Principles', 'Contact Leadership', 'Ecosystem Careers'].map((item) => (
                  <li key={item}>
                    <a href="#about-vision" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white block mb-4">
                Resources
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {['Cinema Insights', 'Industry Research', 'API Documentation', 'Product Changelog', 'Trust Guidelines'].map((item) => (
                  <li key={item}>
                    <a href="#platform-model" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Legal */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white block mb-4">
                Legal & Trust
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {['Privacy Policy', 'Terms of Network', 'Cookie Preferences', 'Data Governance', 'SynqTrust Standards'].map((item) => (
                  <li key={item}>
                    <a href="#trust-layer" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">DigiSynq</span>
              <span>© {new Date().getFullYear()} DigiSynq Technologies Inc. All rights reserved.</span>
            </div>
            <div className="text-neutral-400">
              The Asset-Light Operating Network for Cinema.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
