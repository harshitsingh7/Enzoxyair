import React from 'react';
import { Wind, MessageCircle, Mail, MapPin, ShieldCheck, Award, FileText } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenPolicy: (policyKey: 'terms' | 'privacy' | 'shipping' | 'returns' | 'warranty') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
  return (
    <footer className="mt-24 relative overflow-hidden bg-[#0B1919] text-[#E8EDED] border-t border-[rgba(255,255,255,0.08)]">
      {/* Ambient background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,226,186,0.10),transparent_70%)]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,226,186,0.06),transparent_70%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-[rgba(255,255,255,0.1)]">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#122525] border border-[rgba(45,226,186,0.3)] flex items-center justify-center text-[#2DE2BA]">
                <Wind size={20} strokeWidth={2.2} />
              </div>
              <span className="font-headline text-xl font-bold tracking-[0.14em] uppercase text-white">
                ENZOXY<span className="text-[#2DE2BA]">.</span>AIR
              </span>
            </div>

            <p className="text-sm font-light text-[#D4E5E1] max-w-sm leading-relaxed">
              Purity in every breathe.
              <br />
              <span className="text-white font-medium">Don't just breathe your air. Know it.</span>
            </p>

            <div className="pt-2">
              <p className="text-xs font-headline uppercase font-semibold tracking-[0.16em] text-[#2DE2BA]">
                {SITE_INFO.legalName}
              </p>
              <p className="text-xs text-[#a2adac] mt-1">
                Environmental Technology & Precision Air Purification
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs text-[#a2adac]">
                <MapPin size={13} className="text-[#2DE2BA]" />
                <span>{SITE_INFO.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122525] hover:bg-[#2DE2BA] hover:text-[#0B1919] text-[#2DE2BA] text-xs font-headline uppercase tracking-wider font-semibold border border-[rgba(45,226,186,0.2)] transition-all"
              >
                <MessageCircle size={14} />
                <span>WhatsApp: {SITE_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${SITE_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122525] hover:bg-white/10 text-white text-xs font-headline uppercase tracking-wider font-medium border border-[rgba(255,255,255,0.12)] transition-all"
              >
                <Mail size={14} />
                <span>{SITE_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Links Column 1: Products */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.18em] text-[#2DE2BA]">
              Products
            </p>
            <ul className="space-y-3 text-xs tracking-wide text-[#c0cac9]">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Enzoxy AP-200-H3
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Replacement Filters
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technology')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Technology
                </button>
              </li>
              <li>
                <a
                  href={SITE_INFO.pdfManual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2DE2BA] transition-colors text-left inline-flex items-center gap-1.5"
                >
                  <span>User Manual (PDF)</span>
                  <FileText size={12} className="text-[#2DE2BA]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.18em] text-[#2DE2BA]">
              Company
            </p>
            <ul className="space-y-3 text-xs tracking-wide text-[#c0cac9]">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  About ENZOXY
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('business')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  For Business (B2B)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('air-wellness')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Air Wellness & Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Customer Care & Legal */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.18em] text-[#2DE2BA]">
              Customer Care
            </p>
            <ul className="space-y-3 text-xs tracking-wide text-[#c0cac9]">
              <li>
                <button
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('returns')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Returns & Refunds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('warranty')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  12-Month Comprehensive Warranty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-[#2DE2BA] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Certifications & Legal Details */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8d9b9a]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-headline uppercase tracking-wider text-white font-medium">
              GSTIN: {SITE_INFO.gstin}
            </span>
            <span className="hidden sm:inline text-[rgba(255,255,255,0.2)]">|</span>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#2DE2BA]" />
              <span>Certified: {SITE_INFO.certifications.join(' · ')}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Award size={14} className="text-[#2DE2BA]" />
            <span>© {new Date().getFullYear()} {SITE_INFO.legalName}. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
