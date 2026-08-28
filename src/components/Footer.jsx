import React from 'react';
import { Phone, Mail, Globe, Award, Sparkles, MapPin, ChevronRight, MessageCircle, Instagram } from 'lucide-react';
import catalogData from '../data/catalogData.json';
import ZMLogo from './ZMLogo';

export default function Footer({ onSelectCategory, onOpenInquiry }) {
  const { contact } = catalogData.company;

  return (
    <footer className="bg-[#1E1E1E] text-white relative pt-16 pb-8 overflow-hidden border-t border-slate-800">
      
      {/* Mountain Line-Art Background Accent */}
      <div className="absolute inset-0 bg-mountain-pattern pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <ZMLogo className="h-12" variant="light" />

            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Pakistan-based manufacturer and global exporter of premium Himalayan rock salt products. 
              Supplying salt lamps, edible pink salt, architectural bricks, cookware, and animal licks with international food safety compliance.
            </p>


            <div className="flex items-center gap-2 pt-1 text-xs text-rose-300">
              <Award className="w-4 h-4 text-[#E8927C]" />
              <span>100% Pure Organic Himalayan Rock Salt</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Product Lines</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onSelectCategory('natural-lamps')} className="hover:text-rose-300 transition-colors">
                  Salt Lamps
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('edible-light')} className="hover:text-rose-300 transition-colors">
                  Edible Pink Salt
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('tiles-bricks')} className="hover:text-rose-300 transition-colors">
                  Tiles & Bricks
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('kitchenware')} className="hover:text-rose-300 transition-colors">
                  Kitchenware
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('salt-licks')} className="hover:text-rose-300 transition-colors">
                  Animal Salt Licks
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('therapy-wellness')} className="hover:text-rose-300 transition-colors">
                  Therapy & Wellness
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Shipping Terms (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Export Incoterms</p>
            <div className="space-y-2 text-xs">
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <span className="font-mono font-bold text-[#F5A97F]">EXW (Ex Works)</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Direct factory floor dispatch</p>
              </div>

              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <span className="font-mono font-bold text-[#F5A97F]">FOB (Free On Board)</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Port delivery & export clearance</p>
              </div>

              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <span className="font-mono font-bold text-[#F5A97F]">CIF (Cost, Ins, Freight)</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Door to destination port shipping</p>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Contact & WhatsApp (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300">Direct Export Desk</p>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href="https://wa.me/923719161020"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 bg-emerald-950/60 border border-emerald-500/30 p-2.5 rounded-xl hover:bg-emerald-900/50 transition-colors text-emerald-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">WhatsApp: +92 3719161020</span>
              </a>

              <a
                href="tel:+923371113332"
                className="flex items-center gap-2.5 hover:text-rose-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span>Phone: +92 3371113332</span>
              </a>

              <a
                href="mailto:zmexports.trade@gmail.com"
                className="flex items-center gap-2.5 hover:text-rose-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span className="truncate">zmexports.trade@gmail.com</span>
              </a>

              <a
                href="https://instagram.com/zmexports.trade"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-rose-300 transition-colors"
              >
                <Globe className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span>Instagram: @zmexports.trade</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Pakistan (Primary Export Hub)</span>
              </div>
            </div>

            <button
              onClick={onOpenInquiry}
              className="w-full mt-2 py-2.5 bg-[#C86D51] hover:bg-[#b05c42] text-white text-xs font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> Request Wholesale Pro-Forma
            </button>
          </div>

        </div>

        {/* Official Poster Style Bottom Contact Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 bg-[#2D2D2D] rounded-2xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs">
          <a href="mailto:zmexports.trade@gmail.com" className="flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-colors">
            <Mail className="w-4 h-4 text-rose-400" />
            <div>
              <span className="font-bold block uppercase text-[10px] text-slate-400">EMAIL</span>
              <span className="font-mono">zmexports.trade@gmail.com</span>
            </div>
          </a>

          <a href="tel:+923719161020" className="flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-colors">
            <Phone className="w-4 h-4 text-rose-400" />
            <div>
              <span className="font-bold block uppercase text-[10px] text-slate-400">PHONE</span>
              <span className="font-mono">03719161020, 03371113332</span>
            </div>
          </a>

          <a href="https://instagram.com/zmexports.trade" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-colors">
            <Instagram className="w-4 h-4 text-rose-400" />
            <div>
              <span className="font-bold block uppercase text-[10px] text-slate-400">INSTA</span>
              <span className="font-mono">zmexports.trade</span>
            </div>
          </a>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ZM Exports. All Rights Reserved. Himalayan Rock Salt Manufacturer & Exporter.</p>
          <div className="flex items-center space-x-4 text-[11px]">
            <span className="hover:text-slate-400">Food Safety Compliant</span>
            <span>•</span>
            <span className="hover:text-slate-400">Custom Packaging Solutions</span>
            <span>•</span>
            <span className="hover:text-slate-400">Pakistan Headquarters</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

