/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["Henny Penny", "system-ui"],
        main: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

