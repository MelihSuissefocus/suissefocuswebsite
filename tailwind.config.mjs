/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#5E9BFF',
        'brand-mint': '#2FD8A7',
        'text-dark': '#2D2D2D',
        'swiss-red': '#5E9BFF',
        'swiss-navy': '#2D2D2D',
        gradient: {
          start: '#C9FADB',
          end: '#99BFFC',
        },
        gray: {
          50: '#F9FAFB',
          100: '#EFF1F5',
          200: '#DCE0E6',
          300: '#C4C8CF',
          400: '#A9AFB7',
          500: '#979CA4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, var(--tw-gradient-start) 0%, var(--tw-gradient-end) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #5E9BFF 0%, #2FD8A7 100%)',
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