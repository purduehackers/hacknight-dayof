/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: '"Space Grotesk", system-ui, Roboto, sans-serif',
      sans: '"Inter", sans-serif',
      mono: '"IBM Plex Mono"'
    },
    extend: {},
  },
  plugins: [],
}
