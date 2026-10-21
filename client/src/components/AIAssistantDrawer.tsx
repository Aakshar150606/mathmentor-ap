// client/src/components/AIAssistantDrawer.tsx
import React, { useState } from 'react';
import { api } from '../services/api';
import { Bot, Send, X, Sparkles, AlertCircle } from 'lucide-react';

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lessonContext?: string;
}

export const AIAssistantDrawer: React.FC<AIAssistantDrawerProps> = ({ isOpen, onClose, lessonContext }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string; isOutOfScope?: boolean; poweredBy?: string }>>([
    {
      sender: 'assistant',
      text: "Namaste, Teacher! I am MathMentor, your digital teaching assistant. I am specialized strictly in the Andhra Pradesh Class 10 Real Numbers curriculum (Pages 14–31). How can I assist you with introducing a concept, planning your board, or explaining proofs to your students today?",
    },
  ]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const suggestedPrompts = [
    "How do I introduce the Factor Tree of 32760?",
    "Explain why 4ⁿ cannot end in digit zero.",
    "How do I explain Sonia and Ravi's sports track problem?",
    "Give me the 6 steps to teach √2 is irrational.",
    "Why does HCF × LCM = product fail for three numbers?",
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    setMessages(prev => [...prev, { sender: 'user', text: textToSend }]);
    setInput('');
    setLoading(true);

    try {
      const res = await api.askAssistant(textToSend, lessonContext);
      setMessages(prev => [
        ...prev,
        { sender: 'assistant', text: res.answer, isOutOfScope: res.isOutOfScope, poweredBy: res.poweredBy }
      ]);
    } catch (err: any) {
      setMessages(prev => [
        ...prev,
        { sender: 'assistant', text: "Error consulting teaching assistant. Please ensure backend is running." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-[#050810]/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-[#0f1419] border-l border-[rgba(0,255,136,0.3)] flex flex-col h-full shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        {/* Terminal Header */}
        <div className="p-4 border-b border-[rgba(255,255,255,0.08)] flex items-center justify-between bg-[#0a0e1a]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[rgba(0,255,136,0.15)] flex items-center justify-center text-[#00ff88] border border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)]">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold font-tech text-white text-sm">MATHMENTOR AI ASSISTANT</h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[rgba(0,212,255,0.15)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)] font-mono font-semibold">
                  Pages 14–31
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">Real Numbers Curriculum Agent</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#141b24] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050810] cyber-scrollbar">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[88%] p-4 text-xs md:text-sm leading-relaxed whitespace-pre-line rounded-2xl border ${
                  msg.sender === 'user'
                    ? 'bg-[rgba(0,212,255,0.15)] text-white border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.2)]'
                    : msg.isOutOfScope
                    ? 'bg-[rgba(255,107,107,0.1)] border-[#ff6b6b] text-red-200'
                    : 'bg-[#141b24] border-[rgba(255,255,255,0.08)] text-slate-200 shadow-md'
                }`}
              >
                {msg.isOutOfScope && (
                  <div className="flex items-center gap-1.5 text-[#ff6b6b] font-mono font-bold mb-1.5 text-xs">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>CURRICULUM BOUNDARY NOTIFICATION:</span>
                  </div>
                )}
                {msg.poweredBy === 'gemini' && (
                  <div className="flex items-center gap-1.5 text-[#00d4ff] font-mono text-[10px] mb-2 bg-[rgba(0,212,255,0.1)] px-2 py-0.5 rounded border border-[rgba(0,212,255,0.25)] w-fit">
                    <Sparkles className="w-3 h-3 text-[#00d4ff]" />
                    <span>Live Gemini 1.5 Flash Grounded</span>
                  </div>
                )}
                <span className="font-sans">{msg.text}</span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#141b24] border border-[rgba(0,255,136,0.3)] rounded-xl p-3.5 text-xs font-mono text-[#00ff88] flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.2)]">
                <Sparkles className="w-4 h-4 text-[#00ff88] animate-spin" />
                <span>Consulting AP Textbook vector index...</span>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Prompts Carousel */}
        <div className="p-3 border-t border-[rgba(255,255,255,0.08)] bg-[#0a0e1a] overflow-x-auto flex gap-2">
          {suggestedPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              className="text-[11px] font-mono whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#141b24] hover:bg-[#1a2332] text-slate-300 hover:text-white border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,255,136,0.3)] flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-[#00ff88]" />
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-[rgba(255,255,255,0.08)] bg-[#0f1419] flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about teaching pages 14–31..."
            className="flex-1 bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="cyber-btn-primary p-2.5 rounded-xl disabled:opacity-40"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
