import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FLYWHEEL_STEPS } from '../data/platformsData';
import { ArrowRight, Zap } from 'lucide-react';

interface NetworkEffectFlywheelProps {
  onOpenRunbook?: (chapterIndex?: number) => void;
}

export const NetworkEffectFlywheel: React.FC<NetworkEffectFlywheelProps> = ({ onOpenRunbook }) => {
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
      className="py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#8B7CFF]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#5CE1E6]/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1220]/80 border border-[#8B7CFF]/30 text-[#8B7CFF] font-mono text-[11px] font-bold tracking-[2px] mb-6 backdrop-blur-xl shadow-[0_0_15px_rgba(139,124,255,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF] shadow-[0_0_8px_#8B7CFF]" />
            Compounding value loop.
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.98] font-denton-extrabold">
            Every connection.<br />
            <span className="text-white/75">Makes the network smarter.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Unlike asset-heavy companies that face linear depreciation, DigiSynq benefits from accelerating network effects: each transaction enriches the shared intelligence layer for every participant.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsAutoCycling(!isAutoCycling)}
              className="text-xs font-mono text-white/70 hover:text-white px-3.5 py-1.5 rounded-full bg-[#0D1220]/80 border border-white/[0.10] backdrop-blur-xl transition-all"
            >
              {isAutoCycling ? '⏸ Pause Flywheel Loop' : '▶ Resume Auto Cycle'}
            </button>
          </div>
        </div>

        {/* Circular / Step Progression Visualizer */}
        <div className="rounded-3xl bg-[#0D1220]/75 border border-white/[0.12] p-6 sm:p-10 lg:p-12 shadow-2xl relative backdrop-blur-2xl">
          {/* Active Highlight Card */}
          <div className="text-center max-w-xl mx-auto mb-10 min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8B7CFF] mb-2 font-semibold">
                  <span>Flywheel Stage {activeStep.step} of 10</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 font-denton-extrabold">
                  {activeStep.name}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {activeStep.description}
                </p>
              </motion.div>
            </AnimatePresence>
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
                  className={`p-3 rounded-2xl border text-center transition-all duration-200 backdrop-blur-xl ${
                    isCurrent
                      ? 'bg-[#070A12] border-2 border-[#8B7CFF] text-white font-bold shadow-[0_0_20px_rgba(139,124,255,0.25)] scale-105 z-10 ring-2 ring-[#8B7CFF]/30'
                      : 'bg-[#070A12]/60 border-white/[0.08] text-white/60 hover:text-white hover:border-white/20'
                  }`}
                  id={`flywheel-step-${index}`}
                >
                  <span className={`text-[10px] font-mono block mb-1 font-semibold ${isCurrent ? 'text-[#8B7CFF]' : 'text-white/40'}`}>
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
          <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4">
            <div className="flex items-center gap-2 text-[#5CE1E6] font-medium">
              <Zap className="w-4 h-4 text-[#5CE1E6]" />
              <span>Zero Marginal Asset Cost Per Connection</span>
            </div>
            <div className="text-white/70 text-center sm:text-right font-medium">
              More Data → Better Matching → Better Outcomes → More Trust → More Participation
            </div>
          </div>
        </div>

        {/* Runbook Callout */}
        {onOpenRunbook && (
          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenRunbook(7)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B7CFF]/10 hover:bg-[#8B7CFF]/20 border border-[#8B7CFF]/35 text-[#8B7CFF] hover:text-white text-xs font-mono font-bold tracking-[1.5px] transition-all cursor-pointer shadow-sm"
            >
              <span>Inspect 10-Stage Compounding Flywheel & Moat (Chapter 08)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
