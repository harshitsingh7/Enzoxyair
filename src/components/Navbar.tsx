import React, { useState } from 'react';
import { Wind, Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenOrder: (productType?: 'device' | 'filter') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onOpenOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'technology', label: 'Technology' },
    { id: 'air-wellness', label: 'Air Wellness' },
    { id: 'business', label: 'For Business' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f8faf9]/90 backdrop-blur-md border-b border-[rgba(11,25,25,0.08)] transition-all">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 text-left group transition-transform duration-300"
          aria-label="ENZOXY AIR Home"
        >
          <div className="w-10 h-10 rounded-full bg-[#0B1919] flex items-center justify-center text-[#2DE2BA] shadow-sm group-hover:scale-105 transition-transform">
            <Wind size={20} strokeWidth={2.2} />
          </div>
          <div>
            <span className="font-headline text-lg font-bold tracking-[0.12em] uppercase text-[#0B1919] block leading-none">
              ENZOXY<span className="text-[#006b56]">.</span>AIR
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#737878] font-medium block mt-1">
              Environmental Tech
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[12px] font-headline font-semibold uppercase tracking-[0.14em] transition-all relative py-1.5 ${
                  isActive
                    ? 'text-[#0B1919]'
                    : 'text-[#424848] hover:text-[#0B1919]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2DE2BA] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right Action */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8EDED] border border-[rgba(11,25,25,0.06)]">
            <span className="w-2 h-2 rounded-full bg-[#00B894] animate-pulse" />
            <span className="text-[10px] font-headline uppercase font-semibold tracking-[0.14em] text-[#0B1919]">
              PM2.5 Sensor Ready
            </span>
          </div>
          
          <button
            onClick={() => onOpenOrder('device')}
            className="btn-primary text-[11px] py-2.5 px-5"
          >
            <span>Order AP-200-H3</span>
            <ArrowUpRight size={14} className="text-[#2DE2BA]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => onOpenOrder('device')}
            className="sm:hidden btn-accent text-[10px] py-2 px-3.5"
          >
            Order
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-[rgba(11,25,25,0.12)] bg-white flex items-center justify-center text-[#0B1919]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#f8faf9] z-50 overflow-y-auto px-6 py-8 border-t border-[rgba(11,25,25,0.08)] flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-[11px] font-headline uppercase font-semibold tracking-[0.18em] text-[#737878] mb-2">
              Navigation
            </p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-3 px-4 rounded-xl text-base font-headline font-semibold uppercase tracking-[0.08em] transition-colors flex items-center justify-between ${
                  currentTab === item.id
                    ? 'bg-[#0B1919] text-[#2DE2BA]'
                    : 'text-[#191c1c] hover:bg-[#E8EDED]'
                }`}
              >
                <span>{item.label}</span>
                {currentTab === item.id && <span className="w-1.5 h-1.5 rounded-full bg-[#2DE2BA]" />}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(11,25,25,0.08)] space-y-4">
            <div className="flex items-center justify-between text-xs text-[#424848]">
              <span>Helpline:</span>
              <a href={`tel:${SITE_INFO.phone}`} className="font-semibold text-[#0B1919]">
                {SITE_INFO.phone}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder('device');
                }}
                className="btn-primary w-full text-center text-xs py-3"
              >
                Buy Device
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder('filter');
                }}
                className="btn-ghost w-full text-center text-xs py-3"
              >
                Filter Pack
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
