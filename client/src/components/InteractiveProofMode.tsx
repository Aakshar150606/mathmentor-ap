// client/src/components/InteractiveProofMode.tsx
import React, { useState } from 'react';
import { ShieldCheck, ChevronRight, RotateCcw, AlertCircle, CheckCircle } from 'lucide-react';

interface ProofDefinition {
  title: string;
  sourcePage: string;
  theorem: string;
  steps: {
    stage: string;
    math: string;
    explanation: string;
    teacherCallout: string;
    isContradiction?: boolean;
  }[];
}

const PROOFS: Record<string, ProofDefinition> = {
  'sqrt2': {
    title: "Theorem 1.4: √2 is Irrational",
    sourcePage: "Pages 25–26",
    theorem: "Prove that √2 is irrational.",
    steps: [
      {
        stage: "Stage 1: The Coprime Assumption",
        math: "Assume to the contrary that √2 is rational.\n⟹ √2 = a/b, where a and b are coprime integers, and b ≠ 0.",
        explanation: "Assume rational in lowest terms. 'Coprime' means HCF(a, b) = 1 (no shared factors other than 1).",
        teacherCallout: "Critical exam tip: If students forget to state 'a and b are coprime', they will lose marks!"
      },
      {
        stage: "Stage 2: Squaring to Clear the Radical",
        math: "b√2 = a\nSquaring both sides:\n2b² = a²  -------- [Equation 1]",
        explanation: "Cross-multiply b and square both sides to convert radical equation into integer divisibility form.",
        teacherCallout: "Explain: 2b² is clearly an even number, which means a² must also be even!"
      },
      {
        stage: "Stage 3: First Divisibility (Theorem 1.3)",
        math: "2 divides a²\nBy Theorem 1.3: 2 divides a.\n⟹ We can write a = 2c  (for some integer c)",
        explanation: "Because 2 is prime and divides a², Theorem 1.3 guarantees 2 divides a.",
        teacherCallout: "Remind students: This step relies entirely on Theorem 1.3 (p | a² ⟹ p | a)."
      },
      {
        stage: "Stage 4: Substitution Back into Equation 1",
        math: "Substitute a = 2c into Equation 1:\n2b² = (2c)² = 4c²\n⟹ b² = 2c²",
        explanation: "Square 2c to get 4c², then divide both sides by 2 to isolate b².",
        teacherCallout: "Watch for student algebra error: (2c)² is 4c², NOT 2c²!"
      },
      {
        stage: "Stage 5: Second Divisibility",
        math: "2 divides b²\nBy Theorem 1.3: 2 divides b.",
        explanation: "Now the exact same logic applies to b: 2 divides b² implies 2 divides b.",
        teacherCallout: "Look at the trap snapping shut: 2 divides a, and 2 divides b!"
      },
      {
        stage: "Stage 6: The Fatal Contradiction",
        math: "From Stages 3 and 5, 'a' and 'b' share at least 2 as a common factor.\nThis CONTRADICTS that a and b are coprime!",
        explanation: "They cannot be coprime (HCF=1) and simultaneously share factor 2. A logical impossibility!",
        teacherCallout: "This is Reductio Ad Absurdum: A false premise collapses under deductive truth.",
        isContradiction: true
      },
      {
        stage: "Stage 7: Conclusion",
        math: "This contradiction arose because of our incorrect assumption that √2 is rational.\nHence, √2 is IRRATIONAL. (Q.E.D.)",
        explanation: "The assumption is destroyed. The only mathematical reality remaining is that √2 is irrational.",
        teacherCallout: "Have students memorize the closing sentence verbatim for their board exam."
      }
    ]
  },

  'sqrt3': {
    title: "Example 5: √3 is Irrational",
    sourcePage: "Page 26",
    theorem: "Prove that √3 is irrational.",
    steps: [
      {
        stage: "Stage 1: Coprime Assumption",
        math: "Assume √3 is rational: √3 = a/b where a, b are coprime integers (b ≠ 0).",
        explanation: "Assume rational in simplest form.",
        teacherCallout: "Identical template to √2; replace prime 2 with prime 3."
      },
      {
        stage: "Stage 2: Squaring",
        math: "3b² = a²  -------- [Equation 1]",
        explanation: "Square both sides.",
        teacherCallout: "3 divides a²."
      },
      {
        stage: "Stage 3: First Divisibility",
        math: "3 divides a² ⟹ by Theorem 1.3, 3 divides a.\nLet a = 3c for some integer c.",
        explanation: "Since 3 is prime, 3 divides a.",
        teacherCallout: "Write a = 3c."
      },
      {
        stage: "Stage 4: Substitution",
        math: "3b² = (3c)² = 9c² ⟹ b² = 3c²",
        explanation: "Substitute 3c and simplify: 9c² / 3 = 3c².",
        teacherCallout: "Caution: (3c)² = 9c², not 3c²."
      },
      {
        stage: "Stage 5: Second Divisibility",
        math: "3 divides b² ⟹ 3 divides b.",
        explanation: "Both a and b are multiples of 3.",
        teacherCallout: "Both share prime factor 3."
      },
      {
        stage: "Stage 6: Contradiction & Verdict",
        math: "Common factor 3 contradicts coprimality!\nHence, √3 is IRRATIONAL.",
        explanation: "Contradiction reached.",
        teacherCallout: "Proof completed.",
        isContradiction: true
      }
    ]
  },

  'divisibility': {
    title: "Theorem 1.3: If p | a² then p | a",
    sourcePage: "Pages 24–25",
    theorem: "Let p be a prime number. If p divides a², then p divides a (a ∈ ℤ⁺).",
    steps: [
      {
        stage: "Step 1: Factorisation of a",
        math: "Let prime factorisation of a be:\na = p₁ · p₂ · ... · pₙ\n(where p₁, p₂...pₙ are primes, not necessarily distinct)",
        explanation: "Every positive integer can be written as product of primes.",
        teacherCallout: "Emphasize: 'not necessarily distinct' (e.g. 12 = 2 × 2 × 3)."
      },
      {
        stage: "Step 2: Constructing a²",
        math: "a² = (p₁ · p₂ · ... · pₙ)² = p₁² · p₂² · ... · pₙ²",
        explanation: "Squaring a number squares each prime power.",
        teacherCallout: "Notice: Squaring adds NO new primes!"
      },
      {
        stage: "Step 3: Divisibility of a²",
        math: "Given: Prime p divides a².",
        explanation: "p must be one of the prime factors of a².",
        teacherCallout: "p is a prime divisor of a²."
      },
      {
        stage: "Step 4: FTA Uniqueness Invocation",
        math: "By the Fundamental Theorem of Arithmetic:\nThe ONLY prime factors of a² are p₁, p₂, ... pₙ.\nSo p must be one of p₁, p₂, ... pₙ.",
        explanation: "Fundamental Theorem of Arithmetic guarantees that no other prime factors exist.",
        teacherCallout: "The uniqueness of FTA is the logical core of this theorem!"
      },
      {
        stage: "Step 5: Deduction & Conclusion",
        math: "Since a = p₁ · p₂ · ... · pₙ and p is one of these primes:\np divides a. (Hence proved)",
        explanation: "p was in the original factorisation of a all along.",
        teacherCallout: "The theorem is now fully demonstrated."
      }
    ]
  },

  'expr5minus3': {
    title: "Example 6: 5 − √3 is Irrational",
    sourcePage: "Page 27",
    theorem: "Show that 5 − √3 is irrational.",
    steps: [
      {
        stage: "Step 1: Assumption",
        math: "Assume 5 − √3 is rational: 5 − √3 = a/b (coprime integers, b ≠ 0).",
        explanation: "Set expression equal to rational fraction.",
        teacherCallout: "DO NOT SQUARE! Only isolate the radical."
      },
      {
        stage: "Step 2: Isolate the Radical",
        math: "5 − a/b = √3\n⟹ (5b − a) / b = √3",
        explanation: "Rearrange to keep √3 alone on one side.",
        teacherCallout: "Pure algebraic rearrangement."
      },
      {
        stage: "Step 3: Contradiction Argument",
        math: "Since 5, a, b are integers, (5b − a)/b is RATIONAL.\n⟹ √3 is rational.\nThis contradicts the established fact that √3 is IRRATIONAL!",
        explanation: "A rational fraction cannot equal an irrational number.",
        teacherCallout: "No need to reprove √3 from scratch.",
        isContradiction: true
      },
      {
        stage: "Step 4: Conclusion",
        math: "Therefore, 5 − √3 is IRRATIONAL. (Hence proved)",
        explanation: "Assumption false.",
        teacherCallout: "Fast, 4-line exam answer."
      }
    ]
  },

  'expr3sqrt2': {
    title: "Example 7: 3√2 is Irrational",
    sourcePage: "Page 28",
    theorem: "Show that 3√2 is irrational.",
    steps: [
      {
        stage: "Step 1: Assumption",
        math: "Assume to the contrary that 3√2 is rational.\n⟹ 3√2 = a/b, where a and b are coprime integers, and b ≠ 0.",
        explanation: "Assume product of rational and irrational is rational in lowest terms.",
        teacherCallout: "Remind students: a and b must be coprime integers."
      },
      {
        stage: "Step 2: Isolate the Known Radical",
        math: "Divide both sides by 3:\n√2 = a / (3b)",
        explanation: "Rearranging gives √2 alone as a fraction of integers.",
        teacherCallout: "Stress: Never square a simple product! Just divide by the rational factor."
      },
      {
        stage: "Step 3: Contradiction Deductions",
        math: "Since 3, a, and b are integers, a / (3b) is RATIONAL.\n⟹ √2 is rational.\nThis CONTRADICTS the established fact (Theorem 1.4) that √2 is IRRATIONAL!",
        explanation: "A known irrational number cannot equal an integer fraction.",
        teacherCallout: "Point out the contradiction: Left side is irrational, right side is rational!",
        isContradiction: true
      },
      {
        stage: "Step 4: Conclusion",
        math: "This contradiction arose because of our incorrect assumption.\nHence, 3√2 is IRRATIONAL. (Hence proved)",
        explanation: "The assumption is falsified, completing the proof.",
        teacherCallout: "Emphasize writing the concluding sentence clearly."
      }
    ]
  },

  'sqrt5': {
    title: "Ex 1.2 Q1: √5 is Irrational",
    sourcePage: "Page 28",
    theorem: "Prove that √5 is irrational.",
    steps: [
      {
        stage: "Stage 1: Coprime Assumption",
        math: "Assume to the contrary that √5 is rational.\n⟹ √5 = a/b, where a and b are coprime integers, and b ≠ 0.",
        explanation: "Start with standard Reductio Ad Absurdum in lowest terms (HCF(a, b) = 1).",
        teacherCallout: "Identical template to √2 and √3; prime 5 takes center stage."
      },
      {
        stage: "Stage 2: Squaring to Clear Radical",
        math: "b√5 = a\nSquaring both sides:\n5b² = a²  -------- [Equation 1]",
        explanation: "Cross-multiply and square both sides.",
        teacherCallout: "5b² is divisible by 5, which means a² must be divisible by 5."
      },
      {
        stage: "Stage 3: First Divisibility (Theorem 1.3)",
        math: "5 divides a²\nBy Theorem 1.3: 5 divides a.\n⟹ We can write a = 5c  (for some integer c)",
        explanation: "Since 5 is prime and divides a², Theorem 1.3 guarantees 5 divides a.",
        teacherCallout: "Always cite Theorem 1.3 explicitly: p | a² ⟹ p | a."
      },
      {
        stage: "Stage 4: Substitution Back into Equation 1",
        math: "Substitute a = 5c into Equation 1:\n5b² = (5c)² = 25c²\n⟹ b² = 5c²",
        explanation: "Square 5c to get 25c², then divide both sides by 5 to isolate b².",
        teacherCallout: "Crucial exam trap: (5c)² is 25c², NOT 5c²!"
      },
      {
        stage: "Stage 5: Second Divisibility",
        math: "5 divides b²\nBy Theorem 1.3: 5 divides b.",
        explanation: "The identical divisibility argument now applies to b.",
        teacherCallout: "Now both a and b have 5 as a common prime divisor."
      },
      {
        stage: "Stage 6: The Contradiction & Conclusion",
        math: "Both a and b share at least 5 as a common factor.\nThis CONTRADICTS that a and b are coprime!\nTherefore, √5 is IRRATIONAL. (Hence proved)",
        explanation: "The assumption collapses. √5 cannot be rational.",
        teacherCallout: "Students have now mastered all three single prime root proofs (√2, √3, √5)!",
        isContradiction: true
      }
    ]
  },

  'expr3plus2sqrt5': {
    title: "Ex 1.2 Q2: 3 + 2√5 is Irrational",
    sourcePage: "Page 28",
    theorem: "Prove that 3 + 2√5 is irrational.",
    steps: [
      {
        stage: "Step 1: Assumption",
        math: "Assume to the contrary that 3 + 2√5 is rational.\n⟹ 3 + 2√5 = a/b, where a and b are coprime integers, and b ≠ 0.",
        explanation: "Assume compound linear combination is rational.",
        teacherCallout: "Again: do NOT square both sides! Squaring creates cross-terms."
      },
      {
        stage: "Step 2: Isolate the Radical Term",
        math: "2√5 = a/b − 3\n⟹ 2√5 = (a − 3b) / b",
        explanation: "Subtract 3 from both sides and take common denominator.",
        teacherCallout: "Step-by-step algebra on the chalkboard."
      },
      {
        stage: "Step 3: Isolate √5 Fully",
        math: "Divide both sides by 2:\n√5 = (a − 3b) / (2b)",
        explanation: "Divide by 2 to leave √5 completely isolated.",
        teacherCallout: "Notice how simple and clean this step is."
      },
      {
        stage: "Step 4: Contradiction Argument",
        math: "Since a, b, 3, and 2 are integers, (a − 3b) / (2b) is RATIONAL.\n⟹ √5 is rational.\nThis CONTRADICTS the fact that √5 is IRRATIONAL!",
        explanation: "Rational integers on right side cannot equal irrational √5 on left side.",
        teacherCallout: "Point out the contradiction: Left side is irrational, right side is rational!",
        isContradiction: true
      },
      {
        stage: "Step 5: Conclusion",
        math: "This contradiction arose from our incorrect assumption.\nHence, 3 + 2√5 is IRRATIONAL. (Hence proved)",
        explanation: "Proof complete in 5 concise steps.",
        teacherCallout: "This is a frequent 3-mark or 4-mark board question."
      }
    ]
  },

  'expr1overSqrt2': {
    title: "Ex 1.2 Q3(i): 1/√2 is Irrational",
    sourcePage: "Page 29",
    theorem: "Prove that 1/√2 is irrational.",
    steps: [
      {
        stage: "Step 1: Assumption",
        math: "Assume to the contrary that 1/√2 is rational.\n⟹ 1/√2 = a/b, where a and b are coprime integers, and b ≠ 0, a ≠ 0.",
        explanation: "Assume reciprocal is rational.",
        teacherCallout: "Note that since 1/√2 ≠ 0, a is also not zero."
      },
      {
        stage: "Step 2: Invert Both Sides",
        math: "Taking reciprocal on both sides:\n√2 = b / a",
        explanation: "Inverting isolates √2 directly in one step.",
        teacherCallout: "Teaching tip: Show this elegant 1-line inversion method!"
      },
      {
        stage: "Step 3: Contradiction & Conclusion",
        math: "Since a and b are integers, b/a is RATIONAL.\n⟹ √2 is rational.\nThis CONTRADICTS that √2 is IRRATIONAL!\nHence, 1/√2 is IRRATIONAL. (Hence proved)",
        explanation: "Rational fraction contradicts the irrationality of √2.",
        teacherCallout: "Completed in 3 lines without needing rationalization.",
        isContradiction: true
      }
    ]
  },

  'expr7sqrt5': {
    title: "Ex 1.2 Q3(ii): 7√5 is Irrational",
    sourcePage: "Page 29",
    theorem: "Prove that 7√5 is irrational.",
    steps: [
      {
        stage: "Step 1: Assumption",
        math: "Assume 7√5 is rational: 7√5 = a/b (coprime integers, b ≠ 0).",
        explanation: "Assume product is rational in lowest terms.",
        teacherCallout: "Direct parallel to Example 7 (3√2)."
      },
      {
        stage: "Step 2: Divide by 7",
        math: "√5 = a / (7b)",
        explanation: "Isolate √5 by dividing by integer 7.",
        teacherCallout: "Isolate the irrational radical."
      },
      {
        stage: "Step 3: Contradiction & Conclusion",
        math: "Since a, 7, and b are integers, a / (7b) is RATIONAL.\n⟹ √5 is rational.\nContradicts that √5 is irrational!\nHence, 7√5 is IRRATIONAL. (Hence proved)",
        explanation: "Contradiction established.",
        teacherCallout: "Clean, elegant exam presentation.",
        isContradiction: true
      }
    ]
  },

  'expr6plusSqrt2': {
    title: "Ex 1.2 Q3(iii): 6 + √2 is Irrational",
    sourcePage: "Page 29",
    theorem: "Prove that 6 + √2 is irrational.",
    steps: [
      {
        stage: "Step 1: Assumption",
        math: "Assume 6 + √2 is rational: 6 + √2 = a/b (coprime integers, b ≠ 0).",
        explanation: "Assume sum of integer and irrational is rational.",
        teacherCallout: "Final exercise problem reinforcing the isolation method."
      },
      {
        stage: "Step 2: Subtract 6",
        math: "√2 = a/b − 6 = (a − 6b) / b",
        explanation: "Subtract 6 and combine into single rational fraction.",
        teacherCallout: "Watch for student algebra: (a - 6b)/b."
      },
      {
        stage: "Step 3: Contradiction & Conclusion",
        math: "Since a, 6, and b are integers, (a − 6b)/b is RATIONAL.\n⟹ √2 is rational.\nContradicts that √2 is irrational!\nHence, 6 + √2 is IRRATIONAL. (Hence proved)",
        explanation: "The assumption collapses completely.",
        teacherCallout: "All exercise proof forms now thoroughly practiced!",
        isContradiction: true
      }
    ]
  }
};

