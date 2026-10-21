// client/src/pages/DashboardPage.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { Lesson, TeacherProgress } from '../types';
import {
  BookOpen, Sparkles, ShieldCheck, Layers, Dumbbell, Calendar,
  FileText, ArrowRight, Play, Eye, Clock, CheckCircle2, Circle,
  Terminal, Activity, Cpu
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { teacher } = useAuth();
  const navigate = useNavigate();

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progressStats, setProgressStats] = useState<any>(null);
  const [progressMap, setProgressMap] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lessonsRes, progressRes] = await Promise.all([
          api.getLessons(),
          api.getProgress(),
        ]);
        setLessons(lessonsRes.lessons || []);
        setProgressStats(progressRes.stats || null);

        const pMap: Record<string, string> = {};
        (progressRes.progress || []).forEach((p: TeacherProgress) => {
          pMap[p.lessonSlug] = p.status;
        });
        setProgressMap(pMap);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'Foundation':
        return 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/40';
      case 'Core':
        return 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/40';
      case 'Advanced':
        return 'bg-[#ff6b6b]/10 text-[#ff6b6b] border-[#ff6b6b]/40';
      default:
        return 'bg-[#1e293b] text-[#94a3b8] border-[#334155]';
    }
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'COMPLETED':
        return (
          <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#00ff88] bg-[#00ff88]/10 px-2.5 py-0.5 rounded-full border border-[#00ff88]/40 shadow-[0_0_10px_rgba(0,255,136,0.15)]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" /> TAUGHT
          </span>
        );
      case 'IN_PROGRESS':
        return (
          <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#ffd43b] bg-[#ffd43b]/10 px-2.5 py-0.5 rounded-full border border-[#ffd43b]/40">
            <span className="w-2 h-2 rounded-full bg-[#ffd43b] animate-ping"></span> IN PROGRESS
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#94a3b8] bg-[#1e293b]/60 px-2.5 py-0.5 rounded-full border border-[#334155]">
            <Circle className="w-2.5 h-2.5 text-[#64748b]" /> READY
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Top Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#1e293b] gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold font-tech text-white">
              INSTRUCTOR COCKPIT
            </h1>
            <span className="px-3 py-1 rounded-full bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/40 text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,255,136,0.15)]">
              {teacher?.name?.split(' ')[0] || 'Teacher'}
            </span>
          </div>
          <p className="text-xs text-[#94a3b8] mt-1 font-sans">
            AP Government Department of School Education • Class 10 Real Numbers Portal
          </p>
        </div>

        {/* School affiliation badge */}
        <div className="p-3 rounded-xl bg-[#0f1419] border border-[#1e293b] flex items-center gap-3 text-xs shadow-md">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88] font-tech font-bold">
            AP
          </div>
          <div>
            <div className="font-tech font-bold text-[#e2e8f0]">{teacher?.schoolName || 'Z.P. High School'}</div>
            <div className="text-[#94a3b8] text-[11px] font-sans">{teacher?.district || 'Andhra Pradesh'} • Medium: {teacher?.teachingMedium || 'Bilingual'}</div>
          </div>
        </div>
      </div>

      {/* Progress & Current Chapter Highlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chapter Overview Card */}
        <div className="lg:col-span-8 cyber-card p-6 sm:p-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#00ff88] uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#00ff88]" />
                CURRENT ACTIVE CHAPTER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-tech text-white mt-1">
                Chapter 1 – REAL NUMBERS
              </h2>
              <p className="text-xs text-[#94a3b8] mt-1 font-sans">
                Class 10 Semester 1 • Pages 14 to 31 • Euclid&apos;s Algorithm, FTA, HCF/LCM, Contradiction Proofs
              </p>
            </div>

            <Link
              to="/story-mode"
              className="cyber-btn cyber-btn-primary btn-shine-sweep px-5 py-2.5 text-xs font-tech tracking-wider self-start sm:self-auto"
            >
              <Sparkles className="w-4 h-4 text-[#050810]" />
              EXPLORE CHAPTER STORY
            </Link>
          </div>

          {/* Quick Module Navigation Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-[#1e293b] text-xs font-mono">
            <Link to="/teach/introduction-to-real-numbers" className="p-2.5 rounded-lg bg-[#050810]/70 hover:bg-[#1a1f2e] border border-[#1e293b] hover:border-[#00ff88]/50 text-[#e2e8f0] flex items-center gap-2 transition-all">
              <span className="text-[#00ff88] font-bold">01</span> Intro (p. 14)
            </Link>
            <Link to="/teach/fundamental-theorem-of-arithmetic" className="p-2.5 rounded-lg bg-[#050810]/70 hover:bg-[#1a1f2e] border border-[#1e293b] hover:border-[#00ff88]/50 text-[#e2e8f0] flex items-center gap-2 transition-all">
              <span className="text-[#00ff88] font-bold">02</span> FTA 32760
            </Link>
            <Link to="/teach/classroom-problem-sports-field" className="p-2.5 rounded-lg bg-[#050810]/70 hover:bg-[#1a1f2e] border border-[#1e293b] hover:border-[#00ff88]/50 text-[#e2e8f0] flex items-center gap-2 transition-all">
              <span className="text-[#00ff88] font-bold">06</span> Sports Track
            </Link>
            <Link to="/teach/proofs-of-irrationality-sqrt2-sqrt3" className="p-2.5 rounded-lg bg-[#050810]/70 hover:bg-[#1a1f2e] border border-[#1e293b] hover:border-[#00ff88]/50 text-[#e2e8f0] flex items-center gap-2 transition-all">
              <span className="text-[#00ff88] font-bold">08</span> √2 &amp; √3 Proofs
            </Link>
          </div>
        </div>

        {/* Progress Card */}
        <div className="lg:col-span-4 cyber-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-tech font-bold text-[#94a3b8] uppercase tracking-wider">
                TEACHING PROGRESS
              </span>
              <span className="text-2xl font-black font-tech text-[#00ff88] drop-shadow-[0_0_10px_rgba(0,255,136,0.4)]">
                {progressStats?.percent || 0}%
              </span>
            </div>

            {/* Visual Cyber Progress Bar */}
            <div className="w-full h-3 rounded-full bg-[#050810] mt-3 overflow-hidden border border-[#1e293b] p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] shadow-[0_0_15px_rgba(0,255,136,0.6)] transition-all duration-500"
                style={{ width: `${progressStats?.percent || 0}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center mt-5 pt-4 border-t border-[#1e293b] text-xs font-mono">
              <div>
                <div className="text-[#64748b] text-[10px] uppercase font-tech">Completed</div>
                <div className="font-bold text-[#00ff88] text-base mt-0.5">
                  {progressStats?.completedCount || 0}
                </div>
              </div>
              <div>
                <div className="text-[#64748b] text-[10px] uppercase font-tech">In Progress</div>
                <div className="font-bold text-[#ffd43b] text-base mt-0.5">
                  {progressStats?.inProgressCount || 0}
                </div>
              </div>
              <div>
                <div className="text-[#64748b] text-[10px] uppercase font-tech">Remaining</div>
                <div className="font-bold text-[#94a3b8] text-base mt-0.5">
                  {progressStats?.notStartedCount || 10}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#1e293b] flex items-center justify-between text-xs text-[#94a3b8]">
            <span className="font-mono text-[11px]">10 Curriculum Guides</span>
            <Link to="/planner" className="text-[#00ff88] font-tech text-[11px] font-bold hover:underline flex items-center gap-1">
              PLANNER <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Action Feature Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { title: 'Story Mode', path: '/story-mode', icon: Sparkles, color: 'text-[#ffd43b] bg-[#ffd43b]/10 border-[#ffd43b]/30', desc: 'Narrative arc' },
          { title: 'Proof Mode', path: '/proof-mode', icon: ShieldCheck, color: 'text-[#ff6b6b] bg-[#ff6b6b]/10 border-[#ff6b6b]/30', desc: 'Step trainer' },
          { title: 'Interactive Lab', path: '/interactive-lab', icon: Layers, color: 'text-[#00d4ff] bg-[#00d4ff]/10 border-[#00d4ff]/30', desc: 'Visual tools' },
          { title: 'Exercises', path: '/exercises', icon: Dumbbell, color: 'text-[#00ff88] bg-[#00ff88]/10 border-[#00ff88]/30', desc: '1.1 & 1.2 keys' },
          { title: 'Lesson Planner', path: '/planner', icon: Calendar, color: 'text-[#51cf66] bg-[#51cf66]/10 border-[#51cf66]/30', desc: '30/45/60 min' },
          { title: 'Teacher Notes', path: '/notes', icon: FileText, color: 'text-[#ffd43b] bg-[#ffd43b]/10 border-[#ffd43b]/30', desc: 'Classroom tips' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              to={item.path}
              className="cyber-card p-3.5 flex flex-col justify-between group hover:border-[#00ff88] transition-all"
            >
              <div className={`p-2 rounded-lg border w-fit ${item.color} mb-2 group-hover:scale-110 transition-transform`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-tech font-bold text-[#e2e8f0] text-xs group-hover:text-[#00ff88] transition-colors">{item.title}</h3>
                <p className="text-[10px] text-[#94a3b8] mt-0.5 font-sans">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Lesson Section Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-tech text-white">CURRICULUM TEACHING MODULES</h3>
            <p className="text-xs text-[#94a3b8] font-sans">
              Pages 14 to 31 broken into 10 structured, pedagogical teaching guides
            </p>
          </div>
          <span className="text-xs font-mono text-[#00ff88] font-bold">10 / 10 MODULES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => {
            const status = progressMap[lesson.slug];
            return (
              <div
                key={lesson.slug}
                className="cyber-card p-5 flex flex-col justify-between group hover:border-[#00ff88]/70 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/40">
                        {lesson.lessonNumber}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${getDifficultyBadge(lesson.difficulty)}`}>
                        {lesson.difficulty}
                      </span>
                    </div>
                    {getStatusBadge(status)}
                  </div>

                  <h4 className="text-base font-bold font-tech text-white group-hover:text-[#00ff88] transition-colors">
                    {lesson.title}
                  </h4>
                  <div className="text-xs text-[#64748b] font-mono mt-0.5 mb-2">
                    {lesson.section} • Pages {lesson.sourcePages}
                  </div>
                  <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed font-sans">
                    {lesson.objective}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1e293b] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#64748b] font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#00ff88]" />
                    <span>~{lesson.estimatedMinutes} min</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigate(`/teach/${lesson.slug}?tab=overview`)}
                      className="px-3 py-1.5 rounded-lg bg-[#0f1419] hover:bg-[#1a1f2e] text-[#cbd5e1] text-xs font-tech font-semibold flex items-center gap-1 border border-[#1e293b] hover:border-[#00ff88]/40 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#00ff88]" />
                      Overview
                    </button>

                    <button
                      onClick={() => navigate(`/teach/${lesson.slug}`)}
                      className="cyber-btn cyber-btn-primary btn-shine-sweep py-1.5 px-3.5 rounded-lg text-xs font-tech font-bold flex items-center gap-1"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      START TEACHING
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
