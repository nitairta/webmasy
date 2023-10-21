/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily : {
        "poppins" : ['poppins']
      },
      colors : {
        hijau : '#2D5C41',
        hijauhb : '#09B451',
        hijaukecil : '#3FA849',
        hijaufoot : '#36925B'

      }
    },
  },
  plugins: [],
}

