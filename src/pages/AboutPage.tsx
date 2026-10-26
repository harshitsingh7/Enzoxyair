import React from 'react';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { ABOUT_PRINCIPLES, TIMELINE_MILESTONES, SITE_INFO } from '../data/siteData';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0B1919] text-[#E8EDED] overflow-hidden">
      
      {/* 1. CINEMATIC NARRATIVE HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(45,226,186,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(0,184,148,0.08),transparent_70%)] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-16">
          
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#2DE2BA]" />
              <p className="text-[11px] font-headline uppercase font-semibold tracking-[0.28em] text-[#2DE2BA]">
                About ENZOXY
              </p>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[0.04em] text-white leading-[1.05]">
              You Breathe It.{' '}
              <span className="text-[#2DE2BA] italic font-medium block mt-1">
                You Deserve to Know It.
              </span>
            </h1>
          </div>

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-6 border-t border-[rgba(255,255,255,0.12)]">
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg leading-[1.9] text-[#D4E5E1] font-light">
                At ENZOXY, we believe clean air should not be a promise you simply have to trust. Your air is invisible—but the things that affect it shouldn’t have to be. We are building ENZOXY around a simple idea: make air quality more transparent, understandable, and actionable. Instead of relying only on claims of “pure” or “healthy” air, ENZOXY focuses on helping people become more aware of the air around them and make informed decisions about the spaces they live and work in. Because better air begins with better awareness.
              </p>
            </div>

            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#122525] border border-[rgba(255,255,255,0.12)] space-y-3">
              <p className="text-[10px] font-headline uppercase font-semibold tracking-[0.24em] text-[#2DE2BA]">
                Our Belief
              </p>
              <h3 className="font-headline text-2xl font-bold uppercase text-white leading-snug">
                Transparent.
                <br />
                <span className="text-[#2DE2BA] italic font-medium">Understandable. Actionable.</span>
              </h3>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[rgba(255,255,255,0.08)]">
            <p className="font-headline text-xl sm:text-2xl text-white italic font-normal">
              ENZOXY — Know Your Air. Breathe With Confidence.
            </p>
          </div>

        </div>
      </section>

      {/* 2. OUR PRINCIPLES (Five Columns) */}
      <section className="py-20 md:py-28 bg-[#122525]/60 border-y border-[rgba(255,255,255,0.08)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-12">
          
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#2DE2BA]" />
            <p className="text-[11px] font-headline uppercase font-semibold tracking-[0.28em] text-[#2DE2BA]">
              Our Principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {ABOUT_PRINCIPLES.map((pr) => (
              <div
                key={pr.num}
                className="p-8 rounded-3xl bg-[#122525] border border-[rgba(255,255,255,0.08)] hover:border-[#2DE2BA] transition-colors space-y-4"
              >
                <span className="font-headline text-2xl font-bold text-[#2DE2BA] block">
                  {pr.num}
                </span>
                <h3 className="font-headline text-lg font-bold uppercase tracking-wide text-white">
                  {pr.title}
                </h3>
                <p className="text-xs text-[#c0cac9] leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. THE JOURNEY TIMELINE */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-16">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#2DE2BA]" />
              <p className="text-[11px] font-headline uppercase font-semibold tracking-[0.28em] text-[#2DE2BA]">
                The Journey
              </p>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              From a quiet conviction to{' '}
              <span className="text-[#2DE2BA] italic font-medium">a national movement.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {TIMELINE_MILESTONES.map((mile) => (
              <div key={mile.year} className="space-y-3 relative">
                <span className="text-xs font-headline uppercase font-bold tracking-[0.2em] text-[#2DE2BA]">
                  {mile.year}
                </span>
                <div className="w-3 h-3 rounded-full bg-[#2DE2BA] ring-4 ring-[#2DE2BA]/20 my-2" />
                <h3 className="font-headline text-lg font-bold uppercase text-white">
                  {mile.title}
                </h3>
                <p className="text-xs text-[#a2adac] leading-relaxed">
                  {mile.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FOUNDERS' NOTE */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#122525] border border-[rgba(255,255,255,0.12)] space-y-8">
            <p className="font-headline text-xl sm:text-2xl lg:text-3xl italic text-[#D4E5E1] leading-relaxed">
              “Wellness is a quiet compounding — a filter changed on time, an AQI reading that never lingers red, a child who sleeps easier. We built Enzoxy to sit invisibly inside that daily good.”
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-[rgba(255,255,255,0.1)]">
              <div>
                <p className="text-xs font-headline uppercase tracking-widest text-[#2DE2BA] font-bold">
                  Founders' Note · Enzoxy Air LLP
                </p>
                <p className="text-xs text-[#8d9b9a] mt-0.5">
                  Ahmedabad, Gujarat, India
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-accent text-xs py-3 px-6"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => onNavigate('air-wellness')}
                  className="btn-ghost-dark text-xs py-3 px-6"
                >
                  Enter Library
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
