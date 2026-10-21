// client/src/pages/StoryModePage.tsx
import React, { useState } from 'react';
import { Sparkles, ChevronRight, ChevronLeft, Volume2, HelpCircle } from 'lucide-react';

interface StoryChapter {
  id: number;
  title: string;
  sourcePages: string;
  theme: string;
  storyNarrative: string;
  classroomHook: string;
  discussionQuestion: string;
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 1,
    title: "1. The Call of Positive Integers",
    sourcePages: "Pages 14–15",
    theme: "Why Positive Integers Hold the Secret",
    storyNarrative: "Imagine mathematics as an investigation of building blocks. In Class IX, you explored the number line and noticed mysterious gaps that could not be filled by fractions—numbers like √2, √3, and √5. You called them irrational numbers.\n\nNow, in Class X, we pause and look deeper at the most familiar numbers of all: the positive integers (1, 2, 3, 4...). Two monumental ideas govern these integers:\n1. How they divide: Euclid's division algorithm, which tells us that whenever one integer is divided by another, the remainder is strictly smaller than the divisor.\n2. How they multiply: The Fundamental Theorem of Arithmetic, which reveals that every composite integer is made from prime numbers in one and only one unique way.",
    classroomHook: "Ask the class: 'Can every number in the universe be written as a fraction? If not, what holds numbers together?'",
    discussionQuestion: "What is the difference between how integers behave under division vs multiplication?"
  },
  {
    id: 2,
    title: "2. The Atomic Secret of 32760",
    sourcePages: "Pages 16–20",
    theme: "Factor Trees & Prime Factor Uniqueness",
    storyNarrative: "You encounter a giant composite integer: 32760. How was it built? You begin breaking it down using factor trees: 2 × 16380, then 2 × 8190, then 2 × 4095. Then 3 × 1365, then 3 × 455, then 5 × 91, and finally 7 × 13.\n\nWhen all branches finish, you discover its prime DNA: 2³ × 3² × 5 × 7 × 13. Now you wonder: What if someone started dividing by 5 or 7 first? Would they get different prime factors? NO! The primes are identical. Only their order can change. Carl Friedrich Gauss called this the Fundamental Theorem of Arithmetic.",
    classroomHook: "Draw a huge 32760 on the board and challenge students to find a prime factor other than 2, 3, 5, 7, 13.",
    discussionQuestion: "Why is factorisation called 'unique apart from order'?"
  },
  {
    id: 3,
    title: "3. The Missing Prime Mystery: Can 4ⁿ End in Zero?",
    sourcePages: "Pages 20–21",
    theme: "Application of Uniqueness",
    storyNarrative: "Imagine a secret vault that opens only for numbers ending in the digit zero. What is the key to ending in zero? Divisibility by 10 = 2 × 5! That means any number ending in zero must carry both prime 2 and prime 5.\n\nNow look at 4ⁿ. 4ⁿ = (2²)ⁿ = 2²ⁿ. Its only prime factor is 2! Can prime 5 ever sneak into 4ⁿ? The Fundamental Theorem of Arithmetic shouts: 'NO! Prime factorisation is UNIQUE!' Because 5 is absent, 4ⁿ can never end in zero for any natural number n.",
    classroomHook: "Write 4¹, 4², 4³, 4⁴... on the board. Ask: 'Will this ever hit a zero if we multiply up to a million?'",
    discussionQuestion: "Why is mathematical proof stronger than testing 10 different values of n?"
  },
  {
    id: 4,
    title: "4. The Banker and the Chef: HCF & LCM",
    sourcePages: "Pages 21–23, 30–31",
    theme: "Smallest Powers vs Greatest Powers",
    storyNarrative: "Two numbers, 6 and 20, share prime ingredients. 6 = 2¹ × 3¹ and 20 = 2² × 5¹. \n\nThe HCF is like a strict banker: it only takes the common prime (2) with the SMALLEST power available: 2¹ = 2.\nThe LCM is like a generous banquet chef: it takes EVERY prime involved with its GREATEST power: 2² × 3¹ × 5¹ = 60.\n\nMultiply them: 2 × 60 = 120 = 6 × 20! HCF(a, b) × LCM(a, b) = a × b! \n\nBUT BEWARE! When three numbers arrive (6, 72, 120), their HCF × LCM is 2,160, but their product is 51,840! The two-number rule breaks down completely for three numbers!",
    classroomHook: "Show two grocery bags and compare common vs total items to illustrate HCF vs LCM.",
    discussionQuestion: "Why does HCF × LCM = product fail for three numbers?"
  },
  {
    id: 5,
    title: "5. The Race on the Sports Field (Sonia & Ravi)",
    sourcePages: "Page 24",
    theme: "Cyclical Motion & LCM in Action",
    storyNarrative: "Sonia and Ravi start driving around a circular sports track from the exact same point in the same direction. Sonia takes 18 minutes for one round; Ravi takes 12 minutes.\n\nAt minute 12, Ravi is at the start, but Sonia is still driving. At minute 18, Sonia is at the start, but Ravi already drove past. When will both reach the starting point together?\n\nAt minute 36! Sonia finishes exactly 2 rounds (36/18=2) and Ravi finishes exactly 3 rounds (36/12=3). Both meet at the starting point simultaneously because 36 is the Lowest Common Multiple: LCM(18, 12) = 36 minutes!",
    classroomHook: "Pick two students in the classroom and have them walk at different speeds around desks until meeting.",
    discussionQuestion: "Why can't the answer be HCF(18, 12) = 6 minutes?"
  },
  {
    id: 6,
    title: "6. The Master Key: Theorem 1.3",
    sourcePages: "Pages 24–25",
    theme: "If Prime p Divides a², Then p Divides a",
    storyNarrative: "To prove numbers like √2 are irrational, mathematicians needed a key theorem: If prime p divides a², then p must divide a.\n\nWhy? Because a = p₁p₂...pₙ. Squaring a gives a² = p₁²p₂²...pₙ². Squaring a number doubles the powers of its primes, but introduces NO NEW PRIMES! By the Fundamental Theorem of Arithmetic, the only primes in a² are the original primes of a. So if p divides a², it must already be inside a!",
    classroomHook: "Ask: 'If 2 divides 6² (36), does 2 divide 6? What about 3 and 9²?'",
    discussionQuestion: "Why must p be a PRIME number? What happens if p is composite (like 4)?"
  },
  {
    id: 7,
    title: "7. The Impossible Fraction: √2 & √3 are Irrational",
    sourcePages: "Pages 25–27",
    theme: "Proof by Contradiction",
    storyNarrative: "Suppose √2 IS a fraction: √2 = a/b where a and b are coprime integers (no common factors). Square it: 2b² = a². That means 2 divides a², so 2 divides a! Let a = 2c. Substitute it back: 2b² = 4c² ⟹ b² = 2c². That means 2 divides b² too, so 2 divides b!\n\nWait! 2 divides a, AND 2 divides b? That means 2 is a common factor! But we started by saying a and b are COPRIME! An impossible contradiction! The assumption is destroyed. √2 is IRRATIONAL!",
    classroomHook: "Introduce Proof by Contradiction as detective work: assuming a suspect was present until finding an alibi.",
    discussionQuestion: "Why is the coprime condition essential for the contradiction to work?"
  },
  {
    id: 8,
    title: "8. The Infection of Irrationals: 5 − √3 & 3√2",
    sourcePages: "Pages 27–28",
    theme: "Radical Isolation without Squaring",
    storyNarrative: "Once √3 and √2 are known to be irrational, proving that 5 − √3 or 3√2 are irrational requires NO SQUARING! Simply isolate the radical:\n5 − √3 = a/b ⟹ √3 = (5b − a)/b.\n\nSince a and b are integers, the right side is rational. But that claims √3 is rational—an immediate contradiction! Hence 5 − √3 is irrational in just four lines of algebra.",
    classroomHook: "Teach the rule: 'Single radical = Square; Radical in an expression = Isolate!'",
    discussionQuestion: "Why don't we need to square both sides for 5 − √3?"
  }
];

