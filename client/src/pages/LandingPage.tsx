// client/src/pages/LandingPage.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Sparkles, BookOpen, ArrowRight, CheckCircle2, ShieldCheck,
  GitBranch, Users, Lightbulb, Languages, Terminal, Award,
  Cpu, Activity, Zap
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { teacher, demoLogin } = useAuth();
  const navigate = useNavigate();

  const handleDemoAccess = async () => {
    try {
      await demoLogin();
      navigate('/dashboard');
    } catch (err) {
      console.error('Demo login failed', err);
    }
  };

  return (
    <div className="space-y-20 pb-20 relative overflow-hidden">
      {/* Scanline Sweep Animation */}
      <div className="scan-line"></div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-7 relative z-10">
          {/* Cyber Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/50 text-[#00ff88] text-xs font-tech tracking-wider uppercase shadow-[0_0_20px_rgba(0,255,136,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping"></span>
            AP GOVT MATHEMATICS • CLASS 10 SEMESTER 1 • REAL NUMBERS (PAGES 14–31)
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-black font-tech tracking-tight text-white leading-tight">
            TEACH MATHEMATICS <br className="hidden sm:inline" />
            <span className="cyber-gradient-text drop-shadow-[0_0_35px_rgba(0,255,136,0.3)]">
              WITH ABSOLUTE MASTERY.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed font-sans">
            A high-precision instructor cockpit designed exclusively for teachers. Master what to teach, how to introduce it with stories, blackboard layouts, and step-by-step contradiction proofs.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {teacher ? (
              <Link
                to="/dashboard"
                className="cyber-btn cyber-btn-primary btn-shine-sweep px-7 py-3.5 text-sm font-tech tracking-wider shadow-[0_0_25px_rgba(0,255,136,0.35)]"
              >
                ACCESS TEACHER DASHBOARD
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <>
                <button
                  onClick={handleDemoAccess}
                  className="cyber-btn cyber-btn-primary btn-shine-sweep px-7 py-3.5 text-sm font-tech tracking-wider shadow-[0_0_25px_rgba(0,255,136,0.35)]"
                >
                  <Sparkles className="w-4 h-4 text-[#050810]" />
                  1-CLICK TEACHER DEMO LOGIN
                  <ArrowRight className="w-4 h-4 text-[#050810]" />
                </button>

                <Link
                  to="/login"
                  className="cyber-btn cyber-btn-secondary px-6 py-3.5 text-sm font-tech tracking-wider"
                >
                  TEACHER SIGN IN
                </Link>
              </>
            )}

            <Link
              to="/story-mode"
              className="cyber-btn cyber-btn-cyan px-6 py-3.5 text-sm font-tech tracking-wider"
            >
              EXPLORE STORY MODE
            </Link>
          </div>

          <p className="text-xs text-[#64748b] font-mono">
            Demo Credentials: <span className="text-[#00ff88]">teacher@mathmentor.ap</span> / <span className="text-[#00ff88]">Teacher@123</span>
          </p>
        </div>

        {/* Cyber Stats Cards (from Dataset for csp) */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '10', label: 'Structured Guides', desc: 'Pages 14 to 31', icon: BookOpen, color: 'text-[#00ff88]' },
              { num: '20', label: 'Exercise Keys', desc: 'Exercises 1.1 & 1.2', icon: Activity, color: 'text-[#00d4ff]' },
              { num: '10', label: 'Contradiction Proofs', desc: '√2, √3, √5, 5−√3, 3√2', icon: ShieldCheck, color: 'text-[#51cf66]' },
              { num: '03', label: 'Teaching Mediums', desc: 'English • తెలుగు • Tenglish', icon: Languages, color: 'text-[#ffd43b]' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="cyber-card p-5 flex flex-col items-center text-center group hover:border-[#00ff88] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/15 to-[#00d4ff]/15 border border-[#1e293b] group-hover:border-[#00ff88]/60 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="font-tech text-3xl font-black text-white group-hover:text-[#00ff88] transition-colors mb-1">
                    {stat.num}
                  </div>
                  <div className="text-xs font-tech font-bold text-[#e2e8f0] uppercase tracking-wider">{stat.label}</div>
                  <div className="text-[11px] text-[#94a3b8] font-sans mt-0.5">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Teaching Workflow */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-[11px] font-tech font-bold uppercase tracking-wider mb-2">
            PEDAGOGICAL PIPELINE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-tech text-white">
            THE 5-STAGE TEACHER GUIDANCE WORKFLOW
          </h2>
          <p className="text-xs text-[#94a3b8] mt-1 font-sans">
            How MathMentor AP prepares instructors to walk into any classroom with complete authority
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          {[
            { step: '01', title: 'UNDERSTAND', desc: 'Concept DNA & why students learn it', icon: BookOpen, color: 'text-[#00ff88]', border: 'border-[#00ff88]/30' },
            { step: '02', title: 'PLAN', desc: 'Sequential blackboard plan & pacing', icon: Lightbulb, color: 'text-[#00d4ff]', border: 'border-[#00d4ff]/30' },
            { step: '03', title: 'EXPLAIN', desc: 'Classroom stories & scripts in 3 languages', icon: Languages, color: 'text-[#ffd43b]', border: 'border-[#ffd43b]/30' },
            { step: '04', title: 'ENGAGE', desc: 'Interactive factor trees & track simulation', icon: Users, color: 'text-[#51cf66]', border: 'border-[#51cf66]/30' },
            { step: '05', title: 'ASSESS', desc: 'Misconception remedies & exit tickets', icon: CheckCircle2, color: 'text-[#ff6b6b]', border: 'border-[#ff6b6b]/30' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="cyber-card p-4 flex flex-col items-center text-center group hover:border-[#00ff88] transition-all"
              >
                <span className="text-[10px] font-mono font-bold text-[#64748b] mb-2 tracking-widest">PHASE {item.step}</span>
                <div className={`w-11 h-11 rounded-xl bg-[#0f1419] border ${item.border} ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-inner`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-tech font-bold text-white uppercase tracking-wider">{item.title}</h3>
                <p className="text-[11px] text-[#94a3b8] mt-1.5 font-sans leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Curriculum Spotlight Cards */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="cyber-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1e293b] gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#00ff88] uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#00ff88]" />
                CURRENT STATE CURRICULUM SPECIFICATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-tech text-white mt-1">
                Chapter 1 – REAL NUMBERS (Pages 14 to 31)
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/40 text-xs font-mono font-bold text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.15)]">
              10 Complete Lesson Blueprints
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-[#050810]/70 border border-[#1e293b] hover:border-[#00ff88]/50 transition-colors">
              <div className="flex items-center gap-2 text-[#00ff88] font-tech font-bold text-sm mb-2">
                <GitBranch className="w-4 h-4" />
                <span>The 32760 Factor Tree</span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Teach the Fundamental Theorem of Arithmetic (Theorem 1.1) with interactive step-by-step branching down to 2³ × 3² × 5 × 7 × 13.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#050810]/70 border border-[#1e293b] hover:border-[#00d4ff]/50 transition-colors">
              <div className="flex items-center gap-2 text-[#00d4ff] font-tech font-bold text-sm mb-2">
                <Users className="w-4 h-4" />
                <span>Sonia &amp; Ravi Circular Track</span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Exercise 1.1 Q7 animated: Sonia (18m) and Ravi (12m) running laps until they meet at 36 minutes (LCM).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#050810]/70 border border-[#1e293b] hover:border-[#ff6b6b]/50 transition-colors">
              <div className="flex items-center gap-2 text-[#ff6b6b] font-tech font-bold text-sm mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Contradiction Proof Mode</span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Step-by-step proof trainer for √2, √3, √5, Theorem 1.3 (p | a² ⟹ p | a), and isolating radicals for 5 − √3 and 3√2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 Questions Checklist */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="cyber-card p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-xl font-bold font-tech text-white">
              WHAT YOU GET IN EVERY LESSON GUIDE
            </h3>
            <p className="text-xs text-[#94a3b8] mt-1 font-sans">
              Every single concept answers the essential question: &quot;How do I teach this effectively in class?&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {[
              "1. What is the concept?",
              "2. Why are students learning it?",
              "3. How should I introduce it?",
              "4. How can I explain it as a story?",
              "5. What should I write on the board?",
              "6. What questions should I ask students?",
              "7. What examples should I demonstrate?",
              "8. What misconceptions should I watch for?",
              "9. How can I check whether students understood?",
              "10. What classroom activity can I conduct?",
              "11. How should I conclude the lesson?"
            ].map((q, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#050810]/70 border border-[#1e293b] text-[#e2e8f0] hover:border-[#00ff88]/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88] flex-shrink-0" />
                <span className="font-sans font-medium">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
