import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import catalogData from '../data/catalogData.json';
import { Filter, Search, RotateCcw, Package, Grid } from 'lucide-react';

export default function CatalogGrid({ activeCategory, onSelectCategory, searchQuery, setSearchQuery, onSelectProduct, onOpenInquiry }) {
  
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

    return list;
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalog-section" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C86D51] bg-rose-50 px-3 py-1 rounded-full border border-rose-100 mb-2">
              <Package className="w-3.5 h-3.5" /> OFFICIAL B2B PRODUCT CATALOG
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Export Grade Himalayan Salt Catalog
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Browse 48 SKUs across 13 specialized product lines. Custom granulation, sizing, packaging, and private label branding available on demand.
            </p>
          </div>

          {/* Quick Stats / Count Indicator */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl flex items-center gap-3 shadow-sm">
              <Grid className="w-5 h-5 text-[#C86D51]" />
              <div>
                <span className="text-xs text-slate-500 block leading-none">Products Found</span>
                <span className="text-lg font-extrabold text-slate-900 font-mono">
                  {filteredProducts.length} <span className="text-xs text-slate-400 font-normal">/ 48 SKUs</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation Pills Bar */}
        <div className="mb-8 overflow-x-auto pb-3 pt-1 scrollbar-none flex items-center gap-2 border-b border-slate-100">
          
          <button
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all transform active:scale-95 ${
              activeCategory === 'all'
                ? 'bg-[#C86D51] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Categories (48)
          </button>

          {catalogData.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all transform active:scale-95 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-[#C86D51] text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                {cat.products.length}
              </span>
            </button>
          ))}
        </div>

        {/* Filter / Search Bar Status */}
        {searchQuery && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 bg-rose-50/80 border border-rose-100 rounded-xl p-3 flex items-center justify-between text-xs"
          >
            <span className="text-slate-700 font-medium">
              Showing results for: <strong className="text-[#C86D51]">"{searchQuery}"</strong>
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear Search
            </button>
          </motion.div>
        )}

        {/* Product Cards Grid with Smooth Framer Motion Transition */}
        {filteredProducts.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
            className="bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-12 text-center max-w-md mx-auto my-8"
          >
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching SKUs found</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your search filter or category selection to view catalog items.
            </p>
            <button
              onClick={() => { onSelectCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#C86D51] text-white text-xs font-semibold rounded-xl hover:bg-[#b05c42] transition-colors"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
