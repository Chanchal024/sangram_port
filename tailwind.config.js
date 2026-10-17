/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090713',
        card: '#0f0b1e',
        cardBorder: 'rgba(168, 85, 247, 0.18)',
        brand: {
          purple: '#8b5cf6',
          violet: '#a855f7',
          neon: '#9333ea',
          glow: '#c084fc',
          accent: '#7c3aed',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 50px -10px rgba(168, 85, 247, 0.45)',
        'glow-card': '0 0 35px -5px rgba(139, 92, 246, 0.3)',
        'glow-sm': '0 0 20px -3px rgba(168, 85, 247, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
