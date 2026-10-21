// client/src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  BookOpen, Search, Bot, User, LogOut, Menu, X, Sparkles,
  Layers, ShieldCheck, Dumbbell, Calendar, FileText, ChevronDown, Shield
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenAssistant }) => {
  const { teacher, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState<boolean>(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: BookOpen },
    { name: 'Story Mode', path: '/story-mode', icon: Sparkles },
    { name: 'Proof Mode', path: '/proof-mode', icon: ShieldCheck },
    { name: 'Interactive Lab', path: '/interactive-lab', icon: Layers },
    { name: 'Exercises', path: '/exercises', icon: Dumbbell },
    { name: 'Planner', path: '/planner', icon: Calendar },
    { name: 'Notes', path: '/notes', icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#050810]/95 backdrop-blur-xl border-b border-[#1e293b] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with Cyber Aesthetic */}
        <Link to={teacher ? "/dashboard" : "/"} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 border border-[#00ff88]/50 flex items-center justify-center text-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.25)] group-hover:scale-105 transition-transform">
            <span className="font-mono font-black text-sm tracking-tighter text-[#00ff88]">√x</span>
            <div className="absolute inset-0 rounded-xl border border-[#00ff88] animate-ping opacity-20 pointer-events-none"></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-tech font-extrabold text-base tracking-wider text-white group-hover:text-[#00ff88] transition-colors">
                MATH<span className="text-[#00ff88]">MENTOR</span> <span className="text-[#00d4ff] text-xs font-mono">AP</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] font-tech font-bold uppercase tracking-wider hidden sm:inline-block shadow-[0_0_10px_rgba(0,255,136,0.15)]">
                Class 10
              </span>
            </div>
            <p className="text-[10px] text-[#94a3b8] -mt-0.5 hidden sm:block font-sans">
              Learn the concept. Learn how to teach it.
            </p>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        {teacher && (
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/40 shadow-[0_0_15px_rgba(0,255,136,0.15)] font-bold'
                      : 'text-[#94a3b8] border border-transparent hover:text-[#e2e8f0] hover:bg-[#1a1f2e] hover:border-[#1e293b]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#00ff88]' : 'text-[#64748b]'}`} />
                  {link.name}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_6px_#00ff88]"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Search Trigger */}
          {teacher && (
            <button
              onClick={onOpenSearch}
              title="Search Curriculum (Ctrl+K)"
              className="px-3 py-1.5 rounded-lg bg-[#0f1419] hover:bg-[#1a1f2e] text-[#94a3b8] hover:text-[#00ff88] border border-[#1e293b] hover:border-[#00ff88]/40 transition-all flex items-center gap-2 text-xs shadow-sm"
            >
              <Search className="w-3.5 h-3.5 text-[#00ff88]" />
              <span className="hidden md:inline font-mono text-[11px] text-[#64748b]">Search (Ctrl+K)</span>
            </button>
          )}

          {/* AI Assistant Trigger */}
          {teacher && (
            <button
              onClick={onOpenAssistant}
              className="cyber-btn cyber-btn-primary btn-shine-sweep text-xs py-1.5 px-3.5 rounded-lg flex items-center gap-1.5 font-bold shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-transform active:scale-95"
            >
              <Bot className="w-4 h-4 text-[#050810]" />
              <span className="hidden sm:inline font-tech tracking-wider text-[#050810]">AI ASSISTANT</span>
            </button>
          )}

          {/* Teacher Profile / Login */}
          {teacher ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0f1419] border border-[#1e293b] hover:border-[#00ff88]/40 hover:bg-[#1a1f2e] transition-all text-[#e2e8f0]"
              >
                <div className="w-6 h-6 rounded-md bg-[#00ff88]/20 border border-[#00ff88] text-[#00ff88] flex items-center justify-center font-bold text-xs font-mono">
                  {teacher.name.charAt(0)}
                </div>
                <span className="text-xs font-semibold text-[#e2e8f0] hidden md:block max-w-[120px] truncate">
                  {teacher.name.split(' ')[0]}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748b] hidden md:block" />
              </button>

              {/* Profile Dropdown */}
              {profileDropdownOpen && (
                <div
                  onMouseLeave={() => setProfileDropdownOpen(false)}
                  className="absolute right-0 mt-2 w-60 rounded-xl bg-[#0f1419] border border-[#1e293b] shadow-[0_10px_40px_rgba(0,0,0,0.8)] py-2 z-50 text-xs backdrop-blur-xl animate-fadeIn"
                >
                  <div className="px-3.5 py-2.5 border-b border-[#1e293b] bg-[#050810]/60">
                    <p className="font-bold text-[#e2e8f0] truncate">{teacher.name}</p>
                    <p className="text-[11px] text-[#94a3b8] truncate font-mono">{teacher.email}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30 text-[10px] font-mono font-bold">
                      ROLE: {teacher.role}
                    </span>
                  </div>

                  <Link
                    to="/profile"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center gap-2 px-3.5 py-2 text-[#94a3b8] hover:text-[#00ff88] hover:bg-[#1a1f2e] transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-[#00ff88]" />
                    Teacher Profile
                  </Link>

                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      handleLogout();
                    }}
                    className="w-full text-left flex items-center gap-2 px-3.5 py-2 text-[#ff4757] hover:bg-[#ff4757]/10 transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#94a3b8] hover:text-[#00ff88] hover:bg-[#1a1f2e] transition-colors"
              >
                Teacher Sign In
              </Link>
              <Link
                to="/register"
                className="cyber-btn cyber-btn-primary btn-shine-sweep py-1.5 px-3.5 rounded-lg text-xs font-bold font-tech"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile menu toggle */}
          {teacher && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#94a3b8] hover:text-[#00ff88] hover:bg-[#1a1f2e] lg:hidden border border-[#1e293b]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00ff88]" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && teacher && (
        <div className="lg:hidden bg-[#0a0e1a] border-b border-[#1e293b] px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold ${
                  isActive
                    ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/40 font-bold'
                    : 'text-[#94a3b8] hover:bg-[#1a1f2e] hover:text-[#e2e8f0]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#00ff88]' : 'text-[#64748b]'}`} />
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
