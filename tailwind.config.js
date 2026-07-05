/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#050507',
          900: '#0a0a0e',
          800: '#101017',
          700: '#17171f',
        },
        accent: {
          violet: '#8b5cf6',
          cyan: '#22d3ee',
          fuchsia: '#e879f9',
          gold: '#f5c26b',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'grid-lines': 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(139,92,246,0.55)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.55)',
        'inner-glass': 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
      },
      animation: {
        'gradient-move': 'gradient-move 12s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
