import React, { useState } from 'react';
import { ArrowRight, Cpu, Eye, Filter, Monitor, Wind, ShieldCheck, Activity } from 'lucide-react';
import { SITE_INFO, TECH_PROCESS_STAGES, TECH_FILTER_LAYERS } from '../data/siteData';
import { SensorDial } from '../components/SensorDial';

interface TechnologyPageProps {
  onOpenOrder: (productType?: 'device' | 'filter') => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onOpenOrder }) => {
  // Interactive Auto Mode Simulation State
  const [simulatedPollution, setSimulatedPollution] = useState(165);
  const [isAutoEnabled, setIsAutoEnabled] = useState(true);

  // Derived simulation values
  const simulatedAqi = Math.round(simulatedPollution * 1.3);
  const calculatedFanSpeed = isAutoEnabled
    ? simulatedPollution > 150 ? 4 : simulatedPollution > 80 ? 3 : simulatedPollution > 35 ? 2 : 1
    : 2;

  const simulatedPurifiedPm25 = Math.round(simulatedPollution * (1 - 0.9997) + 5);

  return (
    <div className="py-12 md:py-20 space-y-24 md:space-y-32">
      
      {/* 1. TECHNOLOGY HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
              Technology
            </p>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[0.04em] text-[#0B1919] leading-[1.02]">
              Intelligent{' '}
              <span className="text-[#006b56] italic font-medium block mt-1">
                air purification.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#424848] leading-relaxed">
              Medical-grade H13 HEPA + laser-precision PM2.5 sensor +{' '}
              <strong className="text-[#006b56]">auto mode</strong>. A calm, complete pipeline — from the air you can't see, to the calm you can feel.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Medical-grade H13 HEPA',
                'Real-time PM2.5 & AQI display',
                'Auto Mode',
                'Smart Life app · Voice-ready'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#191c1c]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006b56]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenOrder('device')}
                className="btn-accent"
              >
                <span>Experience AP-200-H3</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Hero Video Asset */}
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
              
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[rgba(11,25,25,0.08)]">
                <span className="w-2 h-2 rounded-full bg-[#00B894] animate-pulse" />
                <span className="text-[10px] font-headline uppercase font-semibold tracking-wider text-[#0B1919]">
                  Live Demo
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE PROCESS: FIVE STAGES. ONE CLEAN BREATH */}
      <section className="py-20 bg-[#f2f4f3] border-y border-[rgba(11,25,25,0.06)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-16">
          
          <div className="max-w-2xl">
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56] mb-2">
              The Process
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1919] leading-tight">
              Five stages. <span className="text-[#006b56] italic font-medium">One clean breath.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {TECH_PROCESS_STAGES.map((stage) => (
              <div
                key={stage.num}
                className="ambient-card p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#f8faf9] border border-[rgba(11,25,25,0.08)] flex items-center justify-center mb-6">
                    <span className="font-headline font-bold text-sm text-[#006b56]">
                      {stage.num}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold uppercase text-[#0B1919] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#424848] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[rgba(11,25,25,0.06)]">
                  <span className="text-[9px] font-headline uppercase tracking-widest text-[#737878]">
                    Automated Step
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. INSIDE THE FILTER: THREE ENGINEERED LAYERS */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-16">
        <div className="max-w-2xl">
          <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56] mb-2">
            Inside the Filter
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1919] leading-tight">
            Three engineered layers.
            <br />
            <span className="text-[#006b56] italic font-medium">One clean breath.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_FILTER_LAYERS.map((layer) => (
            <div
              key={layer.num}
              className="ambient-card p-8 sm:p-10 flex flex-col justify-between space-y-6"
            >
              <div>
                <p className="font-headline text-xs uppercase font-semibold tracking-[0.2em] text-[#006b56] mb-4">
                  {layer.num}
                </p>
                <h3 className="font-headline text-2xl font-bold uppercase text-[#0B1919] mb-3">
                  {layer.title}
                </h3>
                <p className="text-sm text-[#424848] leading-relaxed">
                  {layer.desc}
                </p>
              </div>

              <div>
                <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-headline font-semibold uppercase tracking-wider bg-[#f2f4f3] text-[#006b56] border border-[#51f9d0]">
                  {layer.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE AUTO-MODE & SENSOR SIMULATOR */}
      <section className="py-20 bg-[#0B1919] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-headline uppercase font-semibold tracking-[0.24em] text-[#2DE2BA]">
                — Interactive Telemetry
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-white leading-tight">
                Simulate how Enzoxy Auto Mode reacts in real-time.
              </h2>
              <p className="text-sm sm:text-base text-[#D4E5E1] leading-relaxed">
                Slide to test varying levels of outdoor urban particulate matter (PM2.5) and observe how the optical laser sensor modulates the brushless DC motor instantly.
              </p>

              {/* Simulation Controls */}
              <div className="p-6 rounded-3xl bg-[#122525] border border-[rgba(255,255,255,0.1)] space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-headline uppercase font-semibold text-[#D4E5E1] tracking-wider">
                      Simulate Ambient PM2.5 Level
                    </label>
                    <span className="font-headline font-bold text-lg text-[#2DE2BA]">
                      {simulatedPollution} µg/m³
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="350"
                    value={simulatedPollution}
                    onChange={(e) => setSimulatedPollution(Number(e.target.value))}
                    className="w-full accent-[#2DE2BA] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#a2adac] font-headline uppercase mt-1">
                    <span>Clear (15)</span>
                    <span>Moderate (80)</span>
                    <span>Severe Smog (350)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <div>
                    <p className="text-xs font-headline uppercase font-bold text-white">Intelligent Auto Mode</p>
                    <p className="text-[11px] text-[#a2adac]">Self-adjusting based on particulate spike</p>
                  </div>
                  <button
                    onClick={() => setIsAutoEnabled(!isAutoEnabled)}
                    className={`px-4 py-2 rounded-full text-xs font-headline font-bold uppercase tracking-wider transition-all ${
                      isAutoEnabled
                        ? 'bg-[#2DE2BA] text-[#0B1919]'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {isAutoEnabled ? 'Auto Enabled' : 'Manual Mode'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#122525] border border-[rgba(255,255,255,0.08)]">
                  <span className="text-[10px] font-headline uppercase tracking-wider text-[#a2adac]">
                    Calculated Fan Output
                  </span>
                  <p className="font-headline font-bold text-xl text-[#2DE2BA] mt-1">
                    Speed {calculatedFanSpeed} of 4
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#122525] border border-[rgba(255,255,255,0.08)]">
                  <span className="text-[10px] font-headline uppercase tracking-wider text-[#a2adac]">
                    Delivered Room Air
                  </span>
                  <p className="font-headline font-bold text-xl text-[#2DE2BA] mt-1">
                    ~{simulatedPurifiedPm25} µg/m³ Pure
                  </p>
                </div>
              </div>

            </div>

            {/* Live Sensor Dial Rendering */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md">
                <SensorDial
                  pm25={simulatedPollution}
                  aqi={simulatedAqi}
                  status={simulatedPollution > 150 ? 'Severe' : simulatedPollution > 80 ? 'Poor' : 'Moderate'}
                  fanSpeed={calculatedFanSpeed}
                  isAuto={isAutoEnabled}
                  theme="dark"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
