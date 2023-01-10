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
        // mala
        brand: {
          '50': '#bbb4e9',
          '100': '#b7ace7',
          '200': '#ab9ce2',
          '300': '#9881da',
          '400': '#7d55ce',
          '500': '#6836ba',
          '600': '#582c96',
          '700': '#4e247b',
          '800': '#3d1a5b',
          '900': '#2d123f',
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