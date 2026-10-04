import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import catalogData from '../data/catalogData.json';
import { Filter, Search, RotateCcw, Package, Grid, Sparkles, ArrowLeft, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export default function CatalogGrid({ activeCategory, onSelectCategory, searchQuery, setSearchQuery, onSelectProduct, onOpenInquiry }) {
  const [sortBy, setSortBy] = React.useState('sku');

  // Category definitions with thumbnail imagery and stats
  const categoryCards = [
    {
      id: 'edible',
      title: 'Edible Himalayan Salt',
      badge: 'Food Grade',
      count: 8,
      image: '/assets/catalog/LP-G-004.jpg',
      specs: 'Powder · Fine · Coarse · Granular (0.2mm - 5.0mm)',
      description: 'Pristine, 100% organic food-grade Himalayan pink salt in light & dark mineral varieties for retail, food processing, and gourmet seasoning.'
    },
    {
      id: 'lamps',
      title: 'Natural & Geometric Salt Lamps',
      badge: 'Hand Carved',
      count: 8,
      image: '/assets/catalog/NS-L-001.jpg',
      specs: 'Natural Shape (1-7kg) · Cube · Pyramid · Teardrop · Zebra',
      description: 'Authentic raw rock salt lamps and architecturally carved geometric shapes with warm air-ionizing amber glow on wooden bases.'
    },
    {
      id: 'wellness',
      title: 'Home & Wellness Decor',
      badge: 'Ambience & Lighting',
      count: 12,
      image: '/assets/catalog/FBL-N-001.jpg',
      specs: '5V USB Lamps · Fire Bowls · Rose Bowls · Plug-In Night Lights',
      description: 'Portable USB workstation lamps, chunk & ball fire bowls, petal rose bowls, and direct wall socket plug-in night lights.'
    },
    {
      id: 'kitchenware_licks',
      title: 'Kitchenware, Salt Licks & Therapy',
      badge: 'Gourmet & Farm Care',
      count: 24,
      image: '/assets/catalog/CT-004.jpg',
      specs: 'Candle Holders · Salt Slabs · Shot Glasses · Animal Licks · Massage Stones',
      description: 'Grill searing tiles, salt bricks, tequila glasses, mortar & pestle, tea light candle holders, livestock salt licks, and spa detox plates.'
    }
  ];

  // Active Category Object metadata
  const currentCategoryMeta = useMemo(() => {
    if (!activeCategory || activeCategory === 'all' || activeCategory === 'overview') return null;
    return categoryCards.find(c => c.id === activeCategory) || catalogData.categories.find(c => c.id === activeCategory);
  }, [activeCategory]);

  // Filtered Products List
  const filteredProducts = useMemo(() => {
    let list = [];

    if (!activeCategory || activeCategory === 'overview') {
      return []; // In overview state, we show category cards instead of product listing
    }

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

    // Search query filtering
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

    // Sort list
    if (sortBy === 'sku') {
      list.sort((a, b) => a.sku.localeCompare(b.sku));
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  // Check if we are in category view or category selection overview mode
  const isCategoryView = Boolean((activeCategory && activeCategory !== 'overview') || (searchQuery && searchQuery.trim() !== ''));

  return (
    <section id="catalog-section" className="py-16 md:py-24 bg-[#F9FAFB] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* VIEW MODE 1: HOMEPAGE CLEAN CATEGORY CARDS GRID */}
        {!isCategoryView && (
          <div>
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-14 space-y-3"
            >
              <div className="inline-flex items-center gap-2 text-xs font-black text-[#C86D51] bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200/80 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-[#E8927C]" /> PRODUCT CATEGORIES CATALOG
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
                Explore Product Categories
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Select a category to view specialized export-grade Himalayan salt SKUs. Custom granulation, sizing, and private-label packaging available on demand.
              </p>
            </motion.div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {categoryCards.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => onSelectCategory(cat.id)}
                  className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#E8927C] transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center gap-6 transform hover:-translate-y-1"
                >
                  {/* Category Thumbnail Box */}
                  <div className="w-full sm:w-44 h-48 rounded-2xl bg-slate-50 border border-slate-200/80 p-3 shrink-0 flex items-center justify-center overflow-hidden relative shadow-2xs group-hover:scale-103 transition-transform">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-black text-[#C86D51] bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                      {cat.count} SKUs
                    </span>
                  </div>

                  {/* Category Card Content */}
                  <div className="flex-1 space-y-2.5 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {cat.badge}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#111827] group-hover:text-[#C86D51] transition-colors leading-snug">
                      {cat.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>

                    <div className="pt-2 flex items-center justify-center sm:justify-start gap-2 text-xs font-black text-[#C86D51] group-hover:translate-x-1 transition-transform">
                      <span>View Products in Category ({cat.count} SKUs)</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All SKUs Banner Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-base font-black text-[#111827]">Looking for the complete master catalog?</h4>
                <p className="text-xs text-slate-500 mt-0.5">Browse all 52 Himalayan Pink Salt SKUs across all categories in a single view.</p>
              </div>
              <button
                onClick={() => onSelectCategory('all')}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-[#C86D51] text-white text-xs font-black transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
              >
                Browse All 52 SKUs <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: DEDICATED CATEGORY PRODUCT VIEW */}
        {isCategoryView && (
          <div>
            {/* Breadcrumb Navigation Bar & Back Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
              <button
                onClick={() => onSelectCategory(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-rose-50 text-slate-800 hover:text-[#C86D51] text-xs font-black border border-slate-200 hover:border-rose-300 shadow-2xs transition-all cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 text-[#C86D51] group-hover:-translate-x-1 transition-transform" />
                <span>Back to All Categories</span>
              </button>

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span onClick={() => onSelectCategory(null)} className="hover:text-slate-900 cursor-pointer">Home</span>
                <span>/</span>
                <span onClick={() => onSelectCategory(null)} className="hover:text-slate-900 cursor-pointer">Categories</span>
                <span>/</span>
                <span className="text-[#C86D51] font-bold">
                  {currentCategoryMeta ? (currentCategoryMeta.title || currentCategoryMeta.name) : (activeCategory === 'all' ? 'All 52 SKUs' : 'Search Results')}
                </span>
              </div>
            </div>

            {/* Category Page Title & Description Header */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black text-[#C86D51] bg-rose-50 px-3 py-1 rounded-full border border-rose-200/80 mb-2">
                  <Package className="w-3.5 h-3.5" /> 
                  {currentCategoryMeta ? (currentCategoryMeta.badge || 'Official Category') : 'Master Catalog'}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
                  {currentCategoryMeta ? (currentCategoryMeta.title || currentCategoryMeta.name) : (activeCategory === 'all' ? 'All 52 Master Catalog SKUs' : `Search Results for "${searchQuery}"`)}
                </h2>
                <p className="text-slate-600 text-sm mt-1 max-w-2xl">
                  {currentCategoryMeta ? currentCategoryMeta.description : 'Export grade authentic Himalayan salt products manufactured in Pakistan.'}
                </p>
              </div>

              {/* Quick Stats & Sort Selector */}
              <div className="flex flex-wrap items-center gap-3">
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
                      {filteredProducts.length} <span className="text-xs text-slate-400 font-normal">SKUs</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Active Search Pill */}
            {searchQuery && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-center justify-between text-xs"
              >
                <span className="text-slate-700 font-medium">
                  Filtering by search: <strong className="text-[#C86D51]">"{searchQuery}"</strong>
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-slate-500 hover:text-slate-800 flex items-center gap-1 font-bold transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Clear Search
                </button>
              </motion.div>
            )}

            {/* Category Product Cards Grid */}
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
                  Try adjusting your search query or choosing another category.
                </p>
                <button
                  onClick={() => { onSelectCategory(null); setSearchQuery(''); }}
                  className="px-4 py-2 bg-[#C86D51] text-white text-xs font-bold rounded-xl hover:bg-[#b05c42] transition-colors cursor-pointer"
                >
                  Return to Categories
                </button>
              </motion.div>
            )}
          </div>
        )}

        {/* Customization Callout Banner */}
        <div className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          
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
          </div>

        </div>

      </div>
    </section>
  );
}
