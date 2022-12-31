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
    animation: {
      type: 'type 2.7s ease-out .8s infinite alternate both',
    },
    keyframes: {
      type: {
        '0%': { transform: 'translateX(0ch)' },
        '5%, 10%': { transform: 'translateX(1ch)' },
        '15%, 20%': { transform: 'translateX(2ch)' },
        '25%, 30%': { transform: 'translateX(3ch)' },
        '35%, 40%': { transform: 'translateX(4ch)' },
        '45%, 50%': { transform: 'translateX(5ch)' },
        '55%, 60%': { transform: 'translateX(6ch)' },
        '65%, 70%': { transform: 'translateX(7ch)' },
        '75%, 80%': { transform: 'translateX(8ch)' },
        '85%, 90%': { transform: 'translateX(9ch)' },
        '95%, 100%': { transform: 'translateX(11ch)' },
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
}