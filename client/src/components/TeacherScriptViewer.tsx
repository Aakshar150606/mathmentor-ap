// client/src/components/TeacherScriptViewer.tsx
import React, { useState } from 'react';
import { Languages, Volume2, Copy, Check } from 'lucide-react';

interface TeacherScriptViewerProps {
  script: {
    english: string;
    telugu: string;
    tenglish: string;
  };
}

export const TeacherScriptViewer: React.FC<TeacherScriptViewerProps> = ({ script }) => {
  const [lang, setLang] = useState<'english' | 'telugu' | 'tenglish'>('english');
  const [copied, setCopied] = useState<boolean>(false);

  const currentText = script[lang] || '';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cyber-card p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-[#1e293b] gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/40 flex items-center justify-center">
            <Volume2 className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-tech font-bold text-white">CLASSROOM SPOKEN SCRIPT</h4>
        </div>

        {/* Language Tabs */}
        <div className="flex bg-[#050810] p-1 rounded-lg border border-[#1e293b] text-xs font-mono">
          <button
            onClick={() => setLang('english')}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              lang === 'english' ? 'bg-[#00ff88] text-[#050810] font-bold shadow-[0_0_10px_rgba(0,255,136,0.3)]' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang('telugu')}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              lang === 'telugu' ? 'bg-[#00ff88] text-[#050810] font-bold shadow-[0_0_10px_rgba(0,255,136,0.3)]' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            తెలుగు (Telugu)
          </button>
          <button
            onClick={() => setLang('tenglish')}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              lang === 'tenglish' ? 'bg-[#00ff88] text-[#050810] font-bold shadow-[0_0_10px_rgba(0,255,136,0.3)]' : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Tenglish
          </button>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-xl bg-[#050810]/80 border border-[#1e293b] text-sm leading-relaxed text-[#e2e8f0]">
        <p className="whitespace-pre-line font-sans italic text-[#f1f5f9]">
          &quot;{currentText}&quot;
        </p>
      </div>

      <div className="mt-3.5 flex items-center justify-between text-xs text-[#94a3b8]">
        <span className="flex items-center gap-1.5 font-sans">
          <Languages className="w-3.5 h-3.5 text-[#00d4ff]" />
          Natural conversational phrasing for active student engagement
        </span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0f1419] hover:bg-[#1a1f2e] text-[#cbd5e1] hover:text-[#00ff88] border border-[#1e293b] font-mono text-xs font-semibold transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied' : 'Copy Script'}
        </button>
      </div>
    </div>
  );
};
