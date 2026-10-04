import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Star, Box, Tag, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProductCard({ product, categoryBadge, onSelectProduct, onOpenInquiry }) {
  const imagePath = `/assets/catalog/${product.image}`;
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setRotate({ x: -(y / box.height) * 12, y: (x / box.width) * 12 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div 
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 && rotate.y === 0 ? 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.08s ease-out'
      }}
      className="group relative glass-card rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:border-[#E8927C] hover:shadow-2xl hover:z-20 transform-gpu"
    >
      
      {/* Top Badges Bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* SKU Code Pill */}
          <span className="font-mono text-[11px] font-bold text-slate-800 bg-slate-100 group-hover:bg-rose-100 group-hover:text-[#C86D51] px-2.5 py-1 rounded-lg border border-slate-200 group-hover:border-rose-200 transition-colors">
            SKU: {product.sku}
          </span>

          {/* Export Quality Indicator */}
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Export Grade
          </span>
        </div>

        {/* Product Visual Container with Clean White Studio Presentation */}
        <div 
          onClick={() => onSelectProduct(product)}
          className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-white cursor-pointer border border-slate-200/90 group-hover:border-[#E8927C] transition-all mb-4 shadow-sm group-hover:shadow-lg p-5 flex items-center justify-center"
        >
          <img
            src={imagePath}
            alt={product.name}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
          />


          {/* Fallback Graphic Container if image asset not present */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-amber-50 to-orange-100/60 -z-10 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C86D51] to-[#F5A97F] p-0.5 shadow-md mb-2 animate-pulse-glow">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Box className="w-7 h-7 text-[#C86D51]" />
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-700">{product.sku}</span>
            <span className="text-[10px] text-slate-500 font-semibold mt-0.5">Click for Specs</span>
          </div>

          {/* Quick Hover Overlay */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <span className="bg-white/95 text-slate-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-2xl flex items-center gap-1.5 transform group-hover:scale-105 transition-transform">
              <Sparkles className="w-3.5 h-3.5 text-[#C86D51] fill-[#C86D51]" /> View Specs & Quote
            </span>
          </div>

          {/* Rating Tag */}
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-slate-200/80 flex items-center gap-1 text-[10px] font-bold text-slate-700 shadow-sm">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            {product.rating || '4.9'}
          </div>
        </div>

        {/* Product Title & Spec details */}
        <h3 
          onClick={() => onSelectProduct(product)}
          className="font-bold text-slate-900 text-sm group-hover:text-[#C86D51] transition-colors cursor-pointer line-clamp-1 mb-1"
        >
          {product.name}
        </h3>

        {/* Weight / Granulation Specification */}
        <div className="flex items-center gap-2 mb-2 text-xs text-slate-600">
          <Tag className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-medium text-slate-700">Spec: {product.spec}</span>
        </div>

        {/* Feature Highlight note */}
        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-4">
          {product.highlight}
        </p>
      </div>

      {/* Footer Actions & Inquiry */}
      <div>
        {/* On Your Demand Custom Badge */}
        <div className="bg-rose-50/70 rounded-xl p-2 mb-3 border border-rose-100 flex items-center justify-between text-[10px] text-slate-600">
          <span className="font-semibold text-[#C86D51]">Export Spec</span>
          <span className="text-slate-500">"On Your Demand"</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelectProduct(product)}
            className="w-full py-2 rounded-xl bg-slate-100 hover:bg-rose-100 text-slate-800 hover:text-[#C86D51] text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" /> Details
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenInquiry(product)}
            className="w-full py-2 rounded-xl bg-[#C86D51] hover:bg-[#b05c42] text-white text-xs font-bold shadow-sm hover:shadow transition-all flex items-center justify-center gap-1"
          >
            Quote <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>

    </motion.div>
  );
}

