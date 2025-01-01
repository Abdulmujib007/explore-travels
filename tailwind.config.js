/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "plore-darkGreen":"#002A2E",
        'plore-accentColor':'#00F5D4',
        'plore-secGreen':'#00A892',
        'plore-primGreen':'#006D77',
        'plore-accent2':'#FEFAE0',
        'plore-white':'#FFFFFF',
        'plore-gray':'#D2D2D2'
      }
    },
    screens: {
      mobile:'320px',
      laptop:'1280px'
    }
  },
  plugins: [],
}

