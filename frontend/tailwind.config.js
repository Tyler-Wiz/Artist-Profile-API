/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0C286D",
        secondary: "#3A4658",
        link: "#0C286D",
        "text-primary": "#D9D9D9",
        "text-secondary": "#AAADC5",
        black: "#000000",
        white: "#ffffff",
        background: "#EEF2F8",
        input: "#B7D0E629",
      },
    },
  },
  plugins: [],
};
