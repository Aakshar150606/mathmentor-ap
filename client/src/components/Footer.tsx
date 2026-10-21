// client/src/components/Footer.tsx
import React from 'react';
import { BookOpen, Shield, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050810]/95 border-t border-[#1e293b] py-8 px-4 sm:px-6 lg:px-8 mt-16 text-xs text-[#94a3b8] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/50 flex items-center justify-center text-[#00ff88] font-mono font-bold shadow-[0_0_15px_rgba(0,255,136,0.2)]">
            √x
          </div>
          <div>
            <p className="font-tech font-bold text-[#e2e8f0] tracking-wide">
              MATH<span className="text-[#00ff88]">MENTOR</span> AP • INSTRUCTOR PLATFORM
            </p>
            <p className="text-[11px] text-[#64748b] mt-0.5 font-sans">
              &quot;Teach the teacher how to teach the concept to students.&quot;
            </p>
          </div>
        </div>

        {/* Source Bounding Attribution */}
        <div className="p-3.5 rounded-xl bg-[#0f1419] border border-[#1e293b] max-w-lg text-[11px] text-[#94a3b8] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-1.5 text-[#00ff88] font-tech font-bold mb-1 tracking-wider text-[10px]">
            <Terminal className="w-3.5 h-3.5 text-[#00ff88]" />
            <span>OFFICIAL CURRICULUM BOUNDARY:</span>
          </div>
          <p className="font-sans leading-relaxed text-[#cbd5e1]">
            Government of Andhra Pradesh • Department of School Education<br />
            Mathematics Class 10 • Semester 1 • Chapter 1: <span className="text-[#00ff88] font-mono">REAL NUMBERS</span> (Pages 14 to 31).
          </p>
        </div>
      </div>
    </footer>
  );
};
