/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: {
          50: "#f7f9fb",
          100: "#e4f0fd",
          200: "#c6d8fa",
          300: "#9eb5f3",
          400: "#7b8dea",
          500: "#6567e7",
          600: "#524cd6",
          700: "#3f39b6",
          800: "#2c2788",
          900: "#181856",
        },
        secondary: colors.gray,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.secondary.700"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.600")} !important`,
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "800",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.secondary.900"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.secondary.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.secondary.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.secondary.900"),
            },
            p: {
              fontWeight: "400",

              color: theme("colors.secondary.600"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.secondary.100"),
              paddingLeft: "6px",
              paddingRight: "6px",
              paddingTop: "4px",
              paddingBottom: "4px",
              borderRadius: "0.35rem",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },

            details: {
              backgroundColor: theme("colors.secondary.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            hr: { borderColor: theme("colors.secondary.200") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.secondary.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.secondary.500"),
            },
            strong: { color: theme("colors.secondary.600") },
            blockquote: {
              color: theme("colors.secondary.900"),
              borderLeftColor: theme("colors.secondary.200"),
            },
          },
        },
      }),
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: ["@tailwindcss/forms", "tailwindcss-bg-patterns"],
};
