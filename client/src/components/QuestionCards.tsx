// client/src/components/QuestionCards.tsx
import React, { useState } from 'react';
import { QuestionItem } from '../types';
import { ChevronDown, ChevronUp, CheckCircle, Lightbulb } from 'lucide-react';

interface QuestionCardsProps {
  questions: QuestionItem[];
}

export const QuestionCards: React.FC<QuestionCardsProps> = ({ questions }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  const categories = ['ALL', 'WARM-UP', 'THINK', 'DISCUSS', 'CHECK', 'EXIT QUESTION'];

  const filtered = activeCategory === 'ALL'
    ? questions
    : questions.filter(q => q.category === activeCategory);

  const toggleReveal = (idx: number) => {
    setRevealedAnswers(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const getBadgeColor = (cat: string) => {
    switch (cat) {
      case 'WARM-UP': return 'bg-[#00d4ff]/15 text-[#00d4ff] border-[#00d4ff]/40';
      case 'THINK': return 'bg-[#00ff88]/15 text-[#00ff88] border-[#00ff88]/40';
      case 'DISCUSS': return 'bg-[#ffd43b]/15 text-[#ffd43b] border-[#ffd43b]/40';
      case 'CHECK': return 'bg-[#51cf66]/15 text-[#51cf66] border-[#51cf66]/40';
      case 'EXIT QUESTION': return 'bg-[#ff6b6b]/15 text-[#ff6b6b] border-[#ff6b6b]/40';
      default: return 'bg-[#1e293b] text-[#94a3b8] border-[#334155]';
    }
  };

  return (
    <div className="space-y-4">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
              activeCategory === cat
                ? 'bg-[#00ff88] text-[#050810] border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)] font-bold'
                : 'bg-[#0f1419] text-[#94a3b8] hover:text-white border-[#1e293b]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((q, idx) => {
          const isRevealed = revealedAnswers[idx];
          return (
            <div
              key={idx}
              className="cyber-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${getBadgeColor(q.category)}`}>
                    {q.category}
                  </span>
                </div>

                <h4 className="text-sm font-sans font-bold text-white leading-snug">
                  &quot;{q.question}&quot;
                </h4>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1e293b]">
                <button
                  onClick={() => toggleReveal(idx)}
                  className="flex items-center justify-between w-full text-xs font-mono font-semibold text-[#00ff88] hover:text-[#00d4ff] transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00ff88]" />
                    {isRevealed ? 'Hide Response & Guidance' : 'Reveal Expected Answer & Guidance'}
                  </span>
                  {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {isRevealed && (
                  <div className="mt-3 space-y-2.5 text-xs animate-fadeIn font-sans">
                    <div className="p-3 rounded-lg bg-[#050810]/80 border border-[#00ff88]/30">
                      <span className="text-[11px] font-tech font-bold text-[#00ff88] block mb-1">EXPECTED STUDENT RESPONSE:</span>
                      <p className="text-[#f1f5f9] leading-relaxed font-mono">{q.expectedAnswer}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#050810]/80 border border-[#00d4ff]/30">
                      <div className="flex items-center gap-1 text-[11px] font-tech font-bold text-[#00d4ff] mb-1">
                        <Lightbulb className="w-3.5 h-3.5 text-[#00d4ff]" />
                        <span>TEACHER GUIDANCE:</span>
                      </div>
                      <p className="text-[#cbd5e1] leading-relaxed">{q.teacherGuidance}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
