// client/src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Teacher } from '../types';
import { api, getAuthToken, setAuthToken, removeAuthToken } from '../services/api';

interface AuthContextType {
  teacher: Teacher | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  demoLogin: () => Promise<void>;
  register: (data: any) => Promise<void>;
  verifyOtpAndLogin: (email: string, otp: string) => Promise<any>;
  logout: () => void;
  updateProfile: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = getAuthToken();
      if (token) {
        try {
          const res = await api.getMe();
          setTeacher(res.teacher);
        } catch (err) {
          console.error('Session expired or invalid:', err);
          removeAuthToken();
          setTeacher(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.login({ email, password });
    setAuthToken(res.token);
    setTeacher(res.teacher);
  };

  const demoLogin = async () => {
    const res = await api.demoLogin();
    setAuthToken(res.token);
    setTeacher(res.teacher);
  };

  const register = async (userData: any) => {
    const res = await api.register(userData);
    setAuthToken(res.token);
    setTeacher(res.teacher);
  };

  const verifyOtpAndLogin = async (email: string, otp: string) => {
    const res = await api.verifyOtp({ email, otp });
    setAuthToken(res.token);
    setTeacher(res.teacher);
    return res;
  };

  const updateProfile = async (data: any) => {
    const res = await api.updateProfile(data);
    setTeacher(res.teacher);
  };

  const logout = () => {
    removeAuthToken();
    setTeacher(null);
  };

  return (
    <AuthContext.Provider value={{ teacher, loading, login, demoLogin, register, verifyOtpAndLogin, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
