import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

interface NodeData {
  id: string;
  label: string;
  role: string;
  x: number; // 0 to 1 normalized
  y: number; // 0 to 1 normalized
  connections: string[];
  description: string;
  signalMetric: string;
}

const ECOSYSTEM_NODES: NodeData[] = [
  {
    id: 'talent',
    label: 'Talent',
    role: 'Actors, Directors & Below-the-line Crew',
    x: 0.18,
    y: 0.28,
    connections: ['projects', 'capital', 'trust'],
    description: 'Verified professional track records, guild credentials, and real-time availability matched directly to productions.',
    signalMetric: '99.4% Verified Identity'
  },
  {
    id: 'projects',
    label: 'Projects',
    role: 'Scripts, Slates & Feature Productions',
    x: 0.38,
    y: 0.18,
    connections: ['talent', 'assets', 'capital', 'content'],
    description: 'Packaged film slates coordinated across budgeting, scheduling, vendors, and milestone execution.',
    signalMetric: 'Zero CapEx Footprint'
  },
  {
    id: 'assets',
    label: 'Assets',
    role: 'Cameras, Stages, Locations & Fleet',
    x: 0.72,
    y: 0.24,
    connections: ['projects', 'screens', 'brands'],
    description: 'High-value physical infrastructure unlocked via peer-to-peer liquidity while owners retain 100% custody.',
    signalMetric: 'Dynamic Peer Liquidity'
  },
  {
    id: 'content',
    label: 'Content',
    role: 'Screeners, IP, Remakes & Finished Films',
    x: 0.25,
    y: 0.72,
    connections: ['projects', 'audiences', 'screens'],
    description: 'Clean territorial rights cataloging, DRM-watermarked screeners, and automated deal room execution.',
    signalMetric: '195 Territorial Windows'
  },
  {
    id: 'audiences',
    label: 'Audiences',
    role: 'Moviegoers, Fandoms & Tastemakers',
    x: 0.52,
    y: 0.82,
    connections: ['content', 'screens', 'brands'],
    description: 'First-party fan relationships, real-time sentiment telemetry, and crowdfunded community screenings.',
    signalMetric: 'Live Sentiment Telemetry'
  },
  {
    id: 'screens',
    label: 'Screens',
    role: 'Theatrical Circuits, Art Houses & Pop-ups',
    x: 0.82,
    y: 0.65,
    connections: ['assets', 'audiences', 'content'],
    description: 'Yield-optimized auditorium scheduling turning off-peak vacant hours into profitable event cinema.',
    signalMetric: '+64% Off-Peak Utilization'
  },
  {
    id: 'brands',
    label: 'Brands',
    role: 'Sponsors & Product Placements',
    x: 0.84,
    y: 0.38,
    connections: ['projects', 'audiences', 'assets'],
    description: 'Contextual, natural script placements with verified post-release screen-time and ticket attribution.',
    signalMetric: 'Closed-Loop ROI Tracking'
  },
  {
    id: 'capital',
    label: 'Capital',
    role: 'Co-Financiers, Tax Funds & Syndicates',
    x: 0.50,
    y: 0.44,
    connections: ['talent', 'projects', 'content'],
    description: 'Partner-led financial discovery and automated CAM waterfall accounting without balance-sheet lending.',
    signalMetric: 'Pure Matching & Zero Risk'
  }
];

