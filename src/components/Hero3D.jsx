import React, { useState } from 'react';
import { Flame, Sparkles as SparklesIcon, ChevronRight, ShieldCheck, Truck, Award, Mail, Phone, Instagram } from 'lucide-react';
import ZMLogo from './ZMLogo';

export default function Hero3D({ onOpenInquiry, onScrollToCatalog }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 6,
      y: (x / rect.width) * 6
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 md:pb-20 overflow-hidden bg-[#EBEAE8] text-slate-900 selection:bg-rose-500 selection:text-white">
      
      {/* High-Resolution Bright Pink Salt Texture Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-25 mix-blend-multiply scale-105"
        style={{ backgroundImage: `url('/assets/catalog/salt_texture.jpg')` }}
      />

      {/* Light Off-White Gradient Overlay matching website theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBEAE8]/85 via-[#EBEAE8]/75 to-[#EBEAE8]/95 pointer-events-none z-0" />

      {/* Ambient Warm Rose Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-rose-glow rounded-full blur-3xl pointer-events-none opacity-30 z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Manufacturer Pill Badge - Centered above card as in reference */}
        <div className="text-center mb-6 pt-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#E8927C]/40 text-[#C86D51] text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-md backdrop-blur-md">
            <Flame className="w-4 h-4 text-[#C86D51] animate-pulse" />
            <span>DIRECT PAKISTAN MANUFACTURER & EXPORTER</span>
          </div>
        </div>

        {/* Main Poster Framing Card with 3D Parallax Tilt */}
        <div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: tilt.x === 0 && tilt.y === 0 ? 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s ease-out'
          }}
          className="bg-[#EBEAE8] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-slate-300/80 relative overflow-hidden transform-gpu flex flex-col justify-between"
        >
          
          {/* Top Salt Sprinkle Granules Overlay Decoration */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px] opacity-25 pointer-events-none" />

          {/* Inner Poster Card Content */}
          <div className="p-6 sm:p-10 lg:p-12 pb-6">

            {/* Top Headline: HIMALAYAN */}
            <div className="text-center mb-6 sm:mb-8 animate-float-3d relative">
              
              {/* Decorative Salt Crystal Granules Sprinkle Line above title */}
              <div className="w-full flex justify-center items-center opacity-40 mb-1">
                <div className="h-1.5 w-48 bg-gradient-to-r from-transparent via-[#C86D51] to-transparent rounded-full blur-[1px]" />
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-[#3A3A3A] tracking-tight uppercase leading-none font-mono text-3d-emboss">
                HIMALAYAN
              </h1>
            </div>

            {/* Main Poster Grid: Left Column (Photography + Logo) & Right Column (PINK SALT + Tagline + Fine Salt) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Bowl Photo & Official Logo */}
              <div className="lg:col-span-6 flex flex-col items-center lg:items-start space-y-6">
                
                {/* Coarse Pink Salt Bowl Photo */}
                <div className="relative w-full max-w-md h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-300 group transform-gpu transition-transform hover:scale-[1.02]">
                  <img
                    src="/assets/catalog/hero_bowls.jpg"
                    alt="Pure Himalayan Pink Salt Harvest in Wooden Bowl"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-slate-800 uppercase shadow-md border border-slate-200">
                    Pristine Khewra Salt Mine Harvest
                  </div>
                </div>

                {/* ZM EXPORTS Transparent Logo Badge */}
                <div className="pt-2 flex items-center gap-3">
                  <ZMLogo className="h-14 sm:h-20" variant="dark" />
                </div>

              </div>

              {/* Right Column: PINK SALT Clipped Text + Tagline + Fine Salt Bowl */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-center lg:text-left">
                
                {/* Giant Text-Clipped PINK SALT Headline */}
                <div className="space-y-0 animate-float-3d" style={{ animationDelay: '0.3s' }}>
                  <h2 className="text-7xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] text-salt-image-clip drop-shadow-lg">
                    PINK
                  </h2>
                  <h2 className="text-7xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] text-salt-image-clip drop-shadow-lg">
                    SALT
                  </h2>
                </div>

                {/* Verbatim Official Poster Tagline */}
                <div className="pt-2">
                  <p className="text-xs sm:text-sm lg:text-base font-extrabold text-[#2D2D2D] leading-relaxed uppercase tracking-wide border-l-4 border-[#C86D51] pl-4 py-2 bg-white/80 backdrop-blur-sm rounded-r-xl shadow-sm">
                    DRIVEN BY QUALITY, PURITY, AND STRICT FOOD SAFETY STANDARDS, THAT MEETS INTERNATIONAL STANDARDS AND REFLECTS TRUE EXCELLENCE AND AUTHENTICITY.
                  </p>
                </div>

                {/* Fine Salt Bowl with Scoop (Matching Bottom-Right Image in Poster Reference) */}
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                  <div className="relative w-36 h-28 sm:w-48 sm:h-36 rounded-xl overflow-hidden shadow-md border border-slate-300 shrink-0">
                    <img
                      src="/assets/catalog/hero_salt.jpg"
                      alt="Fine Pink Himalayan Salt Bowl and Scoop"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-left max-w-xs">
                    <span className="text-[11px] font-black text-[#C86D51] uppercase tracking-wider block">Food Grade & Industrial</span>
                    <span className="text-xs font-bold text-slate-700 block mt-0.5">Ultra-Pure 98.5%+ Sodium Chloride</span>
                    <span className="text-[11px] text-slate-500 block mt-1">Available in Fine, Coarse & Granular Mesh Sizes</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Verbatim Poster Footer Strip (Email / Phone / Instagram) */}
          <div className="bg-[#8F949E] text-white px-6 py-4 rounded-b-[2rem] sm:rounded-b-[2.5rem] border-t border-slate-400/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs font-bold tracking-wider uppercase">
              
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-slate-200 shrink-0" />
                <div className="flex flex-col sm:flex-row items-center gap-1">
                  <span className="text-slate-200 text-[10px]">EMAIL:</span>
                  <a href="mailto:zmexports.trade@gmail.com" className="text-white hover:underline">zmexports.trade.com</a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-slate-200 shrink-0" />
                <div className="flex flex-col sm:flex-row items-center gap-1">
                  <span className="text-slate-200 text-[10px]">PHONE:</span>
                  <span className="text-white">03719163020, 03371113332</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Instagram className="w-4 h-4 text-slate-200 shrink-0" />
                <div className="flex flex-col sm:flex-row items-center gap-1">
                  <span className="text-slate-200 text-[10px]">INSTA:</span>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:underline">zmexports.trade</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Action Buttons & Incoterms Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C86D51] via-[#E8927C] to-[#F5A97F] text-white font-black text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <SparklesIcon className="w-4 h-4 text-white" />
            Request Export Quote (RFQ)
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onScrollToCatalog}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-300 text-slate-900 font-bold text-sm shadow-sm hover:border-[#E8927C] hover:bg-rose-50/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore 48 SKUs Product Catalog
          </button>
        </div>

        {/* Incoterms & Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Supported Shipping Terms:</span>
          <span className="px-3 py-1 bg-white border border-slate-300 rounded-lg text-xs font-mono font-bold text-slate-800 shadow-sm">
            EXW (Ex Works)
          </span>
          <span className="px-3 py-1 bg-white border border-slate-300 rounded-lg text-xs font-mono font-bold text-slate-800 shadow-sm">
            FOB (Free On Board)
          </span>
          <span className="px-3 py-1 bg-white border border-slate-300 rounded-lg text-xs font-mono font-bold text-slate-800 shadow-sm">
            CIF (Cost, Insurance, Freight)
          </span>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-300/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left max-w-3xl mx-auto">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#C86D51]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">100% Pure Himalayan</p>
              <p className="text-[11px] text-slate-500 mt-1">Direct Khewra Mine Salt</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 shadow-sm">
              <Truck className="w-5 h-5 text-[#C86D51]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">Global Container Shipping</p>
              <p className="text-[11px] text-slate-500 mt-1">EXW / FOB / CIF Freight</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-5 h-5 text-[#C86D51]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">Custom OEM Manufacturing</p>
              <p className="text-[11px] text-slate-500 mt-1">"On Your Demand" Specs</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

