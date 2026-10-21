// client/src/pages/TeachingModePage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Lesson } from '../types';
import {
  BookOpen, Sparkles, Languages, Edit3, Layers, HelpCircle,
  AlertTriangle, Users, CheckCircle, Flag, ChevronLeft, ChevronRight,
  Clock, CheckCircle2, Bookmark, Save, ArrowLeft, Lightbulb, Terminal
} from 'lucide-react';

import { BlackboardViewer } from '../components/BlackboardViewer';
import { TeacherScriptViewer } from '../components/TeacherScriptViewer';
import { QuestionCards } from '../components/QuestionCards';
import { MisconceptionHelp } from '../components/MisconceptionHelp';
import { InteractiveFactorTree } from '../components/InteractiveFactorTree';
import { InteractiveHcfLcm } from '../components/InteractiveHcfLcm';
import { InteractiveSportsField } from '../components/InteractiveSportsField';
import { InteractiveProofMode } from '../components/InteractiveProofMode';

export const TeachingModePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activePhase, setActivePhase] = useState<string>('understand');
  const [status, setStatus] = useState<'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'>('IN_PROGRESS');

  // Quick notes inside teaching mode
  const [noteContent, setNoteContent] = useState<string>('');
  const [noteSaved, setNoteSaved] = useState<boolean>(false);

  useEffect(() => {
    const fetchLessonData = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        const [lessonRes, allRes, progressRes] = await Promise.all([
          api.getLesson(slug),
          api.getLessons(),
          api.getProgress(),
        ]);
        setLesson(lessonRes.lesson);
        setAllLessons(allRes.lessons || []);

        const currentProg = (progressRes.progress || []).find((p: any) => p.lessonSlug === slug);
        if (currentProg) {
          setStatus(currentProg.status);
        } else {
          api.updateStatus(slug, 'IN_PROGRESS');
          setStatus('IN_PROGRESS');
        }
      } catch (err) {
        console.error('Error loading teaching guide:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessonData();
  }, [slug]);

  const handleStatusChange = async (newStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED') => {
    if (!slug) return;
    setStatus(newStatus);
    try {
      await api.updateStatus(slug, newStatus);
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleSaveNote = async () => {
    if (!noteContent.trim() || !lesson) return;
    try {
      await api.createNote({
        lessonId: lesson.slug,
        lessonTitle: lesson.title,
        title: `Teaching Note: ${lesson.title}`,
        content: noteContent,
        tag: 'Pedagogy',
      });
      setNoteSaved(true);
      setTimeout(() => setNoteSaved(false), 2500);
      setNoteContent('');
    } catch (err) {
      console.error('Error saving note:', err);
    }
  };

  const phases = [
    { id: 'understand', label: '1. Understand', icon: BookOpen, summary: 'Goal & Prior Knowledge' },
    { id: 'story', label: '2. Story Mode', icon: Sparkles, summary: 'Classroom narrative' },
    { id: 'script', label: '3. Teacher Script', icon: Languages, summary: 'Spoken dialogue' },
    { id: 'board', label: '4. Board Plan', icon: Edit3, summary: 'Digital Chalkboard' },
    { id: 'interactive', label: '5. Interactive Math', icon: Layers, summary: 'Live demonstration' },
    { id: 'questions', label: '6. Ask Students', icon: HelpCircle, summary: 'Pedagogical questions' },
    { id: 'misconceptions', label: '7. Misconceptions', icon: AlertTriangle, summary: 'Student pitfalls & fixes' },
    { id: 'activity', label: '8. Activity', icon: Users, summary: 'Classroom engagement' },
    { id: 'check', label: '9. Check Understanding', icon: CheckCircle, summary: 'Quick checks & exit ticket' },
    { id: 'conclude', label: '10. Conclude', icon: Flag, summary: 'Lesson wrap-up' },
  ];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center text-[#94a3b8] font-mono">
        <Sparkles className="w-8 h-8 text-[#00ff88] animate-spin mx-auto mb-3" />
        LOADING_TEACHER_COCKPIT_MODULE...
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="max-w-md mx-auto my-20 text-center cyber-card p-8">
        <p className="text-lg font-bold font-tech text-white">Lesson not found.</p>
        <button
          onClick={() => navigate('/dashboard')}
          className="mt-4 cyber-btn cyber-btn-primary py-2 px-5 text-xs font-tech font-bold"
        >
          BACK TO DASHBOARD
        </button>
      </div>
    );
  }

  const currentLessonIndex = allLessons.findIndex(l => l.slug === lesson.slug);
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  return (
    <div className="min-h-screen pb-16">
      {/* Top Sticky Teaching Control Header */}
      <div className="bg-[#050810]/95 backdrop-blur-xl border-b border-[#1e293b] sticky top-16 z-30 px-4 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 rounded-lg bg-[#0f1419] hover:bg-[#1a1f2e] text-[#94a3b8] hover:text-[#00ff88] border border-[#1e293b] transition-colors"
              title="Return to Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/40">
                  LESSON {lesson.lessonNumber}
                </span>
                <span className="text-xs text-[#64748b] font-mono">Pages {lesson.sourcePages}</span>
              </div>
              <h2 className="text-base font-extrabold font-tech text-white leading-tight mt-0.5">
                {lesson.title}
              </h2>
            </div>
          </div>

          {/* Quick Pacing & Prev / Next Lesson Navigation */}
          <div className="flex items-center gap-2 text-xs">
            {prevLesson && (
              <button
                onClick={() => navigate(`/teach/${prevLesson.slug}`)}
                className="px-3 py-1.5 rounded-lg bg-[#0f1419] hover:bg-[#1a1f2e] text-[#94a3b8] hover:text-white border border-[#1e293b] flex items-center gap-1 font-mono transition-colors"
                title={`Previous: ${prevLesson.title}`}
              >
                <ChevronLeft className="w-3.5 h-3.5 text-[#00ff88]" />
                <span className="hidden sm:inline">Prev</span>
              </button>
            )}

            <div className="flex bg-[#050810] p-1 rounded-lg border border-[#1e293b] font-mono">
              <button
                onClick={() => handleStatusChange('IN_PROGRESS')}
                className={`px-3 py-1 rounded-md font-semibold transition-all ${
                  status === 'IN_PROGRESS' ? 'bg-[#ffd43b]/20 text-[#ffd43b] border border-[#ffd43b]/40 font-bold' : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => handleStatusChange('COMPLETED')}
                className={`px-3 py-1 rounded-md font-semibold transition-all ${
                  status === 'COMPLETED' ? 'bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/40 font-bold shadow-[0_0_10px_rgba(0,255,136,0.2)]' : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                Mark Taught
              </button>
            </div>

            {nextLesson && (
              <button
                onClick={() => navigate(`/teach/${nextLesson.slug}`)}
                className="cyber-btn cyber-btn-primary btn-shine-sweep py-1.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center gap-1"
                title={`Next: ${nextLesson.title}`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3-Column Teaching Mode Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: Lesson Phase Navigation (col-span-3) */}
          <div className="lg:col-span-3 space-y-2">
            <div className="cyber-card p-3 sticky top-36">
              <span className="text-[10px] font-tech uppercase tracking-wider font-bold text-[#00ff88] px-2 block mb-2">
                TEACHING PHASES
              </span>

              <nav className="space-y-1">
                {phases.map((p) => {
                  const Icon = p.icon;
                  const isActive = activePhase === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePhase(p.id)}
                      className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/50 font-bold shadow-[0_0_15px_rgba(0,255,136,0.15)]'
                          : 'text-[#94a3b8] border border-transparent hover:bg-[#1a1f2e] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-[#00ff88]' : 'text-[#64748b]'}`} />
                        <span className="truncate">{p.label}</span>
                      </div>
                      <span className={`text-[10px] font-mono opacity-80 hidden xl:inline ${isActive ? 'text-[#00ff88]' : 'text-[#64748b]'}`}>
                        {p.summary.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-[#1e293b] px-2 flex items-center justify-between text-[11px] text-[#94a3b8] font-mono">
                <span>ESTIMATED TIME:</span>
                <span className="text-[#00ff88] font-bold">~{lesson.estimatedMinutes} mins</span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Main Teaching Instructions & Stage (col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Phase 1: Understand */}
            {activePhase === 'understand' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="cyber-card p-6">
                  <div className="flex items-center gap-2 text-[#00ff88] font-tech font-bold text-xs uppercase tracking-wider mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span>TEACHER OBJECTIVE &amp; CONCEPT DNA</span>
                  </div>
                  <h3 className="text-xl font-tech font-bold text-white mb-2">{lesson.title}</h3>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed font-mono bg-[#050810]/80 p-4 rounded-xl border border-[#1e293b]">
                    {lesson.objective}
                  </p>
                </div>

                <div className="cyber-card p-6">
                  <span className="text-xs font-tech font-bold text-[#00d4ff] uppercase tracking-wider block mb-1.5">
                    WHY DO STUDENTS LEARN IT?
                  </span>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed font-sans">
                    {lesson.whyStudentsLearnIt}
                  </p>
                </div>

                <div className="cyber-card p-6">
                  <span className="text-xs font-tech font-bold text-[#51cf66] uppercase tracking-wider block mb-1.5">
                    HOW SHOULD I INTRODUCE IT? (DIAGNOSTIC HOOK)
                  </span>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed font-sans">
                    {lesson.howToIntroduce}
                  </p>
                </div>
              </div>
            )}

            {/* Phase 2: Story Mode */}
            {activePhase === 'story' && (
              <div className="cyber-card p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#ffd43b] font-tech font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>TEACHER STORY MODE (FAITHFUL TO TEXTBOOK PAGES {lesson.sourcePages})</span>
                </div>
                <h3 className="text-xl font-tech font-bold text-white">{lesson.story.headline}</h3>

                <div className="p-4 rounded-xl bg-[#050810]/80 border border-[#1e293b] text-sm text-[#e2e8f0] leading-relaxed whitespace-pre-line font-sans italic">
                  {lesson.story.narrative}
                </div>

                <div className="p-3.5 rounded-xl bg-[#ffd43b]/10 border border-[#ffd43b]/30 text-xs">
                  <span className="font-tech font-bold text-[#ffd43b] block mb-0.5">KEY NARRATIVE TAKEAWAY:</span>
                  <p className="text-[#cbd5e1] font-sans">{lesson.story.keyTakeaway}</p>
                </div>
              </div>
            )}

            {/* Phase 3: Teacher Script */}
            {activePhase === 'script' && (
              <div className="animate-fadeIn">
                <TeacherScriptViewer script={lesson.teacherScript} />
              </div>
            )}

            {/* Phase 4: Board Plan */}
            {activePhase === 'board' && (
              <div className="animate-fadeIn">
                <BlackboardViewer steps={lesson.boardPlan} />
              </div>
            )}

            {/* Phase 5: Interactive Demonstration */}
            {activePhase === 'interactive' && (
              <div className="space-y-6 animate-fadeIn">
                {lesson.slug.includes('fundamental-theorem') && <InteractiveFactorTree />}
                {lesson.slug.includes('hcf') && <InteractiveHcfLcm />}
                {lesson.slug.includes('sports-field') && <InteractiveSportsField />}
                {lesson.slug.includes('proof') && <InteractiveProofMode />}
                {lesson.slug.includes('divisibility') && <InteractiveProofMode />}

                {!['fundamental-theorem-of-arithmetic', 'hcf-and-lcm-by-prime-factorisation', 'three-numbers-hcf-lcm-warning', 'classroom-problem-sports-field', 'revisiting-irrationals-and-divisibility-theorem', 'proofs-of-irrationality-sqrt2-sqrt3', 'proofs-of-irrational-expressions'].includes(lesson.slug) && (
                  <InteractiveFactorTree />
                )}
              </div>
            )}

            {/* Phase 6: Ask Students */}
            {activePhase === 'questions' && (
              <div className="animate-fadeIn">
                <QuestionCards questions={lesson.questions} />
              </div>
            )}

            {/* Phase 7: Common Misconceptions */}
            {activePhase === 'misconceptions' && (
              <div className="animate-fadeIn">
                <MisconceptionHelp misconceptions={lesson.misconceptions} />
              </div>
            )}

            {/* Phase 8: Classroom Activity */}
            {activePhase === 'activity' && (
              <div className="cyber-card p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#00ff88] font-tech font-bold text-xs uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    <span>CLASSROOM ACTIVITY RELAY</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88]">
                    ⏱ {lesson.classroomActivity.duration}
                  </span>
                </div>

                <h3 className="text-lg font-tech font-bold text-white">{lesson.classroomActivity.title}</h3>

                <div className="p-3.5 rounded-xl bg-[#050810]/80 border border-[#1e293b] text-xs">
                  <span className="font-tech font-bold text-[#ffd43b] block mb-0.5">MATERIALS NEEDED:</span>
                  <p className="text-[#cbd5e1] font-sans">{lesson.classroomActivity.materialsNeeded}</p>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-tech font-bold text-[#e2e8f0] block">STEP-BY-STEP INSTRUCTIONS:</span>
                  {lesson.classroomActivity.instructions.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#050810]/70 border border-[#1e293b]">
                      <span className="w-5 h-5 rounded bg-[#00ff88]/20 border border-[#00ff88]/40 text-[#00ff88] font-mono font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
                        {idx + 1}
                      </span>
                      <p className="text-[#cbd5e1] font-sans mt-0.5">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-xs">
                  <span className="font-tech font-bold text-[#00d4ff] block mb-0.5">TEACHER FACILITATION TIP:</span>
                  <p className="text-[#cbd5e1] font-sans">{lesson.classroomActivity.teacherFacilitation}</p>
                </div>
              </div>
            )}

            {/* Phase 9: Check Understanding */}
            {activePhase === 'check' && (
              <div className="cyber-card p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#51cf66] font-tech font-bold text-xs uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4" />
                  <span>CHECK UNDERSTANDING &amp; DIAGNOSTIC CHECKS</span>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-tech font-bold text-[#e2e8f0] block">QUICK CLASSROOM CHECKS:</span>
                  {lesson.checkUnderstanding.quickChecks.map((check, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#050810]/80 border border-[#1e293b] text-[#cbd5e1] font-sans">
                      {check}
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/40 text-xs">
                  <span className="font-tech font-bold text-[#00ff88] block mb-1">EXIT TICKET BEFORE LEAVING:</span>
                  <p className="text-white font-mono font-medium">&quot;{lesson.checkUnderstanding.exitTicket}&quot;</p>
                </div>
              </div>
            )}

            {/* Phase 10: How to Conclude */}
            {activePhase === 'conclude' && (
              <div className="cyber-card p-6 space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#00d4ff] font-tech font-bold text-xs uppercase tracking-wider">
                  <Flag className="w-4 h-4" />
                  <span>HOW SHOULD I CONCLUDE THE LESSON?</span>
                </div>
                <div className="p-4 rounded-xl bg-[#050810]/80 border border-[#1e293b] text-sm text-[#e2e8f0] leading-relaxed font-sans italic">
                  &quot;{lesson.conclusion}&quot;
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#1e293b]">
                  <span className="text-xs text-[#94a3b8] font-sans">Ready to mark this lesson as completed?</span>
                  <button
                    onClick={() => handleStatusChange('COMPLETED')}
                    className="cyber-btn cyber-btn-primary btn-shine-sweep py-2 px-4 text-xs font-tech font-bold"
                  >
                    MARK LESSON AS COMPLETED
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Teacher Tips & Quick Notes (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Pedagogical Advice Card */}
            <div className="cyber-card p-4 space-y-3">
              <div className="flex items-center gap-1.5 text-[#ffd43b] font-tech font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>INSTRUCTOR TIP</span>
              </div>
              <p className="text-xs text-[#cbd5e1] leading-relaxed font-sans">
                Give students ample wait time before revealing factor tree leaves or proof contradictions. Let them experience the tension of mathematical deduction!
              </p>
            </div>

            {/* Official Textbook Source Card */}
            <div className="cyber-card p-4 text-xs space-y-2">
              <div className="text-[#64748b] font-tech font-bold uppercase tracking-wider text-[10px]">
                TEXTBOOK BOUNDARY
              </div>
              <div className="font-tech font-bold text-white">
                Class 10 Semester 1 • Chapter 1
              </div>
              <div className="text-[#00ff88] font-mono text-[11px]">
                {lesson.section} (Pages {lesson.sourcePages})
              </div>
            </div>

            {/* Quick Notes Widget */}
            <div className="cyber-card p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-tech font-bold text-[#e2e8f0] flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-[#00ff88]" />
                  QUICK NOTE
                </span>
                {noteSaved && <span className="text-[10px] text-[#00ff88] font-mono font-bold">SAVED!</span>}
              </div>

              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="e.g., Remind students that 91 is 7×13, not a prime number..."
                className="w-full h-24 rounded-lg bg-[#050810] border border-[#1e293b] p-3 text-xs text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#00ff88] resize-none font-sans"
              ></textarea>

              <button
                onClick={handleSaveNote}
                disabled={!noteContent.trim()}
                className="w-full cyber-btn cyber-btn-secondary py-2 text-xs font-tech font-bold disabled:opacity-40"
              >
                <Save className="w-3.5 h-3.5" />
                SAVE NOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
