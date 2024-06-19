/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter-100": ["Inter_100Thin"],
        "inter-400": ["Inter_400Regular"],
        "inter-500": ["Inter_500Medium"],
        "inter-600": ["Inter_600SemiBold"],
        "inter-700": ["Inter_700Bold"],
      },
      colors: {
        light: "rgba(255, 255, 255, 0.74)",
      },
      width: {
        90: "22.5rem"
      }
    },
  },
  plugins: [],
};
