// client/src/pages/ProofModePage.tsx
import React from 'react';
import { InteractiveProofMode } from '../components/InteractiveProofMode';
import { ShieldCheck } from 'lucide-react';

export const ProofModePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="pb-6 border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-[rgba(0,255,136,0.12)] border border-[rgba(0,255,136,0.3)] text-[#00ff88]">
            <ShieldCheck className="w-5 h-5" />
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-tech tracking-wide text-white">
            PROOF MODE <span className="text-[#00ff88]">STUDIO</span>
          </h1>
        </div>
        <p className="text-xs text-slate-400 font-mono mt-1">
          Master deductive contradiction proofs from Section 1.3 (Pages 24–28)
        </p>
      </div>

      {/* Proof Pedagogical Orientation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="cyber-card p-4 rounded-xl border border-[rgba(0,212,255,0.25)] bg-[#0f1419]">
          <span className="text-[#00d4ff] font-tech font-bold block mb-1">01. REDUCTIO AD ABSURDUM</span>
          <p className="text-slate-300 leading-relaxed font-sans">
            Assume the opposite (rational) in simplest coprime form, then follow deductive consequences until a contradiction occurs.
          </p>
        </div>

        <div className="cyber-card p-4 rounded-xl border border-[rgba(0,255,136,0.25)] bg-[#0f1419]">
          <span className="text-[#00ff88] font-tech font-bold block mb-1">02. DIVISIBILITY ENGINE</span>
          <p className="text-slate-300 leading-relaxed font-sans">
            Theorem 1.3 (if prime p divides a², then p divides a) is the mathematical fulcrum supporting √2, √3, and √5 proofs.
          </p>
        </div>

        <div className="cyber-card p-4 rounded-xl border border-[rgba(255,107,107,0.25)] bg-[#0f1419]">
          <span className="text-[#ff6b6b] font-tech font-bold block mb-1">03. RADICAL ISOLATION</span>
          <p className="text-slate-300 leading-relaxed font-sans">
            For compound expressions like 5 − √3 or 3√2, train students NEVER to square. Simply isolate the known radical.
          </p>
        </div>
      </div>

      {/* Main Interactive Proof Studio Component */}
      <InteractiveProofMode />
    </div>
  );
};
