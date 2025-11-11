import type { Config } from "tailwindcss";

const config: Config = {
  // Specify the files where Tailwind should look for classes
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    // Extend Tailwind's default theme
    // Example: Add a custom color
  },

  // Add Tailwind plugins
  plugins: [],
};

export default config;
