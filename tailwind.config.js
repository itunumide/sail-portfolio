/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      screens: {
        'xs': '350px',
        'sm': '640px', 
        'md': '768px', 
        'lg': '1024px',   
      },
      colors: {
        customGray: '#dbdbdb',
        customBlue: '#133955',
      },
    },
  },
  plugins: [],
}

