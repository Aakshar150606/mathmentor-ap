// client/src/components/BlackboardViewer.tsx
import React, { useState } from 'react';
import { BoardPlanStep } from '../types';
import { ChevronLeft, ChevronRight, Eye, MessageSquare, Terminal } from 'lucide-react';

interface BlackboardViewerProps {
  steps: BoardPlanStep[];
}

export const BlackboardViewer: React.FC<BlackboardViewerProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  if (!steps || steps.length === 0) {
    return (
      <div className="p-6 text-center text-[#94a3b8] bg-[#0f1419] border border-[#1e293b] rounded-xl font-mono text-xs">
        No board plan available for this lesson.
      </div>
    );
  }

  const active = steps[currentStep];

  return (
    <div className="space-y-4">
      {/* Step selector bar */}
      <div className="flex items-center justify-between bg-[#0f1419] p-3 rounded-xl border border-[#1e293b]">
        <span className="text-xs font-semibold text-[#94a3b8] px-2 font-mono">
          BOARD STEP <span className="text-[#00ff88] font-bold">{currentStep + 1}</span> OF <span className="text-white font-bold">{steps.length}</span>: <span className="text-white font-bold ml-1 font-tech">{active.title}</span>
        </span>
        <div className="flex items-center gap-1.5">
          <button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            className="p-1.5 rounded-lg bg-[#050810] hover:bg-[#1a1f2e] disabled:opacity-30 text-[#94a3b8] hover:text-[#00ff88] border border-[#1e293b] transition-colors"
            title="Previous Step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            disabled={currentStep === steps.length - 1}
            onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
            className="p-1.5 rounded-lg bg-[#050810] hover:bg-[#1a1f2e] disabled:opacity-30 text-[#94a3b8] hover:text-[#00ff88] border border-[#1e293b] transition-colors"
            title="Next Step"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cyber Digital Blackboard Simulation */}
      <div className="terminal-window p-0 shadow-2xl relative">
        <div className="terminal-topbar">
          <div className="flex items-center gap-2">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="text-xs font-mono font-semibold text-[#94a3b8] ml-2">
              DIGITAL_CHALKBOARD://STEP_{currentStep + 1}
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-[#ffd43b] px-2 py-0.5 rounded bg-[#ffd43b]/10 border border-[#ffd43b]/30">
            {active.title}
          </span>
        </div>

        {/* Board Content Text in Neon Chalk typography */}
        <div className="p-6 min-h-[280px] bg-[#050810]/90">
          <pre className="text-sm md:text-base font-mono whitespace-pre-wrap leading-relaxed select-all chalk-neon">
            {active.boardContent}
          </pre>
        </div>
      </div>

      {/* Pedagogical Guidance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-[#0f1419] border border-[#1e293b] text-xs shadow-md">
          <div className="flex items-center gap-1.5 text-[#00ff88] font-tech font-bold mb-1.5 tracking-wider">
            <Eye className="w-3.5 h-3.5" />
            <span>TEACHER ACTION AT THE BOARD:</span>
          </div>
          <p className="text-[#cbd5e1] leading-relaxed font-sans">{active.teacherAction}</p>
        </div>

        <div className="p-4 rounded-xl bg-[#0f1419] border border-[#1e293b] text-xs shadow-md">
          <div className="flex items-center gap-1.5 text-[#00d4ff] font-tech font-bold mb-1.5 tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>STUDENT NOTE-TAKING TASK:</span>
          </div>
          <p className="text-[#cbd5e1] leading-relaxed font-sans">{active.studentsAction}</p>
        </div>
      </div>
    </div>
  );
};
