/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:"#84919c",
      secondary:"#7985cf",
      info:"#3674d9",
      danger:"#e55c57",
      bgPrimary:"#f4f6f8",
      borderColor:"#b8b8b8"

    },
    extend: {},
  },
  plugins: [],
}

