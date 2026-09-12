import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';
import digisynqLogo from '../assets/digisynq-logo.png';

interface NavbarProps {
  onOpenJoinModal: (role?: string) => void;
  onOpenRunbook?: () => void;
  onSelectProductCategory?: (category: string) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenJoinModal,
  onOpenRunbook,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Platform', href: '#platform-model' },
    { label: 'Products', href: '#product-ecosystem' },
    { label: 'Network', href: '#network-flow' },
    { label: 'Solutions', href: '#audience-solutions' },
    { label: 'Intelligence', href: '#intelligence' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'About', href: '#about-vision' },
  ];

  return (
    <header
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto rounded-full bg-[#07080B]/85 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.15)] px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto">

        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center group focus:outline-none"
          id="brand-logo-link"
        >
          <img
            src={digisynqLogo}
            alt="DigiSynq"
            className="h-8 sm:h-9 w-auto object-contain transition-all duration-200"
          />
        </a>

        {/* Desktop Nav Links — CRED-style tracked  */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-mono font-bold tracking-[0.18em] text-white/80 hover:text-[#5CE1E6] px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all duration-200"
              id={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {onOpenRunbook && (
            <button
              onClick={onOpenRunbook}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-[0.16em] text-[#5CE1E6] hover:text-white px-3 py-1.5 rounded-full bg-[#5CE1E6]/10 border border-[#5CE1E6]/30 hover:border-[#5CE1E6]/60 transition-all duration-200"
              id="cta-open-runbook-nav"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>RUNBOOK</span>
            </button>
          )}

          <a
            href="#product-directory"
            className="text-[11px] font-mono font-bold tracking-[0.18em] text-white/80 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all duration-200"
            id="cta-explore-directory"
          >
            EXPLORE
          </a>

          <button
            onClick={() => onOpenJoinModal()}
            className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[2.5px] bg-white hover:bg-white/90 text-[#070A12] px-5 py-2 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(92,225,230,0.3)] active:scale-[0.98]"
            id="cta-join-network-nav"
            style={{ fontFamily: "'Denton', sans-serif" }}
          >
            <span>Join club</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenRunbook && (
            <button
              onClick={onOpenRunbook}
              className="text-[10px] font-mono font-bold tracking-[1.5px] text-[#5CE1E6] bg-[#5CE1E6]/10 border border-[#5CE1E6]/30 px-2.5 py-1.5 rounded-full"
            >
              DOCS
            </button>
          )}
          <button
            onClick={() => onOpenJoinModal()}
            className="text-[11px] font-bold tracking-[2px] bg-white text-[#070A12] px-3.5 py-1.5 rounded-full active:scale-95 transition-transform"
          >
            JOIN
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white/85 hover:text-white focus:outline-none rounded-xl bg-white/[0.06] border border-white/[0.10] transition-colors"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden max-w-6xl mx-auto mt-2 bg-[#070A12]/95 border border-white/[0.14] rounded-3xl px-6 pt-5 pb-6 space-y-1 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_1px_0_rgba(255,255,255,0.2)] overflow-hidden pointer-events-auto"
          >
            {/* Logo in mobile drawer */}
            <div className="pb-4 mb-2 border-b border-white/[0.08]">
              <img
                src={digisynqLogo}
                alt="DigiSynq"
                className="h-8 w-auto object-contain"
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-mono font-bold tracking-[0.2em] text-white/80 hover:text-[#5CE1E6] py-2.5 border-b border-white/[0.06] transition-colors last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              {onOpenRunbook && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenRunbook(); }}
                  className="w-full flex items-center justify-center gap-2 text-center text-xs font-mono font-bold tracking-[0.18em] text-[#5CE1E6] bg-[#5CE1E6]/10 border border-[#5CE1E6]/30 py-2.5 rounded-full transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Executive runbook</span>
                </button>
              )}
              <a
                href="#product-directory"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs font-mono font-bold tracking-[0.2em] text-white/70 py-2.5 rounded-full border border-white/[0.16] hover:bg-white/[0.06] transition-colors"
              >
                Explore directory
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenJoinModal(); }}
                className="w-full text-center text-xs font-bold tracking-[2.5px] text-[#070A12] bg-white hover:bg-white/90 py-3 rounded-full transition-colors active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                Join the network
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
