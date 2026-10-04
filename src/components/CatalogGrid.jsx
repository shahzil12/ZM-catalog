import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import catalogData from '../data/catalogData.json';
import { Filter, Search, RotateCcw, Package, Grid, Sparkles, Phone, MessageSquare } from 'lucide-react';

export default function CatalogGrid({ activeCategory, onSelectCategory, searchQuery, setSearchQuery, onSelectProduct, onOpenInquiry }) {
  const [sortBy, setSortBy] = React.useState('sku');
  
  // Custom filter category tabs specified in official prompt
  const customFilterTabs = [
    { id: 'all', label: 'All Products (52)' },
    { id: 'edible', label: 'Edible Salt' },
    { id: 'lamps', label: 'Salt Lamps' },
    { id: 'wellness', label: 'Home & Wellness' },
    { id: 'kitchenware_licks', label: 'Kitchenware & Animal Licks' }
  ];

  // Flatten all products or filter by category & search term
  const filteredProducts = useMemo(() => {
    let list = [];

    if (activeCategory === 'all') {
      catalogData.categories.forEach(cat => {
        cat.products.forEach(p => {
          list.push({ ...p, categoryName: cat.name, categoryBadge: cat.badge });
        });
      });
    } else {
      const cat = catalogData.categories.find(c => c.id === activeCategory);
      if (cat) {
        cat.products.forEach(p => {
          list.push({ ...p, categoryName: cat.name, categoryBadge: cat.badge });
        });
      }
    }

    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.spec.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        (p.highlight && p.highlight.toLowerCase().includes(q))
      );
    }

    // Sort options
    if (sortBy === 'sku') {
      list.sort((a, b) => a.sku.localeCompare(b.sku));
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="catalog-section" className="py-16 md:py-24 bg-[#F9FAFB] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#C86D51] bg-rose-50 px-3 py-1 rounded-full border border-rose-200/80 mb-2">
              <Package className="w-3.5 h-3.5" /> OFFICIAL B2B PRODUCT CATALOG
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
              Export Grade Himalayan Salt Products
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Browse all 52 SKUs across edible salt, lamps, kitchenware, animal licks, and therapy items. Custom granulation and private-label packaging produced on demand.
            </p>
          </div>

          {/* Quick Stats & Sort Selector */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Sort Control Dropdown */}
            <div className="bg-white border border-slate-200 px-3 py-2 rounded-xl flex items-center gap-2 shadow-2xs">
              <Filter className="w-4 h-4 text-[#C86D51]" />
              <span className="text-xs font-bold text-slate-600">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer py-0.5 pr-1"
              >
                <option value="sku">Catalog Order (SKU)</option>
                <option value="name-asc">Product Title (A to Z)</option>
                <option value="name-desc">Product Title (Z to A)</option>
              </select>
            </div>

            <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl flex items-center gap-3 shadow-2xs">
              <Grid className="w-5 h-5 text-[#C86D51]" />
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase leading-none">Products</span>
                <span className="text-sm font-extrabold text-slate-900 font-mono">
                  {filteredProducts.length} <span className="text-xs text-slate-400 font-normal">/ 52 SKUs</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation Filter Tabs */}
        <div className="mb-8 overflow-x-auto pb-2 pt-1 scrollbar-none flex items-center gap-2 border-b border-slate-200/80">
          {customFilterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`shrink-0 px-5 py-2.5 rounded-xl text-xs font-black transition-all transform active:scale-95 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#111827] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Search Filter Pill */}
        {searchQuery && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-center justify-between text-xs"
          >
            <span className="text-slate-700 font-medium">
              Filter: <strong className="text-[#C86D51]">"{searchQuery}"</strong>
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-slate-500 hover:text-slate-800 flex items-center gap-1 font-bold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear Search
            </button>
          </motion.div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.sku}
                  index={idx}
                  product={product}
                  categoryBadge={product.categoryBadge}
                  onSelectProduct={onSelectProduct}
                  onOpenInquiry={onOpenInquiry}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-dashed border-slate-300 rounded-3xl p-12 text-center max-w-md mx-auto my-8 shadow-2xs"
          >
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching SKUs found</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your search query or selecting a different category tab.
            </p>
            <button
              onClick={() => { onSelectCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#C86D51] text-white text-xs font-bold rounded-xl hover:bg-[#b05c42] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* SECTION 4: Customization Callout Banner */}
        <div className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Ambient Warm Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8927C]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center md:text-left z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-[#F7C5BA] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
              B2B Custom OEM & Manufacturing
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Custom Specifications & OEM Supply
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-[#F7C5BA]">On Your Demand:</strong> Any size, custom shape, specification, grain size, and private-label packaging can be produced.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full md:w-auto">
            <button
              onClick={() => onOpenInquiry({ name: 'Custom Specification & OEM Request' })}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C86D51] to-[#E8927C] hover:from-[#e8927c] hover:to-[#C86D51] text-white font-black text-xs uppercase tracking-wider shadow-lg hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> Request Custom Order
            </button>

            <a
              href="https://wa.me/923719161020?text=Hi%20ZM%20Exports,%20I%20want%20to%20request%20a%20custom%20order%20specification."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp Direct
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
