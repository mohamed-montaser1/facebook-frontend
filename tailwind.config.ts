import type { Config } from "tailwindcss";

const config: Config = {
  // Specify the files where Tailwind should look for classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    // Extend Tailwind's default theme
    // Example: Add a custom color
    colors: {
      extend: {
        hover: "#3b3d3e",
      },
    },
  },

  // Add Tailwind plugins
  plugins: [],
};

module.exports = config;
