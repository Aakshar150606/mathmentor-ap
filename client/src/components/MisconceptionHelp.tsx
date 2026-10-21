// client/src/components/MisconceptionHelp.tsx
import React from 'react';
import { MisconceptionItem } from '../types';
import { AlertTriangle, CheckCircle2, Lightbulb, HelpCircle } from 'lucide-react';

interface MisconceptionHelpProps {
  misconceptions: MisconceptionItem[];
}

export const MisconceptionHelp: React.FC<MisconceptionHelpProps> = ({ misconceptions }) => {
  if (!misconceptions || misconceptions.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {misconceptions.map((item, idx) => (
        <div
          key={idx}
          className="cyber-card p-5"
        >
          {/* Misconception Header */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#ff4757]/15 text-[#ff4757] border border-[#ff4757]/40 mt-0.5 shadow-[0_0_15px_rgba(255,71,87,0.2)]">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-[#ff4757] uppercase tracking-wider block">
                DIAGNOSTIC TRAP #{idx + 1}
              </span>
              <h4 className="text-base font-tech font-bold text-white mt-0.5">
                &quot;{item.misconception}&quot;
              </h4>
            </div>
          </div>

          {/* Diagnosis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-[#1e293b] text-xs font-sans">
            {/* Why they think this */}
            <div className="p-3.5 rounded-xl bg-[#050810]/80 border border-[#ffd43b]/30">
              <div className="flex items-center gap-1.5 text-[#ffd43b] font-tech font-bold mb-1.5 text-[11px]">
                <HelpCircle className="w-3.5 h-3.5 text-[#ffd43b]" />
                <span>ROOT CAUSE:</span>
              </div>
              <p className="text-[#cbd5e1] leading-relaxed">{item.whyStudentsThinkThis}</p>
            </div>

            {/* Mathematical Correction */}
            <div className="p-3.5 rounded-xl bg-[#050810]/80 border border-[#00ff88]/30">
              <div className="flex items-center gap-1.5 text-[#00ff88] font-tech font-bold mb-1.5 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <span>RIGOROUS CORRECTION:</span>
              </div>
              <p className="text-[#f1f5f9] leading-relaxed font-mono text-[11px]">{item.correction}</p>
            </div>

            {/* Classroom Remedy */}
            <div className="p-3.5 rounded-xl bg-[#050810]/80 border border-[#00d4ff]/30">
              <div className="flex items-center gap-1.5 text-[#00d4ff] font-tech font-bold mb-1.5 text-[11px]">
                <Lightbulb className="w-3.5 h-3.5 text-[#00d4ff]" />
                <span>CLASSROOM REMEDY:</span>
              </div>
              <p className="text-[#cbd5e1] leading-relaxed">{item.classroomRemedy}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
