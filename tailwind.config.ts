import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
} satisfies Config

