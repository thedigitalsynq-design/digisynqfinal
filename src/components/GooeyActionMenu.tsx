import React, { useState } from 'react';
import { Liquid } from 'liquid-gooey';
import { Sparkles, X, Network, Users, Sun, Moon, ArrowUp } from 'lucide-react';

interface GooeyActionMenuProps {
  onOpenJoinModal: (role?: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const GooeyActionMenu: React.FC<GooeyActionMenuProps> = ({
  onOpenJoinModal,
  theme,
  onToggleTheme,
}) => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  const scrollToGraph = () => {
    const el = document.getElementById('hero-network-visualizer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const handleJoin = () => {
    onOpenJoinModal('Producer');
    setOpen(false);
  };

  const liquidFill = theme === 'dark' ? '#E5A919' : '#D49B14';
  const liquidShadow =
    theme === 'dark'
      ? '0 10px 30px rgba(229, 169, 25, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
      : '0 8px 24px rgba(212, 155, 20, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)';

  return (
    <div
      className="fixed bottom-6 right-6 z-40 select-none print:hidden"
      id="gooey-quick-action-widget"
    >
      <Liquid
        blur={6}
        contrast={18}
        fill={liquidFill}
        shadow={liquidShadow}
        className="relative"
      >
        {/* Child Item 1: Join Network Action */}
        <Liquid.Item
          x={open ? -64 : 0}
          y={open ? -14 : 0}
          transition="bouncy"
          delay={open ? 30 : 0}
        >
          <button
            onClick={handleJoin}
            className={`w-11 h-11 rounded-full flex items-center justify-center text-black focus:outline-none transition-opacity duration-200 ${
              open ? 'opacity-100 pointer-events-auto shadow-sm' : 'opacity-0 pointer-events-none'
            }`}
            title="Join the DigiSynq Network"
            aria-label="Join Network"
          >
            <Users className="w-4 h-4 font-bold stroke-[2.5]" />
          </button>
        </Liquid.Item>

        {/* Child Item 2: Cinema Graph Topology Action */}
        <Liquid.Item
          x={open ? -48 : 0}
          y={open ? -60 : 0}
          transition="bouncy"
          delay={open ? 60 : 0}
        >
          <button
            onClick={scrollToGraph}
            className={`w-11 h-11 rounded-full flex items-center justify-center text-black focus:outline-none transition-opacity duration-200 ${
              open ? 'opacity-100 pointer-events-auto shadow-sm' : 'opacity-0 pointer-events-none'
            }`}
            title="View Cinema Graph Topology"
            aria-label="Cinema Graph"
          >
            <Network className="w-4 h-4 font-bold stroke-[2.5]" />
          </button>
        </Liquid.Item>

        {/* Child Item 3: Theme Toggle Action */}
        <Liquid.Item
          x={open ? -6 : 0}
          y={open ? -70 : 0}
          transition="bouncy"
          delay={open ? 90 : 0}
        >
          <button
            onClick={() => {
              onToggleTheme();
              setOpen(false);
            }}
            className={`w-11 h-11 rounded-full flex items-center justify-center text-black focus:outline-none transition-opacity duration-200 ${
              open ? 'opacity-100 pointer-events-auto shadow-sm' : 'opacity-0 pointer-events-none'
            }`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 font-bold stroke-[2.5]" />
            ) : (
              <Moon className="w-4 h-4 font-bold stroke-[2.5]" />
            )}
          </button>
        </Liquid.Item>

        {/* Base Trigger Item: Central Hub Button */}
        <Liquid.Item x={0} y={0} transition="bouncy">
          <button
            onClick={() => setOpen(!open)}
            className="w-13 h-13 rounded-full flex items-center justify-center text-black focus:outline-none active:scale-95 transition-transform"
            aria-expanded={open}
            aria-label="Quick Actions Menu"
            title={open ? 'Close quick menu' : 'Open quick actions'}
          >
            {open ? (
              <X className="w-5 h-5 font-bold stroke-[2.5] transition-transform duration-200 rotate-90" />
            ) : (
              <Sparkles className="w-5 h-5 font-bold stroke-[2.5] transition-transform duration-200" />
            )}
          </button>
        </Liquid.Item>
      </Liquid>
    </div>
  );
};
