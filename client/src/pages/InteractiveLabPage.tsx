// client/src/pages/InteractiveLabPage.tsx
import React, { useState } from 'react';
import { Layers, GitBranch, Users, ShieldCheck } from 'lucide-react';
import { InteractiveFactorTree } from '../components/InteractiveFactorTree';
import { InteractiveHcfLcm } from '../components/InteractiveHcfLcm';
import { InteractiveSportsField } from '../components/InteractiveSportsField';
import { InteractiveProofMode } from '../components/InteractiveProofMode';

export const InteractiveLabPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tree' | 'hcflcm' | 'sports' | 'proof'>('tree');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[rgba(0,255,136,0.12)] border border-[rgba(0,255,136,0.3)] text-[#00ff88]">
              <Layers className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-tech tracking-wide text-white">
              INTERACTIVE <span className="text-[#00ff88]">SIMULATION LAB</span>
            </h1>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Visual simulations derived from AP Class 10 Real Numbers (Pages 14–31)
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap bg-[#0a0e1a] p-1.5 rounded-xl border border-[rgba(255,255,255,0.1)] text-xs shadow-inner gap-1">
          <button
            onClick={() => setActiveTab('tree')}
            className={`px-3 py-2 rounded-lg font-mono font-bold flex items-center gap-1.5 transition-all border ${
              activeTab === 'tree'
                ? 'bg-[rgba(0,255,136,0.15)] text-[#00ff88] border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            Factor Tree
          </button>

          <button
            onClick={() => setActiveTab('hcflcm')}
            className={`px-3 py-2 rounded-lg font-mono font-bold flex items-center gap-1.5 transition-all border ${
              activeTab === 'hcflcm'
                ? 'bg-[rgba(0,212,255,0.15)] text-[#00d4ff] border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.3)]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            HCF &amp; LCM Studio
          </button>

          <button
            onClick={() => setActiveTab('sports')}
            className={`px-3 py-2 rounded-lg font-mono font-bold flex items-center gap-1.5 transition-all border ${
              activeTab === 'sports'
                ? 'bg-[rgba(255,107,107,0.15)] text-[#ff6b6b] border-[#ff6b6b] shadow-[0_0_15px_rgba(255,107,107,0.3)]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            Track (Sonia &amp; Ravi)
          </button>

          <button
            onClick={() => setActiveTab('proof')}
            className={`px-3 py-2 rounded-lg font-mono font-bold flex items-center gap-1.5 transition-all border ${
              activeTab === 'proof'
                ? 'bg-[rgba(168,85,247,0.15)] text-[#a855f7] border-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Contradiction Proofs
          </button>
        </div>
      </div>

      {/* Dynamic Interactive Stage */}
      <div className="space-y-6">
        {activeTab === 'tree' && <InteractiveFactorTree />}
        {activeTab === 'hcflcm' && <InteractiveHcfLcm />}
        {activeTab === 'sports' && <InteractiveSportsField />}
        {activeTab === 'proof' && <InteractiveProofMode />}
      </div>
    </div>
  );
};
