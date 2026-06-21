/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyber: {
          50:  '#f0fffe',
          100: '#ccfffe',
          200: '#99fffe',
          300: '#5cfffe',
          400: '#00f5ff',
          500: '#00d4e6',
          600: '#00a8bf',
          700: '#008599',
          800: '#006a7a',
          900: '#005566',
        },
        void: {
          900: '#020408',
          800: '#050c14',
          700: '#091220',
          600: '#0d1a2e',
          500: '#112240',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.4s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f5ff33, 0 0 10px #00f5ff22' },
          '100%': { boxShadow: '0 0 10px #00f5ff66, 0 0 20px #00f5ff44, 0 0 40px #00f5ff22' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
