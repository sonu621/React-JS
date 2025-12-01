/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // 👈 fixed this line
    "./src/**/*.{html,js,jsx,ts,tsx}", // 👈 broader match (covers React files too)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
