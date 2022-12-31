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
        // create gold color for the theme 
        brand: {
          50: '#fff9f0',
          100: '#fff0e0',
          200: '#ffe6cc',
          300: '#ffd9b3',
          400: '#ffc78f',
          500: '#ffb366',
          600: '#ff9933',
          700: '#e68a2e',
          800: '#cc7a29',
          900: '#b36b24',
        },
        // brand: {
        //   50: '#f9f1fe',
        //   100: '#f3e7fc',
        //   200: '#eddbf9',
        //   300: '#e3ccf4',
        //   400: '#d3b4ed',
        //   500: '#be93e4',
        //   600: '#8e4ec6',
        //   700: '#8445bc',
        //   800: '#793aaf',
        //   900: '#2b0e44',
        // }
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