/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff88',
          hover: '#00cc6a',
          glow: 'rgba(0, 255, 136, 0.3)',
        },
        secondary: {
          DEFAULT: '#00d4ff',
          hover: '#00aacc',
          glow: 'rgba(0, 212, 255, 0.3)',
        },
        accent: '#ff6b6b',
        success: '#51cf66',
        warning: '#ffd43b',
        danger: '#ff4757',
        cyber: {
          bg: '#0a0e1a',
          darker: '#050810',
          card: '#0f1419',
          hover: '#1a1f2e',
          border: '#1e293b',
          'border-glow': 'rgba(0, 255, 136, 0.25)',
          'border-cyan': 'rgba(0, 212, 255, 0.25)',
          text: '#e2e8f0',
          muted: '#94a3b8',
          subtle: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'sans-serif'],
        tech: ['Orbitron', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 255, 136, 0.2)',
        'glow-primary': '0 0 30px rgba(0, 255, 136, 0.3)',
        'glow-secondary': '0 0 30px rgba(0, 212, 255, 0.3)',
        'glow-strong': '0 0 50px rgba(0, 255, 136, 0.5)',
        'cyber-card': '0 10px 30px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0, 255, 136, 0.03)',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%)',
        'gradient-card-hover': 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}
