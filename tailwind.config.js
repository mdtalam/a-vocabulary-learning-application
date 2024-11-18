/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {},
      backgroundImage: {
        "cool-blue":
          "linear-gradient(166deg, rgba(31,41,55,1) 40%, rgba(0,212,255,1) 100%)",
          'world-map': "url('/src/assets/World Map (2).svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
