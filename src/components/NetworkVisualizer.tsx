import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Activity, ShieldCheck, Zap, ArrowUpRight, Network, ArrowRight } from 'lucide-react';

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

const ALL_NODE_IDS = ['talent', 'projects', 'assets', 'content', 'audiences', 'screens', 'brands', 'capital'];

export const NODE_LINKS_MAP: Record<string, Record<string, string>> = {
  talent: {
    projects: 'Cast & crew packaging',
    assets: 'Equipment & stage operator booking',
    capital: 'Milestone escrow & guild payroll',
    content: 'Credits & residual attribution',
    audiences: 'Talent fandom & premiere Q&As',
    screens: 'Theatrical tours & festival screenings',
    brands: 'Authentic sponsor endorsements',
  },
  projects: {
    talent: 'Cast & crew packaging',
    assets: 'Sub-rentals & volume soundstages',
    capital: 'Co-financing & tax credit syndication',
    content: 'Master deliverables & screener vaults',
    audiences: 'Audience appetite & test screenings',
    screens: 'Theatrical release corridors',
    brands: 'Natural in-script placement',
  },
  assets: {
    talent: 'Equipment & stage operator booking',
    projects: 'Sub-rentals & volume soundstages',
    capital: 'Collateral protection & damage escrow',
    content: 'Post-production suites & finishing',
    audiences: 'Experiential event venue hosting',
    screens: 'Dynamic screen capacity monetization',
    brands: 'Branded hardware & partner facilities',
  },
  content: {
    talent: 'Credits & residual attribution',
    projects: 'Master deliverables & screener vaults',
    assets: 'Post-production suites & finishing',
    capital: 'IFTA distribution pre-sales & waterfalls',
    audiences: 'Direct-to-fan previews & demand pooling',
    screens: 'SMPTE/DCI DCP delivery & KDM keys',
    brands: 'Post-release screen-time analytics',
  },
  audiences: {
    talent: 'Talent fandom & premiere Q&As',
    projects: 'Audience appetite & test screenings',
    assets: 'Experiential event venue hosting',
    content: 'Direct-to-fan previews & demand pooling',
    capital: 'Crowdfunded fan pledges & ticket thresholds',
    screens: 'Reserved pop-up & event screenings',
    brands: 'Sponsor activations & community loyalty',
  },
  screens: {
    talent: 'Theatrical tours & festival screenings',
    projects: 'Theatrical release corridors',
    assets: 'Dynamic screen capacity monetization',
    content: 'SMPTE/DCI DCP delivery & KDM keys',
    audiences: 'Reserved pop-up & event screenings',
    capital: 'Automated box office splits & remittance',
    brands: 'In-theatre brand takeovers & promotions',
  },
  brands: {
    talent: 'Authentic sponsor endorsements',
    projects: 'Natural in-script placement',
    assets: 'Branded hardware & partner facilities',
    content: 'Post-release screen-time analytics',
    audiences: 'Sponsor activations & community loyalty',
    screens: 'In-theatre brand takeovers & promotions',
    capital: 'Co-marketing funds & escrow guarantees',
  },
  capital: {
    talent: 'Milestone escrow & guild payroll',
    projects: 'Co-financing & tax credit syndication',
    assets: 'Collateral protection & damage escrow',
    content: 'IFTA distribution pre-sales & waterfalls',
    audiences: 'Crowdfunded fan pledges & ticket thresholds',
    screens: 'Automated box office splits & remittance',
    brands: 'Co-marketing funds & escrow guarantees',
  },
};

