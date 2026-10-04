import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles as SparklesIcon, ShieldCheck, Tag, Send, CheckCircle2, Box, Info, ArrowLeft } from 'lucide-react';
import catalogData from '../data/catalogData.json';

export default function ProductModal({ product, onClose, onSubmitRFQ }) {
  const [shippingTerm, setShippingTerm] = useState('FOB');
  const [quantity, setQuantity] = useState('100');
  const [customNotes, setCustomNotes] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [buyerContact, setBuyerContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle Escape key to return to catalog
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onSubmitRFQ) {
        onSubmitRFQ({
          sku: product.sku,
          productName: product.name,
          shippingTerm,
          quantity,
          customNotes,
          buyerName,
          buyerContact
        });
      }
    }, 1200);
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
      
      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-rose-100 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Top Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-800 hover:text-[#C86D51] text-xs font-bold transition-all border border-slate-200 hover:border-rose-300 shadow-sm group"
              title="Return to Catalog (Esc)"
            >
              <ArrowLeft className="w-4 h-4 text-[#C86D51] transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Catalog</span>
            </button>

            <span className="font-mono text-xs font-bold text-[#C86D51] bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200 hidden sm:inline-block">
              SKU: {product.sku}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium hidden md:inline">
              ZM Exports Official Product Specs & Quote
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body: 2 Column Layout */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Authentic Extracted Product Image */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Product Image Box */}
            <div className="w-full h-72 sm:h-84 rounded-2xl overflow-hidden bg-white border border-slate-200 relative p-3 flex items-center justify-center shadow-sm">
              <img
                src={`/assets/catalog/${product.image}`}
                alt={product.name}
                onError={(e) => { e.target.style.display = 'none'; }}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-2 left-2 bg-slate-900/70 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-mono">
                Catalog Shot: {product.sku}
              </div>
            </div>


            {/* Custom Manufacturing Guarantee Notice */}
            <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-3 border border-rose-100 text-xs text-slate-700 space-y-1">
              <p className="font-bold text-[#C86D51] flex items-center gap-1">
                <Info className="w-3.5 h-3.5" /> On Your Demand Manufacturing
              </p>
              <p className="text-[11px] text-slate-600">
                Any size, grain specification, or custom shape can be produced according to your exact import requirements.
              </p>
            </div>
          </div>

          {/* Right Column: Full Specifications & Instant RFQ Form */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Category: <strong className="text-slate-700">{product.categoryName || product.type}</strong>
              </p>
            </div>

            {/* Specs Table */}
            <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">SKU Code</span>
                <span className="font-mono font-bold text-slate-800">{product.sku}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Weight / Grain Spec</span>
                <span className="font-semibold text-[#C86D51]">{product.spec}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Purity Grade</span>
                <span className="font-semibold text-slate-800">100% Himalayan Rock Salt</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Export Packaging</span>
                <span className="font-semibold text-slate-800">Custom Retail & Master Carton</span>
              </div>
            </div>

            {/* Instant RFQ / Quote Form */}
            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                <Send className="w-4 h-4 text-[#C86D51]" /> Request Price Quote (RFQ)
              </h3>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center space-y-2 animate-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-sm">Quote Request Sent!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you. The export team at ZM Exports will contact you via WhatsApp / Email with full FOB/CIF pricing.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-4 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  
                  <div className="grid grid-cols-2 gap-3">
                    {/* Shipping Term Selector */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Preferred Incoterm
                      </label>
                      <select
                        value={shippingTerm}
                        onChange={(e) => setShippingTerm(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2 font-mono focus:outline-none focus:border-[#E8927C]"
                      >
                        <option value="FOB">FOB (Free On Board Port)</option>
                        <option value="CIF">CIF (Cost, Insurance, Freight)</option>
                      </select>
                    </div>

                    {/* Order Quantity */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 500 pcs / 5 Tons"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2 focus:outline-none focus:border-[#E8927C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Your Name / Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        required
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2 focus:outline-none focus:border-[#E8927C]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        WhatsApp / Email Contact
                      </label>
                      <input
                        type="text"
                        placeholder="+1 234... or email@company.com"
                        value={buyerContact}
                        onChange={(e) => setBuyerContact(e.target.value)}
                        required
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2 focus:outline-none focus:border-[#E8927C]"
                      />
                    </div>
                  </div>

                  {/* Custom Specification Field */}
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Custom Size / Packaging Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Specify custom weight, custom shape, private label printing, or destination port..."
                      value={customNotes}
                      onChange={(e) => setCustomNotes(e.target.value)}
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2 focus:outline-none focus:border-[#E8927C]"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-[#C86D51] font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200"
                    >
                      <ArrowLeft className="w-4 h-4 text-[#C86D51]" /> Back to Catalog
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#C86D51] via-[#E8927C] to-[#F5A97F] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
                    >
                      Submit Export Inquiry for SKU {product.sku}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>

    </motion.div>

  </motion.div>
);
}
