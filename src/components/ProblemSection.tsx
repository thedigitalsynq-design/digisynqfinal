import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Split, Network, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
      className="py-24 sm:py-32 bg-[var(--bg-canvas)] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Core Disconnect</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            Cinema is connected by relationships, <br />
            <span className="text-[var(--text-secondary)]">but fragmented by systems.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Cinema doesn't lack talent, resources, content, audiences or opportunities. It loses value when they remain fragmented, disconnected, underutilized and difficult to coordinate.
          </p>

          {/* Interactive Contrast Switcher - Apple Segmented Control */}
          <div className="mt-9 inline-flex items-center p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08]">
            <button
              onClick={() => setActiveTab('fragmented')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'fragmented'
                  ? 'bg-red-500/15 text-red-600 dark:text-red-300 border border-red-500/30 shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              id="tab-fragmented-industry"
            >
              <Split className="w-4 h-4" />
              <span>The Fragmented Reality</span>
            </button>
            <button
              onClick={() => setActiveTab('connected')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'connected'
                  ? 'bg-[#E5A919] text-black shadow-sm font-bold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              id="tab-digisynq-connected"
            >
              <Network className="w-4 h-4" />
              <span>DigiSynq Connects the Dots</span>
            </button>
          </div>
        </motion.div>

        {/* Dynamic 8 Problem / Solution Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problemPoints.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
              className={`relative rounded-2xl p-6 transition-colors duration-300 border apple-card ${
                activeTab === 'fragmented'
                  ? 'hover:border-red-500/40'
                  : 'hover:border-[#E5A919]/60'
              }`}
            >
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider font-semibold">
                  0{index + 1}
                </span>
                {activeTab === 'fragmented' ? (
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#E5A919] shadow-sm shadow-[#E5A919]" />
                )}
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2.5 tracking-tight">
                {item.title}
              </h3>

              <div className="text-xs sm:text-sm leading-relaxed min-h-[72px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'fragmented' ? (
                    <motion.p
                      key="symptom"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[var(--text-secondary)]"
                    >
                      {item.symptom}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="connected"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[var(--text-primary)] font-medium"
                    >
                      {item.connected}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-4 pt-3.5 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono font-medium">
                <span className={activeTab === 'fragmented' ? 'text-red-500 dark:text-red-400' : 'text-[#E5A919]'}>
                  {activeTab === 'fragmented' ? 'Friction & Waste' : 'Synchronized & Liquid'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3.5 apple-glass rounded-2xl px-8 py-5 max-w-2xl mx-auto shadow-sm">
            <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight">
              DigiSynq connects the dots.
            </span>
            <span className="text-[var(--text-tertiary)] hidden sm:inline">|</span>
            <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Transforming isolated physical assets into an agile, intelligent operating network.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
