/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'redColor':'#DD4425',
        'greyCoor':' #BBBBBB',
        'textColor':' #252b36',
      }
    },
  },
  plugins: [],
}

