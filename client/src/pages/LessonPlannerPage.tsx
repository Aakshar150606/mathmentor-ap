// client/src/pages/LessonPlannerPage.tsx
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Lesson } from '../types';
import { Calendar, Printer, Copy, Check } from 'lucide-react';

export const LessonPlannerPage: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string>('fundamental-theorem-of-arithmetic');
  const [duration, setDuration] = useState<number>(45);
  const [teachingStyle, setTeachingStyle] = useState<string>('Story-First (Intuitive Discovery)');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await api.getLessons();
        setLessons(res.lessons || []);
      } catch (err) {
        console.error('Error fetching lessons for planner:', err);
      }
    };
    fetchLessons();
  }, []);

  const activeLesson = lessons.find(l => l.slug === selectedSlug) || lessons[0];

  const handleCopyPlan = () => {
    if (!activeLesson) return;
    const timeline = getTimelinePhases();
    const planText = `LESSON PLAN: ${activeLesson.title}
Chapter: Real Numbers (Pages ${activeLesson.sourcePages})
Duration: ${duration} Minutes | Style: ${teachingStyle}

1. PEDAGOGICAL OBJECTIVE:
${activeLesson.objective}

2. WHY STUDENTS LEARN IT:
${activeLesson.whyStudentsLearnIt}

3. TIMED PERIOD SCHEDULE (${teachingStyle}):
${timeline.map(p => `[${p.time}] ${p.phase}\n${p.content}`).join('\n\n')}

4. BOARD PLAN & DEMONSTRATION:
${activeLesson.boardPlan.map(b => `Step ${b.stepNumber} [${b.title}]:\n${b.boardContent}\nTeacher: ${b.teacherAction}\nStudents: ${b.studentsAction}`).join('\n\n')}

5. CONCLUSION:
${activeLesson.conclusion}`;

    navigator.clipboard.writeText(planText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const getTimelinePhases = () => {
    if (!activeLesson) return [];
    if (teachingStyle.startsWith('Story-First')) {
      const p1 = Math.round(duration * 0.15);
      const p2 = Math.round(duration * 0.30);
      const p3 = Math.round(duration * 0.35);
      return [
        {
          phase: "Phase 1: Diagnostic Hook & Prior Knowledge",
          time: `00-${String(p1).padStart(2, '0')} min`,
          color: "bg-sky-100 border-sky-300 text-sky-800",
          content: activeLesson.howToIntroduce,
        },
        {
          phase: "Phase 2: Narrative Discovery & Intuition",
          time: `${String(p1).padStart(2, '0')}-${String(p1 + p2).padStart(2, '0')} min`,
          color: "bg-amber-100 border-amber-300 text-amber-800",
          content: `"${activeLesson.story.headline}" — ${activeLesson.story.narrative.slice(0, 220)}...`,
        },
        {
          phase: "Phase 3: Formal Blackboard Demonstration",
          time: `${String(p1 + p2).padStart(2, '0')}-${String(p1 + p2 + p3).padStart(2, '0')} min`,
          color: "bg-blue-100 border-blue-300 text-blue-800",
          content: `Write ${activeLesson.boardPlan.length} sequential board steps, boxing theorems and writing canonical prime powers.`,
        },
        {
          phase: "Phase 4: Understanding Check & Exit Ticket",
          time: `${String(p1 + p2 + p3).padStart(2, '0')}-${String(duration).padStart(2, '0')} min`,
          color: "bg-emerald-100 border-emerald-300 text-emerald-800",
          content: `Exit Ticket: "${activeLesson.checkUnderstanding.exitTicket}"`,
        },
      ];
    } else if (teachingStyle.startsWith('Board-First')) {
      const p1 = Math.round(duration * 0.15);
      const p2 = Math.round(duration * 0.45);
      const p3 = Math.round(duration * 0.25);
      return [
        {
          phase: "Phase 1: Formal Statement of Objective & Definitions",
          time: `00-${String(p1).padStart(2, '0')} min`,
          color: "bg-indigo-100 border-indigo-300 text-indigo-800",
          content: activeLesson.objective,
        },
        {
          phase: "Phase 2: Rigorous Step-by-Step Blackboard Derivation",
          time: `${String(p1).padStart(2, '0')}-${String(p1 + p2).padStart(2, '0')} min`,
          color: "bg-blue-100 border-blue-300 text-blue-800",
          content: `Execute all ${activeLesson.boardPlan.length} board steps with student note-taking and mathematical verification.`,
        },
        {
          phase: "Phase 3: Misconception Traps & Question Drill",
          time: `${String(p1 + p2).padStart(2, '0')}-${String(p1 + p2 + p3).padStart(2, '0')} min`,
          color: "bg-rose-100 border-rose-300 text-rose-800",
          content: activeLesson.misconceptions?.[0] ? `Diagnose Trap: "${activeLesson.misconceptions[0].misconception}" ⟹ Remedy: ${activeLesson.misconceptions[0].classroomRemedy}` : "Review common exam mistakes and verify algebraic steps.",
        },
        {
          phase: "Phase 4: Summary Formula & Exit Ticket",
          time: `${String(p1 + p2 + p3).padStart(2, '0')}-${String(duration).padStart(2, '0')} min`,
          color: "bg-emerald-100 border-emerald-300 text-emerald-800",
          content: `Exit Ticket: "${activeLesson.checkUnderstanding.exitTicket}"`,
        },
      ];
    } else if (teachingStyle.startsWith('Activity-First')) {
      const p1 = Math.round(duration * 0.10);
      const p2 = Math.round(duration * 0.40);
      const p3 = Math.round(duration * 0.30);
      return [
        {
          phase: "Phase 1: Brief Problem Launch & Team Grouping",
          time: `00-${String(p1).padStart(2, '0')} min`,
          color: "bg-sky-100 border-sky-300 text-sky-800",
          content: `Setup classroom activity: "${activeLesson.classroomActivity.title}" (${activeLesson.classroomActivity.duration})`,
        },
        {
          phase: "Phase 2: Collaborative Student Relay / Simulator",
          time: `${String(p1).padStart(2, '0')}-${String(p1 + p2).padStart(2, '0')} min`,
          color: "bg-purple-100 border-purple-300 text-purple-800",
          content: activeLesson.classroomActivity.instructions.join(' ⟹ '),
        },
        {
          phase: "Phase 3: Board Plan Debrief & Generalization",
          time: `${String(p1 + p2).padStart(2, '0')}-${String(p1 + p2 + p3).padStart(2, '0')} min`,
          color: "bg-blue-100 border-blue-300 text-blue-800",
          content: `Synthesize activity observations onto blackboard. Connect student results to textbook theorem.`,
        },
        {
          phase: "Phase 4: Team Verification & Exit Ticket",
          time: `${String(p1 + p2 + p3).padStart(2, '0')}-${String(duration).padStart(2, '0')} min`,
          color: "bg-emerald-100 border-emerald-300 text-emerald-800",
          content: `Exit Ticket: "${activeLesson.checkUnderstanding.exitTicket}"`,
        },
      ];
    } else {
      const p1 = Math.round(duration * 0.15);
      const p2 = Math.round(duration * 0.40);
      const p3 = Math.round(duration * 0.30);
      return [
        {
          phase: "Phase 1: Textbook Benchmark Problem Presentation",
          time: `00-${String(p1).padStart(2, '0')} min`,
          color: "bg-amber-100 border-amber-300 text-amber-800",
          content: activeLesson.examples?.[0] ? `Example Problem: ${activeLesson.examples[0].problem}` : "Present key textbook exam problem directly on the blackboard.",
        },
        {
          phase: "Phase 2: Step-by-Step Exam Solution & Pitfall Callouts",
          time: `${String(p1).padStart(2, '0')}-${String(p1 + p2).padStart(2, '0')} min`,
          color: "bg-rose-100 border-rose-300 text-rose-800",
          content: `Board solution breakdown. Highlight mandatory marks-winning phrases: "a and b are coprime" or "by uniqueness of FTA".`,
        },
        {
          phase: "Phase 3: Diagnostic Challenge Questions",
          time: `${String(p1 + p2).padStart(2, '0')}-${String(p1 + p2 + p3).padStart(2, '0')} min`,
          color: "bg-blue-100 border-blue-300 text-blue-800",
          content: `Ask diagnostic check: "${activeLesson.questions?.[0]?.question || activeLesson.checkUnderstanding.quickChecks?.[0] || 'Explain the core theorem step.'}"`,
        },
        {
          phase: "Phase 4: Exam Protocol Recap & Exit Ticket",
          time: `${String(p1 + p2 + p3).padStart(2, '0')}-${String(duration).padStart(2, '0')} min`,
          color: "bg-emerald-100 border-emerald-300 text-emerald-800",
          content: `Exit Ticket: "${activeLesson.checkUnderstanding.exitTicket}"`,
        },
      ];
    }
  };

  const timelinePhases = getTimelinePhases();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[rgba(0,212,255,0.12)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff]">
              <Calendar className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-tech tracking-wide text-white">
              LESSON PLANNER: <span className="text-[#00d4ff]">PEDAGOGICAL ENGINE</span>
            </h1>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Generate customized, print-ready teaching schedules based strictly on Pages 14–31
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyPlan}
            className="cyber-btn-secondary px-3.5 py-2 text-xs font-mono font-semibold flex items-center gap-1.5"
          >
            {copied ? <Check className="w-4 h-4 text-[#00ff88]" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied Plan' : 'Copy Plan'}
          </button>

          <button
            onClick={handlePrint}
            className="cyber-btn-primary px-4 py-2 text-xs font-mono font-bold flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Print Schedule
          </button>
        </div>
      </div>

      {/* Configuration Controls Bar */}
      <div className="cyber-card p-5 rounded-2xl border border-[rgba(0,255,136,0.25)] bg-[#0f1419] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs shadow-md">
        <div>
          <label className="block text-slate-400 font-mono text-[11px] mb-1.5">SELECT CONCEPT / LESSON:</label>
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-[#00ff88] text-xs font-mono"
          >
            {lessons.map((l) => (
              <option key={l.slug} value={l.slug}>
                {l.lessonNumber}. {l.title} (p. {l.sourcePages})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-slate-400 font-mono text-[11px] mb-1.5">PERIOD DURATION:</label>
          <div className="flex bg-[#0a0e1a] p-1 rounded-lg border border-[rgba(255,255,255,0.1)] gap-1">
            {[30, 40, 45, 60].map((mins) => (
              <button
                key={mins}
                type="button"
                onClick={() => setDuration(mins)}
                className={`flex-1 py-1.5 font-mono font-bold text-xs rounded-md transition-all border ${
                  duration === mins
                    ? 'bg-[rgba(0,212,255,0.2)] text-[#00d4ff] border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                    : 'text-slate-400 border-transparent hover:text-white'
                }`}
              >
                {mins}m
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-slate-400 font-mono text-[11px] mb-1.5">PEDAGOGICAL TEACHING STYLE:</label>
          <select
            value={teachingStyle}
            onChange={(e) => setTeachingStyle(e.target.value)}
            className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-[#00ff88] text-xs font-mono"
          >
            <option value="Story-First (Intuitive Discovery)">Story-First (Intuitive Discovery)</option>
            <option value="Board-First (Formal Rigor)">Board-First (Formal Rigor)</option>
            <option value="Activity-First (Collaborative Relay)">Activity-First (Collaborative Relay)</option>
            <option value="Problem-First (Exam & Pitfall Focus)">Problem-First (Exam &amp; Pitfall Focus)</option>
          </select>
        </div>
      </div>

      {/* Generated Lesson Plan View */}
      {activeLesson && (
        <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0f1419] shadow-lg space-y-6 text-xs printable-plan">
          {/* Plan Header */}
          <div className="pb-4 border-b border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[#00ff88] font-mono font-bold uppercase tracking-wider text-[11px]">
                LESSON PLAN • CLASS 10 MATHEMATICS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-tech text-white mt-1">
                {activeLesson.title}
              </h2>
              <div className="text-slate-400 font-mono text-[11px] mt-1">
                {activeLesson.section} • AP Textbook Pages {activeLesson.sourcePages}
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] text-slate-300">
                ⏱ {duration} Minutes
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[rgba(0,212,255,0.15)] border border-[#00d4ff] text-[#00d4ff] font-semibold">
                {teachingStyle.split(' ')[0]}
              </span>
            </div>
          </div>

          {/* Breakdown Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#141b24] border border-[rgba(255,255,255,0.08)] space-y-2">
              <span className="font-tech font-bold text-[#00d4ff] text-xs block">01. PEDAGOGICAL OBJECTIVE</span>
              <p className="text-slate-300 leading-relaxed font-sans">{activeLesson.objective}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#141b24] border border-[rgba(255,255,255,0.08)] space-y-2">
              <span className="font-tech font-bold text-[#00ff88] text-xs block">02. WHY STUDENTS LEARN IT</span>
              <p className="text-slate-300 leading-relaxed font-sans">{activeLesson.whyStudentsLearnIt}</p>
            </div>
          </div>

          {/* Timeline Sequence */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-tech font-bold text-white tracking-wide">
              PERIOD TIMELINE SCHEDULE ({teachingStyle.toUpperCase()})
            </h3>

            {timelinePhases.map((phaseItem, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0a0e1a] border border-[rgba(255,255,255,0.08)] flex items-start gap-4 hover:border-[rgba(0,255,136,0.25)] transition-all">
                <span className="px-3 py-1.5 rounded-lg border font-mono font-bold text-[11px] whitespace-nowrap bg-[rgba(0,212,255,0.1)] border-[rgba(0,212,255,0.3)] text-[#00d4ff]">
                  {phaseItem.time}
                </span>
                <div className="flex-1">
                  <span className="font-tech font-bold text-white text-xs block">{phaseItem.phase}</span>
                  <p className="text-slate-300 mt-1 font-sans">{phaseItem.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
