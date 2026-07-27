/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05030f',
        abyss: '#0a0620',
        nebula: '#150c33',
        ion: '#00e5ff',
        photon: '#7c5cff',
        signal: '#c026d3',
        core: '#f5f3ff',
        dim: '#8b86ad',
        alert: '#ff3d6e',
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        ion: '0 0 20px rgba(0,229,255,0.35), 0 0 60px rgba(0,229,255,0.12)',
        photon: '0 0 20px rgba(124,92,255,0.4), 0 0 70px rgba(124,92,255,0.15)',
        signal: '0 0 20px rgba(192,38,211,0.35)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, transparent, #05030f)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'spin-slower': 'spin 34s linear infinite',
        'spin-reverse': 'spin-reverse 24s linear infinite',
        'pulse-slow': 'pulse 3.4s cubic-bezier(0.4,0,0.6,1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out infinite 1.2s',
        scan: 'scan 2.6s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        twinkle: {
          '0%,100%': { opacity: 0.25 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
