import scrollbar from'tailwind-scrollbar'
import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ...colors,
      }
    },
  },
  plugins:[scrollbar],
}