import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, Shield, Activity, Sparkles, Wind, ChevronRight } from 'lucide-react';
import { SITE_INFO, PRODUCT_DATA, COMMITMENTS, CITIES_AQI } from '../data/siteData';
import { SensorDial } from '../components/SensorDial';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenOrder: (productType?: 'device' | 'filter') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenOrder }) => {
  const [selectedCity, setSelectedCity] = useState(CITIES_AQI[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  return (
    <div className="space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
        {/* Ambient atmospheric backdrop */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(45,226,186,0.12),transparent_70%)] pointer-events-none -z-10" />
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,184,148,0.08),transparent_70%)] pointer-events-none -z-10" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Overline Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8EDED] border border-[rgba(11,25,25,0.06)] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00B894] animate-pulse" />
                <span className="text-[10px] font-headline font-semibold uppercase tracking-[0.24em] text-[#0B1919]">
                  Environmental Technology
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-semibold leading-[1.05] tracking-[0.04em] text-[#0B1919]">
                Don't Just Breathe Your Air.{' '}
                <span className="text-[#006b56] italic font-medium block mt-1">
                  Know It.
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg leading-relaxed text-[#424848] max-w-xl font-normal">
                Advanced air purification with H13 HEPA filtration, real-time PM2.5 monitoring and intelligent auto modes — engineered for the way Indian homes breathe.
              </p>

              {/* Architectural Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[rgba(11,25,25,0.08)] max-w-lg">
                <div>
                  <p className="font-headline text-2xl sm:text-3xl font-semibold text-[#006b56] tracking-tight">
                    99.97%
                  </p>
                  <p className="text-[11px] font-headline uppercase tracking-[0.14em] text-[#737878] mt-1 font-semibold">
                    Filtration
                  </p>
                </div>
                <div className="border-x border-[rgba(11,25,25,0.08)] px-4">
                  <p className="font-headline text-2xl sm:text-3xl font-semibold text-[#006b56] tracking-tight">
                    550 <span className="text-sm font-normal text-[#424848]">sq.ft</span>
                  </p>
                  <p className="text-[11px] font-headline uppercase tracking-[0.14em] text-[#737878] mt-1 font-semibold">
                    Coverage
                  </p>
                </div>
                <div>
                  <p className="font-headline text-2xl sm:text-3xl font-semibold text-[#006b56] tracking-tight">
                    ~22 <span className="text-sm font-normal text-[#424848]">dB</span>
                  </p>
                  <p className="text-[11px] font-headline uppercase tracking-[0.14em] text-[#737878] mt-1 font-semibold">
                    Whisper
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
                <button
                  onClick={() => onOpenOrder('device')}
                  className="btn-accent"
                >
                  <span>Explore Product</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => onNavigate('technology')}
                  className="btn-ghost"
                >
                  <span>How It Works</span>
                </button>
              </div>

              {/* Trust Micro-Row */}
              <div className="flex flex-wrap items-center gap-5 text-xs text-[#737878] pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#006b56]" />
                  <span>12-Month Comprehensive Warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#006b56]" />
                  <span>Free Express Delivery Across India</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Asset & Floating Telemetry */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Product Background Vessel */}
              <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-3xl bg-gradient-to-b from-[#f2f4f3] to-[#e6e9e8] border border-[rgba(11,25,25,0.06)] p-6 sm:p-10 flex items-center justify-center overflow-hidden shadow-2xl">
                
                {/* Concentric atmospheric aura */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-80 h-80 rounded-full border border-[rgba(45,226,186,0.25)] animate-ping opacity-20" style={{ animationDuration: '4s' }} />
                  <div className="w-64 h-64 rounded-full border border-[rgba(11,25,25,0.06)]" />
                </div>

                {/* Actual Product Hardware Photo */}
                <img
                  src={SITE_INFO.heroImage}
                  alt="ENZOXY AP-200-H3 Medical-grade H13 Air Purifier"
                  className="relative z-10 max-h-[90%] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(11,25,25,0.18)] hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Telemetry Pill: Top Left */}
                <div className="absolute top-5 left-5 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[rgba(11,25,25,0.08)] shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00B894] animate-pulse" />
                    <div>
                      <p className="text-[9px] font-headline uppercase font-semibold tracking-wider text-[#737878]">
                        Air Quality
                      </p>
                      <p className="text-xs font-headline font-bold text-[#0B1919]">
                        AQI: 24 · Pure Clean
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Price Pill: Bottom Right */}
                <div className="absolute bottom-5 right-5 z-20 px-4 py-2.5 rounded-2xl bg-[#0B1919] text-white shadow-xl border border-[rgba(255,255,255,0.1)]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-headline uppercase font-semibold tracking-wider text-[#2DE2BA]">
                      Introductory
                    </span>
                    <span className="font-headline font-bold text-base text-white">
                      ₹{PRODUCT_DATA.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY ENZOXY SECTION (Six commitments, one clean-air promise) */}
      <section className="py-20 md:py-28 bg-[#f2f4f3] border-y border-[rgba(11,25,25,0.06)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
                — Why Enzoxy
              </p>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.04em] text-[#0B1919]">
                Six commitments,{' '}
                <span className="text-[#006b56] italic font-medium">one clean-air promise.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm md:text-base text-[#424848] leading-relaxed">
                Six commitments that shape every device, filter and conversation at Enzoxy.
              </p>
            </div>
          </div>

          {/* 6 Architectural Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMITMENTS.map((item) => (
              <div
                key={item.num}
                className="ambient-card p-8 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-headline text-lg font-semibold text-[#006b56]">
                      {item.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#E8EDED] group-hover:bg-[#2DE2BA] transition-colors" />
                  </div>
                  <h3 className="font-headline text-xl font-bold uppercase tracking-wide text-[#0B1919] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#424848] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[rgba(11,25,25,0.06)]">
                  <span className="text-[10px] font-headline uppercase font-semibold tracking-widest text-[#737878] group-hover:text-[#006b56] transition-colors">
                    Enzoxy Standard
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. LIVE AIR QUALITY TELEMETRY WIDGET */}
      <section className="py-20 md:py-28 bg-[#0B1919] text-white relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(45,226,186,0.08),transparent_70%)] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#2DE2BA]">
                — Live Air Quality
              </p>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.04em] text-white">
                What the air outside is{' '}
                <span className="text-[#2DE2BA] italic font-medium">doing right now.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm md:text-base text-[#D4E5E1] leading-relaxed">
                Pulled live from public air-quality stations across India. Switch cities to see the numbers your family, office and school are breathing today.
              </p>
            </div>
          </div>

          {/* City Selection Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {CITIES_AQI.map((city) => (
              <button
                key={city.city}
                onClick={() => setSelectedCity(city)}
                className={`px-5 py-2.5 rounded-full text-xs font-headline font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-all ${
                  selectedCity.city === city.city
                    ? 'bg-[#2DE2BA] text-[#0B1919] shadow-md shadow-[#2DE2BA]/20'
                    : 'bg-[#122525] text-[#D4E5E1] hover:bg-white/10 border border-[rgba(255,255,255,0.1)]'
                }`}
              >
                {city.city} ({city.aqi})
              </button>
            ))}
          </div>

          {/* Interactive Dial & Comparison Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* The Dial itself */}
            <div className="lg:col-span-6">
              <SensorDial
                pm25={selectedCity.pm25}
                aqi={selectedCity.aqi}
                status={selectedCity.status}
                humidity={selectedCity.humidity}
                theme="dark"
              />
            </div>

            {/* Comparison Cards: Outdoor vs Indoor Enzoxy */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Outdoor Reality Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#122525] border border-[rgba(255,255,255,0.1)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-headline uppercase font-semibold tracking-wider text-rose-400">
                    Outdoor Air in {selectedCity.city}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-headline uppercase">
                    {selectedCity.status}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-headline text-3xl font-bold text-rose-400">
                    {selectedCity.pm25} µg/m³
                  </span>
                  <span className="text-xs text-[#a2adac]">
                    (WHO Guideline: &lt;15 µg/m³)
                  </span>
                </div>
                <p className="text-xs text-[#c0cac9] leading-relaxed">
                  Fine particulate matter enters deep into the lungs and bloodstream. At these levels, outdoor air causes low-grade respiratory fatigue within hours.
                </p>
              </div>

              {/* Indoor Enzoxy Protected Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#122525] to-[#0d2a25] border border-[rgba(45,226,186,0.3)] space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-headline uppercase font-semibold tracking-wider text-[#2DE2BA]">
                    Inside an Enzoxy Filtered Room
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#2DE2BA]/20 text-[#2DE2BA] font-headline uppercase font-bold">
                    Safe & Pure
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-headline text-3xl font-bold text-[#2DE2BA]">
                    9 µg/m³
                  </span>
                  <span className="text-xs text-[#D4E5E1]">
                    99.97% Particles Removed
                  </span>
                </div>
                <p className="text-xs text-[#D4E5E1] leading-relaxed">
                  The AP-200-H3 Auto Mode detects particulate spikes instantly, ramping up filtration silently to restore pristine alpine air inside your bedroom or cabin.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenOrder('device')}
                  className="btn-accent w-full py-3.5 text-center"
                >
                  Protect Your Home Now
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. TECHNOLOGY PREVIEW SECTION */}
      <section className="py-20 md:py-28 bg-[#f8faf9]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
                — Technology
              </p>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.04em] text-[#0B1919] leading-[1.08]">
                Intelligent air purification{' '}
                <span className="text-[#006b56] italic font-medium block mt-1">
                  — understood in five seconds.
                </span>
              </h2>
              <p className="text-base text-[#424848] leading-relaxed">
                Triple-layer filtration, real-time PM2.5 monitoring and intelligent auto modes. Every stage engineered for the way Indian homes breathe.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[rgba(11,25,25,0.08)]">
                <div className="p-4 rounded-2xl bg-[#E8EDED]/60">
                  <p className="font-headline text-2xl font-bold text-[#006b56]">H13 HEPA</p>
                  <p className="text-xs text-[#737878] mt-1">99.97% @ 0.3 Microns</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#E8EDED]/60">
                  <p className="font-headline text-2xl font-bold text-[#006b56]">200 m³/h</p>
                  <p className="text-xs text-[#737878] mt-1">Clean Air Delivery Rate</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('technology')}
                  className="btn-primary text-xs py-3 px-6"
                >
                  Explore Full Technology
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* Video Frame */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-[rgba(11,25,25,0.08)] bg-[#0B1919] shadow-2xl aspect-[16/10] flex items-center justify-center">
                <video
                  src={SITE_INFO.demoVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Live Demo Acrylic Badge */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[rgba(11,25,25,0.08)]">
                  <span className="w-2 h-2 rounded-full bg-[#00B894] animate-pulse" />
                  <span className="text-[10px] font-headline uppercase font-semibold tracking-wider text-[#0B1919]">
                    Live Demo · AP-200-H3
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PRODUCT STRIP & QUICK ORDER BAR */}
      <section className="py-16 md:py-24 bg-[#f2f4f3] border-t border-[rgba(11,25,25,0.06)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="ambient-card p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-white via-white to-[#f2f4f3]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-headline uppercase font-semibold tracking-[0.2em] text-[#006b56]">
                    Model AP-200-H3
                  </span>
                  <span className="text-xs text-[#737878]">· Rated 4.8/5 by 240+ verified buyers</span>
                </div>
                <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#0B1919]">
                  Ready for cleaner air in your home or clinic?
                </h3>
                <p className="text-sm sm:text-base text-[#424848] max-w-2xl leading-relaxed">
                  Introductory launch price of <strong>₹{PRODUCT_DATA.price.toLocaleString('en-IN')}</strong> (MRP ₹{PRODUCT_DATA.mrp.toLocaleString('en-IN')}) includes express delivery across India and a 12-Month Comprehensive Manufacturer Warranty.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenOrder('device')}
                  className="btn-accent text-center text-xs py-4 px-8"
                >
                  Order AP-200-H3
                  <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="btn-ghost text-center text-xs py-3.5 px-6"
                >
                  View Full Specifications
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
