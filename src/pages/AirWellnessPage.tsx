import React, { useState } from 'react';
import { Clock, ArrowRight, ChevronDown, ChevronUp, Search, BookOpen, HelpCircle } from 'lucide-react';
import { ARTICLES, FAQS, Article } from '../data/siteData';

interface AirWellnessPageProps {
  onSelectArticle: (article: Article) => void;
}

export const AirWellnessPage: React.FC<AirWellnessPageProps> = ({ onSelectArticle }) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('All');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');

  const stats = [
    { value: '5×', label: 'more polluted indoors' },
    { value: '90%', label: 'of life indoors' },
    { value: '+61%', label: 'cognition lift, filtered offices' },
    { value: '30%', label: 'fewer sick days, filtered classrooms' },
    { value: '3.2M', label: 'annual deaths (WHO)' }
  ];

  const categories = ['All', 'Orders & Delivery', 'Smart Features', 'Operation', 'Maintenance', 'Health & Efficacy'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedFaqCategory === 'All' || faq.category === selectedFaqCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl space-y-6">
          <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
            — Library & Q/A
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[0.04em] text-[#0B1919] leading-[1.05]">
            Library <span className="text-[#006b56] italic font-medium">& Q/A</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-[#737878] font-normal">
              for homes, offices and everyone in between.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#424848] leading-relaxed max-w-2xl font-normal">
            Peer-reviewed science, plain language and quiet field notes — plus every question we get about ordering, filters, warranty and voice control, answered in one place.
          </p>

          <div className="pt-2">
            <a
              href="#qa-section"
              className="btn-ghost text-xs py-2.5 px-6"
            >
              Jump to Q/A
            </a>
          </div>
        </div>

        {/* 5 Architectural Metric Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-12 mt-12 border-t border-[rgba(11,25,25,0.08)]">
          {stats.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="font-headline text-3xl sm:text-4xl font-bold text-[#006b56] tracking-tight">
                {item.value}
              </p>
              <p className="text-xs text-[#737878] leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE COLLECTION (8 Scientific Articles) */}
      <section className="py-20 bg-[#f2f4f3] border-y border-[rgba(11,25,25,0.06)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-12">
          
          <div>
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56] mb-2">
              — The Collection
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#0B1919]">
              Written for the ones who{' '}
              <span className="text-[#006b56] italic font-medium">read the room</span> before they change it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((art) => (
              <article
                key={art.slug}
                onClick={() => onSelectArticle(art)}
                className="ambient-card overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1919]">
                    <img
                      src={art.img}
                      alt={art.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-headline uppercase font-semibold tracking-wider text-[#0B1919]">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#737878]">
                      <Clock size={12} />
                      <span>{art.read} read</span>
                    </div>

                    <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-[#0B1919] group-hover:text-[#006b56] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-[#424848] leading-relaxed line-clamp-3">
                      {art.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-[rgba(11,25,25,0.06)] flex items-center justify-between text-xs font-headline uppercase font-semibold text-[#006b56] group-hover:text-[#0B1919] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 3. COMPREHENSIVE Q/A ACCORDION */}
      <section id="qa-section" className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56]">
            — Q/A
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-[#0B1919]">
            Every question you have, <span className="text-[#006b56] italic font-medium">answered.</span>
          </h2>
          <p className="text-sm text-[#424848]">
            Everything about ordering, cancellations, filter replacement, voice control, warranty and more.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFaqCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-headline uppercase font-semibold tracking-wider transition-all ${
                selectedFaqCategory === cat
                  ? 'bg-[#0B1919] text-[#2DE2BA]'
                  : 'bg-[#E8EDED] text-[#0B1919] hover:bg-[#D4E5E1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div
                key={faq.q}
                className="ambient-card overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-headline text-base sm:text-lg font-bold text-[#0B1919] hover:text-[#006b56] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-[#f8faf9] flex items-center justify-center flex-shrink-0 text-[#006b56]">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 text-sm text-[#424848] leading-relaxed border-t border-[rgba(11,25,25,0.06)] whitespace-pre-line">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
};
