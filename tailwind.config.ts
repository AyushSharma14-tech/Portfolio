import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--color-surface-2) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        'text-soft': 'rgb(var(--color-text-soft) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-2': 'rgb(var(--color-accent-2) / <alpha-value>)',
        'accent-3': 'rgb(var(--color-accent-3) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-xl': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-lg': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgb(var(--color-accent) / 0.55)',
        'glow-lg': '0 0 90px -10px rgb(var(--color-accent) / 0.65)',
        soft: '0 4px 24px -4px rgb(0 0 0 / 0.12), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
      },
      backgroundImage: {
        'grid-light': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E\")",
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        'mesh-aurora': 'radial-gradient(at 20% 20%, rgb(var(--color-accent) / 0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgb(var(--color-accent-2) / 0.30) 0px, transparent 50%), radial-gradient(at 0% 80%, rgb(var(--color-accent-3) / 0.25) 0px, transparent 50%), radial-gradient(at 80% 80%, rgb(var(--color-accent) / 0.20) 0px, transparent 50%)',
      },
      animation: {
        'gradient-pan': 'gradientPan 18s ease infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee 40s linear infinite reverse',
        'spin-slow': 'spin 12s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.95' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
