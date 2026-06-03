import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      colors: {
        crail: {
          DEFAULT: "#C15F3C",
          light: "#D4795A",
          dark: "#A04A2C",
        },
        cloudy: {
          DEFAULT: "#B1ADA1",
          light: "#C8C5BB",
          dark: "#928E83",
        },
        pampas: {
          DEFAULT: "#F4F3EE",
          dark: "#E8E6DF",
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

