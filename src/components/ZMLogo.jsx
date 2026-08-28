import React from 'react';

export default function ZMLogo({ className = "h-12", variant = "dark" }) {
  const isLight = variant === "light";

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/assets/catalog/official_header_logo_transparent.png"
        alt="ZM Exports - Himalayan Pink Salt Supplier"
        className="h-full w-auto object-contain transition-transform hover:scale-105"
        style={{
          filter: isLight ? "brightness(0) invert(1)" : "none"
        }}
      />

    </div>
  );
}
