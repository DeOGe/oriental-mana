module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oriental-dark': '#0A574B',
        'oriental': '#7FB539',
        'oriental-light': '#D9EBCF',
      },
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}