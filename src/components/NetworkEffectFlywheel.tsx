import React, { useState, useEffect } from 'react';
import { FLYWHEEL_STEPS } from '../data/platformsData';
import { Network, RefreshCw, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const NetworkEffectFlywheel: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  // Auto-cycle through the 10 flywheel steps every 3.2 seconds unless paused by user interaction
  useEffect(() => {
    if (!isAutoCycling) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % FLYWHEEL_STEPS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoCycling]);

  const activeStep = FLYWHEEL_STEPS[activeStepIndex];

  return (
    <section
      id="network-flow"
      className="py-24 sm:py-32 bg-[var(--bg-canvas-subtle)] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Compounding Value Loop</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            Every connection makes <br />
            <span className="text-[#E5A919]">the network smarter.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Unlike asset-heavy companies that face linear depreciation, DigiSynq benefits from accelerating network effects: each transaction enriches the shared intelligence layer for every participant.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsAutoCycling(!isAutoCycling)}
              className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3.5 py-1.5 rounded-full apple-glass transition-all"
            >
              {isAutoCycling ? '⏸ Pause Flywheel Loop' : '▶ Resume Auto Cycle'}
            </button>
          </div>
        </div>

        {/* Circular / Step Progression Visualizer - Apple Showcase Card */}
        <div className="rounded-3xl apple-card p-6 sm:p-10 lg:p-12 shadow-lg">
          {/* Active Highlight Card */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5A919] mb-2 font-semibold">
              <span>Flywheel Stage {activeStep.step} of 10</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">
              {activeStep.name}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          {/* 10-Step Interactive Horizontal Loop Track */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {FLYWHEEL_STEPS.map((item, index) => {
              const isCurrent = activeStepIndex === index;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveStepIndex(index);
                    setIsAutoCycling(false);
                  }}
                  className={`p-3 rounded-2xl border text-center transition-all duration-200 ${
                    isCurrent
                      ? 'bg-[#E5A919] border-[#E5A919] text-black font-bold shadow-md scale-105 z-10'
                      : 'apple-glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  id={`flywheel-step-${index}`}
                >
                  <span className={`text-[10px] font-mono block mb-1 font-semibold ${isCurrent ? 'text-black' : 'text-[var(--text-tertiary)]'}`}>
                    0{item.step}
                  </span>
                  <span className="text-xs tracking-tight block font-medium">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Loop Statement */}
          <div className="mt-10 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--text-tertiary)] gap-4">
            <div className="flex items-center gap-2 text-[#E5A919] font-medium">
              <Zap className="w-4 h-4" />
              <span>Zero Marginal Asset Cost Per Connection</span>
            </div>
            <div className="text-[var(--text-secondary)] text-center sm:text-right font-medium">
              More Data → Better Matching → Better Outcomes → More Trust → More Participation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
