import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { POLICIES } from '../data/siteData';

interface PolicyModalProps {
  policyKey: 'terms' | 'privacy' | 'shipping' | 'returns' | 'warranty' | null;
  onClose: () => void;
  onSelectPolicy: (key: 'terms' | 'privacy' | 'shipping' | 'returns' | 'warranty') => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  policyKey,
  onClose,
  onSelectPolicy
}) => {
  if (!policyKey) return null;

  const currentPolicy = POLICIES[policyKey];

  const policyTabs = [
    { key: 'warranty', label: 'Warranty' },
    { key: 'shipping', label: 'Shipping' },
    { key: 'returns', label: 'Returns' },
    { key: 'terms', label: 'Terms' },
    { key: 'privacy', label: 'Privacy' }
  ] as const;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-[rgba(11,25,25,0.08)] shadow-2xl overflow-hidden my-8 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[rgba(11,25,25,0.08)] bg-[#f8faf9]">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-[#006b56]" />
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold tracking-[0.08em] uppercase text-[#0B1919]">
                {currentPolicy.title}
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-[#737878]">
                Last updated · {currentPolicy.lastUpdated}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-[rgba(11,25,25,0.12)] flex items-center justify-center text-[#424848] hover:text-[#0B1919] hover:bg-[#E8EDED] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Policy Tab Bar */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-[rgba(11,25,25,0.06)] bg-[#f2f4f3] overflow-x-auto">
          {policyTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onSelectPolicy(tab.key)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-headline uppercase font-semibold tracking-wider transition-colors whitespace-nowrap ${
                policyKey === tab.key
                  ? 'bg-[#0B1919] text-[#2DE2BA]'
                  : 'text-[#424848] hover:bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 leading-relaxed text-[#191c1c] text-sm">
          {currentPolicy.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-headline font-bold text-base uppercase text-[#0B1919] tracking-wide">
                {sec.heading}
              </h4>
              <div className="text-[#424848] whitespace-pre-line text-sm leading-relaxed">
                {sec.body}
              </div>
            </div>
          ))}

          <div className="pt-6 border-t border-[rgba(11,25,25,0.08)] text-xs text-[#737878]">
            For questions or requests regarding our policies, please contact ENZOXY Customer Support at{' '}
            <a href="mailto:info@enzoxyair.com" className="font-semibold text-[#006b56] hover:underline">
              info@enzoxyair.com
            </a>{' '}
            or WhatsApp{' '}
            <a href="https://wa.me/919316820082" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#006b56] hover:underline">
              +91 93168 20082
            </a>.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[rgba(11,25,25,0.08)] bg-[#f8faf9] flex justify-end">
          <button
            onClick={onClose}
            className="btn-ghost text-xs py-2 px-6"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
