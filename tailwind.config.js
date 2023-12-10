/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sab: ["Janna LT"],
      },
      content: {
        photo: "url('./src/assets/ASSETES/Asset 42.png')",
        i: "url('./src/assets/ASSETES/i.png')",
      },
      backgroundImage: {
        hero: "url('./src/assets/ASSETES/Honeymoon-Places-in-December-in-India.jpg')",
      },
    },
  },
  plugins: [],
};
