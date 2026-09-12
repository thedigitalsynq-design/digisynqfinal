import React from 'react';
import { Network, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface CtaFooterProps {
  onOpenJoinModal: (role?: string) => void;
}

export const CtaFooter: React.FC<CtaFooterProps> = ({ onOpenJoinModal }) => {
  return (
    <div className="bg-[#070A12] text-white/70 transition-colors duration-300">
      {/* SECTION 42: PRIMARY CTA CONVERSION SECTION */}
      <section
        id="cta-section"
        className="py-24 sm:py-32 border-t border-white/[0.08] relative overflow-hidden bg-[#070A12]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#5CE1E6]/[0.05] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[250px] bg-[#8B7CFF]/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/80 border border-[#5CE1E6]/30 text-[#5CE1E6] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(92,225,230,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CE1E6] shadow-[0_0_8px_#5CE1E6]" />
            Join the ecosystem.
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.93] font-denton-extrabold mb-8">
            Find your place.<br />
            <span className="text-white/75 italic font-denton-extrabold-italic">In the network.</span>
          </h2>

          <p className="mt-6 text-base sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Whether you create, produce, distribute, exhibit, promote, invest in or simply love cinema, DigiSynq connects you with the people, resources and opportunities that matter.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoinModal('Join Network')}
              className="cred-btn-primary"
              id="footer-btn-join-network"
            >
              <span>Join the network</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#product-directory"
              className="cred-btn-glass"
              id="footer-btn-explore-products"
            >
              <span>Explore directory</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 55: FINAL BRAND MANIFESTO */}
      <section className="py-28 sm:py-36 border-t border-b border-white/[0.08] bg-[#070A12] text-center relative overflow-hidden viewfinder-box">
        {/* 3D Floating Glassmorphic Spheres */}
        <div className="glass-sphere sphere-navy w-72 h-72 -top-24 -left-20 animate-float-slow opacity-80" />
        <div className="glass-sphere sphere-violet w-80 h-80 -bottom-28 -right-20 animate-float-reverse opacity-75" />
        <div className="glass-sphere sphere-cyan w-40 h-40 top-1/3 right-12 opacity-60" />
        <div className="viewfinder-corner-tl" />
        <div className="viewfinder-corner-tr" />
        <div className="viewfinder-corner-bl" />
        <div className="viewfinder-corner-br" />

        {/* Ambient Film Sprocket Strip Accent */}
        <div className="film-sprocket-bar max-w-5xl mx-auto mb-12">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="film-sprocket-hole" />
          ))}
        </div>
        <div className="cred-hairline absolute top-0 left-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/80 border border-[#8B7CFF]/30 text-[#8B7CFF] font-mono text-[10px] font-bold tracking-[3px] mb-8 backdrop-blur-xl shadow-[0_0_15px_rgba(139,124,255,0.12)]">
            The manifesto.
          </div>

          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.95] font-denton-extrabold mb-6">
            Not everyone gets it.<br />
            <span className="text-white/75 italic font-denton-extrabold-italic">But the visionary do.</span>
          </h3>

          <p className="text-lg sm:text-xl text-white/85 font-normal mb-8 tracking-wide max-w-2xl mx-auto">
            Cinema is full of dots. DigiSynq is the network between them.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-bold tracking-[2px] text-white/80 mb-12">
            {['People', 'Projects', 'Assets', 'Content', 'Audiences', 'Opportunities'].map((tag, i, arr) => (
              <React.Fragment key={tag}>
                <span className="px-3.5 py-1.5 rounded-full bg-[#0D1220]/80 border border-white/[0.12] text-white/90 backdrop-blur-xl">
                  {tag}
                </span>
                {i < arr.length - 1 && <span className="text-white/20 select-none">•</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="pt-8 border-t border-white/[0.08]">
            <div className="flex justify-center mb-6">
              <img
                src="/digisynq-logo.png"
                alt="DigiSynq"
                className="h-16 sm:h-20 w-auto object-contain mx-auto"
              />
            </div>
            <div className="text-xs font-mono font-bold tracking-[3px] text-white/70 mb-2">
              The network between the dots.
            </div>
            <div className="text-[11px] font-mono tracking-[2px] text-white/40 mb-6">
              The asset-light operating network for cinema.
            </div>
            <div className="inline-flex items-center gap-4 text-xs font-bold font-mono tracking-[4px] text-white">
              <span>Connect</span>
              <span className="text-white/70">•</span>
              <span>Synq</span>
              <span className="text-white/70">•</span>
              <span>Scale</span>
            </div>
          </div>
        </div>
        <div className="cred-hairline absolute bottom-0 left-0" />
      </section>

      {/* SECTION 43: COMPREHENSIVE FOOTER */}
      <footer className="py-16 bg-[#070A12] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Platform */}
            <div>
              <span className="text-xs font-mono tracking-widest text-white block mb-4 font-semibold">
                Platform
              </span>
              <ul className="space-y-2.5 text-xs text-white/60">
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
              <span className="text-xs font-mono tracking-widest text-white block mb-4 font-semibold">
                Solutions
              </span>
              <ul className="space-y-2.5 text-xs text-white/60">
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
              <span className="text-xs font-mono tracking-widest text-white block mb-4 font-semibold">
                Company
              </span>
              <ul className="space-y-2.5 text-xs text-white/60">
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
              <span className="text-xs font-mono tracking-widest text-white block mb-4 font-semibold">
                Resources
              </span>
              <ul className="space-y-2.5 text-xs text-white/60">
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
              <span className="text-xs font-mono tracking-widest text-white block mb-4 font-semibold">
                Legal & Trust
              </span>
              <ul className="space-y-2.5 text-xs text-white/60">
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

          <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-mono gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/digisynq-logo.png"
                alt="DigiSynq"
                className="h-5 sm:h-6 w-auto object-contain opacity-80"
              />
              <span>© {new Date().getFullYear()} DigiSynq Technologies Inc. All rights reserved.</span>
            </div>
            <div className="text-white/60">
              The Asset-Light Operating Network for Cinema.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