export const NetworkVisualizer: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeData>(ECOSYSTEM_NODES[0]);
  const [isSynchronized, setIsSynchronized] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Canvas interactive animation for signal flows
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth * window.devicePixelRatio;
      canvas.height = parent.clientHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    // Render loop
    const render = () => {
      time += 0.02;
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, width, height);

      // Node absolute positions
      const positions = ECOSYSTEM_NODES.map((node) => ({
        ...node,
        px: node.x * width,
        py: node.y * height,
      }));

      // Draw connection lines
      positions.forEach((source) => {
        source.connections.forEach((targetId) => {
          const target = positions.find((n) => n.id === targetId);
          if (!target) return;

          ctx.beginPath();
          ctx.moveTo(source.px, source.py);
          ctx.lineTo(target.px, target.py);

          if (isSynchronized) {
            // Synchronized state: glowing, coordinated connections
            const isHighlighted =
              activeNode.id === source.id || activeNode.id === target.id;

            ctx.strokeStyle = isHighlighted
              ? 'rgba(229, 169, 25, 0.45)'
              : 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = isHighlighted ? 1.5 : 1;
            ctx.stroke();

            // Draw traveling signal pulses
            const pulseCount = 2;
            for (let i = 0; i < pulseCount; i++) {
              const speedOffset = (time * 0.4 + (i * 0.5) + (source.px % 3)) % 1;
              const curX = source.px + (target.px - source.px) * speedOffset;
              const curY = source.py + (target.py - source.py) * speedOffset;

              ctx.beginPath();
              ctx.arc(curX, curY, isHighlighted ? 2.8 : 1.8, 0, Math.PI * 2);
              ctx.fillStyle = isHighlighted
                ? 'rgba(255, 226, 112, 0.95)'
                : 'rgba(229, 169, 25, 0.6)';
              ctx.shadowColor = '#E5A919';
              ctx.shadowBlur = isHighlighted ? 8 : 4;
              ctx.fill();
              ctx.shadowBlur = 0; // reset
            }
          } else {
            // Fragmented state: dim, broken, dashed lines with friction
            ctx.setLineDash([4, 6]);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.setLineDash([]);
          }
        });
      });

      // Draw subtle orbital halo around central capital/coordination hub
      if (isSynchronized) {
        ctx.beginPath();
        const centerNode = positions.find((n) => n.id === 'capital');
        if (centerNode) {
          ctx.arc(centerNode.px, centerNode.py, 42 + Math.sin(time) * 4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(229, 169, 25, 0.12)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [activeNode, isSynchronized]);

  return (
    <div
      id="hero-network-visualizer"
      className="relative w-full rounded-2xl bg-[#0B0D13]/80 border border-white/10 p-4 sm:p-6 lg:p-8 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/80"
    >
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5A919] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#E5A919]">
            Cinema Graph Topology
          </span>
          <span className="text-xs text-neutral-500 font-mono">|</span>
          <span className="text-xs text-neutral-400 font-mono">
            8 Ecosystem Nodes
          </span>
        </div>

        {/* State Toggle: Synchronized vs Fragmented */}
        <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-white/10 text-xs">
          <button
            onClick={() => setIsSynchronized(true)}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              isSynchronized
                ? 'bg-[#E5A919] text-black shadow-sm font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
            id="btn-state-synchronized"
          >
            Synchronized
          </button>
          <button
            onClick={() => setIsSynchronized(false)}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              !isSynchronized
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : 'text-neutral-400 hover:text-white'
            }`}
            id="btn-state-fragmented"
          >
            Fragmented
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative h-[380px] sm:h-[440px] md:h-[480px] w-full my-3">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Interactive Node Buttons Placed Exactly over Canvas Coordinates */}
        {ECOSYSTEM_NODES.map((node) => {
          const isSelected = activeNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              style={{
                left: `${node.x * 100}%`,
                top: `${node.y * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className={`absolute group z-20 focus:outline-none transition-transform duration-200 ${
                isSelected ? 'scale-110' : 'hover:scale-105'
              }`}
              id={`node-btn-${node.id}`}
            >
              <div
                className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all ${
                  isSelected
                    ? 'bg-[#E5A919] border-[#E5A919] text-black shadow-lg shadow-[#E5A919]/30 font-semibold'
                    : 'bg-[#11141C]/90 border-white/15 text-neutral-200 hover:border-[#E5A919]/60 hover:bg-[#161B26]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-black' : isSynchronized ? 'bg-[#E5A919]' : 'bg-neutral-600'
                  }`}
                />
                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  {node.label}
                </span>

                {/* Subtle outer glow when selected */}
                {isSelected && (
                  <span className="absolute -inset-1 rounded-full border border-[#E5A919]/40 animate-ping pointer-events-none" />
                )}
              </div>
            </button>
          );
        })}

        {/* Fragmented State Overlay Banner */}
        {!isSynchronized && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-red-950/80 border border-red-800/60 rounded-xl px-5 py-3 text-center backdrop-blur-md max-w-sm">
              <p className="text-xs font-mono text-red-400 uppercase tracking-widest mb-1">
                Legacy Industry Friction
              </p>
              <p className="text-sm text-red-200 font-medium">
                Disconnected phone calls, idle equipment, and opaque packaging leave 65% of potential cinema value stranded.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Detail Inspector for Selected Node */}
      <div className="pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 text-[#E5A919] text-xs font-mono uppercase tracking-wider mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>Active Node Inspection</span>
          </div>
          <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            {activeNode.label}
            <span className="text-xs font-normal text-neutral-400 font-mono">
              ({activeNode.role})
            </span>
          </h4>
        </div>

        <div className="md:col-span-5 text-sm text-neutral-300 leading-relaxed">
          {activeNode.description}
        </div>

        <div className="md:col-span-3 flex md:justify-end">
          <div className="bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 w-full md:w-auto text-left md:text-right">
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block">
              Network Telemetry
            </span>
            <span className="text-xs font-semibold text-[#E5A919] font-mono">
              {activeNode.signalMetric}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