export const InteractiveProofMode: React.FC = () => {
  const [selectedProofKey, setSelectedProofKey] = useState<string>('sqrt2');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const proof = PROOFS[selectedProofKey];
  const steps = proof.steps;
  const isFinished = currentStepIndex >= steps.length;

  const handleNext = () => {
    if (currentStepIndex < steps.length) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  const handleRevealAll = () => {
    setCurrentStepIndex(steps.length);
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
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold font-tech tracking-wide text-white flex items-center gap-2">
                PROOF MODE: <span className="text-[#00ff88]">CONTRADICTION LAB</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Reductio Ad Absurdum Proof Trainer • AP Textbook {proof.sourcePage}
              </p>
            </div>
          </div>
        </div>

        {/* Proof Selectors */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(PROOFS).map(([key, item]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedProofKey(key);
                setCurrentStepIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg font-mono transition-all border ${
                selectedProofKey === key
                  ? 'bg-[rgba(0,255,136,0.15)] text-[#00ff88] border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.35)]'
                  : 'bg-[#141b24] text-slate-400 hover:text-slate-200 border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,212,255,0.4)]'
              }`}
            >
              {item.title.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Target Theorem Statement */}
      <div className="my-5 p-4 rounded-xl bg-[#0a0e1a] border border-[rgba(0,212,255,0.3)] shadow-[0_0_20px_rgba(0,212,255,0.08)]">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
          <span className="text-[11px] uppercase tracking-wider font-bold font-mono text-[#00d4ff]">TARGET THEOREM STATEMENT:</span>
        </div>
        <div className="text-sm font-semibold font-mono text-white pl-4 border-l-2 border-[#00d4ff]">
          {proof.theorem}
        </div>
      </div>

      {/* Proof Steps Stage */}
      <div className="my-6 space-y-4">
        {steps.slice(0, currentStepIndex).map((step, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl border transition-all animate-fadeIn ${
              step.isContradiction
                ? 'bg-[rgba(255,107,107,0.08)] border-[rgba(255,107,107,0.5)] shadow-[0_0_25px_rgba(255,107,107,0.2)]'
                : 'bg-[#141b24] border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,255,136,0.3)]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-bold font-tech uppercase tracking-wider ${
                step.isContradiction ? 'text-[#ff6b6b] flex items-center gap-1.5' : 'text-[#00ff88]'
              }`}>
                {step.isContradiction && <AlertCircle className="w-4 h-4 animate-bounce" />}
                {step.stage}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0a0e1a] text-slate-300 border border-[rgba(255,255,255,0.1)]">
                STEP {idx + 1} / {steps.length}
              </span>
            </div>

            {/* Math Content */}
            <div className="my-3 p-4 rounded-xl bg-[#050810] border border-[rgba(0,255,136,0.2)] font-mono text-sm text-[#00ff88] font-medium whitespace-pre-line shadow-inner">
              {step.math}
            </div>

            {/* Explanation & Teacher Tip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 pt-3 border-t border-[rgba(255,255,255,0.06)] text-xs">
              <p className="text-slate-300 leading-relaxed font-sans">{step.explanation}</p>
              <div className="flex items-start gap-2 text-amber-200 bg-[rgba(245,158,11,0.08)] p-3 rounded-lg border border-[rgba(245,158,11,0.25)]">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#ffbd2e]" />
                <span className="text-[11px] leading-relaxed font-mono">{step.teacherCallout}</span>
              </div>
            </div>
          </div>
        ))}

        {currentStepIndex === 0 && (
          <div className="text-center py-12 rounded-xl text-slate-400 text-sm font-mono bg-[#0a0e1a] border border-dashed border-[rgba(255,255,255,0.1)]">
            Click &quot;Reveal Next Proof Step&quot; below to guide through each deductive logical leap.
          </div>
        )}
      </div>

      {/* Control Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
        <div className="text-xs font-mono text-slate-400">
          STAGE PROGRESS: <span className="text-[#00ff88] font-bold">{currentStepIndex}</span> / <span className="font-bold text-white">{steps.length}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="cyber-btn-secondary px-3.5 py-2 text-xs font-mono font-semibold flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>

          {!isFinished ? (
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
                Next Deduction
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2 text-[#00ff88] text-xs font-mono font-bold bg-[rgba(0,255,136,0.12)] px-4 py-2 rounded-xl border border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              <CheckCircle className="w-4 h-4 text-[#00ff88]" />
              PROOF RIGOROUSLY CONCLUDED (Q.E.D.)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
