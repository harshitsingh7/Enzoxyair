import React from 'react';
import { X, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Article } from '../data/siteData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-[rgba(11,25,25,0.08)] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Hero Image in Article */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0B1919]">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#0B1919] transition-all shadow-md"
          >
            <X size={18} />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-headline font-semibold uppercase tracking-widest bg-[#2DE2BA] text-[#0B1919]">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#D4E5E1]">
                <Clock size={12} />
                {article.read} read
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 space-y-6">
          <p className="text-base sm:text-lg font-medium text-[#006b56] italic border-l-2 border-[#2DE2BA] pl-4 leading-relaxed">
            {article.desc}
          </p>

          <div className="text-[#191c1c] text-sm sm:text-base leading-[1.8] space-y-4 whitespace-pre-line font-normal">
            {article.body}
          </div>

          <div className="pt-8 mt-8 border-t border-[rgba(11,25,25,0.08)] flex items-center justify-between">
            <span className="text-xs font-headline uppercase tracking-wider text-[#737878]">
              Published by ENZOXY AIR Wellness Library
            </span>
            <button
              onClick={onClose}
              className="btn-primary text-xs py-2 px-5"
            >
              Back to Library
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
