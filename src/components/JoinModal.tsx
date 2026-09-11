import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, ArrowRight, Network } from 'lucide-react';
import { motion } from 'motion/react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'Producer',
}) => {
  const [role, setRole] = useState(defaultRole || 'Producer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [territory, setTerritory] = useState('Global / North America');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setOrganization('');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-2xl"
      id="join-network-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg rounded-3xl apple-card shadow-2xl p-6 sm:p-9 text-[var(--text-primary)]"
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full apple-glass text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5A919] mb-2 font-semibold">
              <Network className="w-4 h-4" />
              <span>Network Onboarding</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight mb-2 text-[var(--text-primary)]">
              Connect to DigiSynq
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
              Join the asset-light operating network. Access verified talent, idle capacity, and intelligent matching infrastructure.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] mb-1.5 font-semibold">
                  Your Primary Cinema Role:
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#E5A919]"
                >
                  <option value="Producer" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Producer / Production Company</option>
                  <option value="Production Crew" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Below-the-Line Crew / Technician</option>
                  <option value="Talent" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Actor / Director / Screenwriter</option>
                  <option value="Equipment Owner" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Rental House / Equipment Owner</option>
                  <option value="Exhibitor" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Theatrical Circuit / Cinema Operator</option>
                  <option value="Distributor" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Distributor / Sales Agent</option>
                  <option value="Brand" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Brand / Sponsor / Media Agency</option>
                  <option value="Investor" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Co-Financier / Private Capital</option>
                  <option value="Partner" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Technology / API Integration Partner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] mb-1.5 font-semibold">
                  Full Name / Representative:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  className="w-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[#E5A919]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] mb-1.5 font-semibold">
                  Work Email:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@cinema-entity.com"
                  className="w-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[#E5A919]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] mb-1.5 font-semibold">
                    Company / Project Slate:
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Apex Pictures"
                    className="w-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 rounded-xl px-3 py-2 text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[#E5A919]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] mb-1.5 font-semibold">
                    Primary Region:
                  </label>
                  <select
                    value={territory}
                    onChange={(e) => setTerritory(e.target.value)}
                    className="w-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 rounded-xl px-3 py-2 text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#E5A919]"
                  >
                    <option value="North America" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">North America</option>
                    <option value="Europe / UK" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Europe & United Kingdom</option>
                    <option value="Asia Pacific" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Asia Pacific</option>
                    <option value="Latin America" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Latin America</option>
                    <option value="Middle East & Africa" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Middle East & Africa</option>
                    <option value="Global" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">Global / Multi-Territory</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="apple-btn-primary w-full text-xs sm:text-sm py-3 font-semibold shadow-md"
                >
                  Submit Network Request
                </button>
              </div>

              <p className="text-[11px] text-[var(--text-tertiary)] text-center font-mono">
                Encrypted via SynqTrust protocol • Zero upfront hardware or CapEx commitment
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              Welcome to the Network
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[var(--text-primary)]">{name}</strong>. Your onboarding profile for <span className="text-[#E5A919] font-medium">{role}</span> has been provisioned. A DigiSynq network coordinator will sync your access credentials.
            </p>

            <div className="p-4 rounded-2xl apple-glass text-xs font-mono text-[var(--text-secondary)] text-left space-y-1">
              <div>Network Node: {role}</div>
              <div>Territory: {territory}</div>
              <div>Trust Protocol: Pending Guild / COI Verification</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="apple-btn-primary mt-4 px-6 py-2.5 text-xs uppercase tracking-wider font-semibold"
            >
              Close & Explore Network
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
