/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"],  // Outfit font add
      },
      colors: {
        brandBg: "#383737",       // Background color
        brandAccent: "#f0b458",   // Highlight color (Design word)
        linkBlue: "#4B8BFF",      // Button color
      },
    },
  },
  plugins: [],
};