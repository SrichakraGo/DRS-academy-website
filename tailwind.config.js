/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d2a66',       // Main Blue
        secondary: '#f27b06',     // Orange Highlight
        darkBlue: '#031d49',      // Section background
        midBlue: '#2650a8',       // Links and buttons
        darkerBlue: '#011032',    // Footer / dark sections
        white: '#ffffff',         // White
      }
    },
  },
  plugins: [],
}
