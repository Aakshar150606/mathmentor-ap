// client/src/App.tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';

import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { TeachingModePage } from './pages/TeachingModePage';
import { StoryModePage } from './pages/StoryModePage';
import { ProofModePage } from './pages/ProofModePage';
import { InteractiveLabPage } from './pages/InteractiveLabPage';
import { ExercisesPage } from './pages/ExercisesPage';
import { LessonPlannerPage } from './pages/LessonPlannerPage';
import { TeacherNotesPage } from './pages/TeacherNotesPage';
import { ProfilePage } from './pages/ProfilePage';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { teacher, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-slate-400 text-sm">
        Verifying teacher authorization...
      </div>
    );
  }
  if (!teacher) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export const App: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [assistantOpen, setAssistantOpen] = useState<boolean>(false);
  const location = useLocation();

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0e1a] text-[#e2e8f0] cyber-grid-bg relative selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAssistant={() => setAssistantOpen(true)}
      />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Teacher Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/teach/:slug" element={<ProtectedRoute><TeachingModePage /></ProtectedRoute>} />
          <Route path="/story-mode" element={<ProtectedRoute><StoryModePage /></ProtectedRoute>} />
          <Route path="/proof-mode" element={<ProtectedRoute><ProofModePage /></ProtectedRoute>} />
          <Route path="/interactive-lab" element={<ProtectedRoute><InteractiveLabPage /></ProtectedRoute>} />
          <Route path="/exercises" element={<ProtectedRoute><ExercisesPage /></ProtectedRoute>} />
          <Route path="/planner" element={<ProtectedRoute><LessonPlannerPage /></ProtectedRoute>} />
          <Route path="/notes" element={<ProtectedRoute><TeacherNotesPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <AIAssistantDrawer isOpen={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </div>
  );
};

export default App;
