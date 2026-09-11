import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, Network } from 'lucide-react';

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      id="join-network-modal"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0E1119] border border-white/15 shadow-2xl p-6 sm:p-8 text-white">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5A919] mb-2">
              <Network className="w-4 h-4" />
              <span>Network Onboarding</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight mb-2">
              Connect to DigiSynq
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Join the asset-light operating network. Access verified talent, idle capacity, and intelligent matching infrastructure.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1">
                  Your Primary Cinema Role:
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#08090C] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E5A919]/60"
                >
                  <option value="Producer">Producer / Production Company</option>
                  <option value="Production Crew">Below-the-Line Crew / Technician</option>
                  <option value="Talent">Actor / Director / Screenwriter</option>
                  <option value="Equipment Owner">Rental House / Equipment Owner</option>
                  <option value="Exhibitor">Theatrical Circuit / Cinema Operator</option>
                  <option value="Distributor">Distributor / Sales Agent</option>
                  <option value="Brand">Brand / Sponsor / Media Agency</option>
                  <option value="Investor">Co-Financier / Private Capital</option>
                  <option value="Partner">Technology / API Integration Partner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1">
                  Full Name / Representative:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  className="w-full bg-[#08090C] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5A919]/60"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1">
                  Work Email:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@cinema-entity.com"
                  className="w-full bg-[#08090C] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5A919]/60"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1">
                    Company / Project Slate:
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Apex Pictures"
                    className="w-full bg-[#08090C] border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5A919]/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1">
                    Primary Region:
                  </label>
                  <select
                    value={territory}
                    onChange={(e) => setTerritory(e.target.value)}
                    className="w-full bg-[#08090C] border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E5A919]/60"
                  >
                    <option value="North America">North America</option>
                    <option value="Europe / UK">Europe & United Kingdom</option>
                    <option value="Asia Pacific">Asia Pacific</option>
                    <option value="Latin America">Latin America</option>
                    <option value="Middle East & Africa">Middle East & Africa</option>
                    <option value="Global">Global / Multi-Territory</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#E5A919] hover:bg-[#f5b82e] text-black font-semibold text-xs sm:text-sm py-3 rounded-lg transition-all shadow-lg shadow-[#E5A919]/20"
                >
                  Submit Network Request
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 text-center font-mono">
                Encrypted via SynqTrust protocol • Zero upfront hardware or CapEx commitment
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Welcome to the Network
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Your onboarding profile for <span className="text-[#E5A919] font-medium">{role}</span> has been provisioned. A DigiSynq network coordinator will sync your access credentials.
            </p>

            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-400 text-left">
              <div>Network Node: {role}</div>
              <div>Territory: {territory}</div>
              <div>Trust Protocol: Pending Guild / COI Verification</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-4 bg-[#E5A919] hover:bg-[#f5b82e] text-black font-semibold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg"
            >
              Close & Explore Network
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