const ECOSYSTEM_NODES: NodeData[] = [
  {
    id: 'talent',
    label: 'Talent',
    role: 'Actors, Directors & Below-the-line Crew',
    x: 0.18,
    y: 0.28,
    connections: ALL_NODE_IDS.filter((id) => id !== 'talent'),
    description: 'Verified professional track records, guild credentials, and real-time availability matched directly to productions.',
    signalMetric: '99.4% Verified Identity'
  },
  {
    id: 'projects',
    label: 'Projects',
    role: 'Scripts, Slates & Feature Productions',
    x: 0.38,
    y: 0.18,
    connections: ALL_NODE_IDS.filter((id) => id !== 'projects'),
    description: 'Packaged film slates coordinated across budgeting, scheduling, vendors, and milestone execution.',
    signalMetric: 'Zero CapEx Footprint'
  },
  {
    id: 'assets',
    label: 'Assets',
    role: 'Cameras, Stages, Locations & Fleet',
    x: 0.72,
    y: 0.24,
    connections: ALL_NODE_IDS.filter((id) => id !== 'assets'),
    description: 'High-value physical infrastructure unlocked via peer-to-peer liquidity while owners retain 100% custody.',
    signalMetric: 'Dynamic Peer Liquidity'
  },
  {
    id: 'content',
    label: 'Content',
    role: 'Screeners, IP, Remakes & Finished Films',
    x: 0.22,
    y: 0.72,
    connections: ALL_NODE_IDS.filter((id) => id !== 'content'),
    description: 'Clean territorial rights cataloging, DRM-watermarked screeners, and automated deal room execution.',
    signalMetric: '195 Territorial Windows'
  },
  {
    id: 'audiences',
    label: 'Audiences',
    role: 'Moviegoers, Fandoms & Tastemakers',
    x: 0.50,
    y: 0.84,
    connections: ALL_NODE_IDS.filter((id) => id !== 'audiences'),
    description: 'First-party fan relationships, real-time sentiment telemetry, and crowdfunded community screenings.',
    signalMetric: 'Live Sentiment Telemetry'
  },
  {
    id: 'screens',
    label: 'Screens',
    role: 'Theatrical Circuits, Art Houses & Pop-ups',
    x: 0.82,
    y: 0.68,
    connections: ALL_NODE_IDS.filter((id) => id !== 'screens'),
    description: 'Yield-optimized auditorium scheduling turning off-peak vacant hours into profitable event cinema.',
    signalMetric: '+64% Off-Peak Utilization'
  },
  {
    id: 'brands',
    label: 'Brands',
    role: 'Sponsors & Product Placements',
    x: 0.84,
    y: 0.40,
    connections: ALL_NODE_IDS.filter((id) => id !== 'brands'),
    description: 'Contextual, natural script placements with verified post-release screen-time and ticket attribution.',
    signalMetric: 'Closed-Loop ROI Tracking'
  },
  {
    id: 'capital',
    label: 'Capital',
    role: 'Co-Financiers, Tax Funds & Syndicates',
    x: 0.50,
    y: 0.46,
    connections: ALL_NODE_IDS.filter((id) => id !== 'capital'),
    description: 'Partner-led financial discovery and automated CAM waterfall accounting without balance-sheet lending.',
    signalMetric: 'Pure Matching & Zero Risk'
  }
];

