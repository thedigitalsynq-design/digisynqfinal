import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS_CATALOG } from '../data/platformsData';
import { ProductItem, ProductCategory, BusinessModel, TargetUser } from '../types';
import { Search, Filter, X, ArrowUpRight, Check, Layers } from 'lucide-react';
import { ProductDetailModal } from './ProductDetailModal';

const CATEGORIES: ProductCategory[] = [
  'Intelligence',
  'Audience',
  'Reputation',
  'Talent',
  'Production',
  'Distribution',
  'Marketing',
  'Content & Rights',
  'Capital',
  'Assets',
  'Operations',
  'Network',
];

const BUSINESS_MODELS: BusinessModel[] = [
  'SaaS',
  'Marketplace',
  'Enterprise',
  'Intelligence',
  'API',
];

const TARGET_USERS: TargetUser[] = [
  'Producers',
  'Production Teams',
  'Talent & Crew',
  'Distributors',
  'Exhibitors',
  'Brands & Sponsors',
  'Creators',
  'Investors',
  'Audiences',
];

interface ProductDirectoryProps {
  initialCategory?: string;
  onOpenJoinModal: (role?: string) => void;
}

export const ProductDirectory: React.FC<ProductDirectoryProps> = ({
  initialCategory,
  onOpenJoinModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [selectedModel, setSelectedModel] = useState<string>('All');
  const [selectedUser, setSelectedUser] = useState<string>('All');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      // Search text match
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.capabilities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category match
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      // Model match
      const matchesModel =
        selectedModel === 'All' || item.businessModel === selectedModel;

      // User match
      const matchesUser =
        selectedUser === 'All' || item.targetUsers.includes(selectedUser as TargetUser);

      return matchesSearch && matchesCategory && matchesModel && matchesUser;
    });
  }, [searchQuery, selectedCategory, selectedModel, selectedUser]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedModel('All');
    setSelectedUser('All');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedModel !== 'All' ||
    selectedUser !== 'All';

  return (
    <section
      id="product-directory"
      className="py-24 sm:py-32 bg-[var(--bg-canvas)] border-t border-black/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A919]/10 border border-[#E5A919]/25 text-[#E5A919] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Searchable Capability Index</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            Explore DigiSynq
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Browse through specialized platforms, capabilities, and workflows powering the asset-light cinema operating network.
          </p>
        </div>

        {/* Search & Filter Controls - Apple Spotlight Style */}
        <div className="ds-card rounded-3xl p-5 sm:p-7 mb-10 shadow-lg space-y-5">
          {/* Top Row: Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-tertiary)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name, workflow need, or capability (e.g. 'call sheets', 'camera', 'distribution', 'sentiment')..."
              className="w-full bg-black/[0.03] border border-black/[0.08] rounded-2xl pl-11 pr-10 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[#E5A919]/80 focus:ring-2 focus:ring-[#E5A919]/20 transition-all font-sans"
              id="directory-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)] font-semibold">
                Filter by Category:
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-[var(--accent-gold)] hover:underline flex items-center gap-1 font-medium"
                >
                  <X className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                      isSelected
                        ? 'bg-[#111111] text-white border-transparent shadow-sm'
                        : 'bg-black/[0.02] border-black/[0.05] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Filters: User Type & Business Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/[0.04]">
            {/* Target User */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[var(--text-tertiary)] whitespace-nowrap font-medium">
                Stakeholder:
              </span>
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="w-full bg-black/[0.03] border border-black/[0.08] rounded-xl px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#E5A919]"
                id="select-target-user"
              >
                <option value="All" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">All Cinema Stakeholders</option>
                {TARGET_USERS.map((user) => (
                  <option key={user} value={user} className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
                    {user}
                  </option>
                ))}
              </select>
            </div>

            {/* Business Model */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[var(--text-tertiary)] whitespace-nowrap font-medium">
                Model:
              </span>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-black/[0.03] border border-black/[0.08] rounded-xl px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#E5A919]"
                id="select-business-model"
              >
                <option value="All" className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">All Business Models</option>
                {BUSINESS_MODELS.map((model) => (
                  <option key={model} value={model} className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
                    {model}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)] mb-6">
          <span>
            Showing <strong className="text-[var(--text-primary)] font-semibold">{filteredProducts.length}</strong> matching capabilities
          </span>
          {selectedCategory !== 'All' && (
            <span className="text-[#E5A919] font-medium">Category: {selectedCategory}</span>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                  key={item.id}
                  className="rounded-2xl apple-card p-6 flex flex-col justify-between group shadow-sm hover:shadow-md"
                  id={`product-card-${item.id}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full apple-glass text-[#E5A919]">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
                        {item.businessModel}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[#E5A919] transition-colors mb-1 tracking-tight">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[var(--text-secondary)] font-medium mb-3">
                      {item.tagline}
                    </p>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>

                    <div className="mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)] block mb-1.5 font-semibold">
                        Key Capabilities:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.capabilities.slice(0, 3).map((cap) => (
                          <span
                            key={cap}
                            className="text-[10px] bg-black/[0.03] text-[var(--text-secondary)] px-2.5 py-0.5 rounded-full border border-black/[0.05]"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/[0.04] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-tertiary)] font-mono truncate max-w-[170px]">
                      <span>For:</span>
                      <span className="text-[var(--text-primary)] font-medium truncate">
                        {item.targetUsers[0]}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveModalProduct(item)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#E5A919] hover:underline transition-colors"
                    >
                      <span>View Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 apple-card rounded-3xl"
          >
            <p className="text-base text-[var(--text-secondary)] mb-4">
              No products found matching your current filter criteria.
            </p>
            <button
              onClick={resetFilters}
              className="apple-btn-primary px-5 py-2.5 text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Deep Architecture Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <ProductDetailModal
            product={activeModalProduct}
            onClose={() => setActiveModalProduct(null)}
            onOpenJoinModal={onOpenJoinModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
