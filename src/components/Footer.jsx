import React from 'react';
import { Phone, Mail, Globe, Award, Sparkles, MapPin, MessageCircle, Instagram } from 'lucide-react';
import catalogData from '../data/catalogData.json';
import ZMLogo from './ZMLogo';

export default function Footer({ onSelectCategory, onOpenInquiry }) {
  const { contact } = catalogData.company;

  return (
    <footer className="bg-[#111827] text-white relative pt-16 pb-8 overflow-hidden border-t border-slate-800">
      
      {/* Subtle Warm Pink Accent Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#E8927C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <ZMLogo className="h-12" variant="light" />

            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              ZM Exports is a Pakistan-based manufacturer and global exporter of authentic Himalayan rock salt products. 
              Supplying edible salt, lamps, decorative items, kitchenware, and animal licks meeting international food safety standards.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#F7C5BA] font-bold">
              <Award className="w-4 h-4 text-[#E8927C]" />
              <span>100% Pure Organic Himalayan Rock Salt</span>
            </div>
          </div>

          {/* Col 2: Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-slate-300">Catalog Categories</p>
            <ul className="space-y-2 text-xs text-slate-400 font-bold">
              <li>
                <button onClick={() => onSelectCategory('all')} className="hover:text-[#F7C5BA] transition-colors cursor-pointer">
                  All Catalog Products (52 SKUs)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('edible')} className="hover:text-[#F7C5BA] transition-colors cursor-pointer">
                  Edible Salt (Powder, Fine, Coarse, Granular)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('lamps')} className="hover:text-[#F7C5BA] transition-colors cursor-pointer">
                  Salt Lamps (Natural & Geometric)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('wellness')} className="hover:text-[#F7C5BA] transition-colors cursor-pointer">
                  Home & Wellness (USB & Night Lights)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('kitchenware_licks')} className="hover:text-[#F7C5BA] transition-colors cursor-pointer">
                  Kitchenware & Animal Salt Licks
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Export Shipping Terms (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-slate-300">Export Incoterms</p>
            <div className="space-y-2 text-xs">
              <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <span className="font-mono font-bold text-[#F7C5BA]">EXW (Ex Works)</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Factory floor dispatch</p>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <span className="font-mono font-bold text-[#F7C5BA]">FOB (Free On Board)</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Port delivery & clearance</p>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <span className="font-mono font-bold text-[#F7C5BA]">CIF (Cost, Ins, Freight)</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Destination port shipping</p>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Export Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-slate-300">Contact Details</p>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href="https://wa.me/923719161020"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 bg-emerald-950/60 border border-emerald-500/30 p-2.5 rounded-xl hover:bg-emerald-900/50 transition-colors text-emerald-300 font-bold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: 03719161020</span>
              </a>

              <a
                href="tel:03371113332"
                className="flex items-center gap-2.5 hover:text-[#F7C5BA] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span>Phone: 03719161020, 03371113332</span>
              </a>

              <a
                href="mailto:zmexports.trade.com"
                className="flex items-center gap-2.5 hover:text-[#F7C5BA] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span className="truncate">Email: zmexports.trade.com</span>
              </a>

              <a
                href="https://instagram.com/zmexports.trade"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#F7C5BA] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#E8927C] shrink-0" />
                <span>Instagram: @zmexports.trade</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Pakistan Base (Global Exporter)</span>
              </div>
            </div>

            <button
              onClick={onOpenInquiry}
              className="w-full mt-2 py-2.5 bg-[#C86D51] hover:bg-[#b05c42] text-white text-xs font-black rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" /> Request Quote (RFQ)
            </button>
          </div>

        </div>

        {/* Bottom Contact Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800 bg-[#1F2937] rounded-2xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs">
          <a href="mailto:zmexports.trade.com" className="flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-colors">
            <Mail className="w-4 h-4 text-[#E8927C]" />
            <div>
              <span className="font-black block uppercase text-[10px] text-slate-400">EMAIL</span>
              <span className="font-bold">zmexports.trade.com</span>
            </div>
          </a>

          <a href="tel:03719161020" className="flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-colors">
            <Phone className="w-4 h-4 text-[#E8927C]" />
            <div>
              <span className="font-black block uppercase text-[10px] text-slate-400">PHONE / WHATSAPP</span>
              <span className="font-bold">03719161020, 03371113332</span>
            </div>
          </a>

          <a href="https://instagram.com/zmexports.trade" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-slate-300 hover:text-white transition-colors">
            <Instagram className="w-4 h-4 text-[#E8927C]" />
            <div>
              <span className="font-black block uppercase text-[10px] text-slate-400">INSTAGRAM</span>
              <span className="font-bold">@zmexports.trade</span>
            </div>
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ZM Exports. All Rights Reserved. Himalayan Pink Salt Supplier — Pakistan.</p>
          <div className="flex items-center space-x-4 text-[11px]">
            <span>100% Pure Rock Salt</span>
            <span>•</span>
            <span>Custom OEM Packaging</span>
            <span>•</span>
            <span>EXW / FOB / CIF Freight</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
