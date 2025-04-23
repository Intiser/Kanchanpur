/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#e8e6df',
          200: '#d5d0c3',
          300: '#b7af99',
          400: '#9a8f71',
          500: '#8c7f5d',
          600: '#7b6d4e',
          700: '#675a41',
          800: '#574c39',
          900: '#4b4233',
          950: '#282318',
        },
        accent: {
          50: '#f7f8f8',
          100: '#eef1f2',
          200: '#dee5e7',
          300: '#c5d1d6',
          400: '#a5b7c0',
          500: '#8a9eab',
          600: '#73849a',
          700: '#5f6c80',
          800: '#505969',
          900: '#454c57',
          950: '#272a31',
        },
        gold: {
          50: '#fbf8eb',
          100: '#f7eec5',
          200: '#f0dd8a',
          300: '#e8c94d',
          400: '#e2b72b',
          500: '#d19a1f',
          600: '#b0751b',
          700: '#8d541a',
          800: '#74421b',
          900: '#63381b',
          950: '#3a1d0e',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}