/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.js", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
