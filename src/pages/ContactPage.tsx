import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Check, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 md:py-20 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        
        {/* Left Column: Direct channels */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <p className="font-headline text-xs uppercase font-semibold tracking-[0.24em] text-[#006b56] mb-3">
              Get in Touch
            </p>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[0.04em] text-[#0B1919] leading-[1.02]">
              Let's{' '}
              <span className="text-[#006b56] italic font-medium block mt-1">
                breathe better
              </span>
              <span className="block mt-1">— together.</span>
            </h1>
            <p className="text-base text-[#424848] leading-relaxed mt-6">
              Send us your enquiry — we'll save it, respond by email, and open WhatsApp for the fastest follow-up.
            </p>
          </div>

          {/* WhatsApp Direct Card */}
          <a
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-[#0B1919] text-white flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 shadow-xl border border-[rgba(255,255,255,0.1)] block"
          >
            <div className="w-12 h-12 rounded-full bg-[#122525] border border-[#2DE2BA]/40 flex items-center justify-center text-[#2DE2BA] flex-shrink-0">
              <MessageCircle size={22} />
            </div>
            <div>
              <p className="font-headline font-bold text-base uppercase tracking-wider text-white">
                Chat on WhatsApp
              </p>
              <p className="text-xs text-[#2DE2BA] mt-0.5">
                Instant response · {SITE_INFO.phone}
              </p>
            </div>
          </a>

          {/* Contact Details List */}
          <div className="space-y-6 pt-4 border-t border-[rgba(11,25,25,0.08)]">
            <div>
              <p className="text-[10px] font-headline uppercase font-semibold tracking-widest text-[#737878] mb-1">
                Email
              </p>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="font-headline text-lg font-medium text-[#0B1919] hover:text-[#006b56] transition-colors"
              >
                {SITE_INFO.email}
              </a>
            </div>

            <div>
              <p className="text-[10px] font-headline uppercase font-semibold tracking-widest text-[#737878] mb-1">
                Headquarters
              </p>
              <p className="font-headline text-lg font-medium text-[#0B1919]">
                {SITE_INFO.location}
              </p>
              <p className="text-xs text-[#737878] mt-0.5">
                {SITE_INFO.legalName}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="ambient-card p-8 sm:p-12 space-y-6">
            <div>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#0B1919]">
                Send an Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#737878] mt-1">
                Fill out the details below and our team will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#f2f4f3] border border-[#006b56]/20 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#006b56] text-white flex items-center justify-center mx-auto shadow-md">
                  <Check size={28} />
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#0B1919]">
                  Your enquiry has been sent.
                </h3>
                <p className="text-sm text-[#424848] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to ENZOXY. Our team will get back to you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiry: 'General Enquiry',
                        message: ''
                      });
                    }}
                    className="btn-primary text-xs py-2.5 px-6"
                  >
                    Send New Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56]"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56]"
                      placeholder="+91 93168 20082"
                    />
                  </div>

                  <div>
                    <label className="block font-headline uppercase font-semibold text-[#424848] mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiry}
                      onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56] bg-white"
                    >
                      <option>General Enquiry</option>
                      <option>Bulk / Corporate Orders</option>
                      <option>Warranty & AMC Support</option>
                      <option>Partnership & Distribution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-headline uppercase font-semibold text-[#424848] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(11,25,25,0.12)] text-sm focus:outline-none focus:border-[#006b56]"
                    placeholder="Tell us about your home, workspace or question..."
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#737878]">
                    We respect your privacy and never sell data.
                  </span>
                  <button type="submit" className="btn-primary text-xs py-3.5 px-8">
                    Send Message
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
