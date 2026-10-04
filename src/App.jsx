import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import CatalogGrid from './components/CatalogGrid';
import B2BTrustSection from './components/B2BTrustSection';
import ProductModal from './components/ProductModal';
import ExportInquiryModal from './components/ExportInquiryModal';
import Footer from './components/Footer';

export default function App() {
  // Default to null (Homepage displays clean Product Category Cards Grid)
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState(null);

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    // Smooth scroll down to catalog section if selected
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (product = null) => {
    setInquiryProduct(product);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900 font-sans flex flex-col justify-between selection:bg-rose-200 selection:text-slate-900">
      
      {/* Navigation Bar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenInquiry={() => handleOpenInquiry(null)}
      />

      {/* Hero Section */}
      <main>
        <Hero3D
          onOpenInquiry={() => handleOpenInquiry(null)}
          onScrollToCatalog={handleScrollToCatalog}
        />

        {/* Restructured Store / Category & Product Flow */}
        <CatalogGrid
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onOpenInquiry={(prod) => handleOpenInquiry(prod)}
        />

        {/* B2B Trust & Shipping Section */}
        <B2BTrustSection
          onOpenInquiry={() => handleOpenInquiry(null)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenInquiry={() => handleOpenInquiry(null)}
      />

      {/* Product Interactive Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            key="product-modal"
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onSubmitRFQ={(data) => {
              console.log('RFQ Submitted:', data);
            }}
          />
        )}
      </AnimatePresence>

      {/* Standalone Export RFQ Modal */}
      <AnimatePresence>
        {inquiryModalOpen && (
          <ExportInquiryModal
            key="export-modal"
            isOpen={inquiryModalOpen}
            onClose={() => setInquiryModalOpen(false)}
            initialProduct={inquiryProduct}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