export const StoryModePage: React.FC = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const chapter = STORY_CHAPTERS[currentChapterIndex];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[rgba(255,189,46,0.12)] border border-[rgba(255,189,46,0.3)] text-[#ffbd2e]">
              <Sparkles className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-tech tracking-wide text-white">
              STORY MODE: <span className="text-[#ffbd2e]">MATHEMATICAL ODYSSEY</span>
            </h1>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Intuitive narrative journey through AP Class 10 Real Numbers (Pages 14–31)
          </p>
        </div>

        {/* Chapter selector */}
        <div className="text-xs font-mono text-[#00ff88] bg-[#0a0e1a] px-3.5 py-1.5 rounded-xl border border-[rgba(0,255,136,0.3)] font-bold shadow-[0_0_15px_rgba(0,255,136,0.15)]">
          CHAPTER {chapter.id} / {STORY_CHAPTERS.length}
        </div>
      </div>

      {/* Chapter Navigation Timeline */}
      <div className="flex overflow-x-auto gap-2 pb-2">
        {STORY_CHAPTERS.map((ch, idx) => (
          <button
            key={ch.id}
            onClick={() => setCurrentChapterIndex(idx)}
            className={`px-3.5 py-2 text-xs font-mono rounded-xl font-semibold whitespace-nowrap transition-all border flex items-center gap-2 ${
              currentChapterIndex === idx
                ? 'bg-[rgba(255,189,46,0.18)] text-[#ffbd2e] border-[#ffbd2e] shadow-[0_0_15px_rgba(255,189,46,0.35)]'
                : 'bg-[#141b24] text-slate-400 border-[rgba(255,255,255,0.08)] hover:text-white hover:border-[rgba(255,255,255,0.2)]'
            }`}
          >
            <span className="text-[10px] opacity-75">{ch.id}.</span>
            {ch.title.split('.')[1].trim().split(':')[0]}
          </button>
        ))}
      </div>

      {/* Main Story Narrative Card */}
      <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-[rgba(0,255,136,0.25)] bg-[#0f1419] shadow-[0_8px_32px_rgba(0,0,0,0.6)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] gap-3">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
              <span className="text-xs font-mono font-bold text-[#ffbd2e] uppercase tracking-wider">
                {chapter.theme}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-tech text-white">
              {chapter.title}
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-300 bg-[#0a0e1a] px-3.5 py-1.5 rounded-lg border border-[rgba(255,255,255,0.1)] self-start sm:self-auto">
            {chapter.sourcePages}
          </span>
        </div>

        {/* Story Text formatted with literary & mathematical elegance */}
        <div className="p-6 rounded-xl bg-[#050810] border border-[rgba(255,255,255,0.08)] text-sm md:text-base leading-relaxed text-slate-200 font-sans whitespace-pre-line shadow-inner">
          {chapter.storyNarrative}
        </div>

        {/* Pedagogical Hooks for the Classroom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
          <div className="p-4 rounded-xl bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.3)] text-xs">
            <div className="flex items-center gap-2 text-[#00d4ff] font-tech font-bold mb-2">
              <Volume2 className="w-4 h-4" />
              <span>TEACHER HOOK FOR CLASSROOM:</span>
            </div>
            <p className="text-slate-300 leading-relaxed font-sans">{chapter.classroomHook}</p>
          </div>

          <div className="p-4 rounded-xl bg-[rgba(0,255,136,0.06)] border border-[rgba(0,255,136,0.3)] text-xs">
            <div className="flex items-center gap-2 text-[#00ff88] font-tech font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>SOCRATIC DISCUSSION PROMPT:</span>
            </div>
            <p className="text-slate-300 leading-relaxed font-sans">{chapter.discussionQuestion}</p>
          </div>
        </div>
      </div>

      {/* Bottom Paging Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.08)]">
        <button
          disabled={currentChapterIndex === 0}
          onClick={() => setCurrentChapterIndex(prev => Math.max(0, prev - 1))}
          className="cyber-btn-secondary px-4 py-2 text-xs font-mono font-semibold flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous Scene
        </button>

        <button
          disabled={currentChapterIndex === STORY_CHAPTERS.length - 1}
          onClick={() => setCurrentChapterIndex(prev => Math.min(STORY_CHAPTERS.length - 1, prev + 1))}
          className="cyber-btn-primary px-4 py-2 text-xs font-mono font-bold flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next Scene
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
