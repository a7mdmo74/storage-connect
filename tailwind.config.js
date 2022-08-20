/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7B00",
        secondary: "#FFCE31",
        tertiary: "#FB5607",
        quaternary: "#1849c6",
      },
      backgroundImage: {
        hero: "linear-gradient(170deg, rgba(24,73,198,1) ,60%,transparent, rgba(255,255,255,1) 120%), url('./assets/hero.png')",
        "active-listing": "url('./assets/storage_bg.png')",
      },
    },
  },
  plugins: [],
};
