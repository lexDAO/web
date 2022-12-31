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
        // malachite
        brand: {
          '50': '#eeffef',
          '100': '#d7ffdc',
          '200': '#b2ffbc',
          '300': '#76ff88',
          '400': '#33f54e',
          '500': '#09de27',
          '600': '#00b51a',
          '700': '#049119',
          '800': '#0a711a',
          '900': '#0a5d18',
        },
      }
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      mono: ['DotGothic16', 'sans-serif'],
      custom: ["Custom", "sans-serif"],
    
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
}