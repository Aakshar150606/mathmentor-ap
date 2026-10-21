// client/src/components/InteractiveFactorTree.tsx
import React, { useState } from 'react';
import { GitBranch, RefreshCw, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

interface FactorStep {
  current: number;
  prime: number;
  quotient: number;
  explanation: string;
}

const PRESETS: Record<number, { name: string; page: string; steps: FactorStep[]; result: string }> = {
  32760: {
    name: "32760 (Textbook Benchmark)",
    page: "Pages 16–17",
    result: "2³ × 3² × 5 × 7 × 13",
    steps: [
      { current: 32760, prime: 2, quotient: 16380, explanation: "Even number ⟹ divide by smallest prime 2." },
      { current: 16380, prime: 2, quotient: 8190, explanation: "Still even ⟹ divide by prime 2 again." },
      { current: 8190, prime: 2, quotient: 4095, explanation: "Divide by prime 2 again." },
      { current: 4095, prime: 3, quotient: 1365, explanation: "Sum of digits is 4+0+9+5 = 18 (divisible by 3) ⟹ divide by prime 3." },
      { current: 1365, prime: 3, quotient: 455, explanation: "Sum of digits is 1+3+6+5 = 15 (divisible by 3) ⟹ divide by prime 3." },
      { current: 455, prime: 5, quotient: 91, explanation: "Ends in 5 ⟹ divide by prime 5." },
      { current: 91, prime: 7, quotient: 13, explanation: "91 is 7 × 13. Both 7 and 13 are prime!" },
    ],
  },
  96: {
    name: "96 (Example 3)",
    page: "Page 22",
    result: "2⁵ × 3",
    steps: [
      { current: 96, prime: 2, quotient: 48, explanation: "96 / 2 = 48" },
      { current: 48, prime: 2, quotient: 24, explanation: "48 / 2 = 24" },
      { current: 24, prime: 2, quotient: 12, explanation: "24 / 2 = 12" },
      { current: 12, prime: 2, quotient: 6, explanation: "12 / 2 = 6" },
      { current: 6, prime: 2, quotient: 3, explanation: "6 / 2 = 3 (prime)" },
    ],
  },
  404: {
    name: "404 (Example 3)",
    page: "Page 22",
    result: "2² × 101",
    steps: [
      { current: 404, prime: 2, quotient: 202, explanation: "404 / 2 = 202" },
      { current: 202, prime: 2, quotient: 101, explanation: "202 / 2 = 101 (101 is prime!)" },
    ],
  },
  140: {
    name: "140 (Ex 1.1 Q1(i))",
    page: "Page 23",
    result: "2² × 5 × 7",
    steps: [
      { current: 140, prime: 2, quotient: 70, explanation: "140 / 2 = 70" },
      { current: 70, prime: 2, quotient: 35, explanation: "70 / 2 = 35" },
      { current: 35, prime: 5, quotient: 7, explanation: "35 / 5 = 7 (prime)" },
    ],
  },
  156: {
    name: "156 (Ex 1.1 Q1(ii))",
    page: "Page 23",
    result: "2² × 3 × 13",
    steps: [
      { current: 156, prime: 2, quotient: 78, explanation: "156 / 2 = 78" },
      { current: 78, prime: 2, quotient: 39, explanation: "78 / 2 = 39" },
      { current: 39, prime: 3, quotient: 13, explanation: "39 / 3 = 13 (prime)" },
    ],
  },
  3825: {
    name: "3825 (Ex 1.1 Q1(iii))",
    page: "Page 23",
    result: "3² × 5² × 17",
    steps: [
      { current: 3825, prime: 3, quotient: 1275, explanation: "Sum of digits 3+8+2+5 = 18 ⟹ divide by 3." },
      { current: 1275, prime: 3, quotient: 425, explanation: "Sum of digits 1+2+7+5 = 15 ⟹ divide by 3." },
      { current: 425, prime: 5, quotient: 85, explanation: "Ends in 5 ⟹ divide by 5." },
      { current: 85, prime: 5, quotient: 17, explanation: "85 / 5 = 17 (prime)" },
    ],
  },
  5005: {
    name: "5005 (Ex 1.1 Q1(iv))",
    page: "Page 23",
    result: "5 × 7 × 11 × 13",
    steps: [
      { current: 5005, prime: 5, quotient: 1001, explanation: "Ends in 5 ⟹ divide by 5 to get 1001." },
      { current: 1001, prime: 7, quotient: 143, explanation: "1001 / 7 = 143." },
      { current: 143, prime: 11, quotient: 13, explanation: "143 / 11 = 13 (prime!)" },
    ],
  },
  7429: {
    name: "7429 (Ex 1.1 Q1(v))",
    page: "Page 23",
    result: "17 × 19 × 23",
    steps: [
      { current: 7429, prime: 17, quotient: 437, explanation: "Test primes up to 17: 7429 / 17 = 437." },
      { current: 437, prime: 19, quotient: 23, explanation: "437 / 19 = 23 (prime!)" },
    ],
  },
};

function computeFactorization(n: number): { name: string; page: string; steps: FactorStep[]; result: string } {
  if (PRESETS[n]) {
    return PRESETS[n];
  }

  const steps: FactorStep[] = [];
  const primeCounts: Record<number, number> = {};
  let temp = n;
  let d = 2;

  while (d * d <= temp) {
    if (temp % d === 0) {
      const q = Math.floor(temp / d);
      let exp = "";
      if (d === 2) exp = "Even number ⟹ divide by prime 2.";
      else if (d === 3) exp = "Sum of digits divisible by 3 ⟹ divide by prime 3.";
      else if (d === 5) exp = "Last digit is 0 or 5 ⟹ divide by prime 5.";
      else exp = `Divisible by prime ${d}.`;

      steps.push({
        current: temp,
        prime: d,
        quotient: q,
        explanation: exp,
      });
      primeCounts[d] = (primeCounts[d] || 0) + 1;
      temp = q;
    } else {
      d = d === 2 ? 3 : d + 2;
    }
  }

  if (temp > 1) {
    primeCounts[temp] = (primeCounts[temp] || 0) + 1;
    if (steps.length === 0) {
      steps.push({
        current: temp,
        prime: temp,
        quotient: 1,
        explanation: `${temp} is a prime number!`,
      });
    }
  }

  const superscripts: Record<string, string> = {
    '0': '⁰', '1': '', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
  };

  const result = Object.entries(primeCounts)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([prime, count]) => {
      const exp = count === 1 ? '' : String(count).split('').map(c => superscripts[c] || c).join('');
      return `${prime}${exp}`;
    })
    .join(' × ');

  return {
    name: `${n} (Custom Classroom Input)`,
    page: "Classroom Custom Problem",
    steps,
    result,
  };
}

