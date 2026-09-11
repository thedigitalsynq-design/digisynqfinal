import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Network } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (role?: string) => void;
  onSelectProductCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
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
          ? 'bg-[#08090C]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
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
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#E5A919]/60 transition-colors">
              <Network className="w-4 h-4 text-[#E5A919]" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E5A919] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white font-sans flex items-center gap-1">
                Digi<span className="text-[#E5A919]">Synq</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#product-directory"
              className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white px-4 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              id="cta-explore-directory"
            >
              Explore DigiSynq
            </a>
            <button
              onClick={() => onOpenJoinModal()}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-[#E5A919] hover:bg-[#f5b82e] text-black px-4 py-2 rounded-md transition-all shadow-lg shadow-[#E5A919]/20 hover:shadow-[#E5A919]/40 active:scale-[0.98]"
              id="cta-join-network-nav"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenJoinModal()}
              className="text-xs font-medium bg-[#E5A919] text-black px-3 py-1.5 rounded"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white focus:outline-none rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#08090C]/98 border-b border-white/10 px-6 py-6 mt-3 space-y-4 backdrop-blur-xl"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-[#E5A919] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#product-directory"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-medium text-white py-2.5 rounded-lg border border-white/10 bg-white/5"
            >
              Explore DigiSynq Directory
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full text-center text-sm font-semibold text-black bg-[#E5A919] hover:bg-[#f5b82e] py-2.5 rounded-lg transition-colors"
            >
              Join the Network
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
