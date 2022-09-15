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
        brand: {
          50: '#f9f1fe',
          100: '#f3e7fc',
          200: '#eddbf9',
          300: '#e3ccf4',
          400: '#d3b4ed',
          500: '#be93e4',
          600: '#8e4ec6',
          700: '#8445bc',
          800: '#793aaf',
          900: '#2b0e44',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}