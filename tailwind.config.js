/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f2ff",
          100: "#b3d1ff",
          200: "#80b0ff",
          300: "#4d8fff",
          400: "#1a6eff",
          500: "#0055e6",
          600: "#0044b3",
          700: "#003380",
          800: "#00224d",
          900: "#00111a",
       },
secondary: {
          50: "#e6ffe6",
          100: "#b3ffb3",
          200: "#80ff80",
          300: "#4dff4d",
          400: "#1aff1a",
          500: "#00e600",
          600: "#00b300",
          700: "#008000",
          800: "#004d00",
          900: "#001a00",
       },
tertiary: {
          50: "#ffe6f2",
          100: "#ffb3d1",
          200: "#ff80b0",
          300: "#ff4d8f",
          400: "#ff1a6e",
          500: "#e60055",
          600: "#b30044",
          700: "#800033",
          800: "#4d0022",
          900: "#1a0011",
       },
quaternary: {
          50: "#fff7e6",
          100: "#ffefb3",
          200: "#ffe780",
          300: "#ffdf4d",
          400: "#ffd71a",
          500: "#ffc800",
          600: "#b3a000",
          700: "#807000",
          800: "#4d4800",
          900: "#1a2000",
       },
      },
    fontFamily: {
      serif:  ['IBM Plex Sans', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
  ],
  }
}