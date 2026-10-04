import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, Mail, Globe, Menu, X, Search, ChevronDown, Award, Home } from 'lucide-react';
import ZMLogo from './ZMLogo';

export default function Navbar({ activeCategory, onSelectCategory, searchQuery, setSearchQuery, onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const customFilterTabs = [
    { id: null, label: 'All Categories Overview' },
    { id: 'edible', label: 'Edible Salt' },
    { id: 'lamps', label: 'Salt Lamps' },
    { id: 'wellness', label: 'Home & Wellness' },
    { id: 'kitchenware_licks', label: 'Kitchenware & Animal Licks' },
    { id: 'all', label: 'Master Catalog (52 SKUs)' }
  ];

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
        ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/80 py-2.5' 
        : 'bg-[#F9FAFB]/95 backdrop-blur-md border-b border-slate-200/80 py-3 sm:py-3.5'
    }`}>

      {/* Top Banner Bar for Export Contact & Incoterms */}
      <div className="hidden lg:block bg-[#111827] text-slate-200 text-xs py-1.5 px-6 border-b border-slate-800 mb-2.5 -mt-3 sm:-mt-3.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#F7C5BA] font-bold tracking-wide">
              <Award className="w-3.5 h-3.5 text-[#E8927C]" /> ZM EXPORTS — HIMALAYAN PINK SALT SUPPLIER
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-300 font-mono text-[11px]">EXW · FOB · CIF Shipping Terms</span>
          </div>
          <div className="flex items-center space-x-6 text-slate-200">
            <a href="tel:03719161020" className="flex items-center gap-1.5 hover:text-[#F7C5BA] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#E8927C]" /> 03719161020, 03371113332
            </a>
            <a href="mailto:zmexports.trade.com" className="flex items-center gap-1.5 hover:text-[#F7C5BA] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#E8927C]" /> zmexports.trade.com
            </a>
            <a href="https://instagram.com/zmexports.trade" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#F7C5BA] transition-colors">
              <Globe className="w-3.5 h-3.5 text-[#E8927C]" /> @zmexports.trade
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo - Resets to Homepage Category Grid */}
          <div 
            onClick={() => onSelectCategory(null)}
            className="flex items-center group py-1 cursor-pointer"
          >
            <ZMLogo className="h-10 sm:h-14" variant="dark" />
          </div>

          {/* Search Bar & Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            
            {/* Home / Overview Link */}
            <button
              onClick={() => onSelectCategory(null)}
              className={`text-xs font-black transition-colors cursor-pointer flex items-center gap-1 ${
                activeCategory === null ? 'text-[#C86D51]' : 'text-slate-700 hover:text-[#C86D51]'
              }`}
            >
              <Home className="w-3.5 h-3.5" /> Categories
            </button>

            {/* Category Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-black text-slate-800 hover:text-[#C86D51] py-2 transition-colors cursor-pointer uppercase tracking-wider"
              >
                Dropdown
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 overflow-hidden text-slate-800"
                  >
                    {customFilterTabs.map((tab) => (
                      <button
                        key={String(tab.id)}
                        onClick={() => { onSelectCategory(tab.id); setDropdownOpen(false); }}
                        className={`w-full text-left px-3 py-2 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                          activeCategory === tab.id ? 'bg-rose-50 text-[#C86D51] font-black border border-rose-200' : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Category Tab Links */}
            <button 
              onClick={() => onSelectCategory('edible')}
              className={`text-xs font-bold transition-colors cursor-pointer ${activeCategory === 'edible' ? 'text-[#C86D51]' : 'text-slate-700 hover:text-[#C86D51]'}`}
            >
              Edible Salt
            </button>

            <button 
              onClick={() => onSelectCategory('lamps')}
              className={`text-xs font-bold transition-colors cursor-pointer ${activeCategory === 'lamps' ? 'text-[#C86D51]' : 'text-slate-700 hover:text-[#C86D51]'}`}
            >
              Salt Lamps
            </button>

            <button 
              onClick={() => onSelectCategory('wellness')}
              className={`text-xs font-bold transition-colors cursor-pointer ${activeCategory === 'wellness' ? 'text-[#C86D51]' : 'text-slate-700 hover:text-[#C86D51]'}`}
            >
              Home & Wellness
            </button>

            <button 
              onClick={() => onSelectCategory('kitchenware_licks')}
              className={`text-xs font-bold transition-colors cursor-pointer ${activeCategory === 'kitchenware_licks' ? 'text-[#C86D51]' : 'text-slate-700 hover:text-[#C86D51]'}`}
            >
              Kitchenware & Licks
            </button>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-4 py-1.5 text-xs bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 focus:border-[#E8927C] rounded-full w-36 focus:w-52 transition-all outline-none shadow-2xs"
              />
            </div>

            {/* Export Quote CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenInquiry}
              className="bg-gradient-to-r from-[#111827] to-[#1F2937] hover:from-[#C86D51] hover:to-[#E8927C] text-white text-xs font-black px-4 py-2 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F7C5BA]" /> Inquire Now
            </motion.button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenInquiry}
              className="bg-[#111827] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#C86D51] rounded-lg transition-colors cursor-pointer"
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
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl overflow-hidden text-slate-800"
          >
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search SKU code (e.g. LP-P-001)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E8927C]"
              />
            </div>

            <p className="text-xs font-black uppercase tracking-wider text-slate-400 px-1">Navigation</p>
            
            <div className="grid grid-cols-1 gap-1">
              {customFilterTabs.map((tab) => (
                <button
                  key={String(tab.id)}
                  onClick={() => { onSelectCategory(tab.id); setMobileMenuOpen(false); }}
                  className={`text-left px-3 py-2 text-xs rounded-xl font-bold ${activeCategory === tab.id ? 'bg-rose-50 text-[#C86D51]' : 'text-slate-700'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-700">
              <a href="tel:03719161020" className="flex items-center gap-2 font-medium">
                <Phone className="w-4 h-4 text-[#C86D51]" /> 03719161020, 03371113332
              </a>
              <a href="mailto:zmexports.trade.com" className="flex items-center gap-2 font-medium">
                <Mail className="w-4 h-4 text-[#C86D51]" /> zmexports.trade.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
