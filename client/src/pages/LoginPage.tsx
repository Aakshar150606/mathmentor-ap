// client/src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { LogIn, Sparkles, AlertCircle, Lock, Mail } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('teacher@mathmentor.ap');
  const [password, setPassword] = useState<string>('Teacher@123');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Forgot password modal state
  const [forgotModalOpen, setForgotModalOpen] = useState<boolean>(false);
  const [forgotEmail, setForgotEmail] = useState<string>('');
  const [forgotMessage, setForgotMessage] = useState<string>('');

  const { login, demoLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid teacher credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoAccess = async () => {
    setError('');
    setLoading(true);
    try {
      await demoLogin();
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Demo teacher session failed to initialize');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotMessage('');
    if (!forgotEmail.trim()) return;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(forgotEmail.trim())) {
      setForgotMessage('Please enter a valid email address format.');
      return;
    }

    try {
      const res = await api.forgotPassword(forgotEmail.trim());
      setForgotMessage(res.message);
    } catch (err: any) {
      setForgotMessage(err.message || 'Failed to dispatch reset instructions');
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 px-4">
      <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-[rgba(0,255,136,0.25)] bg-[#0f1419] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[rgba(0,255,136,0.12)] border border-[rgba(0,255,136,0.3)] text-[#00ff88] flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(0,255,136,0.2)]">
            <LogIn className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold font-tech text-white tracking-wide">TEACHER PORTAL</h2>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Access teaching cockpit for AP Class 10 Real Numbers
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3.5 rounded-xl bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.4)] text-[#ff6b6b] text-xs font-mono flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* 1-Click Demo Login Banner */}
        <div className="mb-6 p-4 rounded-xl bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.25)] text-center space-y-2.5">
          <p className="text-xs text-slate-300 font-sans">
            Reviewing prototype? Instant access with demo teacher profile:
          </p>
          <button
            type="button"
            onClick={handleDemoAccess}
            disabled={loading}
            className="w-full py-2.5 rounded-xl bg-[rgba(0,212,255,0.18)] hover:bg-[rgba(0,212,255,0.28)] text-[#00d4ff] border border-[#00d4ff] font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)]"
          >
            <Sparkles className="w-4 h-4" />
            1-Click Demo Teacher Access
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-slate-400 mb-1">TEACHER EMAIL ADDRESS</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl pl-9 pr-3 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88] text-xs"
                placeholder="teacher@school.ap.gov.in"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-slate-400">PASSWORD</label>
              <button
                type="button"
                onClick={() => setForgotModalOpen(true)}
                className="text-[11px] text-[#00d4ff] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl pl-9 pr-3 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88] text-xs"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cyber-btn-primary w-full py-3 font-mono font-bold text-xs mt-2"
          >
            {loading ? 'Authenticating Teacher...' : 'Sign In as Teacher'}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] text-center text-xs text-slate-400 font-sans">
          New instructor?{' '}
          <Link to="/register" className="text-[#00ff88] font-bold font-mono hover:underline">
            Register Teacher Account
          </Link>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050810]/80 backdrop-blur-md">
          <div className="w-full max-w-sm cyber-card p-6 rounded-2xl border border-[rgba(0,212,255,0.3)] bg-[#0f1419] shadow-2xl">
            <h3 className="text-base font-bold font-tech text-white mb-2">TEACHER PASSWORD RECOVERY</h3>
            <p className="text-xs text-slate-400 font-sans mb-4">
              Enter your registered teacher email to receive secure recovery instructions.
            </p>

            {forgotMessage ? (
              <div className="p-3.5 rounded-xl bg-[rgba(0,255,136,0.1)] border border-[#00ff88] text-[#00ff88] text-xs font-mono space-y-3">
                <p>{forgotMessage}</p>
                <button
                  onClick={() => {
                    setForgotModalOpen(false);
                    setForgotMessage('');
                  }}
                  className="cyber-btn-primary w-full py-2 font-bold text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-3 text-xs font-mono">
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="teacher@school.ap.gov.in"
                  className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-[#00d4ff]"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setForgotModalOpen(false)}
                    className="cyber-btn-secondary flex-1 py-2 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="cyber-btn-primary flex-1 py-2 font-bold"
                  >
                    Send Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
