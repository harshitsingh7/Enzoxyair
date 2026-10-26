import React, { useState } from 'react';
import { Star, ShieldCheck, Check, X, ArrowRight, Truck, RotateCcw, Info, Sparkles } from 'lucide-react';
import { PRODUCT_DATA } from '../data/siteData';

interface ProductsPageProps {
  onOpenOrder: (productType?: 'device' | 'filter') => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenOrder }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="py-12 md:py-20 space-y-24 md:space-y-32">
      
      {/* 1. PRODUCT DETAIL & BUYING HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Overline & Title */}
        <div className="mb-10">
          <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56] mb-3">
            — Model AP-200-H3
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[0.04em] text-[#0B1919] leading-tight">
            The Enzoxy <span className="text-[#006b56] italic font-medium">AP-200-H3.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Multi-angle Gallery */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Stage Display */}
            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-b from-[#f2f4f3] to-white border border-[rgba(11,25,25,0.06)] flex items-center justify-center p-8 overflow-hidden shadow-lg">
              <img
                src={PRODUCT_DATA.gallery[activeImageIndex].src}
                alt={PRODUCT_DATA.gallery[activeImageIndex].label}
                className="max-h-[85%] max-w-[85%] object-contain filter drop-shadow-[0_20px_40px_rgba(1,94,97,0.18)] transition-all duration-500"
              />

              {/* Angle Tag */}
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[rgba(11,25,25,0.08)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B894]" />
                <span className="text-[10px] font-headline uppercase font-semibold tracking-wider text-[#0B1919]">
                  {PRODUCT_DATA.gallery[activeImageIndex].label}
                </span>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              {PRODUCT_DATA.gallery.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative aspect-square rounded-2xl p-2 border transition-all duration-300 flex items-center justify-center bg-white ${
                    activeImageIndex === index
                      ? 'border-[#006b56] ring-2 ring-[#006b56]/20 shadow-md scale-105'
                      : 'border-[rgba(11,25,25,0.08)] hover:border-[#737878] opacity-80'
                  }`}
                  aria-label={item.label}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="max-h-[85%] max-w-[85%] object-contain"
                  />
                  <span className="sr-only">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Rating & Short Pitch */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="font-headline font-bold text-sm text-[#0B1919]">
                  {PRODUCT_DATA.rating} / 5
                </span>
                <span className="text-xs text-[#737878]">
                  · from {PRODUCT_DATA.reviewsCount}
                </span>
              </div>

              <p className="text-base sm:text-lg text-[#424848] leading-relaxed">
                {PRODUCT_DATA.shortDesc}
              </p>
            </div>

          </div>

          {/* Right Column: Sticky Pricing & Purchase Card */}
          <div className="lg:col-span-5">
            <div className="ambient-card p-8 sm:p-10 sticky top-28 space-y-6">
              
              <div>
                <span className="text-[10px] font-headline uppercase font-semibold tracking-[0.24em] text-[#006b56]">
                  Official Launch Pricing
                </span>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="font-headline font-bold text-4xl sm:text-5xl text-[#0B1919]">
                    ₹{PRODUCT_DATA.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-base line-through text-[#737878]">
                    MRP ₹{PRODUCT_DATA.mrp.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-headline font-bold text-[#006b56] uppercase px-2 py-0.5 rounded bg-[#f2f4f3] border border-[#51f9d0]">
                    Save ₹7,000 (39% OFF)
                  </span>
                </div>
                <p className="text-xs text-[#737878] mt-1">
                  Inclusive of all taxes & nationwide shipping
                </p>
              </div>

              {/* Bullet Features Highlights */}
              <ul className="space-y-3 pt-4 border-t border-[rgba(11,25,25,0.06)] text-xs text-[#191c1c]">
                {PRODUCT_DATA.heroBullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006b56]" />
                    <span className="font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Order Actions */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onOpenOrder('device')}
                  className="btn-accent w-full py-4 text-xs tracking-wider"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => onOpenOrder('filter')}
                  className="btn-ghost w-full py-3 text-xs tracking-wider"
                >
                  <span>Add Replacement Filter (+₹1,299)</span>
                </button>
              </div>

              {/* Logistics Assurance */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[rgba(11,25,25,0.06)] text-center">
                <div className="flex flex-col items-center">
                  <Truck size={16} className="text-[#006b56] mb-1" />
                  <span className="text-[10px] font-headline uppercase tracking-wider text-[#737878]">
                    3–7 Day Delivery
                  </span>
                </div>
                <div className="flex flex-col items-center border-x border-[rgba(11,25,25,0.08)]">
                  <ShieldCheck size={16} className="text-[#006b56] mb-1" />
                  <span className="text-[10px] font-headline uppercase tracking-wider text-[#737878]">
                    12 Mo Warranty
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcw size={16} className="text-[#006b56] mb-1" />
                  <span className="text-[10px] font-headline uppercase tracking-wider text-[#737878]">
                    10-Day Return
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 2. KEY FEATURES & SPECIFICATIONS */}
      <section className="py-20 bg-[#f2f4f3] border-y border-[rgba(11,25,25,0.06)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Key Features List */}
            <div className="space-y-6">
              <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
                — Key Features
              </p>
              <h2 className="font-headline text-3xl font-semibold text-[#0B1919]">
                Designed for everyday performance.
              </h2>
              
              <div className="space-y-3">
                {PRODUCT_DATA.features.map((feat, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      feat.highlight
                        ? 'bg-white border-[#006b56] shadow-sm'
                        : 'bg-white/70 border-[rgba(11,25,25,0.06)]'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#006b56] text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                      ✓
                    </div>
                    <p className={`text-sm leading-relaxed ${feat.highlight ? 'font-semibold text-[#0B1919]' : 'text-[#424848]'}`}>
                      {feat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Table */}
            <div className="space-y-6">
              <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
                — Specifications
              </p>
              <h2 className="font-headline text-3xl font-semibold text-[#0B1919]">
                Technical Architecture
              </h2>

              <div className="ambient-card overflow-hidden">
                <table className="w-full text-left text-xs">
                  <tbody>
                    {PRODUCT_DATA.specs.map((item, idx) => (
                      <tr
                        key={item.label}
                        className={`border-b border-[rgba(11,25,25,0.06)] ${
                          idx % 2 === 0 ? 'bg-[#f8faf9]' : 'bg-white'
                        }`}
                      >
                        <td className="px-6 py-3.5 font-headline font-semibold uppercase tracking-wider text-[#737878] w-1/3">
                          {item.label}
                        </td>
                        <td className="px-6 py-3.5 font-medium text-[#0B1919]">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. REPLACEMENT FILTER PACK SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
              — Replacement Filter Pack
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1919] leading-tight">
              Keep the purity <span className="text-[#006b56] italic font-medium">flowing.</span>
            </h2>
            <p className="text-base text-[#424848] leading-relaxed">
              {PRODUCT_DATA.filterPack.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {PRODUCT_DATA.filterPack.layers.map((layer) => (
                <div key={layer.name} className="p-4 rounded-2xl bg-[#E8EDED]/60 border border-[rgba(11,25,25,0.04)]">
                  <p className="font-headline font-bold text-xs uppercase text-[#0B1919]">{layer.name}</p>
                  <p className="text-[11px] text-[#737878] mt-1">{layer.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div>
                <span className="font-headline font-bold text-3xl text-[#0B1919]">
                  ₹{PRODUCT_DATA.filterPack.price.toLocaleString('en-IN')}
                </span>
                <span className="text-xs line-through text-[#737878] ml-2">
                  ₹{PRODUCT_DATA.filterPack.mrp.toLocaleString('en-IN')}
                </span>
              </div>
              <button
                onClick={() => onOpenOrder('filter')}
                className="btn-primary text-xs py-3 px-6"
              >
                Order Filter Pack
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative aspect-[4/3] w-full max-w-lg rounded-3xl bg-white border border-[rgba(11,25,25,0.06)] shadow-xl p-8 flex items-center justify-center">
              <img
                src={PRODUCT_DATA.filterPack.image}
                alt="ENZOXY Replacement Filter Pack"
                className="max-h-[85%] w-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. COMPARISON TABLE: ENZOXY VS TRADITIONAL */}
      <section className="py-20 bg-[#f2f4f3] border-t border-[rgba(11,25,25,0.06)]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 lg:px-16 space-y-10 text-center">
          
          <div>
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56] mb-2">
              — The Difference
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#0B1919]">
              ENZOXY vs <span className="text-[#006b56] italic font-medium">Traditional Purifiers</span>
            </h2>
          </div>

          <div className="ambient-card overflow-hidden text-left">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[rgba(11,25,25,0.08)] bg-[#0B1919] text-white">
                  <th className="px-6 py-4 font-headline uppercase font-semibold tracking-wider">Feature</th>
                  <th className="px-6 py-4 font-headline uppercase font-semibold tracking-wider text-[#2DE2BA] text-center">
                    ENZOXY AP-200-H3
                  </th>
                  <th className="px-6 py-4 font-headline uppercase font-semibold tracking-wider text-center text-[#c0cac9]">
                    Traditional Purifiers
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRODUCT_DATA.comparison.map((item, idx) => (
                  <tr
                    key={item.feature}
                    className={`border-b border-[rgba(11,25,25,0.06)] ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#f8faf9]'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-[#191c1c]">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {item.enzoxy ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#006b56] text-white text-xs">
                          ✓
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.traditional ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-xs">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-600 text-xs font-bold">
                          ✕
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-10">
        <div>
          <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56] mb-2">
            — Customer Reviews
          </p>
          <h2 className="font-headline text-3xl font-semibold text-[#0B1919]">
            Trusted in Indian Homes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCT_DATA.reviews.map((rev) => (
            <div key={rev.name} className="ambient-card p-8 space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="text-base text-[#191c1c] italic leading-relaxed">
                "{rev.comment}"
              </p>
              <div className="pt-2 border-t border-[rgba(11,25,25,0.06)]">
                <p className="font-headline font-bold text-xs uppercase text-[#0B1919]">
                  {rev.name}
                </p>
                <p className="text-[11px] text-[#737878]">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
