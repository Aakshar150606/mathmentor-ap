// client/src/pages/ProfilePage.tsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { CheckCircle2, Save } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { teacher, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: teacher?.name || '',
    schoolName: teacher?.schoolName || '',
    district: teacher?.district || 'Guntur',
    teachingMedium: teacher?.teachingMedium || 'Bilingual',
    experienceYears: teacher?.experienceYears || 5,
  });
  const [saved, setSaved] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(formData);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error('Error updating profile:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      <div className="pb-6 border-b border-[rgba(255,255,255,0.08)]">
        <h1 className="text-2xl sm:text-3xl font-extrabold font-tech tracking-wide text-white">
          TEACHER <span className="text-[#00ff88]">PROFILE</span>
        </h1>
        <p className="text-xs text-slate-400 font-mono mt-1">
          Instructor credentials, school designation, and pedagogical preferences
        </p>
      </div>

      <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-[rgba(0,255,136,0.25)] bg-[#0f1419] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-4 pb-6 border-b border-[rgba(255,255,255,0.08)] mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[rgba(0,255,136,0.15)] text-[#00ff88] font-bold text-2xl font-tech flex items-center justify-center border border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.3)]">
            {teacher?.name?.charAt(0) || 'T'}
          </div>
          <div>
            <h2 className="text-lg font-bold font-tech text-white">{teacher?.name}</h2>
            <p className="text-xs text-slate-400 font-mono">{teacher?.email}</p>
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded bg-[rgba(0,255,136,0.12)] text-[#00ff88] border border-[rgba(0,255,136,0.3)] text-[10px] font-mono font-bold tracking-wider">
              ROLE: SENIOR MATHS TEACHER
            </span>
          </div>
        </div>

        {saved && (
          <div className="mb-4 p-3.5 rounded-xl bg-[rgba(0,255,136,0.1)] border border-[#00ff88] text-[#00ff88] text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Profile updated successfully in state registry!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-slate-400 mb-1">FULL NAME</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
            />
          </div>

          <div>
            <label className="block text-slate-400 mb-1">SCHOOL / INSTITUTION</label>
            <input
              type="text"
              value={formData.schoolName}
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-400 mb-1">DISTRICT (AP)</label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1">TEACHING MEDIUM</label>
              <select
                value={formData.teachingMedium}
                onChange={(e) => setFormData({ ...formData, teachingMedium: e.target.value as any })}
                className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3 py-2.5 text-slate-200 focus:outline-none focus:border-[#00ff88]"
              >
                <option value="Bilingual">Bilingual (English + Telugu)</option>
                <option value="English">English</option>
                <option value="Telugu">Telugu</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 mb-1">EXPERIENCE (YEARS)</label>
            <input
              type="number"
              value={formData.experienceYears}
              onChange={(e) => setFormData({ ...formData, experienceYears: Number(e.target.value) })}
              className="w-full bg-[#0a0e1a] border border-[rgba(255,255,255,0.1)] rounded-xl px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00ff88]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="cyber-btn-primary w-full py-3.5 font-mono font-bold text-xs flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              {loading ? 'Saving Changes...' : 'Update Teacher Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
