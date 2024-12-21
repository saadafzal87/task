/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#8B8B8B',
        secondary:'#00AEEF',
        accent: '#06163A',
        customBlue: '#003B6D',
        lightGray: "#202020",
        lightBlue: "#C0EEFF",
        lightGray2:"#202020"
      },
      fontFamily:{
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
}

