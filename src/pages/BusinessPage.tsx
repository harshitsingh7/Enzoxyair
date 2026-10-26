import React, { useState } from 'react';
import { Building2, HeartPulse, Hotel, GraduationCap, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_TIERS, BUSINESS_SECTORS, SITE_INFO } from '../data/siteData';

export const BusinessPage: React.FC = () => {
  const [leadForm, setLeadForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    units: '5–25 units',
    sector: 'Offices',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sectorIcons = [Building2, HeartPulse, Hotel, GraduationCap];

  return (
    <div className="py-12 md:py-20 space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
              — For Business
            </p>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[0.04em] text-[#0B1919] leading-[1.05]">
              Clean air solutions for{' '}
              <span className="text-[#006b56] italic font-medium">modern workplaces.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#424848] leading-relaxed">
              From single-cabin clinics to multi-floor corporate campuses — Enzoxy builds enterprise-grade clean-air programs on the same medical-grade AP-200-H3 platform. Every deployment includes site assessment, phased installation, dashboard-driven AQI reporting and a dedicated wellness partner. Filters arrive automatically, AMC is priced per unit, and Startup India & ISO 9001:2015 credentials keep procurement simple.
            </p>
          </div>

          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#f2f4f3] border border-[rgba(11,25,25,0.06)] space-y-6">
            <p className="font-headline text-base font-semibold text-[#006b56] italic">
              Multi-unit deployments, subscriptions and AMC — for teams that treat air as a wellness benefit.
            </p>
            <ul className="space-y-3 text-xs text-[#191c1c] font-medium">
              {[
                'Volume pricing from 5+ units',
                'Annual Maintenance Contracts (AMC)',
                'Filter subscriptions on-schedule',
                'Proposal within 24 hours'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006b56]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent('Hi ENZOXY corporate sales, I would like to enquire about bulk business pricing and AMC.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full text-xs py-3.5 text-center flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>Enquire via WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. WHERE ENZOXY FITS: SECTOR CARDS */}
      <section className="py-20 bg-[#f2f4f3] border-y border-[rgba(11,25,25,0.06)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-12">
          <div>
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56] mb-2">
              — Where Enzoxy Fits
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#0B1919]">
              Built for high-occupancy commercial spaces.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_SECTORS.map((sector, index) => {
              const Icon = sectorIcons[index % sectorIcons.length];
              return (
                <div key={sector.title} className="ambient-card p-8 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f2f4f3] text-[#006b56] flex items-center justify-center">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-headline text-xl font-bold uppercase text-[#0B1919]">
                    {sector.title}
                  </h3>
                  <p className="text-xs text-[#424848] leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PACKAGES & TIERS */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
            — Commercial Packages
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#0B1919]">
            Scalable fleets with dedicated AMC.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-transform duration-300 ${
                tier.featured
                  ? 'bg-[#0B1919] text-white shadow-2xl scale-105 border border-[#2DE2BA]'
                  : 'ambient-card text-[#191c1c]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className={`text-[10px] font-headline uppercase font-bold tracking-[0.2em] ${
                    tier.featured ? 'text-[#2DE2BA]' : 'text-[#006b56]'
                  }`}>
                    {tier.name}
                  </p>
                  {tier.featured && (
                    <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#2DE2BA] text-[#0B1919]">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                  {tier.range}
                </p>

                <p className={`text-[10px] font-headline uppercase tracking-wider mb-8 ${
                  tier.featured ? 'text-[#D4E5E1]' : 'text-[#737878]'
                }`}>
                  {tier.target}
                </p>

                <ul className="space-y-3 text-xs leading-relaxed">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                        tier.featured ? 'bg-[#2DE2BA]' : 'bg-[#006b56]'
                      }`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-[rgba(255,255,255,0.1)]">
                <p className={`text-[10px] font-headline uppercase tracking-wider font-semibold mb-3 ${
                  tier.featured ? 'text-[#2DE2BA]' : 'text-[#737878]'
                }`}>
                  Volume Pricing · Contact for Quote
                </p>
                <a
                  href={`https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(`Hi ENZOXY team, I want to discuss the ${tier.name} package (${tier.range}) for our facility.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tier.featured ? 'btn-accent w-full text-center text-xs py-3' : 'btn-primary w-full text-center text-xs py-3'}
                >
                  Request Proposal
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. B2B ENQUIRY FORM */}
      <section className="py-20 bg-[#f2f4f3] border-t border-[rgba(11,25,25,0.06)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="ambient-card p-8 sm:p-12 space-y-8">
            <div>
              <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56] mb-2">
                — Fast Turnaround
              </p>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#0B1919]">
                Request a Custom Corporate Assessment
              </h3>
              <p className="text-xs sm:text-sm text-[#424848] mt-1">
                Receive site placement guidelines, volume pricing tiers and AMC proposal within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#006b56]/10 border border-[#006b56]/20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#006b56] text-white flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="font-headline text-xl font-bold text-[#0B1919]">
                  Thank You for Your Corporate Enquiry
                </h4>
                <p className="text-xs text-[#424848]">
                  Our enterprise air wellness manager will contact you at <strong>{leadForm.email}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56]"
                      placeholder="e.g. Ramesh Patel"
                    />
                  </div>
                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1">
                      Company / Facility Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={leadForm.company}
                      onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56]"
                      placeholder="e.g. Apex Health Clinic"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56]"
                      placeholder="ramesh@company.com"
                    />
                  </div>
                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1">
                      Estimated Units Needed
                    </label>
                    <select
                      value={leadForm.units}
                      onChange={(e) => setLeadForm({ ...leadForm, units: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56] bg-white"
                    >
                      <option>5–25 units</option>
                      <option>25–100 units</option>
                      <option>100+ units</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1">
                      Facility Type
                    </label>
                    <select
                      value={leadForm.sector}
                      onChange={(e) => setLeadForm({ ...leadForm, sector: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56] bg-white"
                    >
                      <option>Offices & Coworking</option>
                      <option>Clinics & Hospitals</option>
                      <option>Boutique Hotels & Spas</option>
                      <option>Schools & Institutions</option>
                      <option>Other Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-headline uppercase font-semibold text-[#424848] mb-1">
                    Special Requirements or Floor Area
                  </label>
                  <textarea
                    rows={3}
                    value={leadForm.notes}
                    onChange={(e) => setLeadForm({ ...leadForm, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56]"
                    placeholder="e.g. 8,000 sq.ft across 2 floors in Ahmedabad"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#737878]">
                    No obligation. Direct proposal within 24 hours.
                  </span>
                  <button type="submit" className="btn-primary text-xs py-3 px-8">
                    Submit Request
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};
