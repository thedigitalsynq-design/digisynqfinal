import React from 'react';
import { ProductItem } from '../types';
import { X, Check, ArrowRight, Layers, ShieldCheck, Network, Cpu, ArrowUpRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenJoinModal: (role?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenJoinModal,
}) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      id="product-detail-modal"
    >
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#0E1119] border border-white/15 shadow-2xl shadow-black overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header / Hero */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#141824] via-[#0E1119] to-[#141824] border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close product view"
            id="btn-close-product-modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#E5A919]/10 text-[#E5A919] border border-[#E5A919]/30">
              {product.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 text-neutral-300 border border-white/10">
              Model: {product.businessModel}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {product.name}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-neutral-300">
            {product.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenJoinModal(product.name);
              }}
              className="inline-flex items-center gap-2 bg-[#E5A919] hover:bg-[#f5b82e] text-black font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-[#E5A919]/20"
              id="modal-cta-get-started"
            >
              <span>Access {product.name}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenJoinModal('Partner');
              }}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg border border-white/10 transition-colors"
            >
              Partner Integration
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 block mb-2">
                The Friction Solved
              </span>
              <p className="text-sm text-neutral-200 leading-relaxed">
                {product.problemSolved}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E5A919] block mb-2">
                Operational Overview
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Who It's For */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              Target Cinema Ecosystem Stakeholders
            </span>
            <div className="flex flex-wrap gap-2">
              {product.targetUsers.map((user) => (
                <span
                  key={user}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white"
                >
                  {user}
                </span>
              ))}
            </div>
          </div>

          {/* Capabilities Grid */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              Core Technical Capabilities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <Check className="w-4 h-4 text-[#E5A919] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Workflow Steps (Discover -> Match -> Coordinate -> Measure) */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              Automated Lifecycle Workflow
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {product.workflowSteps.map((step, idx) => (
                <div
                  key={step}
                  className="p-3.5 rounded-lg bg-[#11141E] border border-white/5 text-left"
                >
                  <span className="text-[10px] font-mono text-[#E5A919] block mb-1">
                    Step 0{idx + 1}
                  </span>
                  <p className="text-xs text-neutral-300 leading-snug">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Network Connections */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
              Interconnected Graph Modules
            </span>
            <p className="text-xs text-neutral-400 mb-2">
              This product is not an isolated point solution; it seamlessly feeds data into and receives signals from:
            </p>
            <div className="flex flex-wrap gap-2">
              {product.networkConnections.map((conn) => (
                <span
                  key={conn}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#E5A919]/5 border border-[#E5A919]/25 text-[#E5A919]"
                >
                  ⇄ {conn}
                </span>
              ))}
            </div>
          </div>

          {/* Business Model Summary */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
            <div>
              Commercial Framework:{' '}
              <span className="text-white font-bold">{product.businessModel}</span>
            </div>
            <div className="text-neutral-500">
              DigiSynq Asset-Light Operating Network
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
