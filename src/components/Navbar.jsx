import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, Mail, Globe, Menu, X, Search, ChevronDown, Award } from 'lucide-react';
import catalogData from '../data/catalogData.json';
import ZMLogo from './ZMLogo';

export default function Navbar({ activeCategory, onSelectCategory, searchQuery, setSearchQuery, onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/80 py-2.5' 
        : 'bg-[#EBEAE8]/90 backdrop-blur-md border-b border-slate-300/60 py-3 sm:py-4'
    }`}>

      {/* Top Banner Bar for Export Contact & Quality Standards */}
      <div className="hidden lg:block bg-[#3A3A3A] text-slate-200 text-xs py-1.5 px-6 border-b border-slate-700/50 mb-3 -mt-3 sm:-mt-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-rose-300 font-bold tracking-wide">
              <Award className="w-3.5 h-3.5 text-[#E8927C]" /> Direct Manufacturer & Global Exporter
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-mono text-[11px]">EXW · FOB · CIF Container Freight</span>
          </div>
          <div className="flex items-center space-x-6 text-slate-200">
            <a href="tel:+923719161020" className="flex items-center gap-1.5 hover:text-rose-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-rose-300" /> +92 3719161020
            </a>
            <a href="mailto:zmexports.trade@gmail.com" className="flex items-center gap-1.5 hover:text-rose-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-rose-300" /> zmexports.trade@gmail.com
            </a>
            <a href="https://instagram.com/zmexports.trade" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-rose-300 transition-colors">
              <Globe className="w-3.5 h-3.5 text-rose-300" /> @zmexports.trade
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo (Dark Emblem on Light Off-White Background) */}
          <a href="#" className="flex items-center group py-1">
            <ZMLogo className="h-12 sm:h-16" variant="dark" />
          </a>

          {/* Search Bar & Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Category Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-bold text-[#3A3A3A] hover:text-[#C86D51] py-2 transition-colors cursor-pointer"
              >
                Catalog Categories
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 overflow-hidden text-slate-800"
                  >
                    <button
                      onClick={() => { onSelectCategory('all'); setDropdownOpen(false); }}
                      className={`w-full text-left px-3 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                        activeCategory === 'all' ? 'bg-rose-50 text-[#C86D51] font-extrabold border border-rose-200' : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      All Catalog Products (48 SKUs)
                    </button>
                    <div className="h-px bg-slate-100 my-1"></div>
                    <div className="max-h-64 overflow-y-auto pr-1 space-y-0.5 custom-scrollbar">
                      {catalogData.categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => { onSelectCategory(cat.id); setDropdownOpen(false); }}
                          className={`w-full text-left px-3 py-2 text-xs rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                            activeCategory === cat.id ? 'bg-rose-50 font-bold text-[#C86D51] border border-rose-200' : 'hover:bg-slate-50 text-slate-600'
                          }`}
                        >
                          <span className="truncate">{cat.name}</span>
                          <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 rounded-md text-slate-500 font-mono">
                            {cat.products.length}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Filter Links */}
            <button 
              onClick={() => onSelectCategory('all')}
              className={`text-sm font-bold transition-colors cursor-pointer ${activeCategory === 'all' ? 'text-[#C86D51]' : 'text-[#3A3A3A] hover:text-[#C86D51]'}`}
            >
              All Products
            </button>

            <button 
              onClick={() => onSelectCategory('natural-lamps')}
              className={`text-sm font-bold transition-colors cursor-pointer ${activeCategory === 'natural-lamps' ? 'text-[#C86D51]' : 'text-[#3A3A3A] hover:text-[#C86D51]'}`}
            >
              Salt Lamps
            </button>

            <button 
              onClick={() => onSelectCategory('edible-light')}
              className={`text-sm font-bold transition-colors cursor-pointer ${activeCategory === 'edible-light' ? 'text-[#C86D51]' : 'text-[#3A3A3A] hover:text-[#C86D51]'}`}
            >
              Edible Salt
            </button>

            <button 
              onClick={() => onSelectCategory('kitchenware')}
              className={`text-sm font-bold transition-colors cursor-pointer ${activeCategory === 'kitchenware' ? 'text-[#C86D51]' : 'text-[#3A3A3A] hover:text-[#C86D51]'}`}
            >
              Cookware
            </button>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-1.5 text-xs bg-white/90 text-slate-900 placeholder:text-slate-400 border border-slate-300 focus:border-[#E8927C] focus:bg-white rounded-full w-40 focus:w-56 transition-all outline-none shadow-sm"
              />
            </div>

            {/* Export Inquiry CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenInquiry}
              className="bg-gradient-to-r from-[#C86D51] via-[#E8927C] to-[#F5A97F] text-white text-xs font-extrabold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 fill-white" /> Request Quote
            </motion.button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenInquiry}
              className="bg-[#C86D51] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#C86D51] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl overflow-hidden text-slate-800"
          >
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by SKU (e.g. LP-P-001)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E8927C]"
              />
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">Categories</p>
            
            <div className="grid grid-cols-1 gap-1 max-h-60 overflow-y-auto custom-scrollbar">
              <button
                onClick={() => { onSelectCategory('all'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 text-sm rounded-xl font-semibold ${activeCategory === 'all' ? 'bg-rose-50 text-[#C86D51]' : 'text-slate-700'}`}
              >
                All Catalog Items (48 SKUs)
              </button>
              {catalogData.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { onSelectCategory(cat.id); setMobileMenuOpen(false); }}
                  className={`text-left px-3 py-2 text-sm rounded-xl ${activeCategory === cat.id ? 'bg-rose-50 font-bold text-[#C86D51]' : 'text-slate-600'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-700">
              <a href="tel:+923719161020" className="flex items-center gap-2 font-medium">
                <Phone className="w-4 h-4 text-[#C86D51]" /> Phone: +92 3719161020
              </a>
              <a href="mailto:zmexports.trade@gmail.com" className="flex items-center gap-2 font-medium">
                <Mail className="w-4 h-4 text-[#C86D51]" /> zmexports.trade@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

