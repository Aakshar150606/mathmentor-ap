// client/src/components/SearchModal.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Search, X, ChevronRight, Sparkles } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await api.searchContent(query.trim());
        setResults(res.results || []);
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#050810]/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl cyber-card rounded-2xl border border-[rgba(0,255,136,0.3)] bg-[#0f1419] shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[75vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[rgba(255,255,255,0.08)] flex items-center gap-3 bg-[#0a0e1a]">
          <Search className="w-5 h-5 text-[#00ff88]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search concepts, examples, proofs (e.g. prime factorisation, 32760, irrational, 4^n)..."
            className="flex-1 bg-transparent text-sm font-mono text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-[#141b24] border border-[rgba(255,255,255,0.1)] rounded-md">
            ESC
          </button>
        </div>

        {/* Quick Search Chips */}
        <div className="p-3 bg-[#0a0e1a]/60 border-b border-[rgba(255,255,255,0.08)] flex flex-wrap gap-2 text-xs font-mono">
          <span className="text-slate-400 py-1 text-[11px]">QUICK QUERY:</span>
          {['prime factorisation', '32760', '4^n', 'Sonia & Ravi', '√2 proof', 'HCF LCM 3 numbers'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-lg bg-[#141b24] hover:bg-[#1e293b] text-slate-300 hover:text-[#00ff88] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,255,136,0.3)] transition-colors text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5 bg-[#050810] cyber-scrollbar">
          {loading && (
            <div className="text-center py-8 text-slate-400 font-mono text-sm flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00ff88] animate-spin" />
              Searching AP Class 10 Real Numbers index...
            </div>
          )}

          {!loading && results.length > 0 && (
            results.map((item) => (
              <div
                key={item.slug}
                onClick={() => {
                  onClose();
                  navigate(`/teach/${item.slug}`);
                }}
                className="p-4 rounded-xl bg-[#141b24] hover:bg-[#1a2332] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,255,136,0.3)] cursor-pointer transition-all flex items-center justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(0,255,136,0.15)] text-[#00ff88] border border-[rgba(0,255,136,0.3)] font-bold">
                      LESSON {item.lessonNumber}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Pages {item.sourcePages}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#00ff88] transition-colors font-sans">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 font-sans">{item.objective}</p>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#00ff88] group-hover:translate-x-1 transition-all" />
              </div>
            ))
          )}

          {!loading && query && results.length === 0 && (
            <div className="text-center py-10 text-slate-400 font-mono text-sm">
              No results found for &quot;{query}&quot; within Pages 14–31.
            </div>
          )}

          {!query && (
            <div className="text-center py-12 text-slate-500 font-mono text-xs">
              Type keywords above to query all lessons, proofs, board plans, and textbook examples.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
