import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Network } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (role?: string) => void;
  onSelectProductCategory?: (category: string) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenJoinModal,
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
      <div className="max-w-6xl mx-auto rounded-full bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-sm px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto">

        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
          id="brand-logo-link"
        >
          <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#111111] group-hover:opacity-90 transition-all duration-200">
            <Network className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)] font-sans">
            Digi<span className="text-[var(--accent-gold)]">Synq</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3.5 py-1.5 rounded-full hover:bg-black/[0.04] transition-all duration-150"
              id={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#product-directory"
            className="text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3.5 py-1.5 rounded-full hover:bg-black/[0.04] transition-all duration-150"
            id="cta-explore-directory"
          >
            Explore
          </a>

          <button
            onClick={() => onOpenJoinModal()}
            className="group inline-flex items-center gap-1.5 text-[13px] font-semibold bg-[#111111] hover:bg-black text-white px-5 py-2 rounded-full transition-all duration-200 shadow-xs"
            id="cta-join-network-nav"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenJoinModal()}
            className="text-[12px] font-semibold bg-[#111111] text-white px-3.5 py-1.5 rounded-full active:scale-95 transition-transform"
          >
            Join
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none rounded-xl bg-black/[0.04] border border-black/[0.07] transition-colors"
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
            className="md:hidden max-w-6xl mx-auto mt-2 bg-white/98 border border-black/[0.08] rounded-3xl px-6 py-6 space-y-1 backdrop-blur-2xl shadow-xl overflow-hidden pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-gold)] py-2.5 border-b border-black/[0.04] transition-colors last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="#product-directory"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-sm font-medium text-[var(--text-primary)] py-2.5 rounded-full border border-black/[0.10] hover:bg-black/[0.03] transition-colors"
              >
                Explore DigiSynq Directory
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenJoinModal(); }}
                className="w-full text-center text-sm font-semibold text-white bg-[#111111] hover:bg-black py-2.5 rounded-full transition-colors active:scale-[0.98]"
              >
                Join the Network
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
