/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/components/Author.jsx",
    "./src/components/Chat.jsx",
    "./src/components/NavBar.jsx",
    "./src/components/Quote.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
