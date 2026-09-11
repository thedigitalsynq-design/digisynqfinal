import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Split, Network, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fragmented' | 'connected'>('fragmented');

  const problemPoints = [
    {
      title: 'Enormous Talent',
      symptom: 'Siloed behind agency gatekeepers, unverified credits, and regional rolodexes.',
      connected: 'Verified global talent graph with instant credit verification and direct casting dispatch.'
    },
    {
      title: 'Underutilized Resources',
      symptom: 'Millions in cameras, lenses, soundstages, and mobile trailers sit dormant between shoots.',
      connected: 'Peer-to-peer liquidity marketplace unlocking idle hardware without owners losing custody.'
    },
    {
      title: 'Fragmented Audiences',
      symptom: 'Filmmakers lose direct touch with ticket-buyers once theatrical windows close.',
      connected: 'First-party fan CRM, direct community circles, and closed-loop ticketing attribution.'
    },
    {
      title: 'Disconnected Businesses',
      symptom: 'Studios, exhibitors, rental houses, and vendors operate on mismatched systems.',
      connected: 'Cross-entity workflow pipeline synchronizing purchase orders, releases, and milestones.'
    },
    {
      title: 'Scattered Information',
      symptom: 'Decisions rely on lagging trade gossip, slow box office calls, and anecdotal guesses.',
      connected: 'Real-time telemetry capturing 14.2M+ box office, social sentiment, and screening signals.'
    },
    {
      title: 'Inefficient Workflows',
      symptom: 'Weeks spent chasing call sheets, paper deal memos, and disputed distribution settlements.',
      connected: 'Automated script breakdowns, digital call sheets with GPS receipts, and CAM escrow waterfalls.'
    },
    {
      title: 'Difficult Discovery',
      symptom: 'Independent films, specialized crew, and vacant screens struggle to find reciprocal demand.',
      connected: 'Bipartite semantic matching engine pairing buyers, spaces, and talent in seconds.'
    },
    {
      title: 'Inconsistent Trust',
      symptom: 'Unverified resumes, damaged rented gear, and counterparty payment defaults plague sets.',
      connected: 'SynqTrust verifiable credentials, union verification, and secure milestone escrow.'
    }
  ];

  return (
    <section
      id="problem"
      className="py-24 bg-[#08090C] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Core Disconnect</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Cinema is connected by relationships, <br />
            <span className="text-neutral-400">but fragmented by systems.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Cinema doesn't lack talent, resources, content, audiences or opportunities. It loses value when they remain fragmented, disconnected, underutilized and difficult to coordinate.
          </p>

          {/* Interactive Contrast Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab('fragmented')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'fragmented'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              id="tab-fragmented-industry"
            >
              <Split className="w-4 h-4" />
              <span>The Fragmented Reality</span>
            </button>
            <button
              onClick={() => setActiveTab('connected')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'connected'
                  ? 'bg-[#E5A919] text-black shadow-lg shadow-[#E5A919]/25 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              id="tab-digisynq-connected"
            >
              <Network className="w-4 h-4" />
              <span>DigiSynq Connects the Dots</span>
            </button>
          </div>
        </div>

        {/* Dynamic 8 Problem / Solution Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problemPoints.map((item, index) => (
            <div
              key={item.title}
              className={`relative rounded-xl p-5 sm:p-6 transition-all border ${
                activeTab === 'fragmented'
                  ? 'bg-[#0E1017] border-white/10 hover:border-red-500/40'
                  : 'bg-[#0E131C] border-[#E5A919]/25 hover:border-[#E5A919]/60 shadow-lg shadow-black/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  0{index + 1}
                </span>
                {activeTab === 'fragmented' ? (
                  <span className="w-2 h-2 rounded-full bg-red-400/80" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#E5A919] shadow-sm shadow-[#E5A919]" />
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed min-h-[72px]">
                {activeTab === 'fragmented' ? (
                  <span className="text-neutral-400">{item.symptom}</span>
                ) : (
                  <span className="text-neutral-200 font-medium">{item.connected}</span>
                )}
              </p>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className={activeTab === 'fragmented' ? 'text-red-400' : 'text-[#E5A919]'}>
                  {activeTab === 'fragmented' ? 'Friction & Waste' : 'Synchronized & Liquid'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-white/[0.03] via-[#E5A919]/10 to-white/[0.03] border border-[#E5A919]/20 rounded-2xl px-8 py-5 max-w-2xl mx-auto">
            <span className="text-lg font-bold text-white">
              DigiSynq connects the dots.
            </span>
            <span className="text-neutral-400 hidden sm:inline">|</span>
            <span className="text-sm text-neutral-300">
              Transforming isolated physical assets into an agile, intelligent operating network.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
