const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        lex: {
          "gold": "#CCCC00",
          "red": "#FF0000",
          "green": "#00FF00",
          "neon_blue": "#0000FF",
          "pink": "#FFC0CB",
          "purple": "#800080",
          "turquoise": "#40E0D0",
          "orange": "#FFA500",
          "light_green": "#00FA9A",
          "dark_red": "#8B0000",
          "indigo": "#4B0082",
          "yellow": "#FFFF00",
          "brown": "#A52A2A"
        },
      },
      
    fontFamily: {
      arcade: ["var(--font-arcade)", ...fontFamily.sans],
      serif:  ['IBM Plex Sans', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
    keyframes: {
      "blink": {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
      "scrollY": {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(-100%)" },
      },
      "scroll": {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "blink": "blink 1s infinite",
      "scroll": "scroll 7s linear infinite",
      "scrollY": "scrollY 7s linear infinite",
    },
  
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
  ],
  }
}