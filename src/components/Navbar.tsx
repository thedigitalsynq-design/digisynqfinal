import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Network, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (role?: string) => void;
  onSelectProductCategory?: (category: string) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenJoinModal,
  theme = 'dark',
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/75 dark:bg-[#0B0C0E]/75 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-sm dark:shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/10 group-hover:border-[#E5A919]/60 transition-all duration-300">
              <Network className="w-4 h-4 text-[#E5A919]" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E5A919] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)] font-sans flex items-center gap-0.5">
                Digi<span className="text-[#E5A919]">Synq</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Apple Pill Bar */}
          <nav className="hidden md:flex items-center gap-0.5 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] rounded-full px-3 py-1 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3 py-1.5 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-all duration-200"
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Light / Dark Mode Toggle */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] border border-transparent hover:border-black/[0.06] dark:hover:border-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A919]/50"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
                )}
              </button>
            )}

            <a
              href="#product-directory"
              className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3.5 py-1.5 rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.06] border border-transparent hover:border-black/[0.06] dark:hover:border-white/10 transition-all duration-200"
              id="cta-explore-directory"
            >
              Explore DigiSynq
            </a>
            <button
              onClick={() => onOpenJoinModal()}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold bg-[#E5A919] hover:bg-[#f5b82e] text-black px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#E5A919]/20 active:scale-[0.98]"
              id="cta-join-network-nav"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-1.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={() => onOpenJoinModal()}
              className="text-xs font-semibold bg-[#E5A919] text-black px-3 py-1.5 rounded-full active:scale-95"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/10"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
            className="md:hidden bg-white/95 dark:bg-[#0B0C0E]/95 border-b border-black/[0.06] dark:border-white/10 px-6 py-6 mt-3 space-y-4 backdrop-blur-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[var(--text-primary)] hover:text-[#E5A919] py-2.5 border-b border-black/[0.04] dark:border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#product-directory"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs font-semibold text-[var(--text-primary)] py-2.5 rounded-full border border-black/[0.08] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04]"
              >
                Explore DigiSynq Directory
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full text-center text-xs font-semibold text-black bg-[#E5A919] hover:bg-[#f5b82e] py-2.5 rounded-full transition-colors"
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
