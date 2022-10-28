/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "Light-Cyan-pr": "hsl(193, 38%, 86%)",
        "Neon-Green-pr": "hsl(150, 100%, 66%)",

        "Grayish-Blue": "hsl(217, 19%, 38%)",
        "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "Dark-Blue": "hsl(218, 23%, 16%)",
      },
      backgroundImage: {
        "pattern-divider-desk": "url('pattern-divider-desktop.svg')",
        "pattern-divider-mobi": "url('pattern-divider-mobile.svg')",
        "icon-dice": "url('icon-dice.svg')",
      },
    },
  },
  plugins: [],
};
