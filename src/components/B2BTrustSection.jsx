import React from 'react';
import { ShieldCheck, Truck, Award, Sparkles, CheckCircle, Package, Anchor, Globe, Layers } from 'lucide-react';
import catalogData from '../data/catalogData.json';

export default function B2BTrustSection({ onOpenInquiry }) {
  const { shippingTerms, qualityStandards } = catalogData.company;

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Ambient Glow & Vector Lines */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-glow rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-warmth rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Trusted Global Exporter
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Built for International Wholesalers & Importers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Driven by quality, purity, and strict food safety standards. We supply high-volume B2B orders with guaranteed authenticity and flexible shipping terms worldwide.
          </p>
        </div>

        {/* 3 Pillar Cards: Shipping Terms, Quality Standards, Custom Production */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Incoterms Shipping Terms */}
          <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 shadow-xl flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C86D51] to-[#E8927C] p-0.5 mb-5 shadow-lg">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <Anchor className="w-6 h-6 text-[#E8927C]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Flexible Shipping Terms</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                We handle complete export documentation, container loading, and port logistics across three flexible Incoterms:
              </p>

              <div className="space-y-3">
                {shippingTerms.map((term) => (
                  <div key={term.code} className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono font-bold text-xs text-[#F5A97F] bg-slate-800 px-2 py-0.5 rounded">
                        {term.code}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-300">{term.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{term.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-rose-300 font-medium">
              <Truck className="w-4 h-4" /> Worldwide Container Freight Support
            </div>
          </div>

          {/* Pillar 2: Strict Quality & Food Safety */}
          <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 shadow-xl flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C86D51] to-[#E8927C] p-0.5 mb-5 shadow-lg">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#E8927C]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Quality & Food Safety</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Every batch of salt is harvested from pristine Khewra mines and processed under strict hygienic controls:
              </p>

              <div className="space-y-3">
                {qualityStandards.map((std, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" /> Certified 100% Pure Rock Salt
            </div>
          </div>

          {/* Pillar 3: On Your Demand Custom Manufacturing */}
          <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 shadow-xl flex flex-col justify-between hover:border-rose-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C86D51] to-[#E8927C] p-0.5 mb-5 shadow-lg">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <Layers className="w-6 h-6 text-[#E8927C]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">"On Your Demand" OEM</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Need a specific crystal shape, custom weight, or private label branding? Our manufacturing facility accommodates custom OEM production.
              </p>

              <div className="bg-slate-900/90 rounded-2xl p-4 border border-rose-500/20 space-y-2 mb-4">
                <p className="text-xs font-bold text-[#E8927C]">Custom Capability Matrix:</p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Granulation sizes: 0.2mm to 5.0mm</li>
                  <li>Weight range: 100g retail to 25kg bulk bags</li>
                  <li>Custom Lamp Shapes: Geometrics, Animal shapes, Sculptures</li>
                  <li>Private Label Branding & Barcoding</li>
                </ul>
              </div>
            </div>

            <button
              onClick={onOpenInquiry}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#C86D51] via-[#E8927C] to-[#F5A97F] text-white font-bold text-xs shadow-lg hover:scale-102 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-white" /> Request Custom Manufacturing Quote
            </button>
          </div>

        </div>

        {/* Global Export Banner */}
        <div className="bg-gradient-to-r from-rose-950/60 via-slate-800 to-rose-950/60 rounded-3xl p-8 border border-rose-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-center shrink-0">
              <Globe className="w-7 h-7 text-rose-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Serving Wholesalers, Retailers & Importers Worldwide</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Pakistan Base • Reliable Export Freight • Secure Moisture-Resistant Packaging
              </p>
            </div>
          </div>

          <button
            onClick={onOpenInquiry}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-lg hover:bg-rose-50 transition-colors"
          >
            Start Export Inquiry Now
          </button>
        </div>

      </div>
    </section>
  );
}
