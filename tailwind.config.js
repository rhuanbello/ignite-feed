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

      gridTemplateColumns: {
        content: "256px 1fr",
      },

      colors: {
        white: "#FFF",

        gray: {
          100: "#e1e1e6",
          300: "#c4c4cc",
          400: "#8d8d99",
          600: "#323238",
          700: "#29292e",
          800: "#202024",
          900: "#121214",
        },

        green: {
          500: "#00875f",
        },
      },
    },

    fontFamily: {
      sans: "var(--font-roboto)",
    },
  },
  plugins: [],
};
