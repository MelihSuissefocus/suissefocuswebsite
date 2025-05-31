/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#EAF2FF',  // Sehr helles Blau
          DEFAULT: '#2563EB', // Kräftiges Blau
          dark: '#1D4ED8',   // Dunkleres Blau
        },
        secondary: {
          light: '#F0FDF4',  // Sehr helles Mint
          DEFAULT: '#22C55E', // Mint Grün
          dark: '#16A34A',   // Dunkleres Mint
        },
        accent: {
          light: '#F9FAFB',  // Sehr helles Grau
          DEFAULT: '#1E293B', // Dunkles Slate
          dark: '#0F172A',   // Fast Schwarz (Tiefes Slate)
        },
        gradient: {
          start: '#EAF2FF',  // Sehr helles Blau
          middle: '#BFDBFE', // Mittelblau
          end: '#2563EB',    // Kräftiges Blau
        },
        'swiss-red': '#DC2626',  // Modernes, helles Rot
        'swiss-navy': '#1E3A8A', // Modernes, kräftiges Dunkelblau
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, var(--tw-gradient-start) 0%, var(--tw-gradient-middle) 50%, var(--tw-gradient-end) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #16A34A 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #EAF2FF 0%, #F0FDF4 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}; 