// client/src/pages/ExercisesPage.tsx
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { ExerciseItem } from '../types';
import { Dumbbell, Eye, EyeOff, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

export const ExercisesPage: React.FC = () => {
  const [exercises, setExercises] = useState<ExerciseItem[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<string>('Exercise 1.1');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [taughtMap, setTaughtMap] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      try {
        const res = await api.getExercises(selectedExercise);
        setExercises(res.exercises || []);
      } catch (err) {
        console.error('Error fetching exercises:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [selectedExercise]);

  const toggleSolution = (id: string) => {
    setRevealedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTaught = (id: string) => {
    setTaughtMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[rgba(0,255,136,0.12)] border border-[rgba(0,255,136,0.3)] text-[#00ff88]">
              <Dumbbell className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-tech tracking-wide text-white">
              EXERCISE MODE: <span className="text-[#00ff88]">TEXTBOOK REPOSITORY</span>
            </h1>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Complete textbook exercises from Pages 23–24 &amp; 28–29 with teacher approaches &amp; pitfall alerts
          </p>
        </div>

        {/* Exercise Tab Filter */}
        <div className="flex bg-[#0a0e1a] p-1.5 rounded-xl border border-[rgba(255,255,255,0.1)] text-xs shadow-inner gap-1">
          <button
            onClick={() => setSelectedExercise('Exercise 1.1')}
            className={`px-4 py-2 rounded-lg font-mono font-bold transition-all border ${
              selectedExercise === 'Exercise 1.1'
                ? 'bg-[rgba(0,255,136,0.15)] text-[#00ff88] border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            Exercise 1.1 (Pages 23–24)
          </button>
          <button
            onClick={() => setSelectedExercise('Exercise 1.2')}
            className={`px-4 py-2 rounded-lg font-mono font-bold transition-all border ${
              selectedExercise === 'Exercise 1.2'
                ? 'bg-[rgba(0,255,136,0.15)] text-[#00ff88] border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            Exercise 1.2 (Pages 28–29)
          </button>
        </div>
      </div>

      {/* Exercises List */}
      <div className="space-y-4">
        {loading && (
          <div className="text-center py-12 text-slate-400 font-mono text-sm">
            Loading exercises from AP textbook database...
          </div>
        )}

        {!loading && exercises.map((item) => {
          const isRevealed = revealedSolutions[item._id];
          const isTaught = taughtMap[item._id];

          return (
            <div
              key={item._id}
              className={`cyber-card p-5 rounded-2xl border transition-all ${
                isTaught
                  ? 'border-[rgba(0,255,136,0.5)] bg-[#0f1419] shadow-[0_0_20px_rgba(0,255,136,0.15)]'
                  : 'border-[rgba(255,255,255,0.08)] bg-[#0f1419] hover:border-[rgba(0,212,255,0.3)]'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[rgba(0,255,136,0.15)] text-[#00ff88] border border-[rgba(0,255,136,0.3)]">
                      Q{item.questionNumber} {item.subPart}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Page {item.sourcePage}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white leading-snug font-sans">
                    {item.questionText}
                  </h3>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                  <button
                    onClick={() => toggleTaught(item._id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 border transition-all ${
                      isTaught
                        ? 'bg-[rgba(0,255,136,0.2)] text-[#00ff88] border-[#00ff88]'
                        : 'bg-[#141b24] text-slate-400 border-[rgba(255,255,255,0.08)] hover:text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isTaught ? 'Taught' : 'Mark Taught'}
                  </button>

                  <button
                    onClick={() => toggleSolution(item._id)}
                    className="cyber-btn-primary px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5"
                  >
                    {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    {isRevealed ? 'Hide' : 'Reveal Solution'}
                  </button>
                </div>
              </div>

              {/* Revealed Solution & Pedagogy */}
              {isRevealed && (
                <div className="mt-4 space-y-3 pt-2 text-xs animate-fadeIn">
                  {/* Mathematical Solution */}
                  <div className="p-4 rounded-xl bg-[#050810] border border-[rgba(0,255,136,0.2)] font-mono text-[#00ff88] leading-relaxed whitespace-pre-line shadow-inner">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1.5 tracking-wider">
                      TEXTBOOK SOLUTION:
                    </span>
                    {item.solutionText}
                  </div>

                  {/* Math Steps Breakdown */}
                  {item.mathSteps && item.mathSteps.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-[#0a0e1a] border border-[rgba(255,255,255,0.06)] space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-slate-400 block mb-1 tracking-wider uppercase">SEQUENTIAL STEPS:</span>
                      {item.mathSteps.map((step, sIdx) => (
                        <div key={sIdx} className="text-slate-300 font-mono text-[11px] flex items-center gap-2">
                          <span className="text-[#00d4ff] font-bold">•</span> {step}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Teaching Approach & Pitfalls */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.25)]">
                      <div className="flex items-center gap-2 text-[#00d4ff] font-tech font-bold mb-1.5">
                        <Lightbulb className="w-4 h-4" />
                        <span>RECOMMENDED PEDAGOGY:</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed font-sans">{item.teachingApproach}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[rgba(255,107,107,0.06)] border border-[rgba(255,107,107,0.25)]">
                      <div className="flex items-center gap-2 text-[#ff6b6b] font-tech font-bold mb-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        <span>STUDENT PITFALL:</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed font-sans">{item.commonPitfalls}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