export const NetworkVisualizer: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeData>(ECOSYSTEM_NODES[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [highlightedEdgeKey, setHighlightedEdgeKey] = useState<string | null>(null);
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

    // Build unique undirected edges list for 28 total edges (full mesh)
    const uniqueEdges: { sourceId: string; targetId: string; key: string }[] = [];
    const seenEdges = new Set<string>();

    ECOSYSTEM_NODES.forEach((source) => {
      source.connections.forEach((targetId) => {
        const edgeKey = [source.id, targetId].sort().join('--');
        if (!seenEdges.has(edgeKey)) {
          seenEdges.add(edgeKey);
          uniqueEdges.push({ sourceId: source.id, targetId, key: edgeKey });
        }
      });
    });

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

      const activeTargetId = hoveredNodeId || activeNode.id;

      if (isSynchronized) {
        // Draw 28 Interconnected Mesh Edges
        uniqueEdges.forEach((edge, idx) => {
          const source = positions.find((n) => n.id === edge.sourceId);
          const target = positions.find((n) => n.id === edge.targetId);
          if (!source || !target) return;

          const isConnectedToFocused =
            edge.sourceId === activeTargetId || edge.targetId === activeTargetId;
          const isExplicitlyHighlighted = highlightedEdgeKey === edge.key;

          ctx.beginPath();
          ctx.moveTo(source.px, source.py);
          ctx.lineTo(target.px, target.py);

          if (isExplicitlyHighlighted) {
            // Highly highlighted single link
            ctx.strokeStyle = '#FFE270';
            ctx.lineWidth = 3;
            ctx.shadowColor = '#E5A919';
            ctx.shadowBlur = 14;
            ctx.stroke();
            ctx.shadowBlur = 0;
          } else if (isConnectedToFocused) {
            // Edges connected directly to active or hovered node
            ctx.strokeStyle = 'rgba(229, 169, 25, 0.72)';
            ctx.lineWidth = 2;
            ctx.shadowColor = '#E5A919';
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.shadowBlur = 0;
          } else {
            // Ambient mesh background lines linking all remaining nodes
            ctx.strokeStyle = 'rgba(200, 200, 210, 0.35)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Traveling signal pulses along edges
          if (isConnectedToFocused || isExplicitlyHighlighted) {
            // 3 Fast glowing pulses for focused links
            const pulseCount = 3;
            for (let i = 0; i < pulseCount; i++) {
              const speedOffset = (time * 0.42 + (i * 0.33) + (idx * 0.08)) % 1;
              const curX = source.px + (target.px - source.px) * speedOffset;
              const curY = source.py + (target.py - source.py) * speedOffset;

              ctx.beginPath();
              ctx.arc(curX, curY, isExplicitlyHighlighted ? 3.6 : 2.6, 0, Math.PI * 2);
              ctx.fillStyle = isExplicitlyHighlighted ? '#FFFFFF' : '#FFE270';
              ctx.shadowColor = '#E5A919';
              ctx.shadowBlur = 10;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          } else {
            // 1 Subtle ambient pulse for secondary mesh edges
            const speedOffset = (time * 0.22 + (idx * 0.17)) % 1;
            const curX = source.px + (target.px - source.px) * speedOffset;
            const curY = source.py + (target.py - source.py) * speedOffset;

            ctx.beginPath();
            ctx.arc(curX, curY, 1.6, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(229, 169, 25, 0.45)';
            ctx.fill();
          }
        });

        // Expanding beacon ripples around active node
        const activePos = positions.find((n) => n.id === activeTargetId);
        if (activePos) {
          for (let r = 0; r < 2; r++) {
            const ringRadius = 24 + ((time * 28 + r * 28) % 56);
            const ringAlpha = Math.max(0, 1 - ringRadius / 56) * 0.4;
            ctx.beginPath();
            ctx.arc(activePos.px, activePos.py, ringRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(229, 169, 25, ${ringAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Center orbital coordination ring
        const centerPos = positions.find((n) => n.id === 'capital');
        if (centerPos) {
          ctx.beginPath();
          ctx.arc(centerPos.px, centerPos.py, 38 + Math.sin(time * 1.5) * 3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(229, 169, 25, 0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      } else {
        // Fragmented state: only 4 broken, disconnected lines with friction
        const fragmentedSubset = uniqueEdges.slice(0, 4);
        fragmentedSubset.forEach((edge) => {
          const source = positions.find((n) => n.id === edge.sourceId);
          const target = positions.find((n) => n.id === edge.targetId);
          if (!source || !target) return;

          ctx.beginPath();
          ctx.moveTo(source.px, source.py);
          ctx.lineTo(target.px, target.py);
          ctx.setLineDash([4, 8]);
          ctx.strokeStyle = 'rgba(150, 150, 160, 0.12)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.setLineDash([]);
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [activeNode, hoveredNodeId, highlightedEdgeKey, isSynchronized]);

  return (
    <div
      id="hero-network-visualizer"
      className="relative w-full rounded-3xl bg-white border border-[var(--border-hairline)] p-5 sm:p-7 lg:p-8 overflow-hidden"
    >

      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-hairline)] relative z-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
            Cinema Graph Topology
          </span>
          <span className="text-xs text-[var(--text-tertiary)] font-mono hidden sm:inline">|</span>
          <span className="text-xs text-[var(--text-secondary)] font-mono">
            8 Ecosystem Nodes
          </span>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#E5A919]/10 text-[#E5A919] border border-[#E5A919]/25 font-bold">
            28 Full-Mesh Links
          </span>
        </div>

        {/* State Toggle: Synchronized vs Fragmented (Apple Segmented Control) */}
        <div className="flex items-center p-1 rounded-full bg-black/[0.04] border border-black/[0.06] text-xs">
          <button
            onClick={() => setIsSynchronized(true)}
            className={`px-3.5 py-1 rounded-full font-medium transition-all duration-200 ${
              isSynchronized
                ? 'bg-[#111111] text-white shadow-sm font-bold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
            id="btn-state-synchronized"
          >
            Synchronized (28 Links)
          </button>
          <button
            onClick={() => setIsSynchronized(false)}
            className={`px-3.5 py-1 rounded-full font-medium transition-all duration-200 ${
              !isSynchronized
                ? 'bg-red-500/15 text-red-600 border border-red-500/30 font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
            id="btn-state-fragmented"
          >
            Fragmented (Silos)
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative h-[380px] sm:h-[440px] md:h-[480px] w-full my-4">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Render 8 Interactive Node Anchors (Apple Precision Pills) */}
        {ECOSYSTEM_NODES.map((node) => {
          const isSelected = activeNode.id === node.id;
          const isHovered = hoveredNodeId === node.id;

          return (
            <button
              key={node.id}
              onClick={() => {
                setActiveNode(node);
                setHighlightedEdgeKey(null);
              }}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              style={{
                left: `${node.x * 100}%`,
                top: `${node.y * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute z-20 focus:outline-none transition-transform hover:scale-105"
              id={`node-btn-${node.id}`}
            >
              <div
                className={`relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border transition-all duration-200 shadow-sm ${
                  isSelected
                    ? 'bg-[#111111] border-[#111111] text-white shadow-md font-bold'
                    : isHovered
                    ? 'bg-white border-[#E5A919] text-[var(--text-primary)] shadow-sm'
                    : 'bg-white border-black/[0.08] text-[var(--text-primary)] hover:border-[#E5A919]/60'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-[var(--accent-gold)]' : isSynchronized ? 'bg-[#E5A919]' : 'bg-neutral-400'
                  }`}
                />
                <span className="text-xs sm:text-sm font-semibold tracking-tight">
                  {node.label}
                </span>

                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-black/[0.04] text-[var(--text-tertiary)]'
                  }`}
                >
                  7 links
                </span>

                {/* Outer halo when selected */}
                {isSelected && (
                  <span className="absolute -inset-1 rounded-full border border-[#E5A919]/50 animate-ping pointer-events-none" />
                )}
              </div>
            </button>
          );
        })}

        {/* Fragmented State Overlay Banner */}
        <AnimatePresence>
          {!isSynchronized && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="bg-red-50 border border-red-200 rounded-2xl px-6 py-4 text-center backdrop-blur-xl max-w-sm shadow-xl">
                <p className="text-[11px] font-mono text-red-600 uppercase tracking-widest mb-1.5 font-semibold">
                  Legacy Industry Friction
                </p>
                <p className="text-xs sm:text-sm text-red-700 font-medium leading-relaxed">
                  Disconnected phone calls, idle equipment, and opaque packaging leave 65% of potential cinema value stranded without cross-node linking.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Detail Inspector for Selected Node with All 7 Interconnected Links */}
      <div className="pt-5 border-t border-black/[0.06] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-4">
                <div className="flex items-center gap-1.5 text-[#E5A919] text-xs font-mono uppercase tracking-wider mb-1 font-semibold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Active Node Inspection</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                  {activeNode.label}
                  <span className="text-xs font-normal text-[var(--text-tertiary)] font-mono">
                    ({activeNode.role})
                  </span>
                </h4>
              </div>

              <div className="md:col-span-5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {activeNode.description}
              </div>

              <div className="md:col-span-3 flex md:justify-end">
                <div className="ds-card rounded-xl px-4 py-2 w-full md:w-auto text-left md:text-right">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--text-tertiary)] block">
                    Network Telemetry
                  </span>
                  <span className="text-xs font-semibold text-[#E5A919] font-mono">
                    {activeNode.signalMetric}
                  </span>
                </div>
              </div>
            </div>

            {/* All 7 Direct Node-to-Node Interconnected Links */}
            <div className="pt-3 border-t border-black/[0.04]">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <Network className="w-3.5 h-3.5 text-[#E5A919]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">
                    Direct Interconnected Links for {activeNode.label} (7 of 7 Nodes Connected):
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[var(--text-tertiary)] hidden sm:inline">
                  Hover link to isolate edge • Click to inspect node
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {activeNode.connections.map((targetId) => {
                  const targetNode = ECOSYSTEM_NODES.find((n) => n.id === targetId);
                  if (!targetNode) return null;

                  const edgeKey = [activeNode.id, targetId].sort().join('--');
                  const linkPurpose =
                    NODE_LINKS_MAP[activeNode.id]?.[targetId] || 'Synchronized coordination edge';
                  const isLinkActive = highlightedEdgeKey === edgeKey;

                  return (
                    <button
                      key={targetId}
                      onClick={() => {
                        setActiveNode(targetNode);
                        setHighlightedEdgeKey(null);
                      }}
                      onMouseEnter={() => setHighlightedEdgeKey(edgeKey)}
                      onMouseLeave={() => setHighlightedEdgeKey(null)}
                      className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                        isLinkActive
                          ? 'border-[#E5A919] bg-[#E5A919]/15 shadow-sm'
                          : 'bg-black/[0.02] border-black/[0.06] hover:border-[#E5A919]/50'
                      }`}
                      title={`Inspect ${targetNode.label} node`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1">
                          <span>↔</span> {targetNode.label}
                        </span>
                        <ArrowUpRight className="w-3 h-3 text-[#E5A919]" />
                      </div>
                      <span className="text-[11px] text-[var(--text-secondary)] leading-snug line-clamp-1">
                        {linkPurpose}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
