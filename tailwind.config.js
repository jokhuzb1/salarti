/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#145855",
      layoutBg: "#F4F7F8",
    },
  },

  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
