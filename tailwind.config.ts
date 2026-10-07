import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Goli', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Goli', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        crail: {
          DEFAULT: "var(--blue)",
          light: "var(--link)",
          dark: "var(--blue)",
        },
        cloudy: {
          DEFAULT: "var(--text-muted)",
          light: "var(--text)",
          dark: "var(--text-muted)",
        },
        pampas: {
          DEFAULT: "var(--text)",
          dark: "var(--text-muted)",
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
