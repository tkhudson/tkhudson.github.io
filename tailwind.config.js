/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tech': ['Fira Code', 'monospace'],
        'gaming': ['Orbitron', 'sans-serif'],
        'ministry': ['Cinzel', 'serif'],
      },
      colors: {
        // Matrix theme
        matrix: {
          green: '#00ff41',
          dark: '#0a0a0a',
          gray: '#1a1a1a',
        },
        // Post-apocalyptic theme
        wasteland: {
          tan: '#d2b48c',
          metal: '#8b4513',
          smoke: '#696969',
          blood: '#dc143c',
        },
        // Crusader theme
        crusader: {
          stone: '#708090',
          gold: '#ffd700',
          crimson: '#dc143c',
          parchment: '#f5f5dc',
        },
      },
      animation: {
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'dust': 'dust 8s ease-in-out infinite',
        'torch': 'torch 2s ease-in-out infinite alternate',
        'banner': 'banner 3s ease-in-out infinite',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
        },
        'dust': {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0) rotate(0deg)' },
          '50%': { opacity: '0.6', transform: 'translateY(-20px) rotate(180deg)' },
        },
        'torch': {
          '0%': { filter: 'brightness(1) contrast(1)' },
          '50%': { filter: 'brightness(1.2) contrast(1.1)' },
          '100%': { filter: 'brightness(0.9) contrast(0.9)' },
        },
        'banner': {
          '0%, 100%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
