import React, { useState } from 'react';
import { Brain, Sparkles, Activity, CheckCircle, ArrowRight, MessageSquare, Shield, Terminal } from 'lucide-react';

export const IntelligenceSection: React.FC = () => {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);

  const signalJourney = [
    { label: 'Data', desc: 'Raw box office admissions, equipment barcodes, social chatter, call sheet logs.' },
    { label: 'Signals', desc: 'Normalized telemetry: sentiment polarity shifts, trailer velocity spikes, stage vacancy windows.' },
    { label: 'Intelligence', desc: 'Machine learning synthesis linking audience appetite vectors to commercial feasibility.' },
    { label: 'Decision', desc: 'Strategic recommendations for release timing, casting packages, and equipment booking.' },
    { label: 'Action', desc: 'Automated deal memo dispatch, dynamic ticket pricing adjustment, or PR narrative pivot.' },
    { label: 'Outcome', desc: 'Measurable box office uplift, reduced CapEx waste, and verified stakeholder confidence.' }
  ];

  const aiPrompts = [
    {
      query: 'Find available production resources for an independent film shooting next month in Toronto.',
      response: {
        summary: 'Synthesized 5-department production package matched to indie budget profile without asset ownership.',
        people: '3 verified DPs with CSC guild standing + 8 below-the-line crew available for 22 shooting days.',
        equipment: 'ARRI Alexa Mini LF package + Zeiss Supreme Primes available via sub-rental with certified insurance.',
        locations: '2 verified mill spaces with 24ft grid clearance + historic brick warehouse location.',
        vendors: 'Local certified caterer + eco-friendly generator truck with verified COI.',
        opportunities: 'Eligible for 21.5% Ontario production tax credit; pre-formatted for SynqFinance packaging.'
      }
    },
    {
      query: 'Analyze audience sentiment shifts following festival premiere in London and recommend marketing adjustments.',
      response: {
        summary: 'Detected +91% positive reception for lead actress and suspenseful climax; pacing in act 2 flagged as slow.',
        people: 'Lead actress interview soundbites prioritized for TikTok and Instagram Reels.',
        equipment: 'N/A (Digital intelligence signal pipeline).',
        locations: 'Focus theatrical release corridor across 40 marquee arthouse screens in UK & Ireland.',
        vendors: 'Automated PR asset distribution kit with 5 critical 5-star pull-quotes sent to 120 media outlets.',
        opportunities: 'Recommended releasing 30-second teaser focused entirely on the thriller third-act twist.'
      }
    },
    {
      query: 'Identify optimal theatrical release window for an indie horror film budgeted at $4.5M.',
      response: {
        summary: 'Simulated 18 competitive release corridors across North America and Europe for Q3/Q4.',
        people: 'No talent promotional schedule conflicts detected across target festival circuits.',
        equipment: 'DCP master digital delivery verified SMPTE/DCI compliant for automated KDM release.',
        locations: 'Identified late September corridor: lowest competing genre counter-programming and 72% screen availability.',
        vendors: 'Synced with 180 independent theatrical screens ready for digital booking on SynqBook.',
        opportunities: 'Avoids colliding with studio tentpole sequels, yielding projected 38% higher opening weekend screen retention.'
      }
    }
  ];

  const activePrompt = aiPrompts[selectedPromptIndex];

  return (
    <section
      id="intelligence"
      className="py-24 bg-[#08090C] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Section 32 Intelligence Layer */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>Telemetry & Predictive Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            From fragmented signals to <br />
            <span className="text-[#E5A919]">intelligent decisions.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            DigiSynq transforms disparate box office receipts, equipment telemetry, social sentiment, and crew availability into predictive foresight.
          </p>
        </div>

        {/* 6-Stage Journey Visual: Data -> Signals -> Intelligence -> Decision -> Action -> Outcome */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 text-center mb-6">
            The DigiSynq Intelligence Trajectory
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {signalJourney.map((item, idx) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-[#0E1119] border border-white/5 text-left relative group hover:border-[#E5A919]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#E5A919]">
                    0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A919]" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {item.label}
                </h4>
                <p className="text-xs text-neutral-400 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 33: DIGISYNQ AI */}
        <div className="rounded-2xl bg-gradient-to-br from-[#121520] to-[#0A0C11] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E5A919] mb-1">
                <Brain className="w-4 h-4" />
                <span>DigiSynq AI Console</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Intelligence that understands the cinema ecosystem.
              </h3>
            </div>
            <div className="text-xs font-mono text-neutral-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              Conceptual Product Experience
            </div>
          </div>

          {/* AI Capability Tags */}
          <div className="my-6 flex flex-wrap gap-2">
            {[
              'Semantic Search',
              'Intelligent Matching',
              'Audience Analysis',
              'Sentiment Diagnostics',
              'Opportunity Discovery',
              'Workflow Automation',
              'Predictive Modeling',
              'Project Packaging',
              'Reputation Intelligence'
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-neutral-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Interactive Query Switcher */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
              Sample Cinema Natural Language Inquiries:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {aiPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPromptIndex(idx)}
                  className={`p-3.5 rounded-xl text-left border text-xs transition-all ${
                    selectedPromptIndex === idx
                      ? 'bg-[#E5A919] text-black border-[#E5A919] font-semibold shadow-md shadow-[#E5A919]/20'
                      : 'bg-[#0B0D13] text-neutral-300 border-white/10 hover:border-white/20'
                  }`}
                >
                  "{p.query}"
                </button>
              ))}
            </div>

            {/* AI Console Terminal View */}
            <div className="mt-6 rounded-xl bg-black/80 border border-white/10 p-5 sm:p-6 font-mono text-xs">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/10 text-neutral-400">
                <Terminal className="w-4 h-4 text-[#E5A919]" />
                <span>digisynq-ai-agent --context cinema-graph</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-neutral-500">USER: </span>
                  <span className="text-white italic">"{activePrompt.query}"</span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-[#E5A919] font-bold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>DIGISYNQ AI SYNTHESIS:</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 text-neutral-200">
                    {activePrompt.response.summary}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300">
                    <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-[#E5A919] font-bold block mb-1">▶ PEOPLE & CREW:</span>
                      {activePrompt.response.people}
                    </div>
                    <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-[#E5A919] font-bold block mb-1">▶ EQUIPMENT & ASSETS:</span>
                      {activePrompt.response.equipment}
                    </div>
                    <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-[#E5A919] font-bold block mb-1">▶ LOCATIONS & VENUES:</span>
                      {activePrompt.response.locations}
                    </div>
                    <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-[#E5A919] font-bold block mb-1">▶ OPPORTUNITIES & CAPITAL:</span>
                      {activePrompt.response.opportunities}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
