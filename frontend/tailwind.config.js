/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          100: "#050810",
          200: "#6B95F3",
          300: "#4965E5",
          400: "##F5F6FF",
          500: "#1F1E25",
          600: "#35343B",
          700: "#2E3137"
          
        }
      },
    },
  },
  plugins: [],
}