export const InteractiveFactorTree: React.FC = () => {
  const [selectedNum, setSelectedNum] = useState<number>(32760);
  const [customInput, setCustomInput] = useState<string>('');
  const [revealedIndex, setRevealedIndex] = useState<number>(0);

  const currentPreset = computeFactorization(selectedNum);
  const steps = currentPreset.steps;
  const isComplete = revealedIndex >= steps.length;

  const handleNext = () => {
    if (revealedIndex < steps.length) {
      setRevealedIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setRevealedIndex(0);
  };

  const handleRevealAll = () => {
    setRevealedIndex(steps.length);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(customInput.trim(), 10);
    if (!isNaN(val) && val >= 2 && val <= 1000000) {
      setSelectedNum(val);
      setRevealedIndex(0);
      setCustomInput('');
    }
  };

  return (
    <div className="cyber-card p-6 rounded-2xl border border-[rgba(0,255,136,0.25)] bg-[#0f1419] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      {/* Terminal Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[rgba(255,255,255,0.08)] gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="p-2 bg-[rgba(0,255,136,0.12)] text-[#00ff88] border border-[rgba(0,255,136,0.3)] rounded-lg">
              <GitBranch className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold font-tech tracking-wide text-white flex items-center gap-2">
                FACTOR TREE: <span className="text-[#00ff88]">PRIME DECOMPOSER</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Fundamental Theorem of Arithmetic • AP Textbook ({currentPreset.page})
              </p>
            </div>
          </div>
        </div>

        {/* Custom Number Input Form */}
        <form onSubmit={handleCustomSubmit} className="flex items-center gap-2">
          <input
            type="number"
            min={2}
            max={1000000}
            placeholder="Custom number..."
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            className="w-36 px-3 py-2 text-xs font-mono rounded-lg bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] text-[#00ff88] placeholder-slate-500 focus:outline-none focus:border-[#00ff88] shadow-inner"
          />
          <button
            type="submit"
            className="cyber-btn-primary px-3.5 py-2 text-xs font-mono font-bold"
          >
            Compute
          </button>
        </form>
      </div>

      {/* Preset Selectors */}
      <div className="flex flex-wrap gap-2 pt-4">
        {Object.entries(PRESETS).map(([num, data]) => (
          <button
            key={num}
            onClick={() => {
              setSelectedNum(Number(num));
              setRevealedIndex(0);
            }}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg font-semibold transition-all border ${
              selectedNum === Number(num)
                ? 'bg-[rgba(0,255,136,0.15)] text-[#00ff88] border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.35)]'
                : 'bg-[#141b24] text-slate-400 border-[rgba(255,255,255,0.08)] hover:text-slate-200 hover:border-[rgba(0,212,255,0.4)]'
            }`}
          >
            {data.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Tree Visualization Stage */}
      <div className="my-6 p-6 rounded-2xl bg-[#050810] border border-[rgba(255,255,255,0.08)] overflow-x-auto min-h-[320px] flex flex-col items-center justify-start relative">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#00ff88_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        {/* Root Node */}
        <div className="relative z-10 px-6 py-2.5 rounded-xl bg-[#0f1419] border-2 border-[#00d4ff] text-[#00d4ff] font-tech font-bold text-xl shadow-[0_0_20px_rgba(0,212,255,0.3)]">
          {selectedNum}
        </div>

        {/* Dynamic Branching Cascade */}
        <div className="w-full max-w-lg mt-4 space-y-4 relative z-10">
          {steps.slice(0, revealedIndex).map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center animate-fadeIn"
            >
              <div className="w-0.5 h-6 bg-gradient-to-b from-[#00d4ff] to-[#00ff88]"></div>
              <div className="flex items-center gap-4 rounded-xl bg-[#141b24] px-5 py-3.5 border border-[rgba(0,255,136,0.25)] w-full justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                {/* Left Branch: Prime Factor */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#00ff88]">PRIME</span>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,136,0.15)] border-2 border-[#00ff88] text-[#00ff88] font-mono font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                    {step.prime}
                  </div>
                </div>

                {/* Explanation */}
                <div className="text-xs text-center flex-1 px-3">
                  <span className="font-mono text-[#00d4ff] font-bold">{step.current} ÷ {step.prime}</span>
                  <p className="text-[11px] text-slate-400 font-sans mt-0.5">{step.explanation}</p>
                </div>

                {/* Right Branch: Quotient */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400">QUOTIENT</span>
                  <div className={`px-3.5 py-1.5 rounded-lg font-mono font-bold text-sm border ${
                    idx === steps.length - 1
                      ? 'bg-[rgba(0,255,136,0.2)] border-[#00ff88] text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                      : 'bg-[#0a0e1a] border-[rgba(255,255,255,0.12)] text-white'
                  }`}>
                    {step.quotient}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {revealedIndex === 0 && (
            <div className="text-center py-12 rounded-xl text-slate-400 text-sm font-mono bg-[#0a0e1a] border border-dashed border-[rgba(255,255,255,0.1)]">
              Click &quot;Reveal Next Branch&quot; below to demonstrate the factor tree step-by-step.
            </div>
          )}
        </div>

        {/* Final Completion Banner */}
        {isComplete && (
          <div className="relative z-10 mt-6 p-5 rounded-2xl bg-[rgba(0,255,136,0.06)] border border-[#00ff88] text-center w-full max-w-lg shadow-[0_0_30px_rgba(0,255,136,0.2)] animate-fadeIn">
            <div className="flex items-center justify-center gap-2 text-[#00ff88] font-tech font-bold tracking-wide mb-1.5">
              <Sparkles className="w-5 h-5 text-[#00ff88]" />
              <span>FUNDAMENTAL THEOREM OF ARITHMETIC VERIFIED</span>
            </div>
            <p className="text-xs text-slate-300 font-sans mb-3">
              All terminal leaves are prime numbers. Expressed in canonical exponential form:
            </p>
            <div className="inline-block px-5 py-2.5 rounded-xl bg-[#050810] border border-[#00ff88] font-mono font-bold text-lg text-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.25)]">
              {selectedNum} = {currentPreset.result}
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-2.5">
              Classroom Rule: Unique up to the order in which the prime factors occur.
            </p>
          </div>
        )}
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
        <div className="text-xs font-mono text-slate-400">
          BRANCH PROGRESS: <span className="text-[#00ff88] font-bold">{revealedIndex}</span> / <span className="font-bold text-white">{steps.length}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="cyber-btn-secondary px-3.5 py-2 text-xs font-mono font-semibold flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Tree
          </button>

          {!isComplete ? (
            <>
              <button
                onClick={handleRevealAll}
                className="cyber-btn-secondary px-3.5 py-2 text-xs font-mono font-semibold"
              >
                Reveal All
              </button>
              <button
                onClick={handleNext}
                className="cyber-btn-primary px-4 py-2 text-xs font-mono font-bold flex items-center gap-2"
              >
                Reveal Next Branch
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2 text-[#00ff88] text-xs font-mono font-bold bg-[rgba(0,255,136,0.12)] px-4 py-2 rounded-xl border border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
              FACTORISATION COMPLETE
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
