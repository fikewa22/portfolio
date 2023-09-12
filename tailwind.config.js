/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#063147',
        Secondary:'#0C4969',
        tertiary:'#323232',
        light:'#447F9D',
        dark: '#051821',
      }
    },
  },
  plugins: [],
}

