import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, Phone, Mail, ArrowLeft } from 'lucide-react';
import catalogData from '../data/catalogData.json';

export default function ExportInquiryModal({ isOpen, onClose, initialProduct }) {
  const [productCategory, setProductCategory] = useState(initialProduct ? initialProduct.sku : 'General Wholesale Catalog');
  const [incoterm, setIncoterm] = useState('FOB');
  const [quantity, setQuantity] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactDetail, setContactDetail] = useState('');
  const [customRequirement, setCustomRequirement] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle Escape key to return to catalog
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-rose-100 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-5 text-white flex items-center justify-between shadow-md shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-rose-500/30 text-white text-xs font-bold transition-all border border-white/20 shadow-sm group"
              title="Return to Catalog (Esc)"
            >
              <ArrowLeft className="w-4 h-4 text-rose-300 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Catalog</span>
            </button>
            
            <div className="hidden sm:block">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> Export RFQ Portal
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-full bg-white/10 transition-colors"
              title="Close (Esc)"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-xl font-bold text-slate-900">Export Inquiry Received!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{contactName || 'Valued Partner'}</strong>. Our international sales team at ZM Exports will prepare your pro-forma quote with {incoterm} shipping terms and reach out via WhatsApp / Email.
              </p>
              
              <div className="bg-rose-50 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700">
                <p className="font-bold text-[#C86D51]">Direct Sales Office Contact:</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C86D51]" /> +92 3719161020 / +92 3371113332
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C86D51]" /> zmexports.trade@gmail.com
                </p>
              </div>

              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-2.5 bg-[#C86D51] text-white text-xs font-bold rounded-xl shadow-md"
              >
                Close & Return to Catalog
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Product & Shipping Term */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Target Product / SKU
                  </label>
                  <input
                    type="text"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    required
                    placeholder="e.g. LP-P-001 or Natural Lamps 3-5kg"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-[#E8927C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Incoterm (Shipping Terms)
                  </label>
                  <select
                    value={incoterm}
                    onChange={(e) => setIncoterm(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-mono focus:outline-none focus:border-[#E8927C]"
                  >
                    <option value="EXW">EXW - Factory Pickup (Pakistan)</option>
                    <option value="FOB">FOB - Free On Board (Karachi Port)</option>
                    <option value="CIF">CIF - Cost, Insurance & Freight (Destination Port)</option>
                  </select>
                </div>
              </div>

              {/* Order Volume & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    placeholder="e.g. 1 x 20ft Container / 500 Pcs"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-[#E8927C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Destination Country & Port
                  </label>
                  <input
                    type="text"
                    value={destinationCountry}
                    onChange={(e) => setDestinationCountry(e.target.value)}
                    required
                    placeholder="e.g. Hamburg, Germany / USA"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-[#E8927C]"
                  />
                </div>
              </div>

              {/* Buyer Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Your Name & Company Name
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    placeholder="John Doe (Global Foods Inc.)"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-[#E8927C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    WhatsApp Number / Email
                  </label>
                  <input
                    type="text"
                    value={contactDetail}
                    onChange={(e) => setContactDetail(e.target.value)}
                    required
                    placeholder="+1 555-0199 or email@domain.com"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-[#E8927C]"
                  />
                </div>
              </div>

              {/* Custom Manufacturing Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Custom Requirements / "On Your Demand" Specs
                </label>
                <textarea
                  rows={3}
                  value={customRequirement}
                  onChange={(e) => setCustomRequirement(e.target.value)}
                  placeholder="Specify custom grain size (0.2-5mm), custom packaging (25kg bags, retail box, jar), or special shape..."
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-[#E8927C]"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-[#C86D51] font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200"
                >
                  <ArrowLeft className="w-4 h-4 text-[#C86D51]" /> Back to Catalog
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#C86D51] via-[#E8927C] to-[#F5A97F] text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Submit Export RFQ Inquiry
                </button>
              </div>

            </form>
          )}
        </div>

      </motion.div>
    </motion.div>
  );
}
