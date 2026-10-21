// client/src/pages/RegisterPage.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { UserPlus, AlertCircle, Mail, CheckCircle2, ArrowLeft, RefreshCw, KeyRound, ShieldCheck } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    schoolName: '',
    district: 'Guntur',
    teachingMedium: 'Bilingual',
    experienceYears: 5,
  });

  const [step, setStep] = useState<'form' | 'otp'>('form');
  const [otp, setOtp] = useState<string>('');
  const [previewOtp, setPreviewOtp] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { verifyOtpAndLogin } = useAuth();
  const navigate = useNavigate();

  const apDistricts = [
    'Anakapalli', 'Ananthapuramu', 'Annamayya', 'Bapatla', 'Chittoor',
    'Dr. B.R. Ambedkar Konaseema', 'East Godavari', 'Eluru', 'Guntur',
    'Kakinada', 'Krishna', 'Kurnool', 'Nandyal', 'NTR', 'Palnadu',
    'Parvathipuram Manyam', 'Prakasam', 'Sri Potti Sriramulu Nellore',
    'Sri Sathya Sai', 'Srikakulam', 'Tirupati', 'Visakhapatnam',
    'Vizianagaram', 'West Godavari', 'YSR Kadapa'
  ];

  // Step 1: Send 6-digit OTP to real email
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address (e.g. teacher@school.edu).');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const res = await api.sendOtp({
        ...formData,
        email: formData.email.trim(),
        name: formData.name.trim(),
        schoolName: formData.schoolName.trim(),
      });

      setSuccessMsg(res.message || `Verification code sent to ${formData.email}`);
      if (res.previewOtp) {
        setPreviewOtp(res.previewOtp);
      }
      setStep('otp');
    } catch (err: any) {
      setError(err.message || 'Failed to dispatch verification email');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP and activate account
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (otp.trim().length !== 6) {
      setError('Please enter the complete 6-digit verification code.');
      return;
    }

    setLoading(true);
    try {
      await verifyOtpAndLogin(formData.email.trim(), otp.trim());
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid or expired verification code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 px-4">
      <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-[rgba(0,255,136,0.25)] bg-[#0f1419] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        
        {/* Step Indicator Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[rgba(0,255,136,0.12)] border border-[rgba(0,255,136,0.3)] text-[#00ff88] flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(0,255,136,0.2)]">
            {step === 'form' ? <UserPlus className="w-7 h-7" /> : <KeyRound className="w-7 h-7 text-[#00d4ff]" />}
          </div>
          <h2 className="text-2xl font-bold font-tech text-white tracking-wide">
            {step === 'form' ? 'TEACHER REGISTRATION' : 'EMAIL VERIFICATION'}
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-1">
            {step === 'form' 
              ? 'Register instructor credentials with real email verification' 
              : `Enter the 6-digit OTP code sent to ${formData.email}`}
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 font-mono text-[11px]">
            <span className={`px-2.5 py-0.5 rounded-full border ${step === 'form' ? 'bg-[#00ff88]/20 border-[#00ff88] text-[#00ff88]' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
              1. Details
            </span>
            <span className="text-slate-600">&rarr;</span>
            <span className={`px-2.5 py-0.5 rounded-full border ${step === 'otp' ? 'bg-[#00d4ff]/20 border-[#00d4ff] text-[#00d4ff]' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
              2. Email OTP
            </span>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3.5 rounded-xl bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.4)] text-[#ff6b6b] text-xs font-mono flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3.5 rounded-xl bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.4)] text-[#00ff88] text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* STEP 1: REGISTRATION FORM */}
        {step === 'form' && (
          <form onSubmit={handleSendOtp} className="space-y-4 text-xs font-mono">
            <div>
              <label className="block text-slate-400 mb-1">TEACHER FULL NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
                placeholder="e.g. Sri. K. Venkateswara Rao"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
                  placeholder="teacher@school.ap.gov.in"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">PASSWORD (MIN 6 CHARS)</label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">SCHOOL / INSTITUTION</label>
              <input
                type="text"
                required
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
                placeholder="e.g. Z.P. High School, Tenali"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1">AP DISTRICT</label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-[#00ff88]"
                >
                  {apDistricts.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">CLASSROOM MEDIUM</label>
                <select
                  value={formData.teachingMedium}
                  onChange={(e) => setFormData({ ...formData, teachingMedium: e.target.value as any })}
                  className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-[#00ff88]"
                >
                  <option value="Bilingual">Bilingual (English + Telugu)</option>
                  <option value="English">English Medium</option>
                  <option value="Telugu">Telugu Medium</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">TEACHING EXPERIENCE (YEARS)</label>
              <input
                type="number"
                min="0"
                max="40"
                value={formData.experienceYears}
                onChange={(e) => setFormData({ ...formData, experienceYears: Number(e.target.value) })}
                className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-[#00ff88]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="cyber-btn-primary w-full py-3.5 font-mono font-bold text-xs shadow-lg mt-2 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {loading ? 'Dispatching Verification Code...' : 'Send 6-Digit Email Verification Code'}
            </button>
          </form>
        )}

        {/* STEP 2: 6-DIGIT OTP VERIFICATION */}
        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-5 text-xs font-mono">
            <div className="bg-[#0a0e1a] border border-[rgba(0,212,255,0.3)] rounded-xl p-4 text-center">
              <ShieldCheck className="w-8 h-8 text-[#00d4ff] mx-auto mb-2" />
              <p className="text-slate-300 font-sans text-xs">
                We sent a 6-digit confirmation code to:
              </p>
              <p className="text-[#00d4ff] font-bold text-sm mt-1">{formData.email}</p>
              <p className="text-slate-500 text-[11px] mt-1">Code is valid for 10 minutes</p>

              {previewOtp && (
                <div className="mt-3 p-2 rounded-lg bg-[rgba(0,255,136,0.1)] border border-[#00ff88]/30 text-[#00ff88] text-[11px] font-mono">
                  <span>Testing Code: </span>
                  <strong className="tracking-widest font-black text-sm">{previewOtp}</strong>
                  <span className="block text-[10px] text-slate-400 mt-0.5">(Also printed in your server terminal console)</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-slate-300 text-center mb-2 font-bold tracking-wider">
                ENTER 6-DIGIT VERIFICATION CODE
              </label>
              <input
                type="text"
                maxLength={6}
                autoFocus
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                className="w-full bg-[#050810] border-2 border-[#00ff88] rounded-xl px-4 py-3 text-center text-2xl font-mono tracking-[0.5em] text-[#00ff88] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                placeholder="••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="cyber-btn-primary w-full py-3.5 font-mono font-bold text-xs shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <ShieldCheck className="w-4 h-4" />
              {loading ? 'Verifying Code...' : 'Verify Code & Activate Account'}
            </button>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep('form')}
                className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px]"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Change Email
              </button>

              <button
                type="button"
                onClick={handleSendOtp}
                disabled={loading}
                className="text-[#00d4ff] hover:underline flex items-center gap-1 text-[11px]"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Resend Code
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] text-center text-xs text-slate-400 font-sans">
          Already registered?{' '}
          <Link to="/login" className="text-[#00ff88] font-bold font-mono hover:underline">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
};
