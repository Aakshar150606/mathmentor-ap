// client/src/components/InteractiveHcfLcm.tsx
import React, { useState } from 'react';
import { Layers, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export const InteractiveHcfLcm: React.FC = () => {
  const [mode, setMode] = useState<'two' | 'three'>('two');

  // Two numbers presets
  const [selectedTwoPair, setSelectedTwoPair] = useState<number>(0);
  const twoPairs = [
    {
      title: "Ex 2: 6 & 20",
      page: "Page 21",
      a: 6,
      b: 20,
      aFactors: "2¹ × 3¹",
      bFactors: "2² × 5¹",
      commonPrimes: "2 (smallest power is 2¹ = 2)",
      allPrimes: "2² × 3¹ × 5¹ = 4 × 3 × 5 = 60",
      hcf: 2,
      lcm: 60,
      product: 120,
    },
    {
      title: "Ex 3: 96 & 404",
      page: "Page 22",
      a: 96,
      b: 404,
      aFactors: "2⁵ × 3¹",
      bFactors: "2² × 101¹",
      commonPrimes: "2 (smallest power is 2² = 4)",
      allPrimes: "2⁵ × 3¹ × 101¹ = 32 × 3 × 101 = 9696",
      hcf: 4,
      lcm: 9696,
      product: 38784,
    },
    {
      title: "Ex 1.1 Q2(i): 26 & 91",
      page: "Page 23",
      a: 26,
      b: 91,
      aFactors: "2¹ × 13¹",
      bFactors: "7¹ × 13¹",
      commonPrimes: "13 (smallest power is 13¹ = 13)",
      allPrimes: "2¹ × 7¹ × 13¹ = 182",
      hcf: 13,
      lcm: 182,
      product: 2366,
    },
    {
      title: "Ex 1.1 Q2(ii): 510 & 92",
      page: "Page 23",
      a: 510,
      b: 92,
      aFactors: "2¹ × 3¹ × 5¹ × 17¹",
      bFactors: "2² × 23¹",
      commonPrimes: "2 (smallest power is 2¹ = 2)",
      allPrimes: "2² × 3¹ × 5¹ × 17¹ × 23¹ = 23,460",
      hcf: 2,
      lcm: 23460,
      product: 46920,
    },
    {
      title: "Ex 1.1 Q2(iii): 336 & 54",
      page: "Page 23",
      a: 336,
      b: 54,
      aFactors: "2⁴ × 3¹ × 7¹",
      bFactors: "2¹ × 3³",
      commonPrimes: "2¹ × 3¹ = 6",
      allPrimes: "2⁴ × 3³ × 7¹ = 16 × 27 × 7 = 3024",
      hcf: 6,
      lcm: 3024,
      product: 18144,
    },
    {
      title: "Ex 1.1 Q4: 306 & 657",
      page: "Page 24",
      a: 306,
      b: 657,
      aFactors: "2¹ × 3² × 17¹",
      bFactors: "3² × 73¹",
      commonPrimes: "3² = 9 (Given HCF = 9)",
      allPrimes: "(306 × 657) ÷ 9 = 34 × 657 = 22,338",
      hcf: 9,
      lcm: 22338,
      product: 201042,
    },
  ];

  // Three numbers presets
  const [selectedThreeSet, setSelectedThreeSet] = useState<number>(0);
  const threeSets = [
    {
      title: "Example 4: 6, 72 & 120",
      page: "Pages 22 & 31",
      nums: [6, 72, 120],
      factors: ["2¹ × 3¹", "2³ × 3²", "2³ × 3¹ × 5¹"],
      hcfExplanation: "Smallest powers common to all: 2¹ × 3¹ = 6",
      lcmExplanation: "Greatest powers of all primes: 2³ × 3² × 5¹ = 8 × 9 × 5 = 360",
      hcf: 6,
      lcm: 360,
      hcfXlcm: 2160,
      product: 51840,
      pairHcfs: "HCF(6,72)=6, HCF(72,120)=24, HCF(6,120)=6",
      trueFormulaCheck: "[51840 × 6] / [6 × 24 × 6] = 311040 / 864 = 360",
    },
    {
      title: "Ex 1.1 Q3(i): 12, 15 & 21",
      page: "Page 23",
      nums: [12, 15, 21],
      factors: ["2² × 3¹", "3¹ × 5¹", "3¹ × 7¹"],
      hcfExplanation: "Common to all three: 3¹ = 3",
      lcmExplanation: "Greatest powers: 2² × 3¹ × 5¹ × 7¹ = 4 × 3 × 5 × 7 = 420",
      hcf: 3,
      lcm: 420,
      hcfXlcm: 1260,
      product: 3780,
      pairHcfs: "HCF(12,15)=3, HCF(15,21)=3, HCF(12,21)=3",
      trueFormulaCheck: "[3780 × 3] / [3 × 3 × 3] = 11340 / 27 = 420",
    },
    {
      title: "Ex 1.1 Q3(ii): 17, 23 & 29",
      page: "Page 23",
      nums: [17, 23, 29],
      factors: ["17¹ (prime)", "23¹ (prime)", "29¹ (prime)"],
      hcfExplanation: "All 3 are distinct primes ⟹ HCF = 1",
      lcmExplanation: "Product of primes: 17 × 23 × 29 = 11,339",
      hcf: 1,
      lcm: 11339,
      hcfXlcm: 11339,
      product: 11339,
      pairHcfs: "HCF(17,23)=1, HCF(23,29)=1, HCF(17,29)=1",
      trueFormulaCheck: "[11339 × 1] / [1 × 1 × 1] = 11339 (Holds as special coprime case!)",
    },
    {
      title: "Ex 1.1 Q3(iii): 8, 9 & 25",
      page: "Page 23",
      nums: [8, 9, 25],
      factors: ["2³", "3²", "5²"],
      hcfExplanation: "No shared prime factors ⟹ HCF = 1",
      lcmExplanation: "Greatest powers: 2³ × 3² × 5² = 8 × 9 × 25 = 1,800",
      hcf: 1,
      lcm: 1800,
      hcfXlcm: 1800,
      product: 1800,
      pairHcfs: "HCF(8,9)=1, HCF(9,25)=1, HCF(8,25)=1",
      trueFormulaCheck: "[1800 × 1] / [1 × 1 × 1] = 1800 (Holds because pairwise coprime!)",
    },
  ];

  const currentThree = threeSets[selectedThreeSet];

  const currentTwo = twoPairs[selectedTwoPair];

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
            <span className="p-2 bg-[rgba(0,212,255,0.12)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)] rounded-lg">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold font-tech tracking-wide text-white flex items-center gap-2">
                HCF &amp; LCM: <span className="text-[#00d4ff]">IDENTITY STUDIO</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Prime Power Analysis &amp; 3-Number Cautionary Proofs • AP Textbook Pages 21–23, 30–31
              </p>
            </div>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex bg-[#0a0e1a] p-1 rounded-xl border border-[rgba(255,255,255,0.1)]">
          <button
            onClick={() => setMode('two')}
            className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all border ${
              mode === 'two'
                ? 'bg-[rgba(0,212,255,0.18)] text-[#00d4ff] border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.3)]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            Two Numbers Formula
          </button>
          <button
            onClick={() => setMode('three')}
            className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all border ${
              mode === 'three'
                ? 'bg-[rgba(255,107,107,0.18)] text-[#ff6b6b] border-[#ff6b6b] shadow-[0_0_15px_rgba(255,107,107,0.3)]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            Three Numbers Warning ⚠️
          </button>
        </div>
      </div>

      {mode === 'two' ? (
        <div className="mt-6 space-y-6">
          {/* Pair selector tabs */}
          <div className="flex flex-wrap gap-2">
            {twoPairs.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTwoPair(idx)}
                className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all border ${
                  selectedTwoPair === idx
                    ? 'bg-[rgba(0,212,255,0.15)] text-[#00d4ff] border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.35)]'
                    : 'bg-[#141b24] text-slate-400 border-[rgba(255,255,255,0.08)] hover:text-slate-200 hover:border-[rgba(0,212,255,0.4)]'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Prime Power Decomposition Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#141b24] p-4 rounded-xl border border-[rgba(255,255,255,0.08)]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">NUMBER A:</span>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-3xl font-bold font-tech text-[#00d4ff]">{currentTwo.a}</span>
                <span className="text-sm font-mono text-white bg-[#0a0e1a] px-3 py-1 rounded border border-[rgba(255,255,255,0.1)]">
                  {currentTwo.aFactors}
                </span>
              </div>
            </div>

            <div className="bg-[#141b24] p-4 rounded-xl border border-[rgba(255,255,255,0.08)]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">NUMBER B:</span>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-3xl font-bold font-tech text-[#00d4ff]">{currentTwo.b}</span>
                <span className="text-sm font-mono text-white bg-[#0a0e1a] px-3 py-1 rounded border border-[rgba(255,255,255,0.1)]">
                  {currentTwo.bFactors}
                </span>
              </div>
            </div>
          </div>

          {/* HCF & LCM Inspection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[rgba(0,255,136,0.06)] border border-[rgba(0,255,136,0.3)] p-4 rounded-xl shadow-[0_0_20px_rgba(0,255,136,0.08)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-tech text-[#00ff88] uppercase tracking-wider">HCF (SMALLEST COMMON POWERS)</span>
                <span className="text-2xl font-bold font-mono text-[#00ff88]">{currentTwo.hcf}</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 font-mono">
                Shared primes: <span className="text-[#00ff88] font-bold">{currentTwo.commonPrimes}</span>
              </p>
            </div>

            <div className="bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.3)] p-4 rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.08)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-tech text-[#00d4ff] uppercase tracking-wider">LCM (GREATEST OF ALL POWERS)</span>
                <span className="text-2xl font-bold font-mono text-[#00d4ff]">{currentTwo.lcm}</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 font-mono">
                All prime factors: <span className="text-[#00d4ff] font-bold">{currentTwo.allPrimes}</span>
              </p>
            </div>
          </div>

          {/* Verification Box */}
          <div className="p-5 rounded-2xl bg-[#0a0e1a] border border-[rgba(0,255,136,0.3)] shadow-[0_0_25px_rgba(0,255,136,0.1)]">
            <div className="flex items-center gap-2 text-[#00ff88] font-tech font-bold text-sm mb-4">
              <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
              <span>TWO-NUMBER GOLDEN IDENTITY VERIFIED:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center items-center">
              <div className="bg-[#141b24] p-3.5 rounded-xl border border-[rgba(255,255,255,0.08)]">
                <div className="text-[11px] font-mono text-slate-400">HCF × LCM</div>
                <div className="text-base font-bold font-mono text-white mt-1">
                  {currentTwo.hcf} × {currentTwo.lcm} = <span className="text-[#00ff88]">{currentTwo.hcf * currentTwo.lcm}</span>
                </div>
              </div>

              <div className="font-tech font-extrabold text-2xl text-[#00d4ff]">
                =
              </div>

              <div className="bg-[#141b24] p-3.5 rounded-xl border border-[rgba(255,255,255,0.08)]">
                <div className="text-[11px] font-mono text-slate-400">PRODUCT OF NUMBERS (a × b)</div>
                <div className="text-base font-bold font-mono text-white mt-1">
                  {currentTwo.a} × {currentTwo.b} = <span className="text-[#00d4ff]">{currentTwo.product}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-xs text-[#00ff88] font-mono font-bold tracking-wide">
              HCF(a, b) × LCM(a, b) = a × b [Identity Holds Universally for 2 Numbers]
            </div>
          </div>
        </div>
      ) : (
        /* Three Numbers Cautionary Demonstration */
        <div className="mt-6 space-y-6">
          {/* Three sets tabs */}
          <div className="flex flex-wrap gap-2">
            {threeSets.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedThreeSet(idx)}
                className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all border ${
                  selectedThreeSet === idx
                    ? 'bg-[rgba(255,107,107,0.18)] text-[#ff6b6b] border-[#ff6b6b] shadow-[0_0_15px_rgba(255,107,107,0.3)]'
                    : 'bg-[#141b24] text-slate-400 border-[rgba(255,255,255,0.08)] hover:text-slate-200'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.4)]">
            <div className="flex items-center gap-2 text-[#ff6b6b] font-tech font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-[#ff6b6b]" />
              <span>{currentThree.title} ({currentThree.page})</span>
            </div>
            <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">
              The textbook explicitly warns on Page 22 and Page 31 that students must NOT assume HCF × LCM = p × q × r!
            </p>
          </div>

          {/* Factorisations of the 3 numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentThree.nums.map((num, idx) => (
              <div key={idx} className="bg-[#141b24] p-3.5 rounded-xl border border-[rgba(255,255,255,0.08)] text-center">
                <span className="text-xs font-mono text-slate-400">NUMBER {idx + 1}:</span>
                <div className="text-2xl font-bold font-tech text-white my-1">{num}</div>
                <div className="text-xs font-mono text-[#00d4ff]">{currentThree.factors[idx]}</div>
              </div>
            ))}
          </div>

          {/* Calculated values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#141b24] border border-[rgba(255,255,255,0.08)]">
              <span className="text-xs font-mono text-slate-400">HCF({currentThree.nums.join(', ')}):</span>
              <div className="text-sm font-bold text-white mt-1">
                {currentThree.hcfExplanation} = <span className="text-[#00ff88] text-lg font-mono">{currentThree.hcf}</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#141b24] border border-[rgba(255,255,255,0.08)]">
              <span className="text-xs font-mono text-slate-400">LCM({currentThree.nums.join(', ')}):</span>
              <div className="text-sm font-bold text-white mt-1">
                {currentThree.lcmExplanation} = <span className="text-[#00d4ff] text-lg font-mono">{currentThree.lcm}</span>
              </div>
            </div>
          </div>

          {/* The Big Inequality / Equality Demonstration */}
          <div className={`p-5 rounded-2xl border text-center ${currentThree.hcfXlcm !== currentThree.product ? 'bg-[rgba(255,107,107,0.06)] border-[rgba(255,107,107,0.4)] shadow-[0_0_25px_rgba(255,107,107,0.15)]' : 'bg-[rgba(0,255,136,0.06)] border-[rgba(0,255,136,0.4)]'}`}>
            <div className={`text-xs font-tech font-bold uppercase tracking-wider mb-3 ${currentThree.hcfXlcm !== currentThree.product ? 'text-[#ff6b6b]' : 'text-[#00ff88]'}`}>
              FORMULA EVALUATION TEST (PAGE 22):
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base font-mono">
              <div className="bg-[#0a0e1a] px-4 py-2.5 rounded-xl border border-[rgba(255,255,255,0.1)]">
                <span className="text-xs text-slate-400 block font-mono">HCF × LCM</span>
                {currentThree.hcf} × {currentThree.lcm} = <span className={`font-bold ${currentThree.hcfXlcm !== currentThree.product ? 'text-[#ff6b6b]' : 'text-[#00ff88]'}`}>{currentThree.hcfXlcm.toLocaleString()}</span>
              </div>

              <div className={`text-3xl font-extrabold ${currentThree.hcfXlcm !== currentThree.product ? 'text-[#ff6b6b]' : 'text-[#00ff88]'}`}>
                {currentThree.hcfXlcm !== currentThree.product ? '≠' : '='}
              </div>

              <div className="bg-[#0a0e1a] px-4 py-2.5 rounded-xl border border-[rgba(255,255,255,0.1)]">
                <span className="text-xs text-slate-400 block font-mono">PRODUCT ({currentThree.nums.join(' × ')})</span>
                Product = <span className={`font-bold ${currentThree.hcfXlcm !== currentThree.product ? 'text-[#ff6b6b]' : 'text-[#00ff88]'}`}>{currentThree.product.toLocaleString()}</span>
              </div>
            </div>

            <div className={`mt-4 text-xs font-mono font-bold ${currentThree.hcfXlcm !== currentThree.product ? 'text-[#ff6b6b]' : 'text-[#00ff88]'}`}>
              {currentThree.hcfXlcm !== currentThree.product
                ? "HCF(p, q, r) × LCM(p, q, r) ≠ p × q × r! NEVER use the 2-number shortcut for three numbers!"
                : "Note: Equality holds only when numbers are mutually pairwise coprime (HCF=1)!"}
            </div>
          </div>

          {/* True 3-Number Formula from Page 31 */}
          <div className="p-5 rounded-2xl bg-[#0a0e1a] border border-[rgba(255,189,46,0.3)]">
            <div className="flex items-center gap-2 text-[#ffbd2e] font-tech font-bold text-xs uppercase tracking-wider mb-2">
              <ArrowRight className="w-4 h-4 text-[#ffbd2e]" />
              <span>TRUE THREE-NUMBER IDENTITY (TEXTBOOK SUMMARY PAGE 31):</span>
            </div>
            <div className="bg-[#050810] p-3.5 rounded-xl border border-[rgba(255,189,46,0.25)] font-mono text-xs text-[#00ff88] overflow-x-auto shadow-inner">
              LCM(p,q,r) = [ p · q · r · HCF(p,q,r) ] / [ HCF(p,q) · HCF(q,r) · HCF(p,r) ]
            </div>
            <div className="text-xs text-slate-300 mt-3 space-y-1 font-mono">
              <p><span className="text-slate-400">Pairwise HCFs:</span> {currentThree.pairHcfs}</p>
              <p><span className="text-slate-400">Calculation:</span> {currentThree.trueFormulaCheck}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
