import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Text', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        crail: {
          DEFAULT: "#2997FF",
          light: "#64B5FF",
          dark: "#1478D4",
        },
        cloudy: {
          DEFAULT: "#86868B",
          light: "#F5F5F7",
          dark: "#6E6E73",
        },
        pampas: {
          DEFAULT: "#F5F5F7",
          dark: "#D2D2D7",
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

