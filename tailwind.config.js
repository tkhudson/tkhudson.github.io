/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tech: ['Fira Code', 'monospace'],
        gaming: ['Rajdhani', 'sans-serif'],
        ministry: ['Cinzel', 'serif'],
      },
      colors: {
        // Global dark theme
        background: '#121212',
        surface: '#1E1E1E',
        // Theme overrides
        tech: {
          bg: '#0A0A0A',
          accent: '#00FF41',
          secondary: '#333333',
        },
        gaming: {
          bg: '#D4A574',
          accent: '#B8471A',
          secondary: '#8B4513',
        },
        ministry: {
          bg: '#1A1A1A',
          accent: '#8B6914',
          secondary: '#9B1D1D',
        },
      },
      animation: {
        'glitch': 'glitch 0.3s ease-in-out',
        'type': 'type 2s steps(40, end)',
        'flicker': 'flicker 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        type: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
