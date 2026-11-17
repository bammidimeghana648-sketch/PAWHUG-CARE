/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f5eff3',
        muted: '#b9b2c4',
        night: {
          950: '#07080f',
          900: '#0c0e1d',
          800: '#14172c',
          700: '#1d2140',
        },
        navy: {
          700: '#14305a',
          500: '#2a5597',
        },
        violet: {
          500: '#8a5cc4',
          400: '#a47fdc',
          300: '#c7aee9',
        },
        wine: {
          700: '#6b1d3a',
          600: '#7f2446',
        },
        cherry: {
          600: '#c81d3a',
          500: '#e0344f',
          400: '#f0637a',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Noto Sans Telugu', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.12)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.08)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
        heartbeat: 'heartbeat 1.8s ease-in-out infinite',
        drift: 'drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
