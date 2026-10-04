import React from 'react';
import { Sparkles, ChevronRight, ShieldCheck, Mail, Phone, Instagram, Package, CheckCircle2, ArrowRight } from 'lucide-react';
import ZMLogo from './ZMLogo';

export default function Hero3D({ onOpenInquiry, onScrollToCatalog }) {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 md:pb-24 bg-[#F9FAFB] text-slate-900 overflow-hidden border-b border-slate-200/80">
      
      {/* Mountain Silhouette Background Motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06] select-none z-0">
        <svg viewBox="0 0 1440 600" fill="currentColor" className="w-full h-full text-slate-900 object-cover" preserveAspectRatio="none">
          <path d="M0,600 L0,350 L200,180 L380,320 L580,120 L780,290 L980,80 L1180,260 L1380,140 L1440,200 L1440,600 Z" />
        </svg>
      </div>

      {/* Subtle Warm Pink Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F7C5BA]/25 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#E8927C]/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Desktop Split Screen / Stacked Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-[#F7C5BA] text-[#C86D51] text-xs font-black tracking-widest uppercase shadow-xs w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#E8927C]" />
              <span>HIMALAYAN PINK SALT SUPPLIER — PAKISTAN</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.1] uppercase font-sans">
              DRIVEN BY QUALITY, PURITY, AND STRICT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C86D51] via-[#E8927C] to-[#C86D51]">FOOD SAFETY STANDARDS</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Delivering authentic, premium Himalayan salt products to global markets that meet international standards and reflect true excellence.
            </p>

            {/* Key Export Feature Badges / Incoterms Chips */}
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-[#E8927C]" />
                Supported Export Incoterms & Packaging:
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300/90 text-xs font-mono font-black text-slate-800 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E8927C]"></span>
                  EXW (Ex Works)
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300/90 text-xs font-mono font-black text-slate-800 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E8927C]"></span>
                  FOB (Free On Board)
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300/90 text-xs font-mono font-black text-slate-800 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E8927C]"></span>
                  CIF (Cost, Insurance & Freight)
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-bold text-[#C86D51] shadow-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C86D51]" />
                  Secure Export-Grade Packaging
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1F2937] to-[#111827] hover:from-[#C86D51] hover:to-[#E8927C] text-white font-black text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Inquire Now / Request Quote
                <ChevronRight className="w-4 h-4 text-[#F7C5BA] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToCatalog}
                className="px-8 py-4 rounded-2xl bg-white border border-slate-300 hover:border-[#E8927C] text-slate-900 font-bold text-sm shadow-xs hover:bg-rose-50/50 hover:text-[#C86D51] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Product Categories
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C86D51]" />
              </button>
            </div>

            {/* Quick Contact Strip */}
            <div className="pt-4 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a 
                href="mailto:zmexports.trade.com" 
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-700 hover:border-[#E8927C] hover:text-[#C86D51] transition-all shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-100/80 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#C86D51]" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase leading-none">Email Us</span>
                  <span className="font-bold truncate">zmexports.trade.com</span>
                </div>
              </a>

              <a 
                href="https://wa.me/923719161020" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-700 hover:border-[#E8927C] hover:text-[#C86D51] transition-all shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase leading-none">WhatsApp / Call</span>
                  <span className="font-bold truncate">03719161020, 03371113332</span>
                </div>
              </a>

              <a 
                href="https://instagram.com/zmexports.trade" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-700 hover:border-[#E8927C] hover:text-[#C86D51] transition-all shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-100/80 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4 text-rose-600" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase leading-none">Instagram</span>
                  <span className="font-bold truncate">@zmexports.trade</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Hero Showcase */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Main High-End Floating Bowl & Wooden Scoop Hero Image Showcase */}
            <div className="relative w-full max-w-lg aspect-16/9 sm:aspect-4/3 lg:aspect-16/9 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group transition-transform duration-700 hover:scale-[1.01]">
              <img
                src="/assets/himalayan_pink_salt_hero.jpg"
                alt="Anti-gravity floating white ceramic bowl and wooden scoop with Himalayan Pink Salt"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Ambient Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#C86D51]" />
                <div>
                  <span className="text-xs font-black text-slate-900 uppercase block leading-none">100% Pure Rock Salt</span>
                  <span className="text-[10px] text-slate-500 font-medium">Authentic Khewra Mine Harvest</span>
                </div>
              </div>
            </div>

            {/* Official ZM EXPORTS Brand Card directly below visual */}
            <div className="mt-4 w-full max-w-lg bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ZMLogo className="h-10 sm:h-12" variant="dark" />
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">ZM EXPORTS</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Global B2B Supplier • Pakistan Base</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  ISO & HACCP Standards
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
