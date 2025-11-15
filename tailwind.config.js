/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        // Theme classes that might be dynamically applied
        'bg-tech-bg', 'text-tech-accent', 'bg-primary', 'text-accent',
        'bg-persevus-bg', 'text-persevus-accent',
        // Animation classes
        'animate-none', 'motion-reduce:animate-none',
        'motion-reduce:transform-none', 'motion-reduce:transition-none'
      ]
    }
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tech: ['Fira Code', 'monospace'],
        gaming: ['Rajdhani', 'sans-serif'],
        ministry: ['Cinzel', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
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
        persevus: {
          bg: '#2D1B0B',
          accent: '#B8471A',
          dust: '#D4A574',
          metal: '#4A4A4A',
          smoke: '#2D1B0B',
        },
        parchment: '#E3DABF',
        // Serviam theme colors
        primary: '#1a1a1a',
        secondary: '#2a2a2a',
        accent: '#d4af37',
        'accent-dark': '#b8941f',
      },
      animation: {
        'glitch': 'glitch 0.3s ease-in-out',
        'type': 'type 2s steps(40, end)',
        'flicker': 'flicker 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
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
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      screens: {
        'xs': '475px',
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.75',
            letterSpacing: '-0.01em',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              '&:hover': {
                opacity: 0.8,
              },
            },
            strong: {
              fontWeight: '600',
            },
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '2.5rem',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '600',
              lineHeight: '2.25rem',
              letterSpacing: '-0.025em',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '2rem',
            },
            h4: {
              fontSize: '1.25rem',
              fontWeight: '600',
              lineHeight: '1.75rem',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            ul: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            ol: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeft: '4px solid currentColor',
              paddingLeft: '1rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            code: {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            pre: {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    // Reduced motion support
    function({ addUtilities, theme }) {
      addUtilities({
        '.motion-safe': {
          '@media (prefers-reduced-motion: no-preference)': {},
        },
        '.motion-reduce': {
          '@media (prefers-reduced-motion: reduce)': {},
        },
        '.motion-reduce\\:animate-none': {
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        },
        '.motion-reduce\\:transform-none': {
          '@media (prefers-reduced-motion: reduce)': {
            transform: 'none',
          },
        },
        '.motion-reduce\\:transition-none': {
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        },
      });
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
