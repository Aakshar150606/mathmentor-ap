// client/src/services/api.ts

const API_BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

export const getAuthToken = (): string | null => {
  return localStorage.getItem('mathmentor_token');
};

export const setAuthToken = (token: string): void => {
  localStorage.setItem('mathmentor_token', token);
};

export const removeAuthToken = (): void => {
  localStorage.removeItem('mathmentor_token');
};

const request = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data as T;
};

export const api = {
  // Auth
  login: (credentials: any) => request<any>('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  demoLogin: () => request<any>('/auth/demo-login', { method: 'POST' }),
  register: (userData: any) => request<any>('/auth/register', { method: 'POST', body: JSON.stringify(userData) }),
  sendOtp: (userData: any) => request<any>('/auth/send-otp', { method: 'POST', body: JSON.stringify(userData) }),
  verifyOtp: (payload: { email: string; otp: string }) =>
    request<any>('/auth/verify-otp', { method: 'POST', body: JSON.stringify(payload) }),
  forgotPassword: (email: string) => request<any>('/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) }),
  getMe: () => request<any>('/auth/me'),
  updateProfile: (profileData: any) => request<any>('/auth/profile', { method: 'PUT', body: JSON.stringify(profileData) }),

  // Lessons
  getLessons: () => request<{ lessons: any[] }>('/lessons'),
  getLesson: (slug: string) => request<{ lesson: any }>(`/lessons/${slug}`),
  searchContent: (query: string) => request<{ results: any[]; query: string }>(`/lessons/search?q=${encodeURIComponent(query)}`),

  // Progress
  getProgress: () => request<{ progress: any[]; stats: any }>('/progress'),
  updateStatus: (lessonSlug: string, status: string) =>
    request<any>('/progress/update', { method: 'POST', body: JSON.stringify({ lessonSlug, status }) }),

  // Notes
  getNotes: (params?: { lessonId?: string; tag?: string }) => {
    const qs = new URLSearchParams(params as any).toString();
    return request<{ notes: any[] }>(`/notes${qs ? `?${qs}` : ''}`);
  },
  createNote: (noteData: any) => request<any>('/notes', { method: 'POST', body: JSON.stringify(noteData) }),
  updateNote: (id: string, noteData: any) => request<any>(`/notes/${id}`, { method: 'PUT', body: JSON.stringify(noteData) }),
  deleteNote: (id: string) => request<any>(`/notes/${id}`, { method: 'DELETE' }),

  // Exercises
  getExercises: (exerciseNumber?: string) => {
    const qs = exerciseNumber ? `?exerciseNumber=${encodeURIComponent(exerciseNumber)}` : '';
    return request<{ exercises: any[] }>(`/exercises${qs}`);
  },

  // AI Assistant
  askAssistant: (prompt: string, lessonContext?: string) =>
    request<{ answer: string; isOutOfScope: boolean; poweredBy?: string }>('/assistant/ask', {
      method: 'POST',
      body: JSON.stringify({ prompt, lessonContext }),
    }),
};